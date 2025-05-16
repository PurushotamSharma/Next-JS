"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import blogData from './blogData';  // Note we're importing from a local copy now

const BlogListing = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Group blog posts by category
  const categories = {
    all: Object.values(blogData),
    devops: Object.values(blogData).filter(post => post.category === 'DevOps'),
    cloud: Object.values(blogData).filter(post => post.category === 'Cloud')
  };
  
  // Sort posts by date (newest first)
  const sortedPosts = [...categories[activeCategory]].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="min-h-screen bg-primary relative">
      {/* Background Effects */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(0,255,153,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,255,153,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 py-24">
        {/* Back Button */}
        <Link 
          href="/work"
          className="inline-flex items-center text-accent hover:text-accent/80 mb-8 cursor-pointer py-2 px-4 -ml-4 rounded-lg hover:bg-[#1A2333]/30 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          <span>Back to Projects</span>
        </Link>

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Project Case Studies</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Detailed writeups of real-world DevOps and Cloud projects with measurable results and technical implementations.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center space-x-6 mb-12">
          {['all', 'devops', 'cloud'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-6 py-3 rounded-full transition-all duration-300
                ${activeCategory === category 
                  ? 'bg-accent text-primary' 
                  : 'bg-[#1A2333]/50 text-accent border border-accent/20 hover:bg-accent/10'}
              `}
            >
              {category === 'all' ? 'All Projects' : 
               category === 'devops' ? 'DevOps Projects' : 
               'Cloud Projects'}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedPosts.map((post) => (
            <Link 
              key={post.id}
              href={`/blog/${post.id}`}
              className="group cursor-pointer"
            >
              <div className="bg-[#1A2333]/50 border border-accent/20 rounded-xl overflow-hidden h-full transition-all duration-300 group-hover:border-accent/50 group-hover:transform group-hover:-translate-y-1">
                <div className="relative h-48">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A2333] to-transparent" />
                </div>
                <div className="p-6">
                  <div className="text-accent text-sm mb-2">{post.category}</div>
                  <h2 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">{post.title}</h2>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {post.technologies.length > 3 && (
                      <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">
                        +{post.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center text-gray-400 text-sm">
                    <div className="relative h-8 w-8 rounded-full overflow-hidden mr-2">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>{post.date} · {post.readTime}</div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-[#1A2333]/50 border border-accent/20 rounded-xl p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Looking for Custom DevOps or Cloud Solutions?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            As a freelancer specializing in DevOps and Cloud infrastructure, I can help you design, implement, and optimize solutions tailored to your specific needs. Let's discuss how I can help transform your infrastructure.
          </p>
          <Link 
            href="/consultation" 
            className="inline-block px-8 py-3 bg-accent text-primary font-semibold rounded-full hover:bg-accent/90 transition-colors"
          >
            Schedule a Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogListing;