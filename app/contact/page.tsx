import type { Metadata } from 'next';

import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Contact | MAX AEC LLC',
  description:
    'Contact MAX AEC LLC for development architecture, City of Yes feasibility, and institutional advisory support.',
  alternates: { canonical: '/contact' },
  openGraph: {
    type: 'website',
    title: 'Contact | MAX AEC LLC',
    description: 'Share project details to start scope and timeline planning with MAX AEC LLC.',
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
        description="Share project type, site location, and timeline to begin scope planning with MAX AEC LLC."
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
          </div>

          <div className="contact-cta-card">
            <h2>Email to Start</h2>
            <p className="contact-cta-text">
              Send project basics and preferred schedule. Our team will respond with a next-step
              scope.
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
