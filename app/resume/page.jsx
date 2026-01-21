import ResumeClient from './ResumeClient';

export const metadata = {
  title: "Resume & Skills",
  description: "Purushotam's professional experience, education, and technical skills. DevOps Engineer with expertise in CI/CD, Docker, Kubernetes, AWS, GCP, Azure, and Infrastructure as Code.",
  openGraph: {
    title: 'Resume & Skills | Purushotam - DevOps Engineer',
    description: '4+ years experience in DevOps, cloud technologies, and full-stack development. View my professional background and technical expertise.',
    url: 'https://purushotam.devopsguy.in/resume',
  },
  alternates: {
    canonical: 'https://purushotam.devopsguy.in/resume',
  },
};

export default function ResumePage() {
  return <ResumeClient />;
}