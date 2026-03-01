import type { Metadata } from 'next';
import Link from 'next/link';

import PageHeader from '@/components/PageHeader';
import ContactCta from '@/components/ContactCta';

export const metadata: Metadata = {
  title: 'Government & Institutional Services | MAX AEC LLC',
  description:
    'Justice architecture, institutional advisory, and civic facility design from MAX AEC LLC. Over 60 combined years of experience across detention, behavioral health, courthouses, and emergency response.',
  alternates: { canonical: '/services/government' },
  openGraph: {
    type: 'website',
    title: 'Government & Institutional Services | MAX AEC LLC',
    description:
      'Justice architecture and institutional advisory with 60+ combined years of public-sector delivery experience.',
    url: '/services/government',
    images: '/images/signature/mark_only.png',
  },
  twitter: { card: 'summary_large_image' },
};

export default function GovernmentServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Government & Institutional Services | MAX AEC LLC',
            url: 'https://www.maxaec.com/services/government',
            description:
              'Justice architecture, institutional advisory, and civic facility design with over 60 combined years of public-sector delivery experience.',
          }),
        }}
      />

      <PageHeader
        title="Government &amp; Institutional"
        description="Justice architecture, institutional advisory, and civic facility design — backed by over 60 combined years of public-sector delivery across hundreds of projects nationwide."
      />

      <main className="page-content">
        {/* ── Leadership ── */}
        <section className="content-section">
          <h2>Combined Leadership</h2>
          <p>
            Government and institutional work demands a different kind of architect — one who
            understands security operations, agency coordination, therapeutic environments, and
            the political realities of public-sector delivery. MAX AEC LLC brings two
            complementary leadership profiles to every engagement.
          </p>

          <div className="gov-leaders">
            <div className="gov-leader-card">
              <h3>Max Isakov, RA, AIA, NCARB</h3>
              <p className="gov-leader-role">Principal — 13+ Years</p>
              <p>
                Leads design execution, BIM coordination, and technical delivery for justice
                and institutional programs. Project experience spans high-rise detention,
                behavioral health, courthouses, emergency response, and tribal justice
                facilities. Known for integrating advanced documentation systems — including
                AI-assisted workflows and data-driven room programming — into complex
                multi-agency project environments.
              </p>
            </div>
            <div className="gov-leader-card">
              <h3>
                <Link href="/team/peter-krasnow">Peter C. Krasnow, FAIA</Link>
              </h3>
              <p className="gov-leader-role">Senior Justice Designer — 50+ Years</p>
              <p>
                One of the most experienced justice architects in the United States. Fellow
                of the American Institute of Architects. Five decades of continuous practice
                across federal, state, county, and tribal justice facilities — from maximum-security
                prisons to community courts. Author of <em>Justice Facilities</em>, the
                definitive reference for correctional and judicial design. Peter provides
                senior advisory leadership on select engagements where operational, security,
                and therapeutic complexity require deep institutional knowledge.
              </p>
            </div>
          </div>
        </section>

        {/* ── What We Do ── */}
        <section className="content-section">
          <h2>What We Provide</h2>
          <p>
            We advise on facilities where security, operations, and human outcomes must be
            resolved together. Engagements are structured around high-risk milestones where
            design decisions have lasting operational consequences.
          </p>
          <ul>
            <li>Security and compliance review of layouts, details, and key assemblies</li>
            <li>Design QA focused on operational flow, safety, and therapeutic intent</li>
            <li>BIM coordination and custom component development for specialized facilities</li>
            <li>Stakeholder communication packages for agency leadership and elected officials</li>
            <li>Documentation support from schematic design through construction administration</li>
            <li>Senior advisory integration for programs requiring justice-specific expertise</li>
          </ul>
        </section>

        {/* ── Featured Engagements ── */}
        <section className="content-section">
          <h2>Featured Engagements</h2>
          <p>
            The following represent a sample of named projects where MAX AEC LLC leadership
            delivered architecture and advisory services in a principal or senior capacity:
          </p>
          <div className="gov-project-list">
            <div className="gov-project-entry">
              <h4>NYC Borough-Based Jails</h4>
              <p>
                Multi-billion dollar, four-borough replacement of Rikers Island.
                High-rise detention design, security assemblies, recreation planning, and
                multi-agency coordination for the largest justice architecture program in
                U.S. history.
              </p>
              <span className="gov-project-meta">Manhattan, Brooklyn, The Bronx, Queens — NYC DDC</span>
            </div>
            <div className="gov-project-entry">
              <h4>Baltimore Therapeutic Treatment Center</h4>
              <p>
                Secure behavioral health facility for the State of Maryland. Full BIM
                environment, AI-assisted room data programming, and custom detention
                component development.
              </p>
              <span className="gov-project-meta">Baltimore, MD — State of Maryland</span>
            </div>
            <div className="gov-project-entry">
              <h4>Macomb County Central Intake &amp; Assessment Center</h4>
              <p>
                County jail expansion with dedicated mental health treatment housing.
                Schematic through design development with stakeholder presentation
                delivery.
              </p>
              <span className="gov-project-meta">Macomb County, MI — County Government</span>
            </div>
            <div className="gov-project-entry">
              <h4>Morris County Courthouse</h4>
              <p>
                Design-Build courthouse balancing civic presence, public accessibility,
                and three-way security separation for court operations.
              </p>
              <span className="gov-project-meta">Morris County, NJ — County Government</span>
            </div>
            <div className="gov-project-entry">
              <h4>Justice Facilities for Native American Tribes</h4>
              <p>
                Multi-year tribal justice program integrating cultural practices,
                restorative justice spaces, and federal compliance within sovereign
                tribal governance frameworks.
              </p>
              <span className="gov-project-meta">Various Tribal Lands — Federal / Tribal Agencies</span>
            </div>
            <div className="gov-project-entry">
              <h4>COVID-19 Alternate Care Facility — SUNY Old Westbury</h4>
              <p>
                Emergency 1,024-bed facility for the U.S. Army Corps of Engineers.
                Design-Build conversion delivered in 28 days, 12 hours ahead of schedule.
              </p>
              <span className="gov-project-meta">Long Island, NY — USACE / FEMA</span>
            </div>
          </div>
        </section>

        {/* ── Breadth of Experience ── */}
        <section className="content-section">
          <h2>Breadth of Experience</h2>
          <p>
            Beyond our featured engagements, MAX AEC LLC&apos;s combined leadership has
            contributed to hundreds of justice, civic, and institutional projects over
            the past five decades. Our experience spans the full range of government
            facility types:
          </p>
          <div className="gov-category-grid">
            <div className="gov-category">
              <h4>Detention &amp; Corrections</h4>
              <ul>
                <li>Federal correctional facilities</li>
                <li>State prisons and reception centers</li>
                <li>County jails and intake centers</li>
                <li>Pre-trial detention facilities</li>
                <li>Juvenile detention and residential</li>
                <li>Reentry and transitional housing</li>
              </ul>
            </div>
            <div className="gov-category">
              <h4>Courts &amp; Justice</h4>
              <ul>
                <li>Federal and state courthouses</li>
                <li>County and municipal courts</li>
                <li>Tribal courts and governance centers</li>
                <li>Family and juvenile courts</li>
                <li>Court security and holding areas</li>
                <li>Alternative dispute resolution centers</li>
              </ul>
            </div>
            <div className="gov-category">
              <h4>Behavioral Health</h4>
              <ul>
                <li>Secure treatment facilities</li>
                <li>Forensic psychiatric hospitals</li>
                <li>Substance abuse treatment centers</li>
                <li>Crisis stabilization units</li>
                <li>Therapeutic community residences</li>
                <li>Outpatient behavioral health clinics</li>
              </ul>
            </div>
            <div className="gov-category">
              <h4>Civic &amp; Emergency</h4>
              <ul>
                <li>Emergency operations and alternate care</li>
                <li>Public safety and law enforcement</li>
                <li>Municipal and community facilities</li>
                <li>Military and veterans facilities</li>
                <li>Port authority and transportation</li>
                <li>Government office and administration</li>
              </ul>
            </div>
          </div>
          <p>
            Whether the program involves a single courtroom renovation or a multi-billion
            dollar detention replacement, we bring the same rigor: security operations
            understood, stakeholder requirements documented, and design decisions that hold
            up through construction and occupancy.
          </p>
        </section>

        {/* ── How We Engage ── */}
        <section className="content-section">
          <h2>How We Engage</h2>
          <p>
            Government projects move differently than private work. We structure engagements
            around how public-sector teams actually operate:
          </p>
          <ul>
            <li>
              <strong>Prime Architect Support</strong> — We embed within your design team
              as justice/institutional specialists, not as a competing firm
            </li>
            <li>
              <strong>Senior Advisory</strong> — Peter Krasnow provides milestone-level
              review and strategic guidance on security, operations, and program alignment
            </li>
            <li>
              <strong>Technical Delivery</strong> — Max Isakov leads BIM, documentation,
              and cross-discipline coordination from SD through CA
            </li>
            <li>
              <strong>Agency Communication</strong> — Presentation-ready deliverables for
              elected officials, agency leadership, and public stakeholder groups
            </li>
          </ul>
        </section>

        <ContactCta
          heading="Planning a Government or Institutional Project?"
          description="Share program type, jurisdiction, and timeline. We'll outline how our team integrates with yours."
          buttonText="Email info@maxaec.com"
          href="mailto:info@maxaec.com?subject=Government%20Project%20Inquiry%20from%20maxaec.com"
        />
      </main>
    </>
  );
}
