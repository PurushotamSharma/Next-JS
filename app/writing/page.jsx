import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { Container } from "@/components/Section";
import { person } from "@/lib/person";
import { buildMetadata, getBreadcrumbJsonLd } from "@/lib/seo";
import blogData from "@/app/blog/blogData";

export const metadata = buildMetadata({
  title: `${person.name} | Writing`,
  description:
    "Articles by Purushotam Sharma on DevOps, cloud infrastructure, CI/CD and building reliable products.",
  path: "/writing",
  absoluteTitle: true,
});

export default function WritingPage() {
  const posts = Object.values(blogData || {}).sort((a, b) => (b.date || "").localeCompare(a.date || ""));
  const [featured, ...rest] = posts;
  const hashnode = person.profiles.find((p) => p.id === "hashnode")?.url;

  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Writing", path: "/writing" },
        ])}
      />

      {/* ---------- HEADER ---------- */}
      <section className="pt-36 md:pt-44 pb-12">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div className="max-w-3xl">
              <span className="inline-block border border-white/80 rounded-full px-4 py-1 text-sm font-medium mb-6">
                Writing
              </span>
              <h1 className="font-display font-bold text-5xl md:text-7xl leading-[1.02]">
                Notes from the <span className="text-accent">engine room.</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white/65 leading-relaxed">
                Practical writing on DevOps, cloud and CI/CD, the infrastructure knowledge that
                shapes how I make product decisions.
              </p>
            </div>
            {hashnode ? (
              <a
                href={hashnode}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-ink text-snow px-6 py-3 rounded-full font-semibold hover:bg-accent transition-colors"
              >
                More on Hashnode <ArrowUpRight size={18} />
              </a>
            ) : null}
          </div>
        </Container>
      </section>

      <section className="pb-20 md:pb-28">
        <Container>
          {/* featured */}
          {featured ? (
            <Link
              href={`/blog/${featured.slug || featured.id}`}
              className="group relative block rounded-[28px] bg-ink text-snow p-8 md:p-12 mb-6 overflow-hidden"
            >
              <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-accent" aria-hidden="true" />
              <div className="relative max-w-3xl">
                <div className="flex items-center gap-3 mb-5">
                  <span className="bg-accent text-snow rounded-full px-3.5 py-1 text-sm font-semibold">Latest</span>
                  <span className="text-snow/60">{featured.category} · {featured.readTime}</span>
                </div>
                <h2 className="font-display text-3xl md:text-5xl font-bold leading-[1.05] group-hover:text-accent transition-colors">
                  {featured.title}
                </h2>
                <p className="mt-4 text-snow/70 text-lg leading-relaxed">{featured.excerpt}</p>
              </div>
              <span className="absolute right-6 bottom-6 md:right-10 md:bottom-10 grid place-items-center w-14 h-14 rounded-full bg-snow text-white">
                <ArrowUpRight size={22} />
              </span>
            </Link>
          ) : null}

          {/* grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((post) => (
              <Link
                key={post.slug || post.id}
                href={`/blog/${post.slug || post.id}`}
                className="group relative flex flex-col rounded-3xl border border-line p-6 pb-20 hover:border-accent transition-colors"
              >
                <div className="flex items-center gap-2 mb-4 text-sm">
                  <span className="bg-surface border border-line rounded-full px-3 py-0.5 font-medium">{post.category}</span>
                  <span className="text-white/50">{post.readTime}</span>
                </div>
                <h3 className="font-display text-xl font-bold leading-snug mb-3">{post.title}</h3>
                <p className="text-white/60 leading-relaxed line-clamp-3">{post.excerpt}</p>
                <span className="absolute right-5 bottom-5 grid place-items-center w-11 h-11 rounded-full bg-ink text-snow group-hover:bg-accent transition-colors">
                  <ArrowUpRight size={18} />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
