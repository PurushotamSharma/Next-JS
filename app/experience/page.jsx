import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { PageHero, Container, Section, Eyebrow } from "@/components/Section";
import { person, formatRoleDates } from "@/lib/person";
import { buildMetadata, getBreadcrumbJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: `${person.name} | Product & Engineering Experience`,
  description: `Experience for ${person.name}: Technical Product Manager at SellMato (current), Technical Lead at Pietech Technology, DevOps Engineer at Credence Technology, plus independent product work.`,
  path: "/experience",
  absoluteTitle: true,
});

export default function ExperiencePage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Experience", path: "/experience" },
        ])}
      />
      <PageHero
        title="Experience"
        description="Professional employment and independent product management are kept separate. Current role: Technical Product Manager at SellMato."
      />

      {/* PROFESSIONAL EXPERIENCE */}
      <Section className="!pt-0">
        <Container>
          <div className="mb-10">
            <Eyebrow>Professional Experience</Eyebrow>
            <h2 className="text-2xl md:text-3xl font-semibold">Employment</h2>
            <p className="text-white/45 text-sm mt-2 max-w-2xl">
              Full-time professional roles only. Independent and freelance product work is
              listed in a separate section below.
            </p>
          </div>

          <ol className="relative border-l border-white/10 ml-3 space-y-12">
            {person.employment.map((role) => (
              <li key={role.id} className="pl-8 relative">
                <span
                  className={`absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full ${
                    role.isCurrent ? "bg-accent" : "bg-white/30"
                  }`}
                  aria-hidden="true"
                />
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                  <h3 className="text-2xl font-semibold">{role.company}</h3>
                  {role.isCurrent ? (
                    <span className="text-xs uppercase tracking-wider text-accent border border-accent/30 px-2 py-0.5 rounded">
                      Current
                    </span>
                  ) : null}
                </div>
                <p className="text-accent mb-1">{role.title}</p>
                <p className="text-sm text-white/40 mb-4">{formatRoleDates(role)}</p>
                {role.summary ? (
                  <p className="text-white/60 mb-4 max-w-3xl leading-relaxed">
                    {role.summary}
                  </p>
                ) : null}
                {role.responsibilities?.length ? (
                  <ul className="space-y-2 text-white/55 text-sm max-w-3xl list-disc pl-5">
                    {role.responsibilities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
                {role.achievements?.length ? (
                  <ul className="mt-4 space-y-1 text-sm text-white/70 max-w-3xl">
                    {role.achievements.map((item) => (
                      <li key={item}>→ {item}</li>
                    ))}
                  </ul>
                ) : null}
                {role.productOwnership?.length ? (
                  <div className="mt-6 space-y-4">
                    <p className="text-sm uppercase tracking-wider text-white/40">
                      Product ownership
                    </p>
                    {role.productOwnership.map((po) => (
                      <div key={po.product}>
                        <h4 className="font-medium text-white mb-2">{po.product}</h4>
                        <ul className="space-y-1 text-sm text-white/55 list-disc pl-5">
                          {po.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : null}
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* INDEPENDENT — visually distinct, not a timeline */}
      <Section className="bg-white/[0.02] border-y border-white/5">
        <Container>
          <div className="mb-10 max-w-2xl">
            <Eyebrow>Independent Product Management</Eyebrow>
            <h2 className="text-2xl md:text-3xl font-semibold">
              Freelance / independent product work
            </h2>
            <p className="text-white/45 text-sm mt-3 leading-relaxed">
              These engagements are <strong className="text-white/70 font-medium">not employment</strong>.
              They are separate product collaborations with founders and engineering teams.
            </p>
          </div>

          <div className="space-y-6">
            {person.independentProductWork.map((work) => (
              <article
                key={work.id}
                className="border border-dashed border-white/20 rounded-xl p-6 md:p-8 bg-primary/40"
              >
                <p className="text-xs uppercase tracking-wider text-white/40 mb-3">
                  {work.category}
                </p>
                <h3 className="text-2xl font-semibold mb-1">{work.name}</h3>
                <p className="text-accent mb-4">{work.title}</p>
                {work.period ? (
                  <p className="text-sm text-white/40 mb-4">{work.period}</p>
                ) : null}
                <p className="text-white/60 mb-4 leading-relaxed">{work.summary}</p>
                <ul className="space-y-2 text-sm text-white/55 list-disc pl-5 mb-6">
                  {work.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link href={`/projects/${work.id}`} className="text-accent hover:underline">
                  Product case study →
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Eyebrow>Education</Eyebrow>
          <ul className="space-y-4">
            {person.education.map((edu) => (
              <li key={edu.institution}>
                <p className="font-medium">{edu.degree}</p>
                <p className="text-white/50 text-sm">
                  {edu.institution} · {edu.duration}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
