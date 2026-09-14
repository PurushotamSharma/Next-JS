"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { person, getFeaturedProductProjects } from "@/lib/person";
import { Container, Section, Eyebrow } from "@/components/Section";

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function HomeClient() {
  const productProjects = getFeaturedProductProjects();
  const sellmato = productProjects.find((p) => p.id === "sellmato");
  const otherProducts = productProjects.filter((p) => p.id !== "sellmato");

  return (
    <div className="min-h-screen relative">
      {/* HERO */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28">
        <Container>
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-14 items-center">
            <motion.div
              initial="hidden"
              animate="show"
              transition={{ staggerChildren: 0.08 }}
              className="space-y-7"
            >
              <motion.h1
                variants={fade}
                className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05]"
              >
                {person.name}
              </motion.h1>

              <motion.p variants={fade} className="text-xl md:text-2xl text-accent font-medium">
                {person.title}
              </motion.p>

              <motion.p variants={fade} className="text-lg md:text-xl text-white/75">
                {person.tagline}
              </motion.p>

              <motion.p
                variants={fade}
                className="text-base md:text-lg text-white/55 max-w-2xl leading-relaxed"
              >
                {person.supportingStatement}
              </motion.p>

              <motion.p variants={fade} className="text-sm text-white/45">
                Currently working with{" "}
                <span className="text-white/80">{person.currentRole.company}</span>
              </motion.p>

              <motion.div variants={fade} className="flex flex-wrap gap-4 pt-1">
                <Link
                  href="/projects/sellmato"
                  className="inline-flex items-center gap-2 bg-accent text-primary px-6 py-3 rounded-full font-medium hover:bg-accent-hover transition-colors"
                >
                  View Product Work
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/experience"
                  className="inline-flex items-center gap-2 border border-white/15 text-white px-6 py-3 rounded-full hover:border-accent/50 hover:text-accent transition-colors"
                >
                  View Experience
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mx-auto w-full max-w-md"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-[#1A2333]/40">
                <Image
                  src={person.imagePath}
                  alt={`${person.name}, ${person.title}`}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 400px"
                />
              </div>
              <p className="mt-4 text-sm text-white/45 text-center">
                {person.currentRole.title} · {person.currentRole.company}
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* SNAPSHOT */}
      <Section className="border-t border-white/5 !py-14">
        <Container>
          <Eyebrow>Professional snapshot</Eyebrow>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">Current role</h2>
              <p className="text-lg text-white/90">
                {person.currentRole.title}
              </p>
              <p className="text-white/55 mt-1">
                Currently working with {person.currentRole.company}
              </p>
              <p className="text-sm text-white/35 mt-2">{person.currentRole.period}</p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Focus</h2>
              <ul className="flex flex-wrap gap-2">
                {person.focusAreas.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-white/70 border border-white/10 px-3 py-1.5 rounded-md"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* DIFFERENTIATOR */}
      <Section>
        <Container>
          <Eyebrow>The differentiator</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-semibold max-w-3xl leading-tight mb-6">
            Why a DevOps background makes a stronger Technical Product Manager
          </h2>
          <p className="text-white/60 max-w-3xl leading-relaxed mb-12">
            {person.skills.differentiator}
          </p>

          <div className="grid md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-6 md:gap-4 items-start">
            <div className="border-t border-accent/40 pt-6">
              <h3 className="text-sm tracking-[0.2em] uppercase text-accent mb-4">Product</h3>
              <ul className="space-y-2 text-white/70">
                {person.skills.product.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="hidden md:flex items-center justify-center pt-10 text-2xl text-white/25" aria-hidden="true">
              +
            </div>
            <div className="border-t border-white/20 pt-6">
              <h3 className="text-sm tracking-[0.2em] uppercase text-white/50 mb-4">Engineering</h3>
              <ul className="space-y-2 text-white/70">
                {person.skills.engineering.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="hidden md:flex items-center justify-center pt-10 text-2xl text-white/25" aria-hidden="true">
              =
            </div>
            <div className="border-t border-accent pt-6 md:col-span-1">
              <h3 className="text-sm tracking-[0.2em] uppercase text-accent mb-4">Result</h3>
              <p className="text-xl font-semibold leading-snug">
                Technical Product Management
              </p>
              <p className="text-sm text-white/50 mt-3 leading-relaxed">
                I can translate business needs into product requirements and technical
                decisions without losing either side.
              </p>
            </div>
          </div>

          {/* Mobile equation labels */}
          <p className="md:hidden mt-8 text-center text-sm text-white/40">
            Product + Engineering = Technical Product Management
          </p>
        </Container>
      </Section>

      {/* HOW I BUILD PRODUCTS */}
      <Section className="bg-white/[0.02]">
        <Container>
          <Eyebrow>How I build products</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-semibold mb-10">A practical loop</h2>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {person.productMethodology.map((item, index) => (
              <li key={item.step} className="border border-white/10 rounded-xl p-5 bg-[#1A2333]/25">
                <p className="text-xs text-accent mb-2">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-semibold mb-2">{item.step}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{item.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8">
            <Link href="/product" className="text-accent hover:underline inline-flex items-center gap-1">
              Full product approach <ArrowRight size={16} />
            </Link>
          </p>
        </Container>
      </Section>

      {/* FEATURED: SELLMATO FIRST */}
      <Section>
        <Container>
          <Eyebrow>Featured product work</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">SellMato</h2>
          {sellmato ? (
            <Link
              href={sellmato.href}
              className="group block border border-accent/30 rounded-2xl p-6 md:p-10 bg-[#1A2333]/40 hover:border-accent/60 transition-colors mb-10"
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-xs uppercase tracking-wider text-accent border border-accent/30 px-2 py-0.5 rounded">
                  Primary case study
                </span>
                <span className="text-sm text-white/45">{sellmato.role}</span>
              </div>
              <p className="text-lg text-white/70 leading-relaxed max-w-3xl mb-6">
                {sellmato.summary}
              </p>
              <span className="inline-flex items-center gap-2 text-accent">
                Read SellMato case study
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          ) : null}

          <div className="flex items-end justify-between gap-4 mb-6 flex-wrap">
            <h3 className="text-xl font-semibold text-white/80">More product work</h3>
            <Link href="/projects" className="text-accent hover:underline inline-flex items-center gap-1 text-sm">
              All projects <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {otherProducts.map((project) => (
              <Link
                key={project.id}
                href={project.href}
                className="group border border-white/10 rounded-xl p-5 hover:border-accent/40 transition-colors bg-[#1A2333]/25"
              >
                <h3 className="text-lg font-semibold group-hover:text-accent transition-colors mb-2">
                  {project.name}
                </h3>
                <p className="text-xs text-white/40 mb-2">{project.role}</p>
                <p className="text-sm text-white/55 leading-relaxed line-clamp-3">
                  {project.summary}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* ENGINEERING — BELOW PRODUCT NARRATIVE */}
      <Section className="border-t border-white/5">
        <Container>
          <Eyebrow>Engineering background</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 max-w-3xl">
            {person.skills.engineeringMessage}
          </h2>
          <p className="text-white/55 max-w-2xl mb-8 leading-relaxed">
            DevOps and cloud experience is the foundation under my product work — not the
            headline. It helps me judge feasibility, talk clearly with engineering, and avoid
            requirements that look good on paper but break in production.
          </p>
          <ul className="flex flex-wrap gap-2 mb-8">
            {person.skills.engineering.map((tech) => (
              <li
                key={tech}
                className="text-sm border border-white/10 text-white/70 px-3 py-1.5 rounded-md"
              >
                {tech}
              </li>
            ))}
          </ul>
          <Link
            href="/engineering"
            className="text-accent hover:underline inline-flex items-center gap-1"
          >
            Technical background <ArrowRight size={16} />
          </Link>
        </Container>
      </Section>

      {/* WRITING */}
      <Section className="bg-white/[0.02]">
        <Container>
          <Eyebrow>Selected writing</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Technical writing on DevOps & cloud
          </h2>
          <p className="text-white/55 max-w-2xl mb-6 leading-relaxed">
            {person.writing.summary}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/writing"
              className="inline-flex items-center gap-2 border border-white/15 px-5 py-2.5 rounded-full hover:border-accent/50 hover:text-accent transition-colors"
            >
              On this site
            </Link>
            <a
              href={person.profiles.find((p) => p.id === "hashnode")?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/15 px-5 py-2.5 rounded-full hover:border-accent/50 hover:text-accent transition-colors"
            >
              Hashnode
            </a>
          </div>
        </Container>
      </Section>

      {/* ABOUT + LINKS */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Eyebrow>About</Eyebrow>
              <h2 className="text-3xl font-semibold mb-4">The short version</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Technical Product Manager at {person.currentRole.company}. Based in{" "}
                {person.location.label}. I bridge business, product strategy, and engineering
                delivery.
              </p>
              <Link href="/about" className="text-accent hover:underline inline-flex items-center gap-1">
                Full story <ArrowRight size={16} />
              </Link>
            </div>
            <div>
              <Eyebrow>Professional links</Eyebrow>
              <ul className="space-y-3 mb-8">
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
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent text-primary px-6 py-3 rounded-full font-medium hover:bg-accent-hover transition-colors"
              >
                Contact
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
