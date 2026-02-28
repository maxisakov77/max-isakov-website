import type { Metadata } from 'next';
import Link from 'next/link';

import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Team | MAX AEC LLC',
  description: 'Leadership team at MAX AEC LLC, including Max Isakov and Peter C. Krasnow, FAIA.',
  alternates: { canonical: '/team' },
  openGraph: {
    type: 'website',
    title: 'Team | MAX AEC LLC',
    description:
      'Meet the leadership team behind MAX AEC LLC\'s development architecture and institutional advisory work.',
    url: '/team',
    images: '/images/signature/mark_only.png',
  },
  twitter: { card: 'summary_large_image' },
};

export default function TeamPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'MAX AEC LLC',
            url: 'https://www.maxaec.com/team',
            member: [
              { '@type': 'Person', name: 'Max Isakov', jobTitle: 'Principal' },
              { '@type': 'Person', name: 'Peter C. Krasnow', jobTitle: 'Senior Advisor' },
            ],
          }),
        }}
      />

      <PageHeader
        title="Team"
        description="MAX AEC LLC combines development architecture execution with deep institutional advisory experience."
      />

      <main className="page-content">
        <section className="content-section">
          <h2>Company Leadership</h2>
          <p>
            The firm is structured to support private development, City of Yes feasibility, and
            high-accountability institutional projects with clear leadership continuity across scope
            phases.
          </p>
        </section>

        <section className="content-section">
          <div className="team-grid">
            <div className="team-card">
              <div className="team-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/max-isakov.jpg"
                  alt="Max Isakov"
                  width={180}
                  height={180}
                  loading="lazy"
                />
              </div>
              <div className="team-info">
                <h3>Max Isakov</h3>
                <p className="team-title">Principal / Lead Architect</p>
                <p className="team-bio">
                  Leads development architecture and City of Yes feasibility delivery for MAX AEC
                  LLC, with project experience spanning residential, civic, and institutional scopes.
                </p>
                <Link href="/team/max-isakov" className="btn btn-secondary">
                  View Profile →
                </Link>
              </div>
            </div>

            <div className="team-card">
              <div className="team-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/peter-krasnow/peter.jpg"
                  alt="Peter C. Krasnow"
                  width={180}
                  height={180}
                  loading="lazy"
                />
              </div>
              <div className="team-info">
                <h3>Peter C. Krasnow, FAIA</h3>
                <p className="team-title">Senior Advisor, Justice Architecture</p>
                <p className="team-bio">
                  Supports select justice and institutional engagements with long-duration planning
                  and design leadership in high-complexity public projects.
                </p>
                <Link href="/team/peter-krasnow" className="btn btn-secondary">
                  View Profile →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>How the Team Engages</h2>
          <ul>
            <li>One accountable lead for development and delivery coordination</li>
            <li>Senior advisor integration for justice-specific milestones</li>
            <li>Structured handoff from feasibility outputs to documentation scope</li>
          </ul>
        </section>
      </main>
    </>
  );
}
