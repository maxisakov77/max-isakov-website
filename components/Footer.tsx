import Link from 'next/link';

interface FooterProps {
  showAdminLink?: boolean;
}

export default function Footer({ showAdminLink = false }: FooterProps) {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link href="/" className="footer-lockup">
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
            <p>New York City</p>
            <p className="brand-tagline">Architecture · Engineering · Consulting</p>
          </div>
          <div className="footer-contact">
            <p><a href="mailto:info@maxaec.com">info@maxaec.com</a></p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} MAX AEC LLC. All rights reserved.
            {showAdminLink && (
              <>
                <span style={{ margin: '0 10px' }}>|</span>
                <Link
                  href="/admin"
                  style={{ color: 'inherit', textDecoration: 'none', opacity: 0.6, fontSize: '0.8em' }}
                >
                  Admin Login
                </Link>
              </>
            )}
          </p>
        </div>
      </div>
    </footer>
  );
}
