import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { Container } from "@/components/Section";
import { person } from "@/lib/person";
import { buildMetadata, getBreadcrumbJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: `${person.name} | How I build products`,
  description:
    "How Purushotam Sharma works as a Technical Product Manager: discovery, prioritisation, PRDs, integrations, billing and close collaboration with engineering.",
  path: "/product",
  absoluteTitle: true,
});

/* Principles, each backed by a real example from SellMato, Xaaki or Pietech */
const principles = [
  {
    title: "Start with the problem, not the feature",
    body: "Every request gets traced back to a user pain and a business goal before it reaches the roadmap.",
    example: "SellMato sellers dropped off before their first listing, so onboarding was redesigned around reaching a first sale.",
  },
  {
    title: "Prioritise in the open",
    body: "Seller impact, revenue and engineering effort are scored together, so trade offs are visible and nobody wins by being loudest.",
    example: "SellMato roadmap set with the founders using value, revenue and effort.",
  },
  {
    title: "Write specs engineers can build from",
    body: "PRDs carry user stories, acceptance criteria and edge cases, so the build matches the intent the first time.",
    example: "Stripe trials, prorated upgrades and safe retries were specified before a line of code.",
  },
  {
    title: "Design for failure, not just the happy path",
    body: "Integrations break, suppliers go down, payments retry. Good products are designed for those moments.",
    example: "Storefronts read from a product cache, so a slow supplier never breaks a seller's shop.",
  },
  {
    title: "Make policies part of the product",
    body: "Cancellations, rescheduling and pricing rules shape trust as much as screens do.",
    example: "Xaaki booking, cancellation and technician assignment rules defined in PRDs.",
  },
  {
    title: "Check feasibility before committing",
    body: "My DevOps years mean I can judge cost, risk and scale early, and push back on work that will not survive production.",
    example: "Superbrain AI features scoped against feasibility and user value at Pietech.",
  },
];

const artifacts = [
  "PRDs",
  "User stories",
  "Acceptance criteria",
  "Roadmaps",
  "Prioritisation scores",
  "User flows",
  "Pricing models",
  "Release plans",
  "API and data requirements",
];

export default function ProductPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Approach", path: "/product" },
        ])}
      />

      {/* ---------- HERO (dark card) ---------- */}
      <section className="pt-28 md:pt-32">
        <div className="mx-2 sm:mx-4 rounded-[32px] bg-ink text-snow relative overflow-hidden">
          <Container className="relative py-16 md:py-24">
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-14 items-center">
              <div>
                <span className="inline-block border border-snow/40 rounded-full px-4 py-1 text-sm font-medium mb-7">
                  My approach
                </span>
                <h1 className="font-display font-bold text-5xl md:text-7xl leading-[1.0]">
                  How I build products people <span className="text-accent">use.</span>
                </h1>
                <p className="mt-6 text-lg md:text-xl text-snow/70 max-w-xl leading-relaxed">
                  Product ownership with engineering depth. I take a business goal all the way to a
                  shipped, reliable feature, and I am as comfortable in the roadmap meeting as in the
                  architecture review.
                </p>
                <div className="flex flex-wrap gap-3 mt-9">
                  <Link href="/projects" className="inline-flex items-center gap-1.5 bg-accent text-snow px-6 py-3 rounded-full font-semibold hover:bg-accent-hover transition-colors">
                    See it in practice <ArrowUpRight size={18} />
                  </Link>
                  <Link href="/experience" className="inline-flex items-center px-6 py-3 rounded-full font-semibold border border-snow/40 hover:border-snow transition-colors">
                    My experience
                  </Link>
                </div>
              </div>

              {/* Product x Engineering */}
              <svg viewBox="0 0 460 320" className="w-full max-w-[480px] mx-auto" role="img" aria-label="Product plus engineering equals technical product management">
                <defs>
                  <clipPath id="clipProduct"><circle cx="160" cy="160" r="140" /></clipPath>
                </defs>
                <circle cx="160" cy="160" r="140" fill="#F2542D" />
                <circle cx="300" cy="160" r="140" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.55)" strokeWidth="2" />
                <circle cx="300" cy="160" r="140" fill="#FFFFFF" clipPath="url(#clipProduct)" />
                <g fontFamily="var(--font-display)" textAnchor="middle">
                  <text x="98" y="156" fill="#FFFFFF" fontSize="24" fontWeight="700">Product</text>
                  <text x="98" y="182" fill="rgba(255,255,255,0.85)" fontSize="14" fontFamily="var(--font-inter)">Strategy · PRDs</text>
                  <text x="372" y="156" fill="#FFFFFF" fontSize="24" fontWeight="700">Engineering</text>
                  <text x="372" y="182" fill="rgba(255,255,255,0.7)" fontSize="14" fontFamily="var(--font-inter)">Cloud · APIs</text>
                  <text x="230" y="154" fill="#171717" fontSize="19" fontWeight="800">Technical</text>
                  <text x="230" y="178" fill="#F2542D" fontSize="19" fontWeight="800">PM</text>
                </g>
              </svg>
            </div>

            <dl className="mt-14 grid sm:grid-cols-3 gap-px bg-snow/10 rounded-2xl overflow-hidden">
              {[
                ["2.5 years", "owning product"],
                ["4 products", "across marketplace, services, social and AI"],
                ["5 years", "in software and cloud"],
              ].map(([v, l]) => (
                <div key={v} className="bg-ink px-6 py-5">
                  <dt className="font-display text-3xl font-bold"><span className="text-accent">{v.split(" ")[0]}</span> {v.split(" ").slice(1).join(" ")}</dt>
                  <dd className="text-snow/60 mt-1">{l}</dd>
                </div>
              ))}
            </dl>
          </Container>
        </div>
      </section>

      {/* ---------- THE LOOP (light band) ---------- */}
      <section className="pt-6">
        <div className="mx-2 sm:mx-4 rounded-[28px] bg-surface py-16 md:py-20">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-6 border-b border-line pb-8 mb-10">
              <h2 className="font-display text-4xl md:text-5xl font-bold">
                The <span className="text-accent">loop</span> I run
              </h2>
              <p className="text-white/65 max-w-md leading-relaxed">
                Eight steps, repeated every cycle. Short enough to stay honest, complete enough
                that discovery and measurement never get skipped.
              </p>
            </div>
            <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {person.productMethodology.map((item, i) => (
                <li
                  key={item.step}
                  className={`rounded-3xl p-6 ${i === 0 ? "bg-accent text-snow" : "bg-primary border border-line"}`}
                >
                  <span
                    className={`grid place-items-center w-10 h-10 rounded-full font-display font-bold mb-5 ${
                      i === 0 ? "bg-snow text-accent" : "bg-ink text-snow"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <h3 className="font-display text-xl font-bold mb-2">{item.step}</h3>
                  <p className={`text-sm leading-relaxed ${i === 0 ? "text-snow/90" : "text-white/65"}`}>{item.body}</p>
                </li>
              ))}
            </ol>
          </Container>
        </div>
      </section>

      {/* ---------- PRINCIPLES WITH REAL EXAMPLES ---------- */}
      <section className="py-20 md:py-28">
        <Container>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-4">
            What I <span className="text-accent">believe</span>, and where it showed up
          </h2>
          <p className="text-center text-white/60 max-w-2xl mx-auto mb-14">
            Principles are cheap. Each one below comes with a real decision from my work.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {principles.map((p) => (
              <article key={p.title} className="group rounded-3xl border border-line p-7 md:p-8 hover:border-accent transition-colors">
                <h3 className="font-display text-2xl font-bold mb-3">{p.title}</h3>
                <p className="text-white/65 leading-relaxed">{p.body}</p>
                <div className="mt-5 rounded-2xl bg-surface p-4 flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-accent shrink-0" aria-hidden="true" />
                  <p className="text-sm text-white/75 leading-relaxed">
                    <span className="font-semibold text-white">In practice: </span>
                    {p.example}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- WHAT I PRODUCE ---------- */}
      <section className="pb-20 md:pb-28">
        <Container>
          <div className="rounded-3xl bg-surface border border-line p-8 md:p-12 grid md:grid-cols-[1fr_1.4fr] gap-10 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                What lands on the <span className="text-accent">team&apos;s</span> desk
              </h2>
              <p className="text-white/60 mt-3 leading-relaxed">
                The artifacts I write so engineering, design and founders stay aligned.
              </p>
            </div>
            <ul className="flex flex-wrap gap-2.5">
              {artifacts.map((a) => (
                <li key={a} className="bg-primary border border-line rounded-full px-4 py-2 font-medium">
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="pb-6">
        <div className="mx-2 sm:mx-4 rounded-[28px] bg-accent text-snow py-14 md:py-20">
          <Container className="flex flex-wrap items-center justify-between gap-8">
            <h2 className="font-display text-3xl md:text-5xl font-bold max-w-2xl leading-[1.05]">
              See the approach applied to real products.
            </h2>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-ink text-snow px-6 py-3.5 rounded-full font-semibold hover:bg-snow hover:text-white transition-colors"
            >
              Read the case studies <ArrowUpRight size={18} />
            </Link>
          </Container>
        </div>
      </section>
    </>
  );
}
