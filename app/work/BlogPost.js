"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import blogData from '../../work/blogData';

const BlogPost = () => {
  const params = useParams();
  const postId = params.slug;
  
  // Find the blog post data
  const post = postId ? blogData[postId] : null;
  
  if (!post) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="mb-8">The blog post you're looking for doesn't exist.</p>
          <Link 
            href="/blog" 
            className="px-6 py-3 bg-accent text-primary rounded-full"
          >
            Return to Projects
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
          <span>Back to Case Studies</span>
        </Link>

        {/* Blog Header */}
        <div className="bg-[#1A2333]/50 border border-accent/20 rounded-xl overflow-hidden mb-12">
          <div className="relative h-80">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A2333] to-transparent" />
          </div>
          <div className="p-8">
            <div className="text-accent mb-2">{post.category}</div>
            <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>
            <div className="flex items-center text-gray-400 mb-6">
              <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div>{post.author.name}</div>
                <div className="text-sm">{post.date} · {post.readTime}</div>
              </div>
            </div>
            <p className="text-xl text-gray-300">{post.excerpt}</p>
          </div>
        </div>

        {/* Blog Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-3">
            <div className="bg-[#1A2333]/50 border border-accent/20 rounded-xl p-8">
              <div className="prose prose-lg prose-invert max-w-none">
                <div dangerouslySetInnerHTML={{ __html: convertMarkdownToHtml(post.content) }} />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Case Study Box */}
            <div className="bg-[#1A2333]/50 border border-accent/20 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Case Study Details</h3>
              
              <div className="mb-4">
                <div className="text-accent text-sm">Industry</div>
                <div className="text-white">{post.caseStudy.industry}</div>
              </div>
              
              <div className="mb-4">
                <div className="text-accent text-sm">Company Size</div>
                <div className="text-white">{post.caseStudy.companySize}</div>
              </div>
              
              <div className="mb-4">
                <div className="text-accent text-sm">Project Duration</div>
                <div className="text-white">{post.caseStudy.duration}</div>
              </div>
              
              <div className="mb-4">
                <div className="text-accent text-sm">Key Challenges</div>
                <ul className="text-gray-300 list-disc pl-5 mt-2">
                  {post.caseStudy.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <div className="text-accent text-sm">Outcomes</div>
                <ul className="text-gray-300 list-disc pl-5 mt-2">
                  {post.caseStudy.outcomes.map((outcome, index) => (
                    <li key={index}>{outcome}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Technologies Box */}
            <div className="bg-[#1A2333]/50 border border-accent/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {post.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-[#1A2333]/50 border border-accent/20 rounded-xl p-8 mt-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Need Similar Solutions for Your Business?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            I specialize in creating custom {post.category.toLowerCase()} solutions tailored to your specific requirements.
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

// Simple function to convert markdown to HTML
function convertMarkdownToHtml(markdown) {
  // This is a simplified conversion - you'd want to use a proper markdown parser
  let html = markdown
    // Headers
    .replace(/## (.*)\n/g, '<h2 class="text-2xl font-bold text-white mt-8 mb-4">$1</h2>')
    .replace(/### (.*)\n/g, '<h3 class="text-xl font-bold text-white mt-6 mb-3">$1</h3>')
    
    // Lists
    .replace(/- (.*)\n/g, '<li class="ml-4">$1</li>')
    
    // Paragraphs
    .replace(/\n\n/g, '</p><p class="mb-4">')
    
    // Wrap in paragraph tags
    .replace(/^(.*)/, '<p class="mb-4">$1</p>');
  
  // Wrap lists
  html = html.replace(/<li class="ml-4">(.*?)<\/li><li class="ml-4">/g, '<li class="ml-4">$1</li><li class="ml-4">');
  html = html.replace(/<li class="ml-4">(.*?)<\/li><\/p>/g, '<li class="ml-4">$1</li></ul></p>');
  html = html.replace(/<p class="mb-4"><li class="ml-4">/g, '<p class="mb-4"><ul class="list-disc pl-5 mb-4"><li class="ml-4">');
  
  return html;
}

export default BlogPost;