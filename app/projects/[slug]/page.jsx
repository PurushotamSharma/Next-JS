import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { Container } from "@/components/Section";
import { getProductProject, person } from "@/lib/person";
import { getCaseStudy } from "@/lib/case-studies";
import { buildMetadata, getBreadcrumbJsonLd, getArticleJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return person.productProjects.map((p) => ({ slug: p.id }));
}

export function generateMetadata({ params }) {
  const project = getProductProject(params.slug);
  const study = getCaseStudy(params.slug);
  if (!project) return {};
  return buildMetadata({
    title: `${project.name} | Product Case Study | ${person.name}`,
    description: study?.headline || project.summary,
    path: `/projects/${project.id}`,
    absoluteTitle: true,
  });
}

function Section({ section }) {
  return (
    <section id={section.id} className="scroll-mt-28 py-10 border-t border-line first:border-t-0 first:pt-0">
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-5">{section.title}</h2>

      {section.paragraphs?.map((p) => (
        <p key={p.slice(0, 40)} className="text-lg text-white/70 leading-relaxed mb-4 max-w-[68ch]">
          {p}
        </p>
      ))}

      {section.bullets ? (
        <ul className="space-y-3 mt-2 max-w-[68ch]">
          {section.bullets.map((b) => (
            <li key={b} className="flex gap-3 text-lg text-white/70 leading-relaxed">
              <span className="mt-3 h-2 w-2 rounded-full bg-accent shrink-0" aria-hidden="true" />
              {b}
            </li>
          ))}
        </ul>
      ) : null}

      {section.cards ? (
        <div className="grid sm:grid-cols-3 gap-4 mt-2">
          {section.cards.map((c) => (
            <div key={c.title} className="rounded-2xl bg-surface border border-line p-5">
              <h3 className="font-display text-lg font-bold mb-2">{c.title}</h3>
              <p className="text-white/65 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      ) : null}

      {section.flow ? (
        <ol className="flex flex-wrap items-center gap-2 mb-6">
          {section.flow.map((step, i) => (
            <li key={step} className="flex items-center gap-2">
              <span
                className={`rounded-full px-4 py-2 font-medium ${
                  i === section.flow.length - 1 ? "bg-accent text-snow" : "bg-surface border border-line"
                }`}
              >
                {step}
              </span>
              {i < section.flow.length - 1 ? (
                <span className="text-accent font-bold" aria-hidden="true">→</span>
              ) : null}
            </li>
          ))}
        </ol>
      ) : null}

      {section.decisions ? (
        <div className="space-y-4 mt-2">
          {section.decisions.map((d, i) => (
            <article key={d.title} className="rounded-3xl border border-line overflow-hidden">
              <div className="flex items-start gap-4 p-6 md:p-7">
                <span className="grid place-items-center w-10 h-10 rounded-full bg-ink text-snow font-display font-bold shrink-0">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-bold mb-2">{d.title}</h3>
                  <p className="text-white/70 leading-relaxed">{d.why}</p>
                </div>
              </div>
              {d.tradeoff ? (
                <div className="bg-accent-soft px-6 md:px-7 py-4 md:pl-[5.25rem]">
                  <p className="text-white/80 leading-relaxed">
                    <span className="font-semibold text-accent">Trade off: </span>
                    {d.tradeoff}
                  </p>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      ) : null}
    </section>
  );
}

export default function ProductProjectPage({ params }) {
  const project = getProductProject(params.slug);
  const study = getCaseStudy(params.slug);
  if (!project || !study) notFound();

  const all = person.productProjects;
  const idx = all.findIndex((p) => p.id === project.id);
  const next = all[(idx + 1) % all.length];

  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Work", path: "/projects" },
            { name: project.name, path: `/projects/${project.id}` },
          ]),
          getArticleJsonLd({
            title: `${study.name}: ${study.headline}`,
            description: study.intro,
            path: `/projects/${project.id}`,
          }),
        ]}
      />

      {/* ---------- HERO ---------- */}
      <section className="pt-32 md:pt-40 pb-12">
        <Container>
          <Link href="/projects" className="inline-flex items-center gap-2 text-white/60 hover:text-accent transition-colors mb-8">
            <ArrowLeft size={16} /> All case studies
          </Link>
          <p className="font-display text-accent text-xl font-bold mb-3">{study.name}</p>
          <h1 className="font-display font-bold text-4xl md:text-6xl leading-[1.05] max-w-5xl">
            {study.headline}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/65 leading-relaxed max-w-3xl">{study.intro}</p>

          <dl className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-px bg-snow/10 rounded-3xl overflow-hidden">
            {study.facts.map((f) => (
              <div key={f.label} className="bg-ink text-snow p-5 md:p-6">
                <dt className="text-sm text-snow/55">{f.label}</dt>
                <dd className="font-display text-lg font-bold mt-1">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* ---------- BODY ---------- */}
      <section className="pb-20">
        <Container>
          <div className="grid lg:grid-cols-[220px_1fr] gap-12">
            <nav className="hidden lg:block" aria-label="Case study sections">
              <ol className="sticky top-28 space-y-2 border-l-2 border-line">
                {study.sections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="block pl-4 -ml-[2px] border-l-2 border-transparent text-white/60 hover:text-accent hover:border-accent transition-colors py-1">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
            <div>
              {study.sections.map((s) => (
                <Section key={s.id} section={s} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ---------- NEXT ---------- */}
      <section className="pb-6">
        <Link href={next.href} className="group block mx-2 sm:mx-4 rounded-[28px] bg-ink text-snow py-14 md:py-20">
          <Container className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="text-snow/60 mb-2">Next case study</p>
              <p className="font-display text-4xl md:text-6xl font-bold group-hover:text-accent transition-colors">{next.name}</p>
            </div>
            <span className="grid place-items-center w-16 h-16 rounded-full bg-accent text-snow">
              <ArrowUpRight size={26} />
            </span>
          </Container>
        </Link>
      </section>
    </>
  );
}
