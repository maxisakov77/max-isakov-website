import type { Metadata } from 'next';

import PageHeader from '@/components/PageHeader';
import ContactCta from '@/components/ContactCta';

export const metadata: Metadata = {
  title: 'City of Yes Feasibility | MAX AEC LLC',
  description:
    'City of Yes and UAP feasibility services from MAX AEC LLC for NYC developers and property owners.',
  alternates: { canonical: '/city-of-yes' },
  openGraph: {
    type: 'website',
    title: 'City of Yes Feasibility | MAX AEC LLC',
    description:
      'Problem-to-decision feasibility workflow for City of Yes: constraints, massing options, and action-ready recommendations.',
    url: '/city-of-yes',
    images: '/images/signature/mark_only.png',
  },
  twitter: { card: 'summary_large_image' },
};

export default function CityOfYesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'City of Yes Feasibility | MAX AEC LLC',
            url: 'https://www.maxaec.com/city-of-yes',
            description: 'City of Yes and UAP feasibility services from MAX AEC LLC.',
          }),
        }}
      />

      <PageHeader
        title="City of Yes Feasibility"
        description="MAX AEC LLC helps development teams convert zoning reform into actionable project decisions."
      />

      <main className="page-content">
        <section className="content-section">
          <h2>The Core Problem</h2>
          <p>
            City of Yes can unlock meaningful upside, but benefits are frequently overstated when FAR
            potential, envelope constraints, affordability obligations, and project assumptions are
            not tested together. Teams need clear answers on what is buildable, what is compliant,
            and what should be pursued.
          </p>
          <p>
            That clarity is most valuable during acquisition and early predevelopment, when
            inaccurate assumptions can create costly redesign and entitlement delays.
          </p>
        </section>

        <section className="content-section">
          <h2>Our Feasibility Method</h2>
          <ul>
            <li>
              <strong>Constraint Baseline:</strong> Establish zoning district controls, lot
              conditions, and governing constraints that drive real buildability.
            </li>
            <li>
              <strong>UAP and Density Scenarios:</strong> Test bonus potential and affordability
              implications against practical massing and envelope limits.
            </li>
            <li>
              <strong>Yield and Risk Readout:</strong> Translate scenarios into usable unit-count and
              area ranges with explicit assumptions and risk notes.
            </li>
            <li>
              <strong>Action Recommendation:</strong> Provide a go/no-go direction and next-step
              scope for design, filing, or acquisition decision making.
            </li>
          </ul>
        </section>

        <section className="content-section">
          <h2>What Teams Receive</h2>
          <p>
            Deliverables are built for both design teams and decision-makers, so outputs can move
            directly into investment and delivery conversations.
          </p>
          <ul>
            <li>
              <strong>Buildable FAR Range:</strong> Envelope-tested outcomes, not theoretical
              maximums.
            </li>
            <li>
              <strong>UAP Impact Summary:</strong> Clear tradeoffs between density, affordability,
              and value.
            </li>
            <li>
              <strong>Massing Direction:</strong> Option sets suitable for internal investment
              alignment.
            </li>
            <li>
              <strong>Action Plan:</strong> Next-step direction for entitlement, design progression,
              or hold decisions.
            </li>
          </ul>
        </section>

        <section className="content-section">
          <h2>Who This Is For</h2>
          <ul>
            <li>Developers evaluating acquisition targets in NYC</li>
            <li>Owners considering redevelopment or vertical expansion</li>
            <li>Investment teams requiring a fast, defensible feasibility basis</li>
            <li>Architectural teams needing City of Yes support on active projects</li>
          </ul>
          <p>
            When needed, MAX AEC LLC can carry selected feasibility scenarios into architectural
            scope so teams move from analysis to execution without losing context.
          </p>
        </section>

        <ContactCta
          heading="Need a City of Yes Readout?"
          description="Share block and lot information, project type, and timeline to start a feasibility sprint."
        />
      </main>
    </>
  );
}
