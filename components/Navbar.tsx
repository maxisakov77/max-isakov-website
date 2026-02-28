'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/compliance', label: 'Compliance' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/city-of-yes', label: 'City of Yes' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  function isActive(href: string) {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link href="/" className="logo brand-lockup">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="brand-mark"
            src="/images/signature/max-aec-mark.svg"
            alt="MAX AEC LLC logo mark"
            width={240}
            height={150}
            loading="lazy"
          />
          <span className="brand-divider" aria-hidden="true" />
          <span className="brand-wordmark">MAX AEC LLC</span>
        </Link>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>

        <ul className={`nav-menu${menuOpen ? ' active' : ''}`}>
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={isActive(href) ? 'active' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
