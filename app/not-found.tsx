import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 — Page Not Found | MAX AEC LLC',
};

export default function NotFound() {
  return (
    <main className="page-content" style={{ textAlign: 'center', padding: '6rem 2rem' }}>
      <h1>404</h1>
      <p style={{ fontSize: '1.2rem', margin: '1rem 0 2rem' }}>
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/" className="cta-button">
        Back to Home
      </Link>
    </main>
  );
}
