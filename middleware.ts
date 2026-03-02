import { NextRequest, NextResponse } from 'next/server';
import * as jose from 'jose';

/* ── Subdomain detection ──────────────────────────────────── */
function isAdminSubdomain(request: NextRequest): boolean {
  const host = request.headers.get('host') ?? '';
  // Production: admin.maxaec.com  |  Dev: admin.localhost:*
  return host.startsWith('admin.');
}

/* ── Session verification (shared helper) ─────────────────── */
async function verifySession(request: NextRequest): Promise<boolean> {
  const token = request.cookies.get('admin_session')?.value;
  if (!token) return false;
  try {
    const secret = new TextEncoder().encode(process.env.SESSION_SECRET);
    await jose.jwtVerify(token, secret);
    return true;
  } catch {
    return false;
  }
}

function clearSessionRedirect(loginUrl: URL): NextResponse {
  const res = NextResponse.redirect(loginUrl);
  res.cookies.set('admin_session', '', { maxAge: 0, path: '/' });
  return res;
}

/* ── Middleware ────────────────────────────────────────────── */
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  /* ═══════════════════════════════════════════════════════════
     Admin subdomain  (admin.maxaec.com / admin.localhost:3000)
     Every request is gated behind auth.  Paths are rewritten
     so the existing /admin/* Next.js pages render seamlessly.
     ═══════════════════════════════════════════════════════════ */
  if (isAdminSubdomain(request)) {
    // Let API auth routes pass through (needed for login flow)
    if (pathname.startsWith('/api/')) return NextResponse.next();

    // Compute the physical admin path (avoid double-prefixing)
    const needsPrefix = !pathname.startsWith('/admin');
    const adminPath = needsPrefix ? `/admin${pathname === '/' ? '' : pathname}` : pathname;

    // Login page — allow without session
    if (adminPath === '/admin/login') {
      if (needsPrefix) {
        const url = request.nextUrl.clone();
        url.pathname = '/admin/login';
        return NextResponse.rewrite(url);
      }
      return NextResponse.next();
    }

    // Everything else — require a valid session
    const valid = await verifySession(request);
    if (!valid) {
      // Clear stale cookie (if any) and redirect to subdomain login
      const loginUrl = new URL('/login', request.url);
      return clearSessionRedirect(loginUrl);
    }

    // Rewrite to /admin/* so Next.js finds the correct page
    if (needsPrefix) {
      const url = request.nextUrl.clone();
      url.pathname = adminPath;
      return NextResponse.rewrite(url);
    }
    return NextResponse.next();
  }

  /* ═══════════════════════════════════════════════════════════
     Main domain (www.maxaec.com) — existing behaviour:
     only /admin routes are protected.
     ═══════════════════════════════════════════════════════════ */
  if (!pathname.startsWith('/admin')) {
    return NextResponse.next();
  }

  // Allow login page
  if (pathname === '/admin/login') return NextResponse.next();

  const valid = await verifySession(request);
  if (!valid) {
    const loginUrl = new URL('/admin/login', request.url);
    return clearSessionRedirect(loginUrl);
  }

  return NextResponse.next();
}

/* ── Matcher ──────────────────────────────────────────────── */
// Broad matcher so admin-subdomain requests are intercepted.
// Static assets (_next/static, _next/image, favicon) are excluded.
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon\\.ico).*)'],
};
