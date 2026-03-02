'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Script from 'next/script';

export default function RegtimeLoginPage() {
  const router = useRouter();
  const [isSubdomain, setIsSubdomain] = useState(false);

  useEffect(() => {
    setIsSubdomain(window.location.hostname.startsWith('regtime.'));
  }, []);

  const handleCredentialResponse = useCallback(
    async (response: { credential: string }) => {
      const errorEl = document.getElementById('login-error') as HTMLElement | null;

      try {
        const res = await fetch('/api/auth/google', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ credential: response.credential, app: 'regtime' }),
        });

        if (res.ok) {
          const isSubdomain = window.location.hostname.startsWith('regtime.');
          router.push(isSubdomain ? '/' : '/regtime');
        } else {
          const data = await res.json();
          if (errorEl) {
            errorEl.textContent = data.error || 'Authentication failed.';
            errorEl.style.display = 'block';
          }
        }
      } catch {
        if (errorEl) {
          errorEl.textContent = 'Network error. Please try again.';
          errorEl.style.display = 'block';
        }
      }
    },
    [router],
  );

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).handleCredentialResponse = handleCredentialResponse;
  }, [handleCredentialResponse]);

  return (
    <>
      <Script src="https://accounts.google.com/gsi/client" strategy="afterInteractive" />

      <div className="login-overlay" style={{ display: 'flex' }}>
        <div className="login-card">
          <h2>RegTime Login</h2>
          <p>Sign in with your authorized Google account to access RegTime.</p>

          <div
            id="g_id_onload"
            data-client_id={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
            data-callback="handleCredentialResponse"
            data-auto_select="true"
          />
          <div
            className="g_id_signin"
            data-type="standard"
            data-size="large"
            data-theme="outline"
            data-text="sign_in_with"
            data-shape="rectangular"
            data-logo_alignment="left"
          />

          <p
            id="login-error"
            className="login-error"
            style={{ display: 'none', color: '#e74c3c', marginTop: '1rem' }}
          >
            Access Denied.
          </p>
          <a
            href={isSubdomain ? 'https://www.maxaec.com' : '/'}
            className="back-link"
            style={{ display: 'block', marginTop: '1.5rem' }}
          >
            ← Back to Public Website
          </a>
        </div>
      </div>

      <style jsx>{`
        .login-overlay {
          position: fixed;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f5f5f5;
          z-index: 9999;
        }
        .login-card {
          background: white;
          padding: 2.5rem;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          max-width: 420px;
          width: 90%;
          text-align: center;
        }
        .login-card h2 {
          margin-bottom: 0.5rem;
          color: #1a1a1a;
        }
        .login-card p {
          color: #666;
          margin-bottom: 1.5rem;
        }
        .back-link {
          color: #666;
          text-decoration: none;
          font-size: 0.9rem;
        }
        .back-link:hover {
          color: #333;
        }
      `}</style>
    </>
  );
}
