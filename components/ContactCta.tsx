import Link from 'next/link';

interface ContactCtaProps {
  heading: string;
  description: string;
  buttonText?: string;
  href?: string;
}

export default function ContactCta({
  heading,
  description,
  buttonText = 'Contact',
  href = '/contact',
}: ContactCtaProps) {
  return (
    <section className="contact-cta">
      <div className="container">
        <h2>{heading}</h2>
        <p>{description}</p>
        <Link href={href} className="btn btn-primary">
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
