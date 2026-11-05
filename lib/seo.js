import { person, SITE_URL, sameAs } from "./person";

export function buildMetadata({
  title,
  description,
  path = "",
  type = "website",
  noIndex = false,
  absoluteTitle = false,
  publishedTime,
}) {
  const url = path ? `${SITE_URL}${path}` : SITE_URL;
  const resolvedTitle = absoluteTitle
    ? { absolute: title }
    : title;

  return {
    title: resolvedTitle,
    description: description || person.shortDescription,
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      type,
      locale: "en_US",
      url,
      siteName: person.name,
      title: typeof title === "string" ? title : person.name,
      description: description || person.shortDescription,
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${person.name}, ${person.title}`,
        },
      ],
      ...(type === "article"
        ? { publishedTime, authors: [person.name] }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: typeof title === "string" ? title : person.name,
      description: description || person.shortDescription,
      images: ["/og-image.jpg"],
      creator: "@iampurushotamps",
    },
    alternates: {
      canonical: url,
    },
  };
}

export function getPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": person.entityId,
    name: person.name,
    givenName: person.givenName,
    familyName: person.familyName,
    jobTitle: person.title,
    description: person.shortDescription,
    url: person.url,
    image: person.image,
    email: `mailto:${person.emailPublic}`,
    address: {
      "@type": "PostalAddress",
      ...(person.location.locality ? { addressLocality: person.location.locality } : {}),
      addressRegion: person.location.region,
      addressCountry: person.location.country,
    },
    worksFor: {
      "@type": "Organization",
      name: person.currentRole.company,
    },
    knowsAbout: person.knowsAbout,
    sameAs,
    alumniOf: person.education.map((edu) => ({
      "@type": "EducationalOrganization",
      name: edu.institution,
    })),
  };
}

export function getWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": person.websiteId,
    url: SITE_URL,
    name: `${person.name} | ${person.title}`,
    description: person.shortDescription,
    publisher: { "@id": person.entityId },
    inLanguage: "en",
  };
}

export function getProfilePageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE_URL}/about#profilepage`,
    url: `${SITE_URL}/about`,
    name: `About ${person.name}`,
    mainEntity: { "@id": person.entityId },
    isPartOf: { "@id": person.websiteId },
  };
}

export function getArticleJsonLd({ title, description, path, datePublished, keywords }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${SITE_URL}${path}`,
    mainEntityOfPage: `${SITE_URL}${path}`,
    image: `${SITE_URL}/og-image.jpg`,
    ...(datePublished ? { datePublished, dateModified: datePublished } : {}),
    author: { "@id": person.entityId, "@type": "Person", name: person.name, url: SITE_URL },
    publisher: { "@id": person.entityId },
    ...(keywords?.length ? { keywords: keywords.join(", ") } : {}),
    inLanguage: "en",
  };
}

export function getBreadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path.startsWith("http") ? item.path : `${SITE_URL}${item.path}`,
    })),
  };
}
