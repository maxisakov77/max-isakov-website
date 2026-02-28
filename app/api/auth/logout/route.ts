import { NextRequest, NextResponse } from 'next/server';

/* ── CSRF: verify the request originated from our own site ── */
function originAllowed(request: NextRequest): boolean {
  const origin = request.headers.get('origin');
  if (!origin) return false;
  const allowed = [process.env.NEXT_PUBLIC_SITE_URL, 'https://www.maxaec.com', 'http://localhost:3000'];
  return allowed.some((a) => a && origin.startsWith(a));
}

export async function POST(request: NextRequest) {
  if (!originAllowed(request)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set('admin_session', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0,
  });
  return response;
}
