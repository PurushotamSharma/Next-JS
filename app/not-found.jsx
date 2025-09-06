import Link from 'next/link';

export const metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist. Explore Purushotam's portfolio, services, or contact for DevOps consulting.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-primary relative flex items-center justify-center">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(0,255,153,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,255,153,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* 404 Animation */}
        <div className="mb-8">
          <h1 className="text-[150px] md:text-[200px] font-bold text-accent/20 leading-none select-none">
            404
          </h1>
        </div>

        {/* Error Message */}
        <div className="max-w-md mx-auto mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-white/60 text-lg">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
          {[
            { href: '/', label: 'Home', description: 'Back to homepage' },
            { href: '/work', label: 'Projects', description: 'View my work' },
            { href: '/services', label: 'Services', description: 'My offerings' },
            { href: '/contact', label: 'Contact', description: 'Get in touch' },
          ].map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className="group p-6 bg-[#1A2333]/50 border border-accent/20 rounded-xl hover:border-accent/50 hover:bg-[#1A2333]/70 transition-all duration-300"
            >
              <div className="text-accent text-lg font-semibold mb-2 group-hover:scale-105 transition-transform">
                {link.label}
              </div>
              <div className="text-white/60 text-sm">
                {link.description}
              </div>
            </Link>
          ))}
        </div>

        {/* Search Suggestion */}
        <div className="bg-[#1A2333]/30 border border-white/10 rounded-xl p-6 max-w-lg mx-auto">
          <h3 className="text-white text-lg font-semibold mb-3">
            Looking for something specific?
          </h3>
          <p className="text-white/60 mb-4">
            Try searching for DevOps projects, CI/CD implementations, or cloud solutions.
          </p>
          <Link
            href="/blog"
            className="inline-block px-6 py-3 bg-accent text-primary font-medium rounded-full hover:bg-accent/90 transition-colors"
          >
            Browse Case Studies
          </Link>
        </div>

        {/* Back Button */}
        <div className="mt-12">
          <button
            onClick={() => window.history.back()}
            className="text-accent hover:text-accent/80 flex items-center mx-auto gap-2 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Go back to previous page
          </button>
        </div>
      </div>
    </div>
  );
}
