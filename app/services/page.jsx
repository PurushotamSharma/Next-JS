import ServicesClient from "./ServicesClient";
import { buildMetadata } from "@/lib/seo";
import { person } from "@/lib/person";

export const metadata = buildMetadata({
  title: "Services",
  description: `${person.name}, product and technical services spanning product strategy, SaaS product work, and cloud / DevOps collaboration.`,
  path: "/services",
});

export default function ServicesPage() {
  return <ServicesClient />;
}
