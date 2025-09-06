import NotFoundClient from './NotFoundClient';

export const metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist. Explore Purushotam's portfolio, services, or contact for DevOps consulting.",
};

export default function NotFound() {
  return <NotFoundClient />;
}