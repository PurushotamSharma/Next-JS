import WorkClient from './WorkClient';

export const metadata = {
  title: "Projects & Portfolio",
  description: "Explore Purushotam's portfolio of DevOps and development projects. Real-world implementations of CI/CD pipelines, cloud infrastructure, and full-stack applications.",
  openGraph: {
    title: 'Projects & Portfolio | Purushotam - DevOps Engineer',
    description: 'View my portfolio showcasing DevOps implementations, cloud infrastructure projects, and full-stack development work.',
    url: 'https://purushotam.devopsguy.in/work',
  },
  alternates: {
    canonical: 'https://purushotam.devopsguy.in/work',
  },
};

export default function WorkPage() {
  return <WorkClient />;
}