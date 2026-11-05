import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { PageHero, Container, Section, Eyebrow } from "@/components/Section";
import { person } from "@/lib/person";
import { buildMetadata, getBreadcrumbJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: `${person.name} | Product & Technical Projects`,
  description:
    "Product projects (SellMato, Xaaki, Nyburs, Superbrain) and engineering / infrastructure projects by Purushotam Sharma.",
  path: "/projects",
  absoluteTitle: true,
});

export default function ProjectsPage() {
  const sellmato = person.productProjects.find((p) => p.id === "sellmato");
  const otherProducts = person.productProjects.filter((p) => p.id !== "sellmato");

  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
        ])}
      />
      <PageHero
        title="Projects"
        description="Product work first. Engineering and infrastructure projects are listed separately, they support product decisions, they are not the primary story."
      />

      <Section className="!pt-0">
        <Container>
          <Eyebrow>Product projects</Eyebrow>

          {sellmato ? (
            <Link
              href={sellmato.href}
              className="block border border-accent/30 rounded-2xl p-6 md:p-8 mb-8 bg-surface hover:border-accent/50 transition-colors"
            >
              <p className="text-xs text-accent mb-2">
                #1 Featured · Current role
              </p>
              <h2 className="text-3xl font-semibold mb-2">{sellmato.name}</h2>
              <p className="text-sm text-white/45 mb-3">{sellmato.role}</p>
              <p className="text-white/65 leading-relaxed max-w-3xl">{sellmato.summary}</p>
            </Link>
          ) : null}

          <div className="grid md:grid-cols-3 gap-5 mb-20">
            {otherProducts.map((project) => (
              <Link
                key={project.id}
                href={project.href}
                className="group border border-white/10 rounded-xl p-6 bg-surface hover:border-accent/40 transition-colors"
              >
                <p className="text-xs text-white/35 mb-2">
                  {project.workType === "independent"
                    ? "Client engagement"
                    : "Product"}
                </p>
                <h2 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                  {project.name}
                </h2>
                <p className="text-sm text-white/45 mb-3">{project.role}</p>
                <p className="text-white/60 text-sm leading-relaxed">{project.summary}</p>
              </Link>
            ))}
          </div>

          <Eyebrow>Engineering / infrastructure projects</Eyebrow>
          <p className="text-sm text-white/45 mb-6 max-w-2xl">
            {person.skills.engineeringMessage} These projects are the technical foundation , 
            not a claim that DevOps is the primary identity.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {person.engineeringProjects.map((project) => (
              <Link
                key={project.id}
                href={project.href}
                className="group border border-white/10 rounded-xl p-6 hover:border-accent/40 transition-colors"
              >
                <p className="text-xs text-white/40 mb-2">
                  Engineering
                </p>
                <h2 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                  {project.name}
                </h2>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  {project.summary}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="text-xs border border-white/10 text-white/55 px-2 py-1 rounded"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
