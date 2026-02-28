import type { NextConfig } from 'next';

const securityHeaders = [
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://accounts.google.com https://apis.google.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://accounts.google.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https:",
      "connect-src 'self' https://accounts.google.com https://oauth2.googleapis.com",
      "frame-src https://accounts.google.com",
    ].join('; '),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/team',
        permanent: true,
      },
      // Preserve old .html URLs
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/services.html',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/portfolio.html',
        destination: '/portfolio',
        permanent: true,
      },
      {
        source: '/city-of-yes.html',
        destination: '/city-of-yes',
        permanent: true,
      },
      {
        source: '/team.html',
        destination: '/team',
        permanent: true,
      },
      {
        source: '/contact.html',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/about.html',
        destination: '/team',
        permanent: true,
      },
      {
        source: '/max-isakov.html',
        destination: '/team/max-isakov',
        permanent: true,
      },
      {
        source: '/peter-krasnow.html',
        destination: '/team/peter-krasnow',
        permanent: true,
      },
      {
        source: '/projects/bbj.html',
        destination: '/projects/bbj',
        permanent: true,
      },
      {
        source: '/projects/baltimore.html',
        destination: '/projects/baltimore',
        permanent: true,
      },
      {
        source: '/projects/macomb.html',
        destination: '/projects/macomb',
        permanent: true,
      },
      {
        source: '/projects/morris.html',
        destination: '/projects/morris',
        permanent: true,
      },
      {
        source: '/projects/tribal.html',
        destination: '/projects/tribal',
        permanent: true,
      },
      {
        source: '/projects/covid.html',
        destination: '/projects/covid',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
