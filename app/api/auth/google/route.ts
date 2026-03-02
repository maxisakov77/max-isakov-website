import { NextRequest, NextResponse } from 'next/server';
import * as jose from 'jose';

const GOOGLE_JWKS_URL = 'https://www.googleapis.com/oauth2/v3/certs';
const GOOGLE_ISSUER = ['https://accounts.google.com', 'accounts.google.com'];

/* ── Rate-limit state (per-instance; resets on cold start) ── */
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX = 10; // max attempts per window

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

/* ── CSRF: verify the request originated from our own site ── */
function originAllowed(request: NextRequest): boolean {
  const origin = request.headers.get('origin');
  if (!origin) return false;
  const allowed = [
    process.env.NEXT_PUBLIC_SITE_URL,
    'https://www.maxaec.com',
    'https://admin.maxaec.com',
    'http://localhost:3000',
    'http://admin.localhost:3000',
  ];
  return allowed.some((a) => a && origin.startsWith(a));
}

export async function POST(request: NextRequest) {
  /* ── CSRF check ── */
  if (!originAllowed(request)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  /* ── Rate limiting ── */
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 },
    );
  }

  try {
    const { credential } = await request.json();

    if (!credential) {
      return NextResponse.json({ error: 'Missing credential' }, { status: 400 });
    }

    // Verify the Google JWT server-side using jose
    const JWKS = jose.createRemoteJWKSet(new URL(GOOGLE_JWKS_URL));
    const { payload } = await jose.jwtVerify(credential, JWKS, {
      issuer: GOOGLE_ISSUER,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const email = (payload.email as string)?.toLowerCase();

    if (!email) {
      return NextResponse.json({ error: 'No email in token' }, { status: 400 });
    }

    // Check against allowed emails from env
    const allowedEmails = (process.env.ADMIN_ALLOWED_EMAILS ?? '')
      .split(',')
      .map((e) => e.trim().toLowerCase())
      .filter(Boolean);

    if (!allowedEmails.includes(email)) {
      return NextResponse.json(
        { error: `Access denied. Unauthorized account (${email}).` },
        { status: 403 },
      );
    }

    // Create a session token (signed JWT) for the admin
    const secret = new TextEncoder().encode(process.env.SESSION_SECRET);
    const sessionToken = await new jose.SignJWT({ email, name: payload.name as string })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('8h')
      .sign(secret);

    // Set httpOnly cookie
    const response = NextResponse.json({ ok: true, name: payload.name, email });
    response.cookies.set('admin_session', sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 8 * 60 * 60, // 8 hours
    });

    return response;
  } catch (err) {
    console.error('Auth error:', err);
    return NextResponse.json({ error: 'Authentication failed' }, { status: 401 });
  }
}
