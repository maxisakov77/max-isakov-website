import type { Metadata } from 'next';
import Link from 'next/link';

import PageHeader from '@/components/PageHeader';
import ContactCta from '@/components/ContactCta';

export const metadata: Metadata = {
  title: 'Services | MAX AEC LLC',
  description:
    'Architecture services for two distinct markets: residential & commercial development in NYC, and government & institutional advisory nationwide.',
  alternates: { canonical: '/services' },
  openGraph: {
    type: 'website',
    title: 'Services | MAX AEC LLC',
    description:
      'Residential & commercial architecture plus government & institutional advisory from MAX AEC LLC.',
    url: '/services',
    images: '/images/signature/mark_only.png',
  },
  twitter: { card: 'summary_large_image' },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Services | MAX AEC LLC',
            url: 'https://www.maxaec.com/services',
            description:
              'Architecture services for two distinct markets: residential & commercial development in NYC, and government & institutional advisory nationwide.',
          }),
        }}
      />

      <PageHeader
        title="Services"
        description="We serve two distinct markets. Choose the one that fits your project."
      />

      <main className="page-content">
        <section className="content-section">
          <div className="services-grid" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Link href="/services/residential" className="service-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <h3>Residential &amp; Commercial</h3>
              <p>
                Development architecture, City of Yes feasibility, and flat-fee building
                compliance services for NYC property owners, developers, portfolio
                managers, and general contractors.
              </p>
              <span className="link-arrow">View services →</span>
            </Link>

            <Link href="/services/government" className="service-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <h3>Government &amp; Institutional</h3>
              <p>
                Justice architecture, institutional advisory, and civic facility design —
                backed by over 60 combined years of public-sector delivery across
                hundreds of projects nationwide.
              </p>
              <span className="link-arrow">View services →</span>
            </Link>
          </div>
        </section>

        <section className="content-section credentials-highlight" style={{ maxWidth: '800px', margin: '40px auto 60px' }}>
          <h2>Company at a Glance</h2>
          <div className="credentials-grid">
            <div className="credential-item">
              <span className="credential-number">60+</span>
              <span className="credential-label">Combined Years of Practice</span>
            </div>
            <div className="credential-item">
              <span className="credential-number">NYC</span>
              <span className="credential-label">Development &amp; Compliance Focus</span>
            </div>
            <div className="credential-item">
              <span className="credential-number">National</span>
              <span className="credential-label">Government &amp; Justice Reach</span>
            </div>
          </div>
        </section>

        <ContactCta
          heading="Not Sure Where to Start?"
          description="Share your project type and location. We'll point you to the right service line and scope."
        />
      </main>
    </>
  );
}
