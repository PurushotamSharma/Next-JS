import ContactClient from './ContactClient';

export const metadata = {
  title: "Contact",
  description: "Get in touch with Purushotam for DevOps consulting, full-stack development projects, or collaboration opportunities. Available for freelance and full-time work.",
  openGraph: {
    title: 'Contact | Purushotam - DevOps Engineer',
    description: 'Ready to collaborate? Contact me for DevOps consulting, development projects, or to discuss your infrastructure needs.',
    url: 'https://purushotam.devopsguy.in/contact',
  },
  alternates: {
    canonical: 'https://purushotam.devopsguy.in/contact',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}