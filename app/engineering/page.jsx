import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { PageHero, Container, Section, Eyebrow } from "@/components/Section";
import { person } from "@/lib/person";
import { buildMetadata, getBreadcrumbJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: `${person.name} | DevOps & Cloud Engineering`,
  description:
    "DevOps and cloud infrastructure background that strengthens Technical Product Management, AWS, Kubernetes, CI/CD, Terraform, and observability.",
  path: "/engineering",
  absoluteTitle: true,
});

export default function EngineeringPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Engineering", path: "/engineering" },
        ])}
      />
      <PageHero
        title="Engineering background"
        description={person.skills.engineeringMessage}
      />

      <Section className="!pt-0">
        <Container>
          <p className="text-lg text-white/65 max-w-3xl leading-relaxed mb-6">
            I am a Technical Product Manager. DevOps, cloud, infrastructure, CI/CD,
            Kubernetes, automation, observability, and APIs are the foundation that makes my
            product decisions sharper, not a claim that engineering is my primary identity.
          </p>
          <p className="text-white/55 max-w-3xl leading-relaxed mb-12">
            {person.skills.differentiator}
          </p>

          <Eyebrow>Technologies</Eyebrow>
          <ul className="flex flex-wrap gap-2 mb-16">
            {person.skills.technologies.map((tech) => (
              <li
                key={tech}
                className="border border-white/10 text-white/70 px-3 py-1.5 rounded-md text-sm"
              >
                {tech}
              </li>
            ))}
          </ul>

          <Eyebrow>Selected engineering work</Eyebrow>
          <div className="grid md:grid-cols-2 gap-5 mb-12">
            {person.engineeringProjects.map((project) => (
              <Link
                key={project.id}
                href={project.href}
                className="border border-white/10 rounded-xl p-5 hover:border-accent/40 transition-colors"
              >
                <h2 className="text-lg font-semibold mb-2">{project.name}</h2>
                <p className="text-sm text-white/55 leading-relaxed">{project.summary}</p>
              </Link>
            ))}
          </div>

          <div className="border border-white/10 rounded-xl p-6 md:p-8 max-w-3xl">
            <h2 className="text-xl font-semibold mb-3">Verified delivery impact</h2>
            <p className="text-sm text-white/45 mb-4">
              From employment at Pietech Technology and Credence Technology, only metrics
              attributable to that work.
            </p>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>→ Production incident MTTR reduced by 30% (Pietech)</li>
              <li>→ Deployment time cut from 45 minutes to 5 minutes (Credence)</li>
              <li>→ Legacy app migrated to AWS with 99.9% uptime (Credence)</li>
            </ul>
          </div>

          <p className="mt-10">
            <Link href="/product" className="text-accent hover:underline">
              How this supports product management →
            </Link>
          </p>
        </Container>
      </Section>
    </>
  );
}
