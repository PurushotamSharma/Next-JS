import ContactClient from "./ContactClient";
import { buildMetadata } from "@/lib/seo";
import { person } from "@/lib/person";

export const metadata = buildMetadata({
  title: `Contact ${person.name}`,
  description: `Contact ${person.name}, Technical Product Manager, product strategy, SaaS, PRDs, and engineering collaboration.`,
  path: "/contact",
  absoluteTitle: true,
});

export default function ContactPage() {
  return <ContactClient />;
}
