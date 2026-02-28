import type { Metadata } from 'next';
import Link from 'next/link';

import PageHeader from '@/components/PageHeader';
import ContactCta from '@/components/ContactCta';

export const metadata: Metadata = {
  title: 'Portfolio | MAX AEC LLC',
  description:
    'Project portfolio from MAX AEC LLC: residential & commercial development in NYC plus government & institutional work spanning detention, courthouses, behavioral health, and emergency response.',
  alternates: { canonical: '/portfolio' },
  openGraph: {
    type: 'website',
    title: 'Portfolio | MAX AEC LLC',
    description:
      'Residential, commercial, and government project experience from MAX AEC LLC.',
    url: '/portfolio',
    images: '/images/signature/mark_only.png',
  },
  twitter: { card: 'summary_large_image' },
};

export default function PortfolioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Portfolio | MAX AEC LLC',
            url: 'https://www.maxaec.com/portfolio',
            description: 'Project portfolio from MAX AEC LLC across residential, commercial, and government markets.',
          }),
        }}
      />

      <PageHeader
        title="Portfolio"
        description="Selected work across our two markets — residential & commercial development in NYC, and government & institutional projects nationwide."
      />

      <main className="page-content">
        {/* ════════════════════════════════════════════════
            RESIDENTIAL & COMMERCIAL
           ════════════════════════════════════════════════ */}
        <section className="content-section">
          <h2 className="portfolio-sector-heading">Residential &amp; Commercial</h2>
          <p>
            Our residential and commercial practice focuses on NYC development architecture, City of
            Yes feasibility, and building compliance services. This is an active and growing service
            line — current engagements include multifamily feasibility studies, zoning scenario
            analysis, and flat-fee compliance filings across Manhattan, Brooklyn, Queens, and the
            Bronx.
          </p>
          <div className="services-list" style={{ marginTop: '24px' }}>
            <div className="service-item">
              <h4>Development Architecture</h4>
              <p>
                Feasibility through construction documentation for multifamily, mixed-use, and
                adaptive reuse projects. Zoning analysis, schematic design, and DOB-aligned
                filing packages.
              </p>
            </div>
            <div className="service-item">
              <h4>City of Yes Feasibility</h4>
              <p>
                UAP scenario analysis, massing studies, and yield ranges for developers and
                acquisition teams evaluating NYC sites under the new zoning framework.
              </p>
            </div>
            <div className="service-item">
              <h4>Building Compliance</h4>
              <p>
                Flat-fee parapet observations, LL152, LL88, LL97 Article 321, and Tenant Protection
                Plans — site visit through portal filing, sealed by a Registered Architect.
              </p>
            </div>
          </div>
          <div style={{ marginTop: '24px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/services/residential" className="btn btn-secondary">
              View Residential Services →
            </Link>
            <Link href="/compliance" className="btn btn-secondary">
              View Compliance Details →
            </Link>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            GOVERNMENT & INSTITUTIONAL
           ════════════════════════════════════════════════ */}
        <section className="content-section">
          <h2 className="portfolio-sector-heading">Government &amp; Institutional</h2>
          <p>
            Our government practice combines Max Isakov&apos;s 13+ years of design execution with
            Peter Krasnow&apos;s 50+ years of senior justice advisory. Together, we have contributed
            to hundreds of detention, courthouse, behavioral health, and civic projects nationwide.
            Below are selected named engagements.
          </p>
        </section>

        {/* ── BBJ ── */}
        <section className="content-section">
          <div className="gov-project-entry">
            <h4>NYC Borough-Based Jails</h4>
            <p>
              Multi-billion dollar, four-borough replacement of Rikers Island. High-rise detention
              design, security assemblies, recreation planning, and multi-agency coordination for
              the largest justice architecture program in U.S. history.
            </p>
            <span className="gov-project-meta">Manhattan, Brooklyn, The Bronx, Queens — NYC DDC</span>
          </div>
        </section>

        {/* ── Baltimore ── */}
        <section className="content-section">
          <div className="gov-project-entry">
            <h4>Baltimore Therapeutic Treatment Center</h4>
            <p>
              Secure behavioral health facility for the State of Maryland. Full BIM environment,
              AI-assisted room data programming, and custom detention component development.
            </p>
            <span className="gov-project-meta">Baltimore, MD — State of Maryland</span>
          </div>
        </section>

        {/* ── Macomb ── */}
        <section className="content-section">
          <div className="gov-project-entry">
            <h4>Macomb County Central Intake &amp; Assessment Center</h4>
            <p>
              County jail expansion with dedicated mental health treatment housing. Schematic through
              design development with stakeholder presentation delivery.
            </p>
            <span className="gov-project-meta">Macomb County, MI — County Government</span>
          </div>
        </section>

        {/* ── Morris ── */}
        <section className="content-section">
          <div className="gov-project-entry">
            <h4>Morris County Courthouse</h4>
            <p>
              Design-Build courthouse balancing civic presence, public accessibility, and three-way
              security separation for court operations.
            </p>
            <span className="gov-project-meta">Morris County, NJ — County Government</span>
          </div>
        </section>

        {/* ── Tribal ── */}
        <section className="content-section">
          <div className="gov-project-entry">
            <h4>Justice Facilities for Native American Tribes</h4>
            <p>
              Multi-year tribal justice program integrating cultural practices, restorative justice
              spaces, and federal compliance within sovereign tribal governance frameworks.
            </p>
            <span className="gov-project-meta">Various Tribal Lands — Federal / Tribal Agencies</span>
          </div>
        </section>

        {/* ── COVID ── */}
        <section className="content-section">
          <div className="gov-project-entry">
            <h4>COVID-19 Alternate Care Facility — SUNY Old Westbury</h4>
            <p>
              Emergency 1,024-bed facility for the U.S. Army Corps of Engineers. Design-Build
              conversion delivered in 28 days, 12 hours ahead of schedule.
            </p>
            <span className="gov-project-meta">Long Island, NY — USACE / FEMA</span>
          </div>
        </section>

        {/* ── Broader Experience ── */}
        <section className="content-section">
          <h3>Additional Government Experience</h3>
          <p>
            Beyond our named engagements, MAX AEC LLC&apos;s combined leadership has contributed to
            hundreds of justice, civic, and institutional projects over the past five decades —
            including federal correctional facilities, state prisons, juvenile detention, forensic
            psychiatric hospitals, crisis stabilization units, family courts, municipal buildings,
            military facilities, and emergency operations centers.
          </p>
          <Link href="/services/government" className="btn btn-secondary">
            View Full Government Services →
          </Link>
        </section>

        <ContactCta
          heading="Have a Project in Either Market?"
          description="Share your project type, location, and timeline. We'll respond with the right scope and team structure."
        />
      </main>
    </>
  );
}
