import ConsultationClient from './ConsultationClient';

export const metadata = {
  title: "Schedule Consultation",
  description: "Book a free 30-minute consultation with Purushotam to discuss your DevOps needs, cloud migration, CI/CD implementation, or development projects.",
  openGraph: {
    title: 'Schedule Consultation | Purushotam - DevOps Expert',
    description: 'Free 30-minute consultation available. Discuss your infrastructure needs and development requirements with an experienced DevOps engineer.',
    url: 'https://purushotam.devopsguy.in/consultation',
  },
  alternates: {
    canonical: 'https://purushotam.devopsguy.in/consultation',
  },
};

export default function ConsultationPage() {
  return <ConsultationClient />;
}