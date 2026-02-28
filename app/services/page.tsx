import type { Metadata } from 'next';
import Link from 'next/link';

import PageHeader from '@/components/PageHeader';
import ContactCta from '@/components/ContactCta';

export const metadata: Metadata = {
  title: 'Services | MAX AEC LLC',
  description:
    'Company services from MAX AEC LLC: development architecture, City of Yes feasibility, and justice/institutional advisory.',
  alternates: { canonical: '/services' },
  openGraph: {
    type: 'website',
    title: 'Services | MAX AEC LLC',
    description:
      'Three focused service lines from MAX AEC LLC for development, feasibility, and institutional delivery.',
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
              'Development architecture, City of Yes feasibility, and institutional advisory services from MAX AEC LLC.',
          }),
        }}
      />

      <PageHeader
        title="Services"
        description="MAX AEC LLC provides three focused service lines for faster, code-compliant, and buildable project decisions."
      />

      <main className="page-content">
        <section id="development-architecture" className="content-section" style={{ scrollMarginTop: '96px' }}>
          <h2>Development Architecture</h2>
          <p>
            Our team supports NYC developers and property owners from feasibility through
            construction documentation. The scope is structured to keep design, code, and delivery
            assumptions aligned before downstream commitments intensify.
          </p>
          <h3>Who This Is For</h3>
          <ul>
            <li>Developers pursuing multifamily, mixed-use, or adaptive reuse projects</li>
            <li>Owners evaluating repositioning or expansion potential on constrained sites</li>
            <li>
              Project teams requiring accountable coordination from strategy through filing-ready
              sets
            </li>
          </ul>
          <h3>Core Deliverables</h3>
          <ul>
            <li>Zoning and code fit analysis tied to practical massing options</li>
            <li>
              Schematic design packages aligned with entitlement and DOB strategy
            </li>
            <li>
              Construction documentation with coordinated consultant integration
            </li>
          </ul>
          <h3>Typical Timeline and Outcome</h3>
          <p>
            Early feasibility and concept packages are typically completed in focused sprints with
            clear assumptions on FAR, envelope constraints, and implementation risk.
          </p>
        </section>

        <section id="city-of-yes-feasibility" className="content-section" style={{ scrollMarginTop: '96px' }}>
          <h2>City of Yes Feasibility</h2>
          <p>
            Our feasibility process translates City of Yes and UAP policy into decision-grade
            project scenarios. Analysis is structured to test zoning opportunity, affordability
            obligations, and envelope realities in one coordinated pass.
          </p>
          <h3>Who This Is For</h3>
          <ul>
            <li>Acquisition teams evaluating whether UAP and parking changes improve value</li>
            <li>
              Developers comparing multiple parcels before predevelopment spend increases
            </li>
            <li>
              Architects and owners needing support on active City of Yes interpretation
            </li>
          </ul>
          <h3>Core Deliverables</h3>
          <ul>
            <li>UAP scenario analysis with density, affordability, and envelope impacts</li>
            <li>Massing studies that convert zoning text into buildable form options</li>
            <li>
              Net-area and unit-yield ranges for financial modeling and go/no-go decisions
            </li>
          </ul>
          <h3>Typical Timeline and Outcome</h3>
          <p>
            Most studies are delivered as short-cycle decision packages with clear assumptions and
            recommendations for next-step design or entitlement action.
          </p>
        </section>

        <section id="justice-advisory" className="content-section" style={{ scrollMarginTop: '96px' }}>
          <h2>Justice and Institutional Advisory</h2>
          <p>
            MAX AEC LLC advises on facilities where security, operations, and therapeutic performance
            must be resolved together. Engagements include detention, behavioral health, and related
            institutional typologies.
          </p>
          <h3>Who This Is For</h3>
          <ul>
            <li>
              Architecture teams entering or scaling justice and behavioral health work
            </li>
            <li>
              Project leaders requiring security-compliance rigor in design and detailing
            </li>
            <li>Stakeholder groups aligning operational and design priorities</li>
          </ul>
          <h3>Core Deliverables</h3>
          <ul>
            <li>
              Security and compliance review of layouts, details, and key assemblies
            </li>
            <li>
              Design QA focused on operational flow, safety, and therapeutic intent
            </li>
            <li>
              Documentation and BIM support for specialized facility components
            </li>
          </ul>
          <h3>Typical Timeline and Outcome</h3>
          <p>
            Advisory scopes are phased around high-risk project milestones. For select programs, the
            firm partners with{' '}
            <Link href="/team/peter-krasnow">Peter C. Krasnow, FAIA</Link> as senior justice
            advisor.
          </p>
        </section>

        <section className="content-section credentials-highlight">
          <h2>Company Proof Points</h2>
          <div className="credentials-grid">
            <div className="credential-item">
              <span className="credential-number">NYC</span>
              <span className="credential-label">Development and City of Yes Focus</span>
            </div>
            <div className="credential-item">
              <span className="credential-number">3</span>
              <span className="credential-label">Primary Case Studies on Site</span>
            </div>
            <div className="credential-item">
              <span className="credential-number">Team</span>
              <span className="credential-label">Leadership Across Public and Private Work</span>
            </div>
          </div>
        </section>

        <ContactCta
          heading="Need a Focused Scope and Timeline?"
          description="Share project type, borough, and target schedule. Our team will recommend the right service start point."
        />
      </main>
    </>
  );
}
