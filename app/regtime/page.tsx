'use client';

import { useEffect, useState } from 'react';

export default function RegtimeDashboard() {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  useEffect(() => {
    // Read user info from the session cookie (JWT payload is base64-url encoded)
    try {
      const cookie = document.cookie
        .split('; ')
        .find((c) => c.startsWith('regtime_session='));
      if (cookie) {
        const token = cookie.split('=')[1];
        const payload = JSON.parse(atob(token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')));
        setUser({ name: payload.name, email: payload.email });
      }
    } catch {
      // cookie is httpOnly — user info won't be available client-side
    }
  }, []);

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    window.location.href = '/login';
  };

  return (
    <>
      <div className="rt-shell">
        <header className="rt-header">
          <h1>Regtime</h1>
          <div className="rt-header-right">
            {user && <span className="rt-user">{user.name}</span>}
            <button onClick={handleLogout} className="rt-logout">
              Sign Out
            </button>
          </div>
        </header>
        <main className="rt-main">
          <div className="rt-welcome">
            <h2>Welcome to Regtime</h2>
            <p>Your regulatory time-tracking dashboard.</p>
          </div>
        </main>
      </div>

      <style jsx>{`
        .rt-shell {
          min-height: 100vh;
          background: #f8f9fa;
          font-family: system-ui, -apple-system, sans-serif;
        }
        .rt-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 2rem;
          background: #1a1a2e;
          color: white;
        }
        .rt-header h1 {
          font-size: 1.25rem;
          font-weight: 600;
          margin: 0;
        }
        .rt-header-right {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .rt-user {
          font-size: 0.875rem;
          opacity: 0.8;
        }
        .rt-logout {
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: white;
          padding: 0.4rem 0.8rem;
          border-radius: 6px;
          cursor: pointer;
          font-size: 0.8rem;
        }
        .rt-logout:hover {
          background: rgba(255, 255, 255, 0.25);
        }
        .rt-main {
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .rt-welcome {
          background: white;
          padding: 2.5rem;
          border-radius: 12px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
          text-align: center;
        }
        .rt-welcome h2 {
          margin: 0 0 0.5rem;
          color: #1a1a2e;
        }
        .rt-welcome p {
          color: #666;
          margin: 0;
        }
      `}</style>
    </>
  );
}
