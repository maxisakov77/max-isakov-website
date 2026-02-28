import type { Metadata } from 'next';
import Link from 'next/link';

import PageHeader from '@/components/PageHeader';
import ContactCta from '@/components/ContactCta';

export const metadata: Metadata = {
  title: 'Portfolio | MAX AEC LLC',
  description:
    'Selected company case studies from MAX AEC LLC, including NYC Borough-Based Jails, Baltimore Therapeutic Treatment Center, and Macomb County Intake Center.',
  alternates: { canonical: '/portfolio' },
  openGraph: {
    type: 'website',
    title: 'Portfolio | MAX AEC LLC',
    description:
      'Three detailed case studies plus additional experience across justice, civic, and emergency-response projects.',
    url: '/portfolio',
    images: '/squarespace/bbj_render.jpg',
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
            description: 'Selected project case studies from MAX AEC LLC.',
          }),
        }}
      />

      <PageHeader
        title="Portfolio"
        description="Three detailed case studies plus additional project experience across justice, civic, and emergency delivery programs."
      />

      <main className="page-content">
        <section className="content-section">
          <h2>NYC Borough-Based Jails</h2>
          <p>
            <strong>Context:</strong> Multi-borough replacement program for Rikers-era detention
            infrastructure.
            <br />
            <strong>Role:</strong> Design and justice advisory support
            <br />
            <strong>Outcome:</strong> Supported humane, security-compliant high-rise detention
            planning integrated into neighborhood contexts.
          </p>
          <p>
            Program execution required alignment between agency performance standards and design
            approaches that improve daylight, dignity, and community integration.
          </p>
          <ul>
            <li>
              Led design studies for detention floor-plate strategies and security-sensitive
              assemblies
            </li>
            <li>
              Developed recreation and facade options balancing operational control with dignified
              experience
            </li>
            <li>
              Coordinated multi-agency requirements across zoning, code, and justice operations
            </li>
          </ul>
          <div className="portfolio-gallery">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/squarespace/bbj_render.jpg"
              alt="NYC Borough-Based Jails rendering"
              width={1200}
              height={800}
              loading="lazy"
            />
          </div>
          <Link href="/projects/bbj" className="btn btn-secondary">
            View Full Case Study →
          </Link>
        </section>

        <section className="content-section">
          <h2>Baltimore Therapeutic Treatment Center</h2>
          <p>
            <strong>Context:</strong> Secure behavioral health environment for treatment-focused
            operations.
            <br />
            <strong>Role:</strong> Justice design and BIM coordination support
            <br />
            <strong>Outcome:</strong> Strengthened coordination and documentation quality through
            BIM-led delivery and specialized component development.
          </p>
          <p>
            The project called for an operationally grounded balance between safety requirements and
            recovery-oriented space planning.
          </p>
          <ul>
            <li>Established project BIM structure for cross-discipline coordination</li>
            <li>
              Led custom detention and security family development for project-specific needs
            </li>
            <li>
              Supported data-driven room and area workflows for consistent documentation
            </li>
          </ul>
          <Link href="/projects/baltimore" className="btn btn-secondary">
            View Full Case Study →
          </Link>
        </section>

        <section className="content-section">
          <h2>Macomb County Central Intake &amp; Assessment Center</h2>
          <p>
            <strong>Context:</strong> Intake and mental health-focused justice expansion program.
            <br />
            <strong>Role:</strong> Senior justice design support
            <br />
            <strong>Outcome:</strong> Advanced design development with clear stakeholder
            communication and targeted therapeutic planning.
          </p>
          <p>
            The scope emphasized intake efficiency while improving spatial conditions for mental
            health assessment and treatment support.
          </p>
          <ul>
            <li>
              Directed expansion design options tied to occupancy and program requirements
            </li>
            <li>
              Implemented BIM workflows from SD through DD for clearer coordination
            </li>
            <li>
              Developed presentation-ready design packages for county and team alignment
            </li>
          </ul>
          <div className="portfolio-gallery">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/squarespace/macomb_render.jpg"
              alt="Macomb County Intake Center rendering"
              width={1200}
              height={800}
              loading="lazy"
            />
          </div>
          <Link href="/projects/macomb" className="btn btn-secondary">
            View Full Case Study →
          </Link>
        </section>

        <section className="content-section">
          <h2>Additional Experience</h2>
          <p>
            Beyond the featured case studies, MAX AEC LLC has contributed to related civic, tribal,
            and emergency-response project environments.
          </p>
          <div className="services-list">
            <div className="service-item">
              <h4>Morris County Courthouse</h4>
              <p>
                Design-build courthouse delivery support spanning SD through DD coordination and
                client-facing updates.
              </p>
            </div>
            <div className="service-item">
              <h4>Justice Facilities for Native American Tribes</h4>
              <p>
                Concept and schematic justice facility modeling for tribal communities, including
                collaboration with{' '}
                <Link href="/team/peter-krasnow">Peter C. Krasnow, FAIA</Link>.
              </p>
            </div>
            <div className="service-item">
              <h4>COVID-19 Alternate Care Facility</h4>
              <p>
                Rapid design-build conversion support for a 1,024-bed non-acute treatment facility
                delivered under emergency timelines.
              </p>
            </div>
          </div>
          <p>
            Across project types, the firm emphasizes early constraint definition, stakeholder
            alignment, and high-quality documentation under schedule pressure.
          </p>
        </section>

        <ContactCta
          heading="Need Comparable Project Experience?"
          description="Our team can share relevant precedents and recommended scope for your project type."
        />
      </main>
    </>
  );
}
