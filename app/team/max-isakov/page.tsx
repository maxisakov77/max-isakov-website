import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Max Isakov | Leadership Profile | MAX AEC LLC',
  description: 'Leadership profile for Max Isakov, Principal at MAX AEC LLC.',
  alternates: { canonical: '/team/max-isakov' },
  openGraph: {
    type: 'profile',
    title: 'Max Isakov | Leadership Profile | MAX AEC LLC',
    description:
      'Profile of Max Isakov, Principal at MAX AEC LLC, focused on development architecture and project delivery.',
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
            description: 'Leadership profile for Max Isakov, Principal at MAX AEC LLC.',
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
            <h1>Max Isakov</h1>
            <p className="profile-title">Principal / Lead Architect</p>
            <p className="profile-tagline">
              Leads development architecture and feasibility delivery for MAX AEC LLC across private
              development and institutional project scopes.
            </p>
          </div>
        </div>
      </header>

      <main className="page-content">
        <section className="content-section">
          <h2>Leadership Scope</h2>
          <p>
            At MAX AEC LLC, Max leads project strategy from early feasibility through coordinated
            documentation, supporting clients who need buildable decisions aligned with code, zoning,
            and delivery constraints.
          </p>
          <p>
            Recent work includes NYC development feasibility studies, justice-related planning
            support, and structured cross-disciplinary coordination on high-accountability projects.
          </p>
        </section>

        <section className="content-section credentials-highlight">
          <h2>Focus Areas</h2>
          <ul>
            <li>Development architecture and entitlement-aligned design progression</li>
            <li>City of Yes and UAP feasibility analysis for NYC project pipelines</li>
            <li>Documentation and coordination systems for complex project delivery</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>Collaboration Model</h2>
          <p>
            Max coordinates internal and external teams to keep project assumptions explicit and
            decision cycles short. For justice-specific milestones, the firm integrates senior
            advisor support where needed.
          </p>
        </section>
      </main>
    </>
  );
}
