"use client";
import Link from "next/link";

export default function NotFoundClient() {
  return (
    <div className="min-h-screen bg-primary relative flex items-center justify-center py-24">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <h1 className="text-8xl font-bold text-accent/20 select-none">404</h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Page not found</h2>
          <p className="text-lg text-white/55 leading-relaxed">
            That URL doesn&apos;t exist. Try one of these pages instead.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left bg-surface border border-white/10 rounded-xl p-6">
            {[
              { href: "/", label: "Home" },
              { href: "/product", label: "Product" },
              { href: "/experience", label: "Experience" },
              { href: "/projects", label: "Projects" },
              { href: "/writing", label: "Writing" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="p-3 rounded-lg hover:bg-white/5 text-white/70 hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-8 py-3 bg-accent text-primary font-semibold rounded-full hover:bg-accent/90 transition-colors"
            >
              Go home
            </Link>
            <button
              type="button"
              onClick={() => window.history.back()}
              className="px-8 py-3 border border-white/20 text-white font-medium rounded-full hover:border-accent/50 hover:text-accent transition-colors"
            >
              Go back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
