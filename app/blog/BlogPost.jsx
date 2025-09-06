"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Share buttons component for client-side functionality
const ShareButtons = ({ title }) => {
  const handleShare = (platform) => {
    if (typeof window === 'undefined') return;
    
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(title);
    
    let shareUrl = '';
    
    if (platform === 'twitter') {
      shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
    } else if (platform === 'linkedin') {
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="flex gap-3">
      <button
        onClick={() => handleShare('twitter')}
        className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Twitter
      </button>
      <button
        onClick={() => handleShare('linkedin')}
        className="flex items-center gap-2 px-3 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors"
      >
        LinkedIn
      </button>
    </div>
  );
};

const BlogPost = ({ data }) => {
  if (!data) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog" className="px-6 py-3 bg-accent text-primary rounded-full">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

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
          href="/blog"
          className="inline-flex items-center text-accent hover:text-accent/80 mb-8 cursor-pointer py-2 px-4 -ml-4 rounded-lg hover:bg-[#1A2333]/30 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          <span>Back to Blog</span>
        </Link>

        {/* Blog Header */}
        <div className="bg-[#1A2333]/50 border border-accent/20 rounded-xl overflow-hidden mb-12">
          <div className="relative h-80">
            <Image
              src={data.coverImage}
              alt={`${data.title} - ${data.category} case study`}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A2333] to-transparent" />
          </div>
          <div className="p-8">
            <div className="text-accent mb-2">{data.category}</div>
            <h1 className="text-4xl font-bold text-white mb-4">{data.title}</h1>
            <div className="flex items-center text-gray-400 mb-6">
              <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                <Image
                  src={data.author.avatar}
                  alt={`${data.author.name} - Author`}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div>{data.author.name}</div>
                <div className="text-sm">{data.date} · {data.readTime}</div>
              </div>
            </div>
            <p className="text-xl text-gray-300">{data.excerpt}</p>
          </div>
        </div>

        {/* Blog Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-3">
            <div className="bg-[#1A2333]/50 border border-accent/20 rounded-xl p-8">
              <div className="prose prose-lg prose-invert max-w-none">
                <div 
                  className="blog-content"
                  dangerouslySetInnerHTML={{ __html: convertMarkdownToHtml(data.content) }} 
                />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Technologies Box */}
            <div className="bg-[#1A2333]/50 border border-accent/20 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {data.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Share Box */}
            <div className="bg-[#1A2333]/50 border border-accent/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Share This Post</h3>
              <ShareButtons title={data.title} />
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-[#1A2333]/50 border border-accent/20 rounded-xl p-8 mt-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Need Similar Solutions for Your Business?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            I specialize in creating custom {data.category.toLowerCase()} solutions tailored to your specific requirements.
            Let's discuss how I can help transform your infrastructure and optimize your operations.
          </p>
          <Link 
            href="/consultation" 
            className="inline-block px-8 py-3 bg-accent text-primary font-semibold rounded-full hover:bg-accent/90 transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

// Enhanced markdown to HTML converter
function convertMarkdownToHtml(markdown) {
  let html = markdown
    // Headers
    .replace(/^# (.*$)/gim, '<h1 class="text-4xl font-bold text-white mt-12 mb-6 first:mt-0">$1</h1>')
    .replace(/^## (.*$)/gim, '<h2 class="text-3xl font-bold text-white mt-10 mb-5">$1</h2>')
    .replace(/^### (.*$)/gim, '<h3 class="text-2xl font-bold text-white mt-8 mb-4">$1</h3>')
    .replace(/^#### (.*$)/gim, '<h4 class="text-xl font-bold text-white mt-6 mb-3">$1</h4>')
    
    // Bold text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
    
    // Code blocks
    .replace(/```([a-zA-Z]*)\n([\s\S]*?)```/g, '<div class="my-6"><pre class="bg-gray-900 p-4 rounded-lg overflow-x-auto"><code class="text-sm text-gray-100">$2</code></pre></div>')
    
    // Inline code
    .replace(/`([^`]+)`/g, '<code class="bg-gray-800 text-accent px-2 py-1 rounded text-sm">$1</code>')
    
    // Lists
    .replace(/^\* (.*$)/gim, '<li class="mb-2 text-gray-300">$1</li>')
    .replace(/^- (.*$)/gim, '<li class="mb-2 text-gray-300">$1</li>')
    .replace(/^\d+\. (.*$)/gim, '<li class="mb-2 text-gray-300">$1</li>')
    
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-accent hover:text-accent/80 underline" target="_blank" rel="noopener noreferrer">$1</a>')
    
    // Line breaks and paragraphs
    .replace(/\n\n/g, '</p><p class="mb-4 text-gray-300 leading-relaxed">')
    .replace(/\n/g, '<br />');

  // Wrap in paragraph tags
  html = '<p class="mb-4 text-gray-300 leading-relaxed">' + html + '</p>';
  
  // Fix list wrapping
  html = html.replace(/(<li[^>]*>.*?<\/li>)/g, (match, li) => {
    return li;
  });
  
  // Wrap consecutive list items in ul tags
  html = html.replace(/(<li[^>]*>.*?<\/li>)(?:\s*<li[^>]*>.*?<\/li>)*/g, (match) => {
    return '<ul class="list-disc pl-6 mb-4 space-y-1">' + match + '</ul>';
  });

  // Fix any remaining paragraph tags around lists
  html = html.replace(/<p[^>]*>(<ul[^>]*>.*?<\/ul>)<\/p>/g, '$1');
  
  return html;
}

export default BlogPost;
