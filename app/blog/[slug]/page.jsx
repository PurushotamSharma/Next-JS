import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { Container } from "@/components/Section";
import { person } from "@/lib/person";
import { buildMetadata, getBreadcrumbJsonLd, getArticleJsonLd } from "@/lib/seo";
import blogData from "../blogData";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.values(blogData).map((p) => ({ slug: p.slug || p.id }));
}

function getPost(slug) {
  return Object.values(blogData).find((p) => (p.slug || p.id) === slug) || null;
}

export function generateMetadata({ params }) {
  const post = getPost(params.slug);
  if (!post) return {};
  return buildMetadata({
    title: `${post.title} | ${person.name}`,
    description: post.metaDescription || post.excerpt,
    path: `/blog/${post.slug || post.id}`,
    absoluteTitle: true,
    type: "article",
    publishedTime: post.date,
  });
}

/* Inline **bold** and `code` */
function inline(text) {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).filter(Boolean);
  return parts.map((part, i) => {
    if (part.startsWith("**")) return <strong key={i} className="font-semibold text-white">{part.slice(2, -2)}</strong>;
    if (part.startsWith("`")) return <code key={i} className="bg-accent-soft text-accent px-1.5 py-0.5 rounded text-[0.9em]">{part.slice(1, -1)}</code>;
    return part;
  });
}

/* Small markdown renderer: headings, lists, code blocks, paragraphs */
function Markdown({ source }) {
  const lines = source.split("\n").map((l) => l.replace(/^\s{0,4}/, ""));
  const blocks = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) { i++; continue; }
    if (line.startsWith("```")) {
      const code = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) code.push(lines[i++]);
      i++;
      blocks.push(
        <pre key={blocks.length} className="bg-ink text-snow rounded-2xl p-5 overflow-x-auto text-sm my-6 font-mono leading-relaxed">
          <code>{code.join("\n")}</code>
        </pre>
      );
      continue;
    }
    if (line.startsWith("### ")) {
      blocks.push(<h3 key={blocks.length} className="font-display text-2xl font-bold mt-10 mb-3">{inline(line.slice(4))}</h3>);
      i++; continue;
    }
    if (line.startsWith("## ")) {
      blocks.push(<h2 key={blocks.length} className="font-display text-3xl md:text-4xl font-bold mt-14 mb-4 first:mt-0">{inline(line.slice(3))}</h2>);
      i++; continue;
    }
    if (/^[-*] /.test(line) || /^\d+\. /.test(line)) {
      const ordered = /^\d+\. /.test(line);
      const items = [];
      while (i < lines.length && (/^[-*] /.test(lines[i]) || /^\d+\. /.test(lines[i]))) {
        items.push(lines[i].replace(/^([-*]|\d+\.) /, ""));
        i++;
      }
      blocks.push(
        <ul key={blocks.length} className="space-y-2.5 my-5">
          {items.map((it, k) => (
            <li key={k} className="flex gap-3 text-lg text-white/75 leading-relaxed">
              {ordered ? (
                <span className="font-display font-bold text-accent shrink-0">{k + 1}.</span>
              ) : (
                <span className="mt-3 h-2 w-2 rounded-full bg-accent shrink-0" aria-hidden="true" />
              )}
              <span>{inline(it)}</span>
            </li>
          ))}
        </ul>
      );
      continue;
    }
    const para = [];
    while (i < lines.length && lines[i].trim() && !/^(#{2,3} |[-*] |\d+\. |```)/.test(lines[i])) para.push(lines[i++].trim());
    blocks.push(<p key={blocks.length} className="text-lg text-white/75 leading-relaxed my-4">{inline(para.join(" "))}</p>);
  }
  return <>{blocks}</>;
}

export default function BlogPostPage({ params }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const all = Object.values(blogData);
  const idx = all.indexOf(post);
  const next = all[(idx + 1) % all.length];

  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Writing", path: "/writing" },
            { name: post.title, path: `/blog/${post.slug || post.id}` },
          ]),
          getArticleJsonLd({
            title: post.title,
            description: post.metaDescription || post.excerpt,
            path: `/blog/${post.slug || post.id}`,
            datePublished: post.date,
            keywords: post.technologies,
          }),
        ]}
      />

      {/* ---------- HEADER ---------- */}
      <section className="pt-32 md:pt-40 pb-10">
        <Container>
          <div className="max-w-4xl">
            <Link href="/writing" className="inline-flex items-center gap-2 text-white/60 hover:text-accent transition-colors mb-8">
              <ArrowLeft size={16} /> All writing
            </Link>
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="bg-accent text-snow rounded-full px-3.5 py-1 text-sm font-semibold">{post.category}</span>
              <span className="text-white/55">{post.readTime}</span>
            </div>
            <h1 className="font-display font-bold text-4xl md:text-6xl leading-[1.05]">{post.title}</h1>
            {post.excerpt ? (
              <p className="mt-6 text-xl text-white/65 leading-relaxed">{post.excerpt}</p>
            ) : null}
            <div className="mt-8 flex items-center gap-3">
              <span className="grid place-items-center w-11 h-11 rounded-full bg-ink text-snow font-display font-bold">P</span>
              <div>
                <p className="font-semibold">{person.name}</p>
                <p className="text-sm text-white/55">{post.date}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ---------- BODY ---------- */}
      <section className="pb-20">
        <Container>
          <div className="grid lg:grid-cols-[1fr_280px] gap-14 border-t border-line pt-12">
            <article className="max-w-[70ch]">
              <Markdown source={post.content || ""} />
            </article>
            <aside className="lg:pt-2">
              <div className="lg:sticky lg:top-28 space-y-5">
                {post.technologies?.length ? (
                  <div className="rounded-3xl bg-surface border border-line p-6">
                    <h2 className="font-display text-lg font-bold mb-4">Technologies</h2>
                    <ul className="flex flex-wrap gap-2">
                      {post.technologies.map((t) => (
                        <li key={t} className="bg-primary border border-line rounded-full px-3 py-1 text-sm font-medium">{t}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                <div className="rounded-3xl bg-ink text-snow p-6">
                  <p className="font-display text-lg font-bold">Written by a PM who has run production systems.</p>
                  <Link href="/product" className="inline-flex items-center gap-1.5 text-accent font-semibold mt-3">
                    How I work <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* ---------- NEXT ---------- */}
      <section className="pb-6">
        <Link href={`/blog/${next.slug || next.id}`} className="group block mx-2 sm:mx-4 rounded-[28px] bg-ink text-snow py-12 md:py-16">
          <Container className="flex flex-wrap items-center justify-between gap-6">
            <div className="max-w-3xl">
              <p className="text-snow/60 mb-2">Next article</p>
              <p className="font-display text-3xl md:text-4xl font-bold group-hover:text-accent transition-colors">{next.title}</p>
            </div>
            <span className="grid place-items-center w-14 h-14 rounded-full bg-accent text-snow shrink-0">
              <ArrowUpRight size={24} />
            </span>
          </Container>
        </Link>
      </section>
    </>
  );
}
