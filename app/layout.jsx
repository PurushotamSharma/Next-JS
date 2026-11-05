import { DM_Sans, JetBrains_Mono, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { person, SITE_URL } from "@/lib/person";
import { getPersonJsonLd, getWebsiteJsonLd } from "@/lib/seo";

const inter = DM_Sans({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrainsMono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${person.name} | ${person.title}`,
    template: `%s | ${person.name}`,
  },
  description: person.shortDescription,
  keywords: [
    "Technical Product Manager",
    "Product Strategy",
    "SaaS",
    "PRDs",
    "Roadmapping",
    "DevOps",
    "Cloud Infrastructure",
    "AWS",
    "Kubernetes",
    "CI/CD",
    "Purushotam Sharma",
  ],
  authors: [{ name: person.name, url: SITE_URL }],
  creator: person.name,
  publisher: person.name,
  robots: {
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
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: `${person.name} | ${person.title}`,
    title: `${person.name} | ${person.title}`,
    description: person.shortDescription,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${person.name}, ${person.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${person.name} | ${person.title}`,
    description: person.shortDescription,
    images: ["/og-image.jpg"],
    creator: "@iampurushotamps",
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <JsonLd data={[getWebsiteJsonLd(), getPersonJsonLd()]} />
      </head>
      <body className={`${inter.variable} ${display.variable} ${jetbrainsMono.variable}`}>
        <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
          <div className="gradient-overlay" />
        </div>

        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
