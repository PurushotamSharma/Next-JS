import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { PageHero, Container, Section, Eyebrow } from "@/components/Section";
import { person } from "@/lib/person";
import { buildMetadata, getBreadcrumbJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: `${person.name} | Technical Product Management`,
  description:
    "How Purushotam Sharma approaches product strategy, discovery, roadmapping, PRDs, monetization, and engineering collaboration as a Technical Product Manager.",
  path: "/product",
  absoluteTitle: true,
});

const philosophySections = [
  {
    title: "Product Management Philosophy",
    body: "Good product work starts with a real user problem and a clear business objective. I define what to build, why it matters, and how engineering will know it is done — then stay close through delivery.",
  },
  {
    title: "Product Strategy",
    body: "I align founders and stakeholders on direction before features multiply. Strategy means choosing tradeoffs: who we serve first, what success looks like, and what we explicitly will not do yet.",
  },
  {
    title: "Discovery",
    body: "I use customer and competitor research where available, then pressure-test ideas against technical feasibility. Discovery is about reducing uncertainty before committing engineering time.",
  },
  {
    title: "Roadmapping & Prioritization",
    body: "I prioritize by user value, delivery cost, and revenue impact — not by who shouted loudest. Roadmaps stay honest about sequencing and dependencies.",
  },
  {
    title: "PRDs & Feature Definition",
    body: "I write PRDs, user stories, and acceptance criteria that engineering can implement without guessing. Ambiguity is expensive; clarity is a product skill.",
  },
  {
    title: "UX / User Flows",
    body: "I pay special attention to onboarding, booking, and checkout — flows where product decisions show up as activation, trust, and revenue.",
  },
  {
    title: "Monetization",
    body: "I contribute to pricing and revenue models, including marketplace markup structures, so product decisions support a viable business.",
  },
  {
    title: "Engineering Collaboration",
    body: "Because I have shipped infrastructure myself, I can discuss APIs, CI/CD, cloud constraints, and feasibility without treating engineering as a black box.",
  },
  {
    title: "Technical Product Decisions",
    body: "I weigh user value against technical cost — especially for AI features and cloud-backed products — so the roadmap stays ambitious and buildable.",
  },
];

export default function ProductPage() {
  const sellmato = person.productProjects.find((p) => p.id === "sellmato");
  const otherProjects = person.productProjects.filter((p) => p.id !== "sellmato");

  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Product", path: "/product" },
        ])}
      />
      <PageHero
        title="Technical Product Management"
        description="Not project coordination — product ownership with engineering depth. Business → product strategy → user problems → PRDs → UX → engineering → cloud → delivery."
      />

      {/* HOW I BUILD PRODUCTS */}
      <Section className="!pt-0">
        <Container>
          <Eyebrow>How I build products</Eyebrow>
          <h2 className="text-3xl font-semibold mb-4">Understand → Iterate</h2>
          <p className="text-white/55 max-w-2xl mb-10 leading-relaxed">
            A simple loop I use across SaaS and marketplace work — short enough to stay
            honest, complete enough to avoid skipping discovery or measurement.
          </p>
          <ol className="space-y-0 max-w-3xl">
            {person.productMethodology.map((item, index) => (
              <li
                key={item.step}
                className="grid grid-cols-[auto_1fr] gap-4 border-l border-white/10 pl-6 py-4 relative"
              >
                <span className="absolute -left-[5px] top-6 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
                <div>
                  <p className="text-xs text-white/35 mb-1">
                    {index < person.productMethodology.length - 1
                      ? `${item.step} →`
                      : item.step}
                  </p>
                  <h3 className="text-lg font-semibold mb-1">{item.step}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* DIFFERENTIATOR */}
      <Section className="bg-white/[0.02]">
        <Container>
          <Eyebrow>Why DevOps experience helps</Eyebrow>
          <h2 className="text-3xl font-semibold mb-6 max-w-3xl">
            Product + Engineering = Technical Product Management
          </h2>
          <p className="text-white/60 max-w-3xl mb-10 leading-relaxed">
            {person.skills.differentiator}
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
            <div>
              <h3 className="text-sm tracking-wider uppercase text-accent mb-3">Product</h3>
              <ul className="space-y-2 text-white/70 text-sm">
                {person.skills.product.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm tracking-wider uppercase text-white/45 mb-3">
                Engineering
              </h3>
              <ul className="space-y-2 text-white/70 text-sm">
                {person.skills.engineering.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="space-y-12 max-w-3xl">
            {philosophySections.map((section) => (
              <article key={section.title}>
                <h2 className="text-2xl font-semibold mb-3">{section.title}</h2>
                <p className="text-white/60 leading-relaxed">{section.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white/[0.02]">
        <Container>
          <Eyebrow>Capabilities in practice</Eyebrow>
          <div className="grid md:grid-cols-2 gap-6">
            {person.skills.productCapabilities.map((cap) => (
              <div
                key={cap.name}
                className="border border-white/10 rounded-xl p-5 bg-[#1A2333]/25"
              >
                <h3 className="font-semibold mb-2">{cap.name}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{cap.how}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Eyebrow>Case studies</Eyebrow>
          <h2 className="text-3xl font-semibold mb-8">Product work</h2>

          {sellmato ? (
            <Link
              href={sellmato.href}
              className="block border border-accent/30 rounded-xl p-6 md:p-8 mb-6 hover:border-accent/50 transition-colors"
            >
              <p className="text-xs uppercase tracking-wider text-accent mb-2">
                Primary · Current role
              </p>
              <h3 className="text-2xl font-semibold mb-2">{sellmato.name}</h3>
              <p className="text-sm text-white/45 mb-3">{sellmato.role}</p>
              <p className="text-white/60 leading-relaxed">{sellmato.summary}</p>
            </Link>
          ) : null}

          <div className="grid sm:grid-cols-2 gap-5">
            {otherProjects.map((project) => (
              <Link
                key={project.id}
                href={project.href}
                className="border border-white/10 rounded-xl p-6 hover:border-accent/40 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-sm text-accent mb-3">{project.role}</p>
                <p className="text-sm text-white/55 leading-relaxed">{project.summary}</p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
