import type { Metadata } from 'next';

import PageHeader from '@/components/PageHeader';
import ContactCta from '@/components/ContactCta';

export const metadata: Metadata = {
  title:
    'NYC Building Compliance Services — Parapet, LL152, LL88, LL97, TPP | MAX AEC LLC',
  description:
    'Licensed NYC architect offering fast, flat-fee building compliance services: annual parapet observations, LL152 no-gas certs, LL88 lighting/sub-metering, LL97 Article 321 prescriptive pathway, and TPPs. Full-service from site visit to BEAM/DOB filing. Get a quote today.',
  alternates: { canonical: '/compliance' },
  openGraph: {
    type: 'website',
    title:
      'NYC Building Compliance Services — Parapet, LL152, LL88, LL97, TPP | MAX AEC LLC',
    description:
      'Licensed NYC architect offering fast, flat-fee building compliance services: annual parapet observations, LL152 no-gas certs, LL88 lighting/sub-metering, LL97 Article 321 prescriptive pathway, and TPPs.',
    url: '/compliance',
    images: '/images/signature/mark_only.png',
  },
  twitter: { card: 'summary_large_image' },
};

export default function CompliancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'NYC Building Compliance Services | MAX AEC LLC',
            url: 'https://www.maxaec.com/compliance',
            description:
              'Licensed NYC architect offering fast, flat-fee building compliance services including parapet observations, LL152, LL88, LL97 Article 321, and Tenant Protection Plans.',
          }),
        }}
      />

      <PageHeader
        title="NYC Building Compliance &amp; Certifications"
        description="Skip the hourly billing and engineering delays. Flat-fee parapet observations, gas piping certifications, energy law attestations, carbon compliance filings, and tenant protection plans — filed by a Registered Architect."
      />

      {/* ── Penalty Reference Table (near top — strongest motivator) ── */}
      <section className="compliance-penalties">
        <div className="container">
          <h2>What's at Stake</h2>
          <p className="section-lead">
            Missing a filing deadline means fines that compound fast. Here's what
            non-compliance costs:
          </p>
          <div className="penalty-table-wrap">
            <table className="penalty-table">
              <thead>
                <tr>
                  <th>Compliance Requirement</th>
                  <th>Penalty for Non-Compliance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Annual Parapet Observation</td>
                  <td>DOB violation</td>
                </tr>
                <tr>
                  <td>LL152 No-Gas Certification</td>
                  <td>$5,000 civil penalty</td>
                </tr>
                <tr>
                  <td>LL88 Lighting Report</td>
                  <td>$1,500/year</td>
                </tr>
                <tr>
                  <td>LL88 Sub-Metering Report</td>
                  <td>$1,500/year + $500/meter</td>
                </tr>
                <tr>
                  <td>LL97 Carbon Emissions</td>
                  <td>$268/metric ton over limit</td>
                </tr>
                <tr>
                  <td>Tenant Protection Plan</td>
                  <td>Permit denied · Stop-work order · DOB violations</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <main className="page-content">
        <section className="compliance-services">
          <div className="container">
            <h2 className="section-heading">Our Compliance Services</h2>

            {/* 1. Parapet */}
            <div id="parapet" className="compliance-card" style={{ scrollMarginTop: '96px' }}>
              <h3>Annual Parapet Observations</h3>
              <p className="compliance-law">
                1 RCNY §103-15 / NYC Admin Code §28-301.1.1
              </p>
              <p>
                Every building with a parapet on a public street must be inspected
                annually. We perform the observation, photograph all conditions, and
                deliver a code-compliant report you keep on file. If we find an unsafe
                condition, we notify DOB and guide you through the 90-day correction
                window.
              </p>
              <div className="compliance-details">
                <div className="compliance-detail-item">
                  <strong>Required For</strong>
                  <span>All buildings with parapets fronting a public right-of-way — any height</span>
                </div>
                <div className="compliance-detail-item">
                  <strong>Frequency</strong>
                  <span>Annual</span>
                </div>
                <div className="compliance-detail-item">
                  <strong>Filed With</strong>
                  <span>Report stays with building owner (6-year retention)</span>
                </div>
                <div className="compliance-detail-item">
                  <strong>Penalty</strong>
                  <span>DOB violation for failure to inspect</span>
                </div>
                <div className="compliance-detail-item">
                  <strong>Fee</strong>
                  <span>
                    Flat fee per building —{' '}
                    <a href="mailto:info@maxaec.com">get a quote</a>
                  </span>
                </div>
              </div>
            </div>

            {/* 2. LL152 */}
            <div id="ll152" className="compliance-card" style={{ scrollMarginTop: '96px' }}>
              <h3>LL152 No-Gas Certification</h3>
              <p className="compliance-law">Local Law 152 of 2016</p>
              <p>
                No gas in your building? You still need to file with DOB. We prepare the
                GPS2 certification, coordinate your utility letter and affidavit, and
                file everything on DOB NOW. Skip this and it's a $5,000 civil
                penalty — we make sure that doesn't happen.
              </p>
              <div className="compliance-details">
                <div className="compliance-detail-item">
                  <strong>Required For</strong>
                  <span>
                    Buildings with no gas piping in the current LL152 inspection cycle
                    (all-electric or gas-terminated buildings)
                  </span>
                </div>
                <div className="compliance-detail-item">
                  <strong>Frequency</strong>
                  <span>Once per 4-year cycle (by Community District)</span>
                </div>
                <div className="compliance-detail-item">
                  <strong>Filed With</strong>
                  <span>DOB NOW portal</span>
                </div>
                <div className="compliance-detail-item">
                  <strong>Penalty</strong>
                  <span>$5,000 civil penalty</span>
                </div>
                <div className="compliance-detail-item">
                  <strong>Fee</strong>
                  <span>
                    Flat fee per filing —{' '}
                    <a href="mailto:info@maxaec.com">get a quote</a>
                  </span>
                </div>
              </div>
            </div>

            {/* 3. LL88 */}
            <div id="ll88" className="compliance-card" style={{ scrollMarginTop: '96px' }}>
              <h3>LL88 Lighting &amp; Sub-Metering Attestations</h3>
              <p className="compliance-law">
                Local Law 88 of 2009 (amended by LL132 and LL134 of 2016)
              </p>
              <p>
                Large buildings must prove their lighting meets current energy code and
                that commercial tenant spaces are sub-metered. We inspect, document, and
                file the attestation on BEAM. Penalties stack fast — $1,500/year per
                missed report, plus $500 for every missing meter.
              </p>
              <div className="compliance-details">
                <div className="compliance-detail-item">
                  <strong>Required For</strong>
                  <span>
                    Buildings over 25,000 sq ft (or 100,000+ sq ft combined on a tax lot)
                  </span>
                </div>
                <div className="compliance-detail-item">
                  <strong>Frequency</strong>
                  <span>
                    One-time compliance filing (deadline: May 1, with grace period to
                    June 30)
                  </span>
                </div>
                <div className="compliance-detail-item">
                  <strong>Filed With</strong>
                  <span>BEAM Portal (nyc.beam-portal.org)</span>
                </div>
                <div className="compliance-detail-item">
                  <strong>Penalty</strong>
                  <span>
                    $1,500/year for missing lighting report + $1,500/year for missing
                    sub-meter report + $500 per missing meter
                  </span>
                </div>
                <div className="compliance-detail-item">
                  <strong>Fee</strong>
                  <span>
                    Flat fee per building (+ $115 DOB filing fee) —{' '}
                    <a href="mailto:info@maxaec.com">get a quote</a>
                  </span>
                </div>
              </div>
            </div>

            {/* 4. LL97 */}
            <div id="ll97" className="compliance-card" style={{ scrollMarginTop: '96px' }}>
              <h3>LL97 Article 321 — Prescriptive Carbon Compliance</h3>
              <p className="compliance-law">
                Local Law 97 of 2019 — Article 321 (Prescriptive Pathway)
              </p>
              <p>
                Affordable housing and houses of worship don't need expensive energy
                models. Article 321 lets qualifying buildings comply with LL97 through a
                13-item checklist. We verify every measure on-site, prepare the
                attestation, and file on BEAM — no engineers or energy consultants
                required.
              </p>
              <div className="compliance-details">
                <div className="compliance-detail-item">
                  <strong>Required For</strong>
                  <span>
                    Covered buildings where 35%+ of units are rent-regulated, HDFC
                    co-ops, federal project-based housing (Section 8), and houses of
                    worship
                  </span>
                </div>
                <div className="compliance-detail-item">
                  <strong>Frequency</strong>
                  <span>
                    Annual filing (deadline: May 1, with grace period to June 30;
                    extension to Dec 31 if requested by Aug 29)
                  </span>
                </div>
                <div className="compliance-detail-item">
                  <strong>Filed With</strong>
                  <span>BEAM Portal (nyc.beam-portal.org)</span>
                </div>
                <div className="compliance-detail-item">
                  <strong>Penalty</strong>
                  <span>
                    LL97 carbon penalties ($268/metric ton of CO₂e over the limit)
                  </span>
                </div>
                <div className="compliance-detail-item">
                  <strong>Fee</strong>
                  <span>
                    Flat fee per building —{' '}
                    <a href="mailto:info@maxaec.com">get a quote</a>
                  </span>
                </div>
              </div>
            </div>

            {/* 5. TPP */}
            <div id="tpp" className="compliance-card" style={{ scrollMarginTop: '96px' }}>
              <h3>Tenant Protection Plans (TPP)</h3>
              <p className="compliance-law">NYC Building Code §3303.10.1</p>
              <p>
                Renovating a building with tenants? DOB won't issue the permit without a
                signed TPP. We prepare the plan, file it, and — if you need it — run
                weekly compliance inspections so the job never gets shut down.
                Contractors: you don't need your project architect to do this — we
                handle it independently.
              </p>
              <div className="compliance-details">
                <div className="compliance-detail-item">
                  <strong>Required For</strong>
                  <span>
                    Any construction, alteration, or partial demolition in a building
                    with at least one occupied dwelling unit — each permit needs its own
                    TPP
                  </span>
                </div>
                <div className="compliance-detail-item">
                  <strong>Frequency</strong>
                  <span>
                    Per permit + optional weekly compliance inspections during
                    construction
                  </span>
                </div>
                <div className="compliance-detail-item">
                  <strong>Filed With</strong>
                  <span>DOB NOW portal</span>
                </div>
                <div className="compliance-detail-item">
                  <strong>Penalty</strong>
                  <span>DOB will not issue permit; stop-work orders; violations</span>
                </div>
                <div className="compliance-detail-item">
                  <strong>Fee</strong>
                  <span>
                    Flat fee per filing · Weekly inspections available —{' '}
                    <a href="mailto:info@maxaec.com">get a quote</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── The MAX AEC Advantage ── */}
        <section className="compliance-advantage">
          <div className="container">
            <h2 className="section-heading">The MAX AEC Advantage</h2>
            <div className="advantage-grid">
              <div className="advantage-item">
                <h4>Architect-Led Filings</h4>
                <p>
                  Max Isakov is a NY Registered Architect (RA), AIA member, and NCARB
                  certified. Work is prepared and sealed by a licensed professional.
                </p>
              </div>
              <div className="advantage-item">
                <h4>Transparent Flat Fees</h4>
                <p>
                  No hourly billing or surprise invoices. Every project is quoted as a
                  flat fee upfront — contact us with your building address and we'll
                  send a number, not a range.
                </p>
              </div>
              <div className="advantage-item">
                <h4>Fast Turnaround</h4>
                <p>
                  Using template-driven, optimized workflows, most filings are completed
                  in 1–3 business days after the site visit or document receipt.
                </p>
              </div>
              <div className="advantage-item">
                <h4>End-to-End Service</h4>
                <p>
                  We don't just inspect; we act. Site visits, documentation,
                  sign-and-seal, and portal filing (DOB NOW / BEAM) are all included.
                </p>
              </div>
              <div className="advantage-item">
                <h4>Portfolio Pricing</h4>
                <p>
                  Tiered volume discounts for managers handling 5+ buildings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Volume Discounts ── */}
        <section className="compliance-volume">
          <div className="container">
            <h2 className="section-heading">Volume Discounts</h2>
            <p className="section-lead">
              Managing multiple buildings? We offer tiered portfolio pricing:
            </p>
            <div className="volume-grid">
              <div className="volume-tier">
                <span className="volume-range">5 – 10 buildings</span>
                <span className="volume-discount">10% off per filing</span>
              </div>
              <div className="volume-tier">
                <span className="volume-range">11 – 25 buildings</span>
                <span className="volume-discount">15% off per filing</span>
              </div>
              <div className="volume-tier">
                <span className="volume-range">26+ buildings</span>
                <span className="volume-discount">20% off per filing</span>
              </div>
            </div>
            <p className="section-lead" style={{ marginTop: '24px' }}>
              Contact us with your building list for a portfolio-wide quote.
            </p>
          </div>
        </section>

        {/* ── Contact CTA ── */}
        <ContactCta
          heading="Get a Fast Quote"
          description="Send your building address and service(s) needed. We'll reply with a flat-fee quote — not a range."
          buttonText="Email info@maxaec.com"
          href="mailto:info@maxaec.com?subject=Compliance%20Quote%20Request%20from%20maxaec.com"
        />
      </main>
    </>
  );
}
