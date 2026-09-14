import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { PageHero, Container, Section, Eyebrow } from "@/components/Section";
import { person } from "@/lib/person";
import { buildMetadata, getBreadcrumbJsonLd } from "@/lib/seo";
import blogData from "@/app/blog/blogData";

export const metadata = buildMetadata({
  title: `${person.name} | Product, DevOps & Cloud Writing`,
  description:
    "Technical writing by Purushotam Sharma on DevOps, AWS, Kubernetes, CI/CD, and cloud infrastructure — plus case studies hosted on this site.",
  path: "/writing",
  absoluteTitle: true,
});

export default function WritingPage() {
  const posts = Object.values(blogData || {});

  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Writing", path: "/writing" },
        ])}
      />
      <PageHero
        title="Writing"
        description={person.writing.summary}
      />

      <Section className="!pt-0">
        <Container>
          <Eyebrow>Categories</Eyebrow>
          <ul className="flex flex-wrap gap-2 mb-12">
            {person.writing.categories.map((cat) => (
              <li
                key={cat}
                className="text-sm border border-white/10 text-white/60 px-3 py-1.5 rounded-md"
              >
                {cat}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3 mb-14">
            <a
              href={person.profiles.find((p) => p.id === "hashnode")?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-accent text-primary font-medium"
            >
              Hashnode
            </a>
          </div>

          <Eyebrow>Case studies on this site</Eyebrow>
          <p className="text-sm text-white/45 mb-6 max-w-2xl">
            Articles hosted here may include Article structured data. External Hashnode posts
            are linked, not claimed as hosted on this domain.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {posts.slice(0, 8).map((post) => (
              <Link
                key={post.slug || post.id || post.title}
                href={`/blog/${post.slug || post.id}`}
                className="border border-white/10 rounded-xl p-5 hover:border-accent/40 transition-colors"
              >
                <p className="text-xs text-accent mb-2">{post.category}</p>
                <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
                <p className="text-sm text-white/55 line-clamp-3">
                  {post.excerpt || post.metaDescription || post.description}
                </p>
              </Link>
            ))}
          </div>

          {posts.length > 8 ? (
            <p className="mt-8 text-sm text-white/45">
              Showing a selection of on-site case studies. Browse individual URLs under{" "}
              <code className="text-accent/80">/blog/[slug]</code>.
            </p>
          ) : null}
        </Container>
      </Section>
    </>
  );
}
