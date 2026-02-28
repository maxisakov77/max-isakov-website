import type { Metadata } from 'next';
import Link from 'next/link';

import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Team | MAX AEC LLC',
  description:
    'Leadership team at MAX AEC LLC — 60+ combined years of architecture experience across residential development, building compliance, and government institutional advisory.',
  alternates: { canonical: '/team' },
  openGraph: {
    type: 'website',
    title: 'Team | MAX AEC LLC',
    description:
      'Meet the leadership behind MAX AEC LLC: 13+ years of NYC development architecture and 50+ years of justice design advisory.',
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
        description="60+ combined years of architecture experience across two markets — residential & commercial development and government & institutional advisory."
      />

      <main className="page-content">
        <section className="content-section">
          <h2>Company Leadership</h2>
          <p>
            MAX AEC LLC is structured around two markets. Max Isakov leads day-to-day execution
            across residential development, building compliance, and government technical delivery.
            Peter Krasnow provides senior advisory on justice and institutional engagements. Together,
            the team has contributed to hundreds of projects nationwide.
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
                <h3>Max Isakov, RA, AIA, NCARB</h3>
                <p className="team-title">Principal / Lead Architect</p>
                <p className="team-bio">
                  13+ years of architecture experience spanning NYC residential development,
                  building compliance, City of Yes feasibility, and government institutional
                  projects. Leads design execution, BIM coordination, and technical delivery
                  across both of the firm&apos;s markets.
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
                  50+ years of justice architecture leadership. Fellow of the AIA. Author of
                  &quot;Correctional Facility Design and Detailing.&quot; Over 42,000 beds designed
                  across $2.22B+ in project value — including detention, courthouses, behavioral
                  health, forensic psychiatric, and tribal justice facilities nationwide.
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
          <div className="services-list">
            <div className="service-item">
              <h4>Residential &amp; Commercial</h4>
              <p>
                Max leads all development architecture, City of Yes feasibility, and building
                compliance work directly — from initial analysis through DOB filing.
              </p>
            </div>
            <div className="service-item">
              <h4>Government &amp; Institutional</h4>
              <p>
                Max handles technical delivery and BIM coordination; Peter provides senior advisory
                for justice-specific programming, planning, and stakeholder engagement.
              </p>
            </div>
            <div className="service-item">
              <h4>Structured Handoff</h4>
              <p>
                Feasibility outputs carry directly into documentation scope, so teams move from
                analysis to execution without losing context or rebuilding assumptions.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
