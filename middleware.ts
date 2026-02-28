import { NextRequest, NextResponse } from 'next/server';
import * as jose from 'jose';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only protect /admin routes (not the API auth routes)
  if (!pathname.startsWith('/admin')) {
    return NextResponse.next();
  }

  const sessionCookie = request.cookies.get('admin_session')?.value;

  if (!sessionCookie) {
    // Redirect to admin login page
    const loginUrl = new URL('/admin/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  try {
    const secret = new TextEncoder().encode(process.env.SESSION_SECRET);
    await jose.jwtVerify(sessionCookie, secret);
    return NextResponse.next();
  } catch {
    // Invalid or expired session — redirect to login
    const loginUrl = new URL('/admin/login', request.url);
    const response = NextResponse.redirect(loginUrl);
    response.cookies.set('admin_session', '', { maxAge: 0, path: '/' });
    return response;
  }
}

export const config = {
  matcher: ['/admin', '/admin/((?!login).*)'],
};
