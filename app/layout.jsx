import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono'
});

export const metadata = {
  metadataBase: new URL('https://purushotam.devopsguy.in'),
  title: {
    default: "Purushotam | Full Stack & DevOps Engineer",
    template: "%s | Purushotam"
  },
  description: "Portfolio of Purushotam — Full Stack Developer & DevOps Engineer specializing in CI/CD, Docker, Kubernetes, AWS, GCP, Azure, and Infrastructure as Code.",
  keywords: ["Full Stack Developer", "DevOps Engineer", "CI/CD", "Docker", "Kubernetes", "AWS", "GCP", "Azure", "Cloud Deployment", "Infrastructure as Code", "Terraform", "Jenkins", "React", "Node.js", "Python"],
  authors: [{ name: "Purushotam Sharma" }],
  creator: "Purushotam Sharma",
  publisher: "Purushotam Sharma",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://purushotam.devopsguy.in',
    siteName: 'Purushotam | Full Stack & DevOps Engineer',
    title: 'Purushotam | Full Stack & DevOps Engineer',
    description: 'Portfolio of Purushotam — Full Stack + DevOps (CI/CD, Docker, Kubernetes, AWS/GCP/Azure).',
    images: [
      {
        url: '/og-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Purushotam - Full Stack & DevOps Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Purushotam | Full Stack & DevOps Engineer',
    description: 'CI/CD, Containers, Cloud, Infra as Code.',
    images: ['/og-cover.jpg'],
    creator: '@iampurushotamps',
  },
  verification: {
    google: 'PASTE_TOKEN_HERE',
  },
  alternates: {
    canonical: 'https://purushotam.devopsguy.in',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://purushotam.devopsguy.in",
              "name": "Purushotam | Full Stack & DevOps Engineer",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://purushotam.devopsguy.in/blog?q={query}",
                "query-input": "required name=query"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Purushotam Sharma",
              "url": "https://purushotam.devopsguy.in",
              "jobTitle": "Full Stack & DevOps Engineer",
              "description": "DevOps Engineer with 4+ years experience in CI/CD, Docker, Kubernetes, AWS, GCP, Azure, and Infrastructure as Code.",
              "email": "mailto:sharmapurushotam57@gmail.com",
              "telephone": "+91-7383055495",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Surat",
                "addressRegion": "Gujarat",
                "addressCountry": "India"
              },
              "alumniOf": [
                {
                  "@type": "EducationalOrganization",
                  "name": "Charotar University",
                  "degree": "Master of Computer Application"
                },
                {
                  "@type": "EducationalOrganization", 
                  "name": "MDSU University",
                  "degree": "Bachelor of Science"
                }
              ],
              "worksFor": [
                {
                  "@type": "Organization",
                  "name": "PieTech",
                  "startDate": "2024-06"
                },
                {
                  "@type": "Organization", 
                  "name": "Upwork",
                  "description": "Freelancer",
                  "startDate": "2022"
                }
              ],
              "knowsAbout": [
                "DevOps",
                "CI/CD",
                "Docker",
                "Kubernetes", 
                "AWS",
                "GCP",
                "Azure",
                "Infrastructure as Code",
                "Terraform",
                "Jenkins",
                "Full Stack Development",
                "React",
                "Node.js",
                "Python"
              ],
              "sameAs": [
                "https://github.com/PurushotamSharma",
                "https://www.linkedin.com/in/purushotamsharma/",
                "https://twitter.com/iampurushotamps"
              ]
            })
          }}
        />
      </head>
      <body className={jetbrainsMono.variable}>
        {/* Background Gradient & Grid */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="gradient-overlay" />
          <div className="grid-bg" />
        </div>

        <Header />
        <StairTransition />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}