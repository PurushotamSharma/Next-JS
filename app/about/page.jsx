import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { PageHero, Container, Section, Eyebrow } from "@/components/Section";
import { person } from "@/lib/person";
import {
  buildMetadata,
  getProfilePageJsonLd,
  getBreadcrumbJsonLd,
  getPersonJsonLd,
} from "@/lib/seo";

export const metadata = buildMetadata({
  title: `About ${person.name} | ${person.title}`,
  description: `${person.headline}. Based in ${person.location.label}. Product strategy, PRDs, roadmaps, and engineering collaboration.`,
  path: "/about",
  type: "profile",
  absoluteTitle: true,
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          getPersonJsonLd(),
          getProfilePageJsonLd(),
          getBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />
      <PageHero
        title={`About ${person.name}`}
        description={person.headline}
      />

      <Section className="!pt-0">
        <Container>
          <div className="max-w-3xl space-y-6 text-lg text-white/65 leading-relaxed">
            <p>
              I started from hands-on infrastructure and DevOps engineering and gradually
              moved toward product ownership. That path gave me an unusual perspective: I
              understand how products are defined <em className="text-white/80 not-italic">and</em>{" "}
              how engineering systems are built and shipped.
            </p>
            <p>
              Today I work as a Technical Product Manager at {person.currentRole.company},
              where I focus on roadmap prioritization, feature definition, seller onboarding,
              and monetization — while staying close to engineering delivery.
            </p>
            <p>{person.description}</p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-10">
            <div>
              <Eyebrow>Strengths</Eyebrow>
              <ul className="space-y-3 text-white/70">
                {[
                  "Product strategy",
                  "Feature planning",
                  "PRDs",
                  "Roadmaps",
                  "Technical feasibility",
                  "Engineering collaboration",
                  "Cloud infrastructure",
                  "CI/CD",
                  "Product monetization",
                  "User onboarding",
                  "Product flows",
                ].map((item) => (
                  <li key={item} className="border-b border-white/5 pb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Eyebrow>Also known across</Eyebrow>
              <p className="text-white/55 mb-6 leading-relaxed">
                The same professional identity appears on LinkedIn, GitHub, Hashnode, and
                Matofly. Canonical site:{" "}
                <a href={person.url} className="text-accent hover:underline">
                  purushotam.devopsguy.in
                </a>
                .
              </p>
              <ul className="space-y-3">
                {person.profiles.map((p) => (
                    <li key={p.id}>
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-accent transition-colors"
                      >
                        {p.label}
                      </a>
                    </li>
                  ))}
              </ul>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/experience"
                  className="px-5 py-2.5 rounded-full border border-white/15 hover:border-accent/50 hover:text-accent transition-colors"
                >
                  Experience
                </Link>
                <Link
                  href="/product"
                  className="px-5 py-2.5 rounded-full bg-accent text-primary font-medium"
                >
                  Product work
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
