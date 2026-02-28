import type { Metadata } from 'next';
import Link from 'next/link';

import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Contact | MAX AEC LLC',
  description:
    'Contact MAX AEC LLC for residential development architecture, building compliance filings, City of Yes feasibility, or government institutional advisory.',
  alternates: { canonical: '/contact' },
  openGraph: {
    type: 'website',
    title: 'Contact | MAX AEC LLC',
    description:
      'Start a project conversation with MAX AEC LLC — residential development, compliance, or government advisory.',
    url: '/contact',
    images: '/images/signature/mark_only.png',
  },
  twitter: { card: 'summary_large_image' },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact | MAX AEC LLC',
            url: 'https://www.maxaec.com/contact',
            description: 'Project inquiry contact page for MAX AEC LLC.',
          }),
        }}
      />

      <PageHeader
        title="Contact"
        description="Share your project type and timeline — whether it's a compliance filing, development feasibility study, or government advisory engagement."
      />

      <main className="page-content">
        <div className="container contact-layout">
          <div className="contact-info">
            <h2 className="contact-info-heading">Project Inquiries</h2>
            <div className="contact-info-block">
              <h3 className="contact-info-label">Email</h3>
              <p>
                <a href="mailto:info@maxaec.com" className="contact-info-value">
                  info@maxaec.com
                </a>
              </p>
            </div>
            <div className="contact-info-block">
              <h3 className="contact-info-label">Location</h3>
              <p className="contact-info-value">New York City</p>
            </div>
            <div>
              <h3 className="contact-info-label">LinkedIn</h3>
              <p>
                <a
                  href="https://linkedin.com/in/maxisakov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info-link"
                >
                  linkedin.com/in/maxisakov
                </a>
              </p>
            </div>

            <div style={{ marginTop: '32px' }}>
              <h3 className="contact-info-label">Quick Links</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><Link href="/services/residential">Residential &amp; Commercial Services →</Link></li>
                <li><Link href="/compliance">Building Compliance Filings →</Link></li>
                <li><Link href="/services/government">Government &amp; Institutional Advisory →</Link></li>
              </ul>
            </div>
          </div>

          <div className="contact-cta-card">
            <h2>Email to Start</h2>
            <p className="contact-cta-text">
              Tell us your project type — residential development, compliance filing, or government
              engagement — along with location and timeline. We&apos;ll respond with a scope and
              next steps.
            </p>
            <a
              className="btn btn-primary"
              href="mailto:info@maxaec.com?subject=Project%20Inquiry%20from%20maxaec.com"
            >
              Email Us
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
