import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'MAX AEC LLC | Development Architecture, Engineering & Consulting',
  description:
    'MAX AEC LLC provides residential & commercial architecture services for NYC developers, plus government & institutional advisory with 60+ combined years of public-sector experience.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    title: 'MAX AEC LLC | Development Architecture, Engineering & Consulting',
    description:
      'Company-led architecture, City of Yes feasibility, and institutional advisory services from MAX AEC LLC.',
    url: '/',
    images: '/images/signature/mark_only.png',
  },
  twitter: { card: 'summary_large_image' },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'MAX AEC LLC',
            url: 'https://www.maxaec.com/',
            logo: 'https://www.maxaec.com/images/signature/mark_only.png',
            email: 'info@maxaec.com',
            description:
              'MAX AEC LLC provides development architecture, City of Yes feasibility, and institutional advisory services.',
          }),
        }}
      />

      <section className="hero">
        <div className="hero-content">
          <h1 className="visually-hidden">MAX AEC LLC</h1>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="hero-logo"
            src="/images/signature/max-aec-hero-logo.svg"
            alt="MAX AEC LLC Signature Brand Mark"
            width={240}
            height={196}
            style={{ maxWidth: '100%', height: 'auto', marginBottom: '2rem' }}
          />
          <p className="hero-brand-tagline">Architecture · Engineering · Consulting</p>
          <p className="hero-subtitle">
            We help NYC developers, property owners, and public-sector teams move from zoning
            questions to buildable project decisions.
          </p>
          <p className="hero-tagline">
            Our work combines feasibility rigor, code compliance, and coordinated documentation so
            projects advance with fewer downstream surprises.
          </p>
          <div className="hero-buttons">
            <Link href="/contact" className="btn btn-primary">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

      <section className="services-overview">
        <div className="container">
          <h2>Two Markets. One Standard.</h2>
          <div className="services-grid">
            <Link href="/services/residential" className="service-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <h3>Residential &amp; Commercial</h3>
              <p>
                Development architecture, City of Yes feasibility, and flat-fee building
                compliance services for NYC property owners, developers, and general
                contractors.
              </p>
              <span className="link-arrow">View services →</span>
            </Link>
            <Link href="/services/government" className="service-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <h3>Government &amp; Institutional</h3>
              <p>
                Justice architecture and institutional advisory backed by over 60
                combined years of public-sector delivery across hundreds of projects
                nationwide.
              </p>
              <span className="link-arrow">View services →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="featured-projects">
        <div className="container">
          <h2>Selected Case Studies</h2>
          <div className="projects-grid">
            <Link href="/projects/bbj" className="project-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/squarespace/bbj_render.jpg"
                alt="NYC Borough-Based Jails rendering"
                className="project-image"
                width={900}
                height={640}
                loading="lazy"
              />
              <h4>NYC Borough-Based Jails</h4>
              <p>Humane high-rise detention delivery for four boroughs.</p>
            </Link>
            <Link href="/projects/baltimore" className="project-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/baltimore_placeholder.png"
                alt="Baltimore Therapeutic Treatment Center"
                className="project-image"
                width={900}
                height={640}
                loading="lazy"
              />
              <h4>Baltimore Therapeutic Treatment Center</h4>
              <p>Secure behavioral health planning with BIM-led coordination.</p>
            </Link>
            <Link href="/projects/macomb" className="project-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/squarespace/macomb_render.jpg"
                alt="Macomb County Intake Center"
                className="project-image"
                width={900}
                height={640}
                loading="lazy"
              />
              <h4>Macomb County Intake Center</h4>
              <p>Justice expansion focused on intake operations and mental health support.</p>
            </Link>
          </div>
        </div>
      </section>

      <section id="about-company" className="about-teaser" style={{ scrollMarginTop: '96px' }}>
        <div className="container">
          <blockquote>
            &ldquo;Project decisions should hold up in reality, not just on paper.&rdquo;
          </blockquote>
          <p>
            MAX AEC LLC delivers company-led architecture services that combine development
            strategy, technical execution, and consultant coordination. Our team supports both
            private development and high-accountability institutional programs.
          </p>
          <Link href="/team" className="btn btn-outline">
            Meet the Team
          </Link>
        </div>
      </section>

      <section className="contact-cta">
        <div className="container">
          <h2>Ready to Move a Project Forward?</h2>
          <p>Share your site, program, and timeline. Our team will outline a clear next-step scope.</p>
          <Link href="/contact" className="btn btn-primary">
            Contact
          </Link>
        </div>
      </section>
    </>
  );
}
