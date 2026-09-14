import { MetadataRoute } from "next";
import { SITE_URL, person } from "@/lib/person";
import blogData from "@/app/blog/blogData";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticRoutes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/product", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/experience", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/projects", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/engineering", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/writing", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/contact", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/services", priority: 0.5, changeFrequency: "monthly" as const },
    { path: "/consultation", priority: 0.4, changeFrequency: "monthly" as const },
  ];

  const projectRoutes = person.productProjects.map((p) => ({
    url: `${SITE_URL}/projects/${p.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const blogRoutes = Object.values(blogData || {}).map((post) => ({
    url: `${SITE_URL}/blog/${post.slug || post.id}`,
    lastModified: post.date || now,
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE_URL}${route.path}`,
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...projectRoutes,
    ...blogRoutes,
  ];
}
