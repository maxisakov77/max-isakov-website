import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'MAX AEC LLC | NYC Architecture, Compliance & Government Advisory',
  description:
    'NYC architecture firm serving two markets: residential & commercial development with flat-fee compliance filings, and government & institutional advisory with 60+ combined years of justice architecture experience.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    title: 'MAX AEC LLC | NYC Architecture, Compliance & Government Advisory',
    description:
      'Residential & commercial architecture, building compliance, and government institutional advisory from MAX AEC LLC.',
    url: '/',
    images: '/images/signature/mark_only.png',
  },
  twitter: { card: 'summary_large_image' },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'MAX AEC LLC',
            url: 'https://www.maxaec.com/',
            logo: 'https://www.maxaec.com/images/signature/mark_only.png',
            email: 'info@maxaec.com',
            description:
              'NYC architecture firm serving residential & commercial development and government & institutional advisory markets.',
          }),
        }}
      />

      <section className="hero">
        <div className="hero-content">
          <h1 className="visually-hidden">MAX AEC LLC</h1>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="hero-logo"
            src="/images/signature/max-aec-hero-logo.svg"
            alt="MAX AEC LLC Signature Brand Mark"
            width={240}
            height={196}
            style={{ maxWidth: '100%', height: 'auto', marginBottom: '2rem' }}
          />
          <p className="hero-brand-tagline">Architecture · Compliance · Advisory</p>
          <p className="hero-subtitle">
            Two markets. One standard of execution.
          </p>
          <p className="hero-tagline">
            We serve NYC property owners and developers who need fast, code-compliant architecture
            and compliance filings — and government agencies nationwide that need justice and
            institutional design expertise backed by 60+ combined years of delivery.
          </p>
          <div className="hero-buttons">
            <Link href="/services/residential" className="btn btn-primary">
              Residential &amp; Commercial
            </Link>
            <Link href="/services/government" className="btn btn-outline">
              Government &amp; Institutional
            </Link>
          </div>
        </div>
      </section>

      {/* ── Two Markets ── */}
      <section className="services-overview">
        <div className="container">
          <h2>How We Work</h2>
          <div className="services-grid">
            <Link href="/services/residential" className="service-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <h3>Residential &amp; Commercial</h3>
              <p>
                Development architecture, City of Yes feasibility, and flat-fee building compliance
                filings for NYC property owners, developers, portfolio managers, and general
                contractors.
              </p>
              <span className="link-arrow">View services →</span>
            </Link>
            <Link href="/services/government" className="service-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <h3>Government &amp; Institutional</h3>
              <p>
                Justice architecture, behavioral health, courthouses, and civic facility design.
                Over 60 combined years and hundreds of projects across federal, state, county, and
                tribal agencies.
              </p>
              <span className="link-arrow">View services →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Compliance callout ── */}
      <section className="about-teaser">
        <div className="container">
          <h2 style={{ fontSize: '2rem', fontStyle: 'normal', marginBottom: '16px' }}>
            Building Compliance — Filed by a Registered Architect
          </h2>
          <p>
            Flat-fee parapet observations, LL152 no-gas certs, LL88 lighting and sub-metering
            attestations, LL97 Article 321 prescriptive carbon compliance, and Tenant Protection
            Plans. Site visit, documentation, sign-and-seal, and DOB / BEAM portal filing included.
          </p>
          <Link href="/compliance" className="btn btn-primary">
            View Compliance Services
          </Link>
        </div>
      </section>

      {/* ── Credentials ── */}
      <section className="why-section">
        <div className="container">
          <div className="why-header">
            <h2>Why MAX AEC</h2>
            <p>
              Two principals. Sixty combined years. One point of contact for every project.
            </p>
          </div>
          <div className="why-stats">
            <div className="why-stat">
              <span className="why-stat-number">13+</span>
              <span className="why-stat-unit">years</span>
              <span className="why-stat-label">Max Isakov, RA, AIA, NCARB</span>
            </div>
            <div className="why-stat-divider" />
            <div className="why-stat">
              <span className="why-stat-number">50+</span>
              <span className="why-stat-unit">years</span>
              <span className="why-stat-label">Peter C. Krasnow, FAIA</span>
            </div>
            <div className="why-stat-divider" />
            <div className="why-stat">
              <span className="why-stat-number">Flat</span>
              <span className="why-stat-unit">fee</span>
              <span className="why-stat-label">Every scope quoted upfront</span>
            </div>
            <div className="why-stat-divider" />
            <div className="why-stat">
              <span className="why-stat-number">1–3</span>
              <span className="why-stat-unit">day turnaround</span>
              <span className="why-stat-label">Compliance filings</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="contact-cta">
        <div className="container">
          <h2>Start a Conversation</h2>
          <p>
            Whether you need a compliance filing next week or a justice facility advisory team for
            the next three years — share your project and we&apos;ll outline the right scope.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
