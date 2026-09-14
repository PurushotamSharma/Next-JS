import ConsultationClient from "./ConsultationClient";
import { buildMetadata } from "@/lib/seo";
import { person } from "@/lib/person";

export const metadata = buildMetadata({
  title: "Schedule Consultation",
  description: `Book a consultation with ${person.name}, Technical Product Manager — product strategy, SaaS, PRDs, or engineering collaboration.`,
  path: "/consultation",
});

export default function ConsultationPage() {
  return <ConsultationClient />;
}
