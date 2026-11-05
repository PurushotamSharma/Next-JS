"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { person, getFeaturedProductProjects, formatRoleDates } from "@/lib/person";
import { Container } from "@/components/Section";

/* What I own: three areas, middle one highlighted (orange) */
const ownership = [
  {
    title: "Product strategy",
    points: ["Roadmaps with founders", "PRDs and acceptance criteria", "Prioritisation by value and effort"],
    href: "/product",
  },
  {
    title: "Integrations & billing",
    points: ["Shopify supplier sync", "Stripe subscriptions and trials", "Pricing and markup rules"],
    href: "/projects/sellmato",
    highlight: true,
  },
  {
    title: "Platform & cloud",
    points: ["AWS, Kubernetes, CI/CD", "Feasibility before commitment", "Reliability and monitoring"],
    href: "/engineering",
  },
];

/* Only verifiable numbers */
const stats = [
  { value: "5+", label: "Years in tech" },
  { value: "4", label: "Products owned" },
  { value: "99.9%", label: "Uptime delivered" },
];

export default function HomeClient() {
  const projects = getFeaturedProductProjects();
  const roles = person.employment;

  return (
    <div className="relative overflow-hidden">
      {/* ---------- HERO ---------- */}
      <section className="relative pt-32 md:pt-36">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center relative z-10"
          >
            <span className="inline-flex items-center gap-2 bg-accent-soft text-accent rounded-full pl-2 pr-4 py-1.5 text-sm font-semibold">
              <span className="grid place-items-center w-6 h-6 rounded-full bg-accent text-snow text-xs animate-wave origin-[70%_70%]" aria-hidden="true">👋</span>
              Hello, welcome!
            </span>
            <h1 className="mt-5 font-display font-bold leading-[1.02] text-[clamp(38px,6.2vw,84px)] break-words">
              I&apos;m <span className="text-accent">Purushotam</span>,
              <br />
              Technical Product Manager
            </h1>
          </motion.div>

          <div className="relative mt-2 lg:-mt-6 grid lg:grid-cols-[1fr_auto_1fr] items-end">
            {/* left: positioning line + stat */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 }}
              className="hidden lg:block pb-40 max-w-[250px]"
            >
              <svg className="w-8 h-8 text-white mb-3" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
                <path d="M4 20c0-6 3-10 9-12l1 3c-3 1-5 3-5 6h4v8H4v-5zm14 0c0-6 3-10 9-12l1 3c-3 1-5 3-5 6h4v8h-9v-5z" />
              </svg>
              <p className="text-white/70 leading-relaxed">{person.tagline}</p>
              <p className="mt-8 font-display text-4xl font-bold">5+</p>
              <p className="text-white/60">Years in tech</p>
            </motion.div>

            {/* centre: photo on orange half circle */}
            <div className="relative mx-auto w-[340px] sm:w-[440px] lg:w-[520px] h-[340px] sm:h-[420px] lg:h-[470px]">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full aspect-square rounded-full bg-accent translate-y-1/2" />
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.6 }}
                className="absolute inset-x-0 bottom-0 h-full"
              >
                <Image
                  src={person.imagePath}
                  alt={`${person.name}, ${person.title}`}
                  fill
                  priority
                  className="object-contain object-bottom"
                  sizes="(max-width: 640px) 340px, 520px"
                />
              </motion.div>
              {/* floating tags around the photo */}
              <span className="hidden sm:inline-flex absolute left-[2%] top-[20%] z-10 items-center gap-2 bg-snow border border-line shadow-[0_8px_24px_rgba(0,0,0,0.08)] rounded-full px-4 py-2 text-sm font-semibold animate-float">
                <span className="w-2 h-2 rounded-full bg-accent" />PRDs &amp; roadmaps
              </span>
              <span className="hidden sm:inline-flex absolute right-[-8%] top-[18%] z-10 items-center gap-2 bg-ink text-snow shadow-[0_8px_24px_rgba(0,0,0,0.15)] rounded-full px-4 py-2 text-sm font-semibold animate-float-slow">
                <span className="w-2 h-2 rounded-full bg-accent" />Shopify + Stripe
              </span>
              <span className="hidden sm:inline-flex absolute right-[-4%] top-[58%] z-10 items-center gap-2 bg-snow border border-line shadow-[0_8px_24px_rgba(0,0,0,0.08)] rounded-full px-4 py-2 text-sm font-semibold animate-float">
                <span className="w-2 h-2 rounded-full bg-ink" />AWS &amp; Kubernetes
              </span>
              {/* buttons overlapping the circle */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-snow shadow-[0_8px_24px_rgba(0,0,0,0.12)] rounded-full p-1.5 z-10 whitespace-nowrap">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-1.5 bg-accent text-snow px-5 py-2.5 rounded-full font-medium hover:bg-accent-hover transition-colors"
                >
                  See my work <ArrowUpRight size={18} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-5 py-2.5 rounded-full font-medium text-white border border-white/80 hover:bg-ink hover:text-snow transition-colors"
                >
                  Hire me
                </Link>
              </div>
            </div>

            {/* right: current role */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 }}
              className="hidden lg:block pb-40 text-right justify-self-end"
            >
              <p className="text-white/60">Currently at</p>
              <p className="font-display text-4xl font-bold mt-1">{person.currentRole.company}</p>
              <p className="text-white/70 mt-1">Since June 2025</p>
              <div className="h-[3px] w-40 bg-white ml-auto mt-4 rounded-full" />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ---------- WHAT I OWN (dark band) ---------- */}
      <section className="relative">
        <div className="mx-2 sm:mx-4 rounded-[28px] bg-ink text-snow py-16 md:py-20">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-6 border-b border-snow/15 pb-8 mb-10">
              <h2 className="font-display text-4xl md:text-5xl font-bold">
                What I <span className="text-accent">own</span>
              </h2>
              <p className="text-snow/65 max-w-md leading-relaxed">
                The parts of a product closest to the infrastructure, where a technical PM
                makes the biggest difference.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {ownership.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`group relative rounded-3xl p-7 pb-20 transition-transform hover:-translate-y-1 ${
                    item.highlight ? "bg-accent" : "bg-snow/[0.06] border border-snow/10"
                  }`}
                >
                  <h3 className="font-display text-2xl font-bold mb-5">{item.title}</h3>
                  <ul className={`space-y-2.5 ${item.highlight ? "text-snow/90" : "text-snow/70"}`}>
                    {item.points.map((p) => (
                      <li key={p} className="flex gap-2.5">
                        <span className={`mt-2 h-1.5 w-1.5 rounded-full shrink-0 ${item.highlight ? "bg-snow" : "bg-accent"}`} />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <span
                    className={`absolute right-5 bottom-5 grid place-items-center w-12 h-12 rounded-full transition-colors ${
                      item.highlight ? "bg-snow text-accent" : "bg-snow/10 text-snow group-hover:bg-accent"
                    }`}
                  >
                    <ArrowUpRight size={20} />
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </div>
      </section>

      {/* ---------- EXPERIENCE (centred dotted timeline) ---------- */}
      <section className="py-20 md:py-28">
        <Container>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-14">
            My work <span className="text-accent">experience</span>
          </h2>
          <ol className="relative max-w-4xl mx-auto">
            <span className="absolute left-4 md:left-1/2 top-2 bottom-2 border-l-2 border-dashed border-line" aria-hidden="true" />
            {roles.map((role, i) => (
              <li key={role.id} className="relative grid md:grid-cols-2 gap-2 md:gap-16 pl-12 md:pl-0 pb-12 last:pb-0">
                <span
                  className={`absolute left-4 md:left-1/2 -translate-x-1/2 top-1 grid place-items-center w-7 h-7 rounded-full ring-4 ring-primary ${
                    i % 2 === 0 ? "bg-accent/15" : "bg-white/10"
                  }`}
                  aria-hidden="true"
                >
                  <span className={`w-3 h-3 rounded-full ${i % 2 === 0 ? "bg-accent" : "bg-white"}`} />
                </span>
                <div className="md:text-right">
                  <h3 className="font-display text-2xl font-bold">{role.company}</h3>
                  <p className="text-white/55 mt-1">{formatRoleDates(role)}</p>
                </div>
                <div>
                  <h4 className="font-display text-xl font-bold">{role.title}</h4>
                  <p className="text-white/60 mt-1 leading-relaxed">{role.summary}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="text-center mt-12">
            <Link href="/experience" className="inline-flex items-center gap-2 font-medium border-b-2 border-accent pb-0.5 hover:text-accent transition-colors">
              Full experience <ArrowRight size={16} />
            </Link>
          </p>
        </Container>
      </section>

      {/* ---------- STATS STRIP ---------- */}
      <section className="pb-20">
        <Container>
          <div className="grid grid-cols-3 rounded-3xl bg-surface border border-line">
            {stats.map((s, i) => (
              <div key={s.label} className={`py-8 md:py-10 text-center ${i ? "border-l border-line" : ""}`}>
                <p className="font-display text-4xl md:text-5xl font-bold">
                  {s.value.replace(/[+%]/, "")}
                  <span className="text-accent">{s.value.match(/[+%]/)?.[0] || ""}</span>
                </p>
                <p className="text-white/60 mt-1 text-sm md:text-base">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- SELECTED WORK ---------- */}
      <section className="pb-20 md:pb-28">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Selected <span className="text-accent">work</span>
            </h2>
            <Link href="/projects" className="inline-flex items-center gap-2 bg-ink text-snow px-5 py-2.5 rounded-full font-medium hover:bg-accent transition-colors">
              All case studies <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {projects.map((p, i) => (
              <Link
                key={p.id}
                href={p.href}
                className={`group relative rounded-3xl p-8 pb-20 border transition-colors ${
                  i === 0 ? "md:col-span-3 bg-surface border-line hover:border-accent" : "border-line hover:border-accent"
                }`}
              >
                <p className="text-sm font-medium text-accent mb-3">{p.role}</p>
                <h3 className="font-display text-3xl font-bold mb-3">{p.name}</h3>
                <p className="text-white/65 leading-relaxed max-w-2xl">{p.summary}</p>
                <span className="absolute right-6 bottom-6 grid place-items-center w-12 h-12 rounded-full bg-ink text-snow group-hover:bg-accent transition-colors">
                  <ArrowUpRight size={20} />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- CTA (dark band) ---------- */}
      <section className="pb-6">
        <div className="mx-2 sm:mx-4 rounded-[28px] bg-ink text-snow py-16 md:py-24 relative overflow-hidden">
          <div className="absolute -right-24 -bottom-40 w-96 h-96 rounded-full bg-accent/90" aria-hidden="true" />
          <Container className="relative">
            <h2 className="font-display text-4xl md:text-6xl font-bold max-w-3xl leading-[1.05]">
              Need a PM who speaks <span className="text-accent">engineering</span>?
            </h2>
            <p className="text-snow/70 mt-5 max-w-xl leading-relaxed">
              Open to remote Technical, Platform and Integrations PM roles in B2B SaaS,
              developer tools, payments and AI. Based in India, working across time zones.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link href="/contact" className="inline-flex items-center gap-1.5 bg-accent text-snow px-6 py-3 rounded-full font-medium hover:bg-accent-hover transition-colors">
                Get in touch <ArrowUpRight size={18} />
              </Link>
              <Link href="/about" className="inline-flex items-center px-6 py-3 rounded-full font-medium border border-snow/40 hover:border-snow transition-colors">
                About me
              </Link>
            </div>
          </Container>
        </div>
      </section>
    </div>
  );
}
