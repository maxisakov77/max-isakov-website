import { NextRequest, NextResponse } from 'next/server';
import * as jose from 'jose';

const GOOGLE_JWKS_URL = 'https://www.googleapis.com/oauth2/v3/certs';
const GOOGLE_ISSUER = ['https://accounts.google.com', 'accounts.google.com'];

export async function POST(request: NextRequest) {
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
