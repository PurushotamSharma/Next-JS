import BlogClient from './BlogClient';

export const metadata = {
  title: "Blog & Case Studies",
  description: "Read detailed case studies and technical articles about DevOps implementations, cloud migrations, CI/CD pipelines, and infrastructure automation by Purushotam.",
  openGraph: {
    title: 'Blog & Case Studies | Purushotam - DevOps Engineer',
    description: 'In-depth technical articles and real-world DevOps case studies covering CI/CD, cloud infrastructure, and automation.',
    url: 'https://purushotam.devopsguy.in/blog',
  },
  alternates: {
    canonical: 'https://purushotam.devopsguy.in/blog',
  },
};

export default function BlogPage() {
  return <BlogClient />;
}