import { NextRequest, NextResponse } from 'next/server';
import * as jose from 'jose';

/* ── Subdomain detection ──────────────────────────────────── */
type AppSubdomain = 'admin' | 'regtime' | null;

function detectSubdomain(request: NextRequest): AppSubdomain {
  const host = request.headers.get('host') ?? '';
  if (host.startsWith('admin.')) return 'admin';
  if (host.startsWith('regtime.')) return 'regtime';
  return null;
}

/* ── Cookie name per app ──────────────────────────────────── */
const SESSION_COOKIE: Record<string, string> = {
  admin: 'admin_session',
  regtime: 'regtime_session',
};

/* ── Session verification (shared helper) ─────────────────── */
async function verifySession(
  request: NextRequest,
  cookieName: string,
  expectedApp: 'admin' | 'regtime',
): Promise<boolean> {
  const token = request.cookies.get(cookieName)?.value;
  if (!token) return false;
  try {
    const secret = new TextEncoder().encode(process.env.SESSION_SECRET);
    const { payload } = await jose.jwtVerify(token, secret);
    // Prevent cross-app escalation: a regtime JWT must not grant admin access
    if (payload.app !== expectedApp) return false;
    return true;
  } catch {
    return false;
  }
}

function clearSessionRedirect(loginUrl: URL, cookieName: string): NextResponse {
  const res = NextResponse.redirect(loginUrl);
  res.cookies.set(cookieName, '', { maxAge: 0, path: '/' });
  return res;
}

/* ── Generic subdomain handler ────────────────────────────── */
async function handleSubdomain(
  request: NextRequest,
  app: 'admin' | 'regtime',
): Promise<NextResponse> {
  const { pathname } = request.nextUrl;
  const cookie = SESSION_COOKIE[app];

  // Let API auth routes pass through (needed for login flow)
  if (pathname.startsWith('/api/')) return NextResponse.next();

  // Compute the physical path (avoid double-prefixing)
  const needsPrefix = !pathname.startsWith(`/${app}`);
  const physicalPath = needsPrefix ? `/${app}${pathname === '/' ? '' : pathname}` : pathname;

  // Login page — allow without session
  if (physicalPath === `/${app}/login`) {
    if (needsPrefix) {
      const url = request.nextUrl.clone();
      url.pathname = `/${app}/login`;
      return NextResponse.rewrite(url);
    }
    return NextResponse.next();
  }

  // Everything else — require a valid session
  const valid = await verifySession(request, cookie, app);
  if (!valid) {
    const loginUrl = new URL('/login', request.url);
    return clearSessionRedirect(loginUrl, cookie);
  }

  // Rewrite so Next.js finds the correct page under /app/<app>/*
  if (needsPrefix) {
    const url = request.nextUrl.clone();
    url.pathname = physicalPath;
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}

/* ── Middleware ────────────────────────────────────────────── */
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  /* ═══════════════════════════════════════════════════════════
     App subdomains  (admin.maxaec.com / regtime.maxaec.com)
     Every request is gated behind auth.  Paths are rewritten
     so the existing /<app>/* Next.js pages render seamlessly.
     ═══════════════════════════════════════════════════════════ */
  const subdomain = detectSubdomain(request);
  if (subdomain) {
    return handleSubdomain(request, subdomain);
  }

  /* ═══════════════════════════════════════════════════════════
     Main domain (www.maxaec.com) — protect /admin and /regtime
     routes so they can't be accessed without auth even on the
     main domain.
     ═══════════════════════════════════════════════════════════ */

  // Normalise pathname for case-insensitive route matching
  const pathLower = pathname.toLowerCase();

  // Regtime routes on main domain
  if (pathLower.startsWith('/regtime')) {
    if (pathLower === '/regtime/login') return NextResponse.next();

    const valid = await verifySession(request, SESSION_COOKIE.regtime, 'regtime');
    if (!valid) {
      const loginUrl = new URL('/regtime/login', request.url);
      return clearSessionRedirect(loginUrl, SESSION_COOKIE.regtime);
    }
    return NextResponse.next();
  }

  // Admin routes on main domain
  if (!pathLower.startsWith('/admin')) {
    return NextResponse.next();
  }

  // Allow login page
  if (pathLower === '/admin/login') return NextResponse.next();

  const valid = await verifySession(request, SESSION_COOKIE.admin, 'admin');
  if (!valid) {
    const loginUrl = new URL('/admin/login', request.url);
    return clearSessionRedirect(loginUrl, SESSION_COOKIE.admin);
  }

  return NextResponse.next();
}

/* ── Matcher ──────────────────────────────────────────────── */
// Broad matcher so subdomain requests are intercepted.
// Static assets (_next/static, _next/image, favicon) are excluded.
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon\\.ico).*)'],
};
