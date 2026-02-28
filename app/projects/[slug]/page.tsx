import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import ContactCta from '@/components/ContactCta';

/* ──────────────────────────────────────────────────────────────────────
   Project data — keeps everything in one file for a small, static set.
   ────────────────────────────────────────────────────────────────────── */

interface ProjectMeta {
  label: string;
  value: string;
}

interface ProjectData {
  title: string;
  ogTitle: string;
  description: string;
  subtitle: string;
  meta: ProjectMeta[];
  galleryImages?: { src: string; alt: string }[];
  sections: { heading: string; content: React.ReactNode }[];
  features?: { title: string; description: string }[];
  ctaHeading: string;
  ctaDescription: string;
  ctaButton?: string;
}

const PROJECTS: Record<string, ProjectData> = {
  bbj: {
    title: 'NYC Borough-Based Jails | MAX AEC LLC',
    ogTitle: 'NYC Borough-Based Jails | MAX AEC LLC',
    description:
      'NYC Borough-Based Jails - A multi-billion dollar initiative replacing Rikers Island with four new detention facilities prioritizing rehabilitation and humane design.',
    subtitle: 'Replacing Rikers Island with humane, community-integrated detention facilities',
    meta: [
      { label: 'Location', value: 'Manhattan, Brooklyn, The Bronx, Queens' },
      { label: 'Client', value: 'NYC Department of Design and Construction' },
      { label: 'Role', value: 'Designer / Senior Justice Designer / SME' },
      { label: 'Firms', value: 'AECOM (2019-2022), Urbahn Architects (2024)' },
      { label: 'Status', value: 'In Progress' },
    ],
    galleryImages: [
      { src: '/squarespace/bbj_render.jpg', alt: 'NYC Borough-Based Jails aerial render showing integration with Brooklyn neighborhood' },
      { src: '/squarespace/BBJ-6.jpg', alt: 'NYC Borough-Based Jails building facade detail' },
    ],
    sections: [
      {
        heading: 'Project Overview',
        content: (
          <>
            <p>The Borough-Based Jails program represents one of the most ambitious justice architecture initiatives in American history—replacing the notorious Rikers Island jail complex with four new detention facilities integrated into NYC neighborhoods.</p>
            <p>This multi-billion dollar initiative fundamentally rethinks detention design, prioritizing rehabilitation, natural light, connection to community, and humane conditions while meeting stringent security requirements. Each facility is designed as a high-rise tower, unprecedented in detention architecture, requiring innovative solutions for vertical circulation, outdoor recreation, and security.</p>
          </>
        ),
      },
      {
        heading: 'Design Philosophy',
        content: (
          <>
            <p>The Borough-Based Jails embody a new paradigm in justice architecture: facilities that support rehabilitation rather than merely contain. Key principles include:</p>
            <ul>
              <li><strong>Community Integration</strong> – Public arcades at street level connect facilities to their neighborhoods</li>
              <li><strong>Natural Light</strong> – Maximized daylight access through innovative facade design</li>
              <li><strong>Therapeutic Environments</strong> – Spaces designed to reduce stress and support mental health</li>
              <li><strong>Dignified Design</strong> – Architecture that respects the humanity of incarcerated individuals</li>
            </ul>
          </>
        ),
      },
      {
        heading: 'Project Contribution',
        content: (
          <ul>
            <li>Led conceptual design using Revit for high-rise detention towers across all four boroughs</li>
            <li>Designed outdoor recreation areas balancing security (attack-rated mesh, no-climb barriers) with therapeutic outdoor access</li>
            <li>Created custom Revit families for security-specific elements not available from manufacturers</li>
            <li>Developed construction document details for security-compliant wall assemblies meeting ASTM F33 standards</li>
            <li>Coordinated with NYC agencies on zoning, fire regulations, and building codes</li>
            <li>Coached and mentored team members on justice design principles</li>
          </ul>
        ),
      },
      {
        heading: 'Technical Challenges',
        content: (
          <>
            <p>High-rise detention facilities present unique technical challenges never before addressed at this scale:</p>
            <ul>
              <li><strong>Vertical Security</strong> – Maintaining detention-grade security across 20+ floors</li>
              <li><strong>Emergency Egress</strong> – Meeting fire code requirements for incarcerated populations</li>
              <li><strong>Outdoor Recreation</strong> – Providing secure outdoor access in a vertical building</li>
              <li><strong>Urban Integration</strong> – Embedding a secure facility within dense urban neighborhoods</li>
            </ul>
          </>
        ),
      },
    ],
    features: [
      { title: 'Transitional Housing Units', description: '96-bed floor plates designed for phased reentry programming' },
      { title: 'Rooftop Recreation', description: 'Outdoor spaces with natural daylight at upper levels' },
      { title: 'Public Arcade', description: 'Street-level integration connecting facility with neighborhood' },
      { title: 'Security Facade', description: 'Mesh systems balancing security with dignified appearance' },
    ],
    ctaHeading: 'Planning a Justice Facility?',
    ctaDescription: 'With experience on America\'s most ambitious detention project, we bring unique expertise to justice architecture challenges.',
    ctaButton: 'Discuss Your Project',
  },

  baltimore: {
    title: 'Baltimore Therapeutic Treatment Center | MAX AEC LLC',
    ogTitle: 'Baltimore Therapeutic Treatment Center | MAX AEC LLC',
    description:
      'Baltimore Therapeutic Treatment Center - Behavioral health facility balancing clinical treatment needs with security requirements and recovery-focused environments.',
    subtitle: 'Behavioral health facility with advanced BIM and AI documentation',
    meta: [
      { label: 'Location', value: 'Baltimore, Maryland' },
      { label: 'Client', value: 'State of Maryland' },
      { label: 'Role', value: 'Justice Designer' },
      { label: 'Firm', value: 'STV' },
      { label: 'Timeline', value: 'March 2023 - November 2023' },
    ],
    sections: [
      {
        heading: 'Project Overview',
        content: (
          <>
            <p>A behavioral health treatment facility designed to serve individuals requiring secure therapeutic care. The project demanded careful balance between clinical treatment needs, security requirements, and environments that support mental health recovery.</p>
            <p>This project showcased the integration of advanced BIM technology and AI-assisted documentation to streamline design and coordination across multiple disciplines.</p>
          </>
        ),
      },
      {
        heading: 'Design Approach',
        content: (
          <>
            <p>Behavioral health facilities require a fundamentally different approach than traditional detention. Key considerations included:</p>
            <ul>
              <li><strong>Therapeutic Environments</strong> – Spaces that reduce anxiety and support recovery</li>
              <li><strong>Clinical Functionality</strong> – Layouts optimized for treatment delivery</li>
              <li><strong>Safety Without Oppression</strong> – Security measures that don&apos;t feel institutional</li>
              <li><strong>Natural Light</strong> – Maximized daylight for circadian rhythm support</li>
            </ul>
          </>
        ),
      },
      {
        heading: 'Project Contribution',
        content: (
          <ul>
            <li>Established Revit BIM environment for full project team coordination</li>
            <li>Led creation of custom Revit families for cells, doors, and security partitions</li>
            <li>Implemented AI and Power BI automation for Room Data Sheets across all disciplines</li>
            <li>Developed automated NSF calculations for consistent area analysis</li>
            <li>Coordinated structural planning between trades</li>
            <li>Mentored architect team on justice design principles</li>
          </ul>
        ),
      },
    ],
    features: [
      { title: 'AI-Powered Documentation', description: 'Automated Room Data Sheets generated across all disciplines' },
      { title: 'Power BI Integration', description: 'Real-time reporting and analytics from Revit model data' },
      { title: 'Custom Revit Families', description: 'Specialized components for behavioral health security' },
      { title: 'Automated NSF Calcs', description: 'Consistent area analysis across scheme iterations' },
    ],
    ctaHeading: 'Need Behavioral Health Design Expertise?',
    ctaDescription: 'We bring specialized knowledge in therapeutic environments that balance clinical needs with security requirements.',
    ctaButton: 'Start a Conversation',
  },

  macomb: {
    title: 'Macomb County Intake Center | MAX AEC LLC',
    ogTitle: 'Macomb County Intake Center | MAX AEC LLC',
    description:
      'Macomb County Central Intake & Assessment Center - Jail expansion focusing on mental health treatment capacity and modern intake operations.',
    subtitle: 'Jail expansion with mental health treatment focus',
    meta: [
      { label: 'Location', value: 'Macomb County, Michigan' },
      { label: 'Client', value: 'Macomb County' },
      { label: 'Role', value: 'Senior Justice Designer' },
      { label: 'Firm', value: 'STV (with PARTNERS in Architecture)' },
      { label: 'Timeline', value: 'October 2023 - March 2024' },
    ],
    galleryImages: [
      { src: '/squarespace/macomb_render.jpg', alt: 'Macomb County Central Intake & Assessment Center exterior render' },
    ],
    sections: [
      {
        heading: 'Project Overview',
        content: (
          <>
            <p>Expansion design for the Macomb County Jail focusing on mental health treatment capacity and modern intake/assessment operations. The facility addresses growing needs for behavioral health services within the justice system.</p>
            <p>This project required innovative layout strategies to integrate therapeutic environments within a secure detention framework, allowing for effective mental health treatment while maintaining operational security.</p>
          </>
        ),
      },
      {
        heading: 'Design Focus',
        content: (
          <>
            <p>The Macomb County project addresses a critical gap in justice facilities: adequate mental health treatment capacity. Key design priorities included:</p>
            <ul>
              <li><strong>Mental Health Housing</strong> – Specialized units for individuals requiring psychiatric care</li>
              <li><strong>Intake Optimization</strong> – Streamlined assessment processes for efficient processing</li>
              <li><strong>Treatment Integration</strong> – Clinical spaces embedded within housing areas</li>
              <li><strong>Staff Safety</strong> – Sightlines and circulation supporting officer security</li>
            </ul>
          </>
        ),
      },
      {
        heading: 'Project Contribution',
        content: (
          <ul>
            <li>Led expansion design focusing on mental health and occupancy requirements</li>
            <li>Spearheaded Revit BIM implementation from Schematic Design through Design Development</li>
            <li>Directed creation of custom components for unique architectural elements</li>
            <li>Designed therapeutic environments through innovative layout strategies</li>
            <li>Delivered stakeholder presentations communicating design concepts and progress</li>
          </ul>
        ),
      },
    ],
    features: [
      { title: 'Mental Health Units', description: 'Dedicated housing for behavioral health treatment' },
      { title: 'Assessment Center', description: 'Streamlined intake and evaluation processes' },
      { title: 'Treatment Rooms', description: 'Clinical spaces for therapy and medical care' },
      { title: 'Secure Circulation', description: 'Optimized movement patterns for safety' },
    ],
    ctaHeading: 'Planning a Justice Facility Expansion?',
    ctaDescription: 'We specialize in integrating mental health treatment capacity into detention facilities.',
    ctaButton: 'Discuss Your Project',
  },

  morris: {
    title: 'Morris County Courthouse | MAX AEC LLC',
    ogTitle: 'Morris County Courthouse | MAX AEC LLC',
    description:
      'Morris County Courthouse - Design-Build courthouse project coordinating civic architecture with justice facility security and operational requirements.',
    subtitle: 'Design-Build courthouse balancing civic dignity with operational requirements',
    meta: [
      { label: 'Location', value: 'Morris County, New Jersey' },
      { label: 'Client', value: 'Morris County' },
      { label: 'Role', value: 'Job Captain' },
      { label: 'Firm', value: 'AECOM' },
      { label: 'Timeline', value: 'September 2022 - March 2023' },
    ],
    sections: [
      {
        heading: 'Project Overview',
        content: (
          <>
            <p>Design-Build courthouse project requiring coordination of civic architecture with justice facility security and operational requirements. The project demanded balancing public accessibility and transparency with the security needs of a modern judicial facility.</p>
            <p>Courthouses represent a unique typology within justice architecture—buildings that must project civic authority and accessibility while maintaining strict security separations between the public, court staff, and in-custody individuals.</p>
          </>
        ),
      },
      {
        heading: 'Design Approach',
        content: (
          <>
            <p>Modern courthouses must navigate competing requirements:</p>
            <ul>
              <li><strong>Civic Presence</strong> – Architecture that conveys the dignity of the judicial system</li>
              <li><strong>Public Accessibility</strong> – Welcoming spaces for citizens accessing courts</li>
              <li><strong>Security Separation</strong> – Distinct circulation paths for public, staff, and custody</li>
              <li><strong>Operational Efficiency</strong> – Layouts supporting court scheduling and flow</li>
            </ul>
          </>
        ),
      },
      {
        heading: 'Project Contribution',
        content: (
          <ul>
            <li>Guided project from Schematic Design toward Design Development completion</li>
            <li>Created detailed floor plans and renderings in Revit</li>
            <li>Integrated sustainable design principles with practical courthouse operations</li>
            <li>Facilitated client feedback integration across design phases</li>
            <li>Coordinated with Design-Build team on constructability issues</li>
          </ul>
        ),
      },
    ],
    features: [
      { title: 'Courtroom Design', description: 'Flexible courtrooms supporting various proceeding types' },
      { title: 'Public Lobby', description: 'Dignified arrival experience with efficient security screening' },
      { title: 'Three-Way Separation', description: 'Distinct paths for public, staff, and custody' },
      { title: 'Sustainable Design', description: 'Energy-efficient systems and daylighting strategies' },
    ],
    ctaHeading: 'Planning a Civic or Courthouse Project?',
    ctaDescription: 'We bring deep expertise in balancing public accessibility with security requirements.',
    ctaButton: 'Start a Conversation',
  },

  tribal: {
    title: 'Justice Facilities for Native American Tribes | MAX AEC LLC',
    ogTitle: 'Justice Facilities for Native American Tribes | MAX AEC LLC',
    description:
      'Justice facilities designed for Native American tribal communities, integrating tribal court systems, cultural practices, and community needs.',
    subtitle: 'Culturally-integrated justice facilities serving tribal communities',
    meta: [
      { label: 'Location', value: 'Various tribal lands' },
      { label: 'Role', value: 'Revit & 3D Design' },
      { label: 'Firm', value: 'Peter Krasnow Architect PLLC' },
      { label: 'Timeline', value: 'August 2016 - September 2019' },
    ],
    sections: [
      {
        heading: 'Project Overview',
        content: (
          <>
            <p>Justice facilities designed specifically for Native American tribal communities, requiring deep understanding of tribal court systems, cultural practices, and community integration alongside standard security requirements.</p>
            <p>This work represented a unique challenge in justice architecture: creating facilities that respect tribal sovereignty and cultural traditions while meeting federal standards and security requirements.</p>
          </>
        ),
      },
      {
        heading: 'Design Considerations',
        content: (
          <>
            <p>Tribal justice facilities differ fundamentally from conventional corrections:</p>
            <ul>
              <li><strong>Tribal Sovereignty</strong> – Facilities serving tribal court systems with distinct legal frameworks</li>
              <li><strong>Cultural Integration</strong> – Architecture reflecting tribal identity and traditions</li>
              <li><strong>Community Connection</strong> – Facilities embedded within tribal community structures</li>
              <li><strong>Restorative Justice</strong> – Spaces supporting traditional conflict resolution practices</li>
            </ul>
          </>
        ),
      },
      {
        heading: 'Project Contribution',
        content: (
          <ul>
            <li>Strategic partnership with <Link href="/team/peter-krasnow">Peter Krasnow</Link>, applying justice design philosophy</li>
            <li>Engaged in detailed Revit modeling for conceptual and schematic phases</li>
            <li>Created 3D visualizations for stakeholder presentations to tribal leaders, contractors, and officials</li>
            <li>Implementation of culturally-specific design requirements and tribal justice systems</li>
            <li>Coordination with federal agencies on compliance requirements</li>
          </ul>
        ),
      },
      {
        heading: 'Partnership with Peter Krasnow FAIA',
        content: (
          <>
            <p>This project began the firm&apos;s long-standing collaboration with <Link href="/team/peter-krasnow">Peter Krasnow</Link>, one of America&apos;s most respected justice architects. His four decades of justice design experience provided senior leadership for tribal project planning.</p>
            <p>The collaboration established design and coordination practices that later informed larger detention and institutional project delivery programs.</p>
          </>
        ),
      },
    ],
    ctaHeading: 'Planning a Tribal Justice Facility?',
    ctaDescription: 'We bring specialized experience in culturally-integrated justice design.',
    ctaButton: 'Discuss Your Project',
  },

  covid: {
    title: 'COVID-19 Alternate Care Facility | MAX AEC LLC',
    ogTitle: 'COVID-19 Alternate Care Facility | MAX AEC LLC',
    description:
      'Emergency conversion of SUNY Old Westbury athletic complex into 1,024-bed COVID-19 treatment facility in 28 days for US Army Corps of Engineers.',
    subtitle: '1,024-bed COVID-19 emergency response facility completed in 28 days',
    meta: [
      { label: 'Location', value: 'SUNY Old Westbury, Long Island, NY' },
      { label: 'Client', value: 'US Army Corps of Engineers' },
      { label: 'Role', value: 'Designer / On-Site Lead' },
      { label: 'Firm', value: 'AECOM' },
      { label: 'Timeline', value: 'March 2020 - July 2020' },
    ],
    galleryImages: [
      { src: '/squarespace/covid_aerial.jpg', alt: 'Aerial view of SUNY Old Westbury Alternate Care Facility' },
      { src: '/squarespace/covid_interior.png', alt: 'Interior of Alternate Care Facility showing bed layout' },
      { src: '/squarespace/interior-tent.png', alt: 'Treatment tent interior at Alternate Care Facility' },
    ],
    sections: [
      {
        heading: 'Project Overview',
        content: (
          <>
            <p>Emergency conversion of an athletic complex into a 1,024-bed non-acute COVID-19 treatment facility, completed in 28 days with first beds delivered <strong>12 hours ahead of schedule</strong>.</p>
            <p>This project demonstrated the critical role architects play in emergency response—rapidly adapting existing structures to meet urgent healthcare needs while navigating compressed timelines, evolving requirements, and multi-agency coordination.</p>
          </>
        ),
      },
      {
        heading: 'Emergency Response',
        content: (
          <>
            <p>At the height of the COVID-19 pandemic&apos;s first wave in New York, every day mattered. The project required:</p>
            <ul>
              <li><strong>28-Day Timeline</strong> – From mobilization to operational facility</li>
              <li><strong>Rapid Evaluation</strong> – Immediate assessment of existing structures for conversion</li>
              <li><strong>Multi-Agency Coordination</strong> – USACE, FEMA, NY State, SUNY, healthcare providers</li>
              <li><strong>Evolving Requirements</strong> – Adapting to changing medical protocols in real-time</li>
            </ul>
          </>
        ),
      },
      {
        heading: 'Project Contribution',
        content: (
          <ul>
            <li>Performed rapid evaluations for Design-Build conversion of athletic facilities</li>
            <li>Served as primary on-site lead for ADA-compliant bathroom/shower installations</li>
            <li>Coordinated with remote architects while supervising field crews</li>
            <li>Produced daily field reports ensuring plans matched actual conditions</li>
            <li>Resolved conflicts between design intent and field conditions in real-time</li>
          </ul>
        ),
      },
      {
        heading: 'Project Success',
        content: (
          <>
            <p>The facility was ready for patients 12 hours ahead of the aggressive 28-day schedule—a testament to the dedication of every team member and the effectiveness of integrated Design-Build delivery for emergency response.</p>
            <p>This project demonstrated that quality architecture can be delivered under the most demanding circumstances when the right team comes together with clear purpose.</p>
          </>
        ),
      },
    ],
    features: [
      { title: 'Compressed Timeline', description: '28 days from start to 1,024 operational beds' },
      { title: 'ADA Compliance', description: 'Accessible facilities in a temporary installation' },
      { title: 'Field Coordination', description: 'Real-time design adjustments based on site conditions' },
      { title: 'Multi-Agency Work', description: 'Coordinating federal, state, and local requirements' },
    ],
    ctaHeading: 'Need Rapid Response Architecture?',
    ctaDescription: "We've proven our ability to deliver under the most demanding timelines.",
    ctaButton: 'Contact Us',
  },
};

const SLUGS = Object.keys(PROJECTS);

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS[slug];
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      type: 'website',
      title: project.ogTitle,
      description: project.description,
      url: `/projects/${slug}`,
      images: project.galleryImages?.[0]?.src ?? '/images/signature/mark_only.png',
    },
    twitter: { card: 'summary_large_image' },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS[slug];
  if (!project) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: project.title,
            url: `https://www.maxaec.com/projects/${slug}`,
            description: project.description,
          }),
        }}
      />

      <header className="project-hero">
        <div className="project-hero-content">
          <Link href="/services/government" className="back-link">
            ← Government &amp; Institutional Services
          </Link>
          <h1>{project.title.split(' | ')[0]}</h1>
          <p className="project-subtitle">{project.subtitle}</p>
        </div>
      </header>

      <main className="page-content">
        <section className="content-section">
          <div className="project-meta-grid">
            {project.meta.map((m) => (
              <div key={m.label} className="meta-item">
                <strong>{m.label}</strong>
                <span>{m.value}</span>
              </div>
            ))}
          </div>
        </section>

        {project.galleryImages && (
          <section className="content-section">
            <div className="portfolio-gallery project-gallery">
              {project.galleryImages.map((img) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  width={1200}
                  height={800}
                  loading="lazy"
                />
              ))}
            </div>
          </section>
        )}

        {project.sections.map((section) => (
          <section key={section.heading} className="content-section">
            <h2>{section.heading}</h2>
            {section.content}
          </section>
        ))}

        {project.features && (
          <section className="content-section">
            <h2>Key Features</h2>
            <div className="features-grid">
              {project.features.map((f) => (
                <div key={f.title} className="feature-item">
                  <h4>{f.title}</h4>
                  <p>{f.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <ContactCta
          heading={project.ctaHeading}
          description={project.ctaDescription}
          buttonText={project.ctaButton}
        />
      </main>
    </>
  );
}
