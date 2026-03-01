import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Max Isakov, RA, AIA, NCARB | Principal | MAX AEC LLC',
  description:
    'Max Isakov — Registered Architect with 13+ years of experience in NYC residential development, building compliance, and government institutional advisory.',
  alternates: { canonical: '/team/max-isakov' },
  openGraph: {
    type: 'profile',
    title: 'Max Isakov, RA, AIA, NCARB | Principal | MAX AEC LLC',
    description:
      'Principal at MAX AEC LLC — 13+ years across residential development architecture, compliance filings, and government justice projects.',
    url: '/team/max-isakov',
    images: '/max-isakov.jpg',
  },
  twitter: { card: 'summary_large_image' },
};

export default function MaxIsakovPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfilePage',
            name: 'Max Isakov',
            url: 'https://www.maxaec.com/team/max-isakov',
            description:
              'Max Isakov, RA, AIA, NCARB — Principal at MAX AEC LLC with 13+ years of architecture experience.',
          }),
        }}
      />

      <header className="profile-hero">
        <div className="profile-hero-content">
          <div className="profile-image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/max-isakov.jpg"
              alt="Max Isakov"
              width={200}
              height={200}
              loading="lazy"
            />
          </div>
          <div className="profile-info">
            <h1>Max Isakov, RA, AIA, NCARB</h1>
            <p className="profile-title">Principal / Justice Design, SME</p>
            <p className="profile-tagline">
              Registered Architect with 13+ years of experience leading design execution across
              residential development, building compliance, and government institutional projects.
            </p>
          </div>
        </div>
      </header>

      <main className="page-content">
        <section className="content-section credentials-highlight">
          <h2>Credentials</h2>
          <div className="credentials-grid">
            <div className="credential-item">
              <span className="credential-number">13+</span>
              <span className="credential-label">Years of Experience</span>
            </div>
            <div className="credential-item">
              <span className="credential-number">RA</span>
              <span className="credential-label">Registered Architect, NY</span>
            </div>
            <div className="credential-item">
              <span className="credential-number">AIA</span>
              <span className="credential-label">American Institute of Architects</span>
            </div>
            <div className="credential-item">
              <span className="credential-number">NCARB</span>
              <span className="credential-label">National Council Certified</span>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Leadership Scope</h2>
          <p>
            Max founded MAX AEC LLC to serve two distinct markets with a single standard of technical
            execution. He leads all project delivery — from early feasibility analysis through
            construction documentation — and is the architect of record for compliance filings.
          </p>
          <p>
            Over 13 years of practice, Max has worked across multifamily residential, mixed-use
            commercial, adaptive reuse, justice detention, behavioral health, courthouses, civic
            facilities, and emergency response projects. He handles BIM coordination, technical
            delivery, agency submissions, and stakeholder presentations.
          </p>
        </section>

        <section className="content-section">
          <h2>Market Focus</h2>
          <div className="services-list">
            <div className="service-item">
              <h4>Residential &amp; Commercial</h4>
              <p>
                Development architecture for NYC property owners and developers — feasibility
                studies, zoning analysis, City of Yes scenarios, schematic design, and DOB-ready
                filing packages. Flat-fee building compliance filings including parapets, LL152,
                LL88, LL97, and Tenant Protection Plans.
              </p>
            </div>
            <div className="service-item">
              <h4>Government &amp; Institutional</h4>
              <p>
                Technical delivery lead on justice and institutional projects alongside senior
                advisor{' '}
                <Link href="/team/peter-krasnow">Peter C. Krasnow, FAIA</Link>. Revit BIM
                environment setup, custom detention component development, construction
                documentation, and multi-agency coordination for federal, state, county, and
                tribal clients.
              </p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Selected Project Experience</h2>
          <ul>
            <li>NYC Borough-Based Jails — multi-billion dollar, four-borough Rikers replacement</li>
            <li>Baltimore Therapeutic Treatment Center — secure behavioral health for Maryland</li>
            <li>Macomb County Central Intake &amp; Assessment Center — jail expansion with mental health focus</li>
            <li>Morris County Courthouse — Design-Build courthouse in New Jersey</li>
            <li>Tribal Justice Facilities — culturally integrated facilities on sovereign lands</li>
            <li>COVID-19 Alternate Care Facility — 1,024-bed emergency response, 28-day delivery</li>
            <li>NYC multifamily feasibility and City of Yes scenario analysis (active engagements)</li>
            <li>Building compliance filings across Manhattan, Brooklyn, Queens, and the Bronx</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>Technical Capabilities</h2>
          <ul>
            <li>Revit BIM environment setup and management for multi-discipline teams</li>
            <li>Custom Revit family creation for specialized building types</li>
            <li>AI-assisted documentation and Power BI reporting workflows</li>
            <li>NYC zoning and building code analysis (including City of Yes / UAP)</li>
            <li>DOB and BEAM portal filing preparation and submission</li>
            <li>Construction document coordination and quality control</li>
          </ul>
        </section>
      </main>
    </>
  );
}
