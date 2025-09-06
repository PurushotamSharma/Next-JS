"use client";
import Link from 'next/link';

export default function NotFoundClient() {
  return (
    <div className="min-h-screen bg-primary relative flex items-center justify-center">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(0,255,153,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,255,153,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-accent opacity-20 select-none">
              404
            </h1>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white">
              Page Not Found
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
            </p>

            {/* Search Suggestions */}
            <div className="bg-[#1A2333]/50 border border-accent/20 rounded-xl p-6 text-left">
              <h3 className="text-lg font-semibold text-white mb-4">You might be looking for:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Link href="/" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                  <span className="text-accent">🏠</span>
                  <span className="text-gray-300">Home</span>
                </Link>
                <Link href="/resume" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                  <span className="text-accent">📄</span>
                  <span className="text-gray-300">Resume & Skills</span>
                </Link>
                <Link href="/work" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                  <span className="text-accent">💼</span>
                  <span className="text-gray-300">Portfolio</span>
                </Link>
                <Link href="/services" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                  <span className="text-accent">⚙️</span>
                  <span className="text-gray-300">Services</span>
                </Link>
                <Link href="/blog" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                  <span className="text-accent">📝</span>
                  <span className="text-gray-300">Blog</span>
                </Link>
                <Link href="/contact" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                  <span className="text-accent">📧</span>
                  <span className="text-gray-300">Contact</span>
                </Link>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/" 
                className="px-8 py-3 bg-accent text-primary font-semibold rounded-full hover:bg-accent/90 transition-colors"
              >
                Go Home
              </Link>
              <button 
                onClick={() => window.history.back()}
                className="px-8 py-3 border border-accent text-accent font-semibold rounded-full hover:bg-accent/10 transition-colors"
              >
                Go back to previous page
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
