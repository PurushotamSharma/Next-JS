import BlogClient from "./BlogClient";
import { buildMetadata } from "@/lib/seo";
import { person } from "@/lib/person";

export const metadata = buildMetadata({
  title: "Case studies",
  description: `Technical case studies by ${person.name} on CI/CD, cloud infrastructure, and DevOps — supporting a Technical Product Manager background.`,
  path: "/blog",
});

export default function BlogPage() {
  return <BlogClient />;
}
