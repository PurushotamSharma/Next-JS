import ServicesClient from './ServicesClient';

export const metadata = {
  title: "Services",
  description: "Professional DevOps and development services including CI/CD implementation, cloud solutions, Infrastructure as Code, and web development. Expert consultation available.",
  openGraph: {
    title: 'Services | Purushotam - DevOps & Development Services',
    description: 'Professional DevOps services: CI/CD, cloud migration, Infrastructure as Code, and modern web development solutions.',
    url: 'https://purushotam.devopsguy.in/services',
  },
  alternates: {
    canonical: 'https://purushotam.devopsguy.in/services',
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}