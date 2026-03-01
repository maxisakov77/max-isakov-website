import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peter C. Krasnow, FAIA | Senior Designer, Justice Design SME | MAX AEC LLC',
  description:
    'Profile of Peter C. Krasnow, FAIA — justice design SME and long-time collaborator on specialized institutional projects.',
  alternates: { canonical: '/team/peter-krasnow' },
  openGraph: {
    type: 'profile',
    title: 'Peter C. Krasnow, FAIA | Senior Designer, Justice Design SME | MAX AEC LLC',
    description:
      'Justice architecture expertise and representative project background from Peter C. Krasnow, FAIA.',
    url: '/team/peter-krasnow',
    images: '/peter-krasnow/peter.jpg',
  },
  twitter: { card: 'summary_large_image' },
};

export default function PeterKrasnowPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfilePage',
            name: 'Peter Krasnow',
            url: 'https://www.maxaec.com/team/peter-krasnow',
            description:
              'Justice design SME profile for Peter C. Krasnow, FAIA.',
          }),
        }}
      />

      <header className="profile-hero">
        <div className="profile-hero-content">
          <div className="profile-image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/peter-krasnow/peter.jpg"
              alt="Peter Krasnow, FAIA"
              width={200}
              height={200}
              loading="lazy"
            />
          </div>
          <div className="profile-info">
            <h1>Peter C. Krasnow, FAIA</h1>
            <p className="profile-title">Senior Designer / Justice Design, SME</p>
            <p className="profile-tagline">
              50+ years of justice architecture leadership — including detention, courthouses,
              behavioral health, forensic psychiatric, and tribal justice facilities across federal,
              state, county, and tribal agencies nationwide.
            </p>
          </div>
        </div>
      </header>

      <main className="page-content">
        <section className="content-section">
          <h2>Professional Summary</h2>
          <p>
            Peter brings 50+ years of leadership in justice architecture, including facility
            planning, programming, operations-informed design, and stakeholder-facing delivery in
            high-accountability public projects. His work spans hundreds of correctional, judicial,
            and behavioral health facilities for agencies at every level of government.
          </p>
          <p>
            He was elevated to Fellow of the American Institute of Architects for contributions to
            justice planning and design. At MAX AEC LLC, Peter serves as senior advisor on
            government and institutional engagements alongside principal{' '}
            <a href="/team/max-isakov">Max Isakov, RA, AIA, NCARB</a>.
          </p>
        </section>

        <section className="content-section credentials-highlight">
          <h2>Experience Snapshot</h2>
          <div className="credentials-grid">
            <div className="credential-item">
              <span className="credential-number">42K+</span>
              <span className="credential-label">Beds Designed</span>
            </div>
            <div className="credential-item">
              <span className="credential-number">$2.22B+</span>
              <span className="credential-label">Project Value</span>
            </div>
          </div>
          <ul>
            <li>Justice planning and architecture for public and institutional agencies</li>
            <li>Author of &quot;Correctional Facility Design and Detailing&quot;</li>
            <li>Extensive client and community presentation leadership</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>Representative Capabilities</h2>
          <div className="services-list">
            <div className="service-item">
              <h4>Needs and Operations Assessment</h4>
              <p>Program and operational analysis to establish defensible planning direction.</p>
            </div>
            <div className="service-item">
              <h4>Facility Planning and Programming</h4>
              <p>
                Scalable planning from targeted additions to large, complex justice campuses.
              </p>
            </div>
            <div className="service-item">
              <h4>Design and Stakeholder Alignment</h4>
              <p>
                Design development support across agency, operator, and community constraints.
              </p>
            </div>
            <div className="service-item">
              <h4>Post-Occupancy and Improvement Studies</h4>
              <p>Operational feedback integration for long-term facility performance.</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Select Images</h2>
          <div className="portfolio-gallery">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/peter-krasnow/3809545.jpg"
              alt="Justice facility exterior"
              width={900}
              height={600}
              loading="lazy"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/peter-krasnow/6358621.jpg"
              alt="Institutional justice design"
              width={900}
              height={600}
              loading="lazy"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/peter-krasnow/4889569.jpg"
              alt="Correctional planning image"
              width={900}
              height={600}
              loading="lazy"
            />
          </div>
        </section>

        <section className="content-section contact-section">
          <h2>Contact</h2>
          <div className="contact-info-grid">
            <div className="contact-item">
              <strong>Email:</strong>{' '}
              <a href="mailto:info@maxaec.com">info@maxaec.com</a>
            </div>
            <div className="contact-item">
              <strong>LinkedIn:</strong>{' '}
              <a
                href="http://www.linkedin.com/pub/peter-krasnow/26/719/924"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Profile
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
