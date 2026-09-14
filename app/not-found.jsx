import NotFoundClient from "./NotFoundClient";
import { buildMetadata } from "@/lib/seo";
import { person } from "@/lib/person";

export const metadata = buildMetadata({
  title: "Page not found",
  description: `The page you're looking for doesn't exist. Explore ${person.name}'s product work, experience, or contact.`,
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return <NotFoundClient />;
}
