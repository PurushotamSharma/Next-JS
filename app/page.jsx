import HomeClient from './HomeClient';

export const metadata = {
  title: "Home",
  description: "Welcome to Purushotam's portfolio. Full Stack Developer & DevOps Engineer with 3+ years experience in CI/CD, Docker, Kubernetes, AWS, and cloud infrastructure automation.",
  openGraph: {
    title: 'Purushotam | Full Stack & DevOps Engineer - Home',
    description: 'Welcome to my portfolio. Specializing in DevOps automation, cloud infrastructure, and full-stack development.',
    url: 'https://purushotam.devopsguy.in',
  },
  alternates: {
    canonical: 'https://purushotam.devopsguy.in',
  },
};

export default function Home() {
  return <HomeClient />;
}