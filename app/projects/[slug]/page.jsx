import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { PageHero, Container, Section } from "@/components/Section";
import { getProductProject, person } from "@/lib/person";
import { buildMetadata, getBreadcrumbJsonLd } from "@/lib/seo";

/** Ordered sections — only render when content exists */
const CASE_STUDY_SECTIONS = [
  { key: "context", label: "Context" },
  { key: "roleDetail", label: "Role" },
  { key: "problem", label: "Problem" },
  { key: "users", label: "Users" },
  { key: "businessObjective", label: "Business objective" },
  { key: "productDecisions", label: "Product decisions" },
  { key: "featureDefinition", label: "Feature definition" },
  { key: "prioritization", label: "Roadmap / prioritization" },
  { key: "sellerOnboarding", label: "Seller onboarding" },
  { key: "userStories", label: "User stories" },
  { key: "acceptanceCriteria", label: "Acceptance criteria" },
  { key: "discovery", label: "Discovery" },
  { key: "productGoal", label: "Product goal" },
  { key: "userFlow", label: "User flow" },
  { key: "requirements", label: "Requirements" },
  { key: "prd", label: "PRD / acceptance criteria" },
  { key: "monetization", label: "Monetization" },
  { key: "technicalCollaboration", label: "Engineering collaboration" },
];

export function generateStaticParams() {
  return person.productProjects.map((p) => ({ slug: p.id }));
}

export function generateMetadata({ params }) {
  const project = getProductProject(params.slug);
  if (!project) return {};
  return buildMetadata({
    title: `${project.name} | Product Case Study — ${person.name}`,
    description: project.summary,
    path: `/projects/${project.id}`,
    absoluteTitle: true,
  });
}

function renderValue(value) {
  if (!value) return null;
  if (Array.isArray(value)) {
    return (
      <ul className="space-y-2 list-disc pl-5 text-white/60">
        {value.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  return <p className="text-white/60 leading-relaxed">{value}</p>;
}

export default function ProductProjectPage({ params }) {
  const project = getProductProject(params.slug);
  if (!project) notFound();

  const isFeatured = project.id === "sellmato";

  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
          { name: project.name, path: `/projects/${project.id}` },
        ])}
      />
      <PageHero
        eyebrow={isFeatured ? "Primary product case study" : "Product case study"}
        title={project.name}
        description={project.summary}
      >
        <p className="mt-4 text-sm text-accent">{project.role}</p>
        {project.workType === "independent" ? (
          <p className="mt-2 text-xs uppercase tracking-wider text-white/40">
            Independent Product Management / Freelance Product Work
          </p>
        ) : null}
      </PageHero>

      <Section className="!pt-0">
        <Container>
          <div className="max-w-3xl space-y-10">
            {CASE_STUDY_SECTIONS.map(({ key, label }) => {
              const value = project[key];
              if (!value) return null;
              return (
                <article key={key}>
                  <h2 className="text-xl font-semibold mb-3">{label}</h2>
                  {renderValue(value)}
                </article>
              );
            })}

            {project.outcome ? (
              <article>
                <h2 className="text-xl font-semibold mb-3">Outcome</h2>
                {renderValue(project.outcome)}
              </article>
            ) : null}
          </div>

          <div className="mt-14 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="px-5 py-2.5 rounded-full border border-white/15 hover:border-accent/50 hover:text-accent transition-colors"
            >
              All projects
            </Link>
            <Link
              href="/product"
              className="px-5 py-2.5 rounded-full bg-accent text-primary font-medium"
            >
              Product approach
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
