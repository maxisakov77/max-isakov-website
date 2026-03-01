import type { Metadata } from 'next';
import Link from 'next/link';

import PageHeader from '@/components/PageHeader';
import ContactCta from '@/components/ContactCta';

export const metadata: Metadata = {
  title: 'Residential & Commercial Services | MAX AEC LLC',
  description:
    'NYC development architecture, City of Yes feasibility, and building compliance services for property owners, developers, and general contractors.',
  alternates: { canonical: '/services/residential' },
  openGraph: {
    type: 'website',
    title: 'Residential & Commercial Services | MAX AEC LLC',
    description:
      'Development architecture, zoning feasibility, and flat-fee compliance filings for NYC residential and commercial projects.',
    url: '/services/residential',
    images: '/images/signature/mark_only.png',
  },
  twitter: { card: 'summary_large_image' },
};

export default function ResidentialServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Residential & Commercial Services | MAX AEC LLC',
            url: 'https://www.maxaec.com/services/residential',
            description:
              'NYC development architecture, City of Yes feasibility, and building compliance services for property owners, developers, and general contractors.',
          }),
        }}
      />

      <PageHeader
        title="Residential &amp; Commercial"
        description="Architecture, feasibility, and compliance services for NYC property owners, developers, portfolio managers, and general contractors."
      />

      <main className="page-content">
        {/* ── Development Architecture ── */}
        <section id="development-architecture" className="content-section" style={{ scrollMarginTop: '96px' }}>
          <h2>Development Architecture</h2>
          <p>
            We support NYC developers and property owners from site feasibility through
            construction documentation. Every scope is structured to keep design, code, and
            delivery assumptions aligned before downstream commitments lock in.
          </p>
          <h3>Who This Is For</h3>
          <ul>
            <li>Developers pursuing multifamily, mixed-use, or adaptive reuse projects</li>
            <li>Owners evaluating repositioning or expansion on constrained sites</li>
            <li>Project teams that need accountable coordination from strategy through filing-ready sets</li>
          </ul>
          <h3>What We Deliver</h3>
          <ul>
            <li>Zoning and code-fit analysis tied to practical massing options</li>
            <li>Schematic design aligned with entitlement and DOB strategy</li>
            <li>Construction documentation with coordinated consultant integration</li>
          </ul>
          <p>
            Early feasibility and concept packages are completed in focused sprints with clear
            assumptions on FAR, envelope constraints, and implementation risk.
          </p>
        </section>

        {/* ── City of Yes ── */}
        <section id="city-of-yes" className="content-section" style={{ scrollMarginTop: '96px' }}>
          <h2>City of Yes Feasibility</h2>
          <p>
            City of Yes can unlock meaningful upside — but benefits are frequently overstated
            when FAR potential, envelope constraints, affordability obligations, and project
            assumptions are not tested together. We translate the new zoning text into
            decision-grade project scenarios.
          </p>
          <h3>Who This Is For</h3>
          <ul>
            <li>Acquisition teams evaluating whether UAP and parking changes improve value</li>
            <li>Developers comparing multiple parcels before predevelopment spend increases</li>
            <li>Architects and owners needing support on active City of Yes interpretation</li>
          </ul>
          <h3>What We Deliver</h3>
          <ul>
            <li>UAP scenario analysis with density, affordability, and envelope impacts</li>
            <li>Massing studies that convert zoning text into buildable form options</li>
            <li>Net-area and unit-yield ranges for financial modeling and go/no-go decisions</li>
            <li>Action recommendation with next-step scope for design, filing, or acquisition</li>
          </ul>
          <p>
            <Link href="/city-of-yes" className="link-arrow">
              Read the full City of Yes feasibility method →
            </Link>
          </p>
        </section>

        {/* ── Compliance ── */}
        <section id="compliance" className="content-section" style={{ scrollMarginTop: '96px' }}>
          <h2>Building Compliance &amp; Certifications</h2>
          <p>
            Flat-fee, architect-sealed compliance filings so your portfolio stays penalty-free.
            We handle the site visit, documentation, and DOB / BEAM portal filing end-to-end.
          </p>
          <div className="services-list">
            <div className="service-item">
              <h4>Annual Parapet Observations</h4>
              <p>Code-compliant inspection, photos, and report for every building with a street-facing parapet.</p>
            </div>
            <div className="service-item">
              <h4>LL152 No-Gas Certification</h4>
              <p>GPS2 form preparation, utility coordination, and DOB NOW filing. Skip it and it&apos;s a $5,000 penalty.</p>
            </div>
            <div className="service-item">
              <h4>LL88 Lighting &amp; Sub-Metering</h4>
              <p>Site verification and BEAM attestation for buildings over 25,000 sq ft. Penalties stack fast.</p>
            </div>
            <div className="service-item">
              <h4>LL97 Article 321 — Carbon Compliance</h4>
              <p>13-item prescriptive checklist for qualifying affordable housing and houses of worship.</p>
            </div>
            <div className="service-item">
              <h4>Tenant Protection Plans (TPP)</h4>
              <p>DOB-required plans for any permit in an occupied building. Optional weekly inspections available.</p>
            </div>
          </div>
          <p style={{ marginTop: '24px' }}>
            <Link href="/compliance" className="link-arrow">
              View full compliance service details and penalty reference →
            </Link>
          </p>
        </section>

        <ContactCta
          heading="Start a Residential or Commercial Project"
          description="Share your building address, project type, and timeline. We'll respond with a clear scope and flat-fee quote."
          buttonText="Email info@maxaec.com"
          href="mailto:info@maxaec.com?subject=Residential%2FCommercial%20Inquiry%20from%20maxaec.com"
        />
      </main>
    </>
  );
}
