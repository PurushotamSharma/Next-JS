"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative rounded-xl overflow-hidden bg-[#1A2333]/50 border border-accent/20"
  >
    <div className="relative h-48 overflow-hidden">
      <Image
        src={project.image}
        fill
        className="object-cover transform group-hover:scale-110 transition-all duration-700"
        alt={project.title}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A2333] to-transparent" />
    </div>

    <div className="p-6 space-y-4">
      <div className="text-accent text-sm">{project.category}</div>
      <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
        {project.title}
      </h3>
      <p className="text-gray-400 text-sm">{project.description}</p>
      
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <Link
        href={project.url}
        className="inline-flex items-center text-accent hover:text-accent/80 group"
      >
        <span className="mr-2">View Project</span>
        <BsArrowUpRight className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </Link>
    </div>
  </motion.div>
);

const Work = () => {
  const [category, setCategory] = useState('websites');
  
  const projects = {
    websites: [
      {
        title: "Shubham Portfolio",
        description: "Personal portfolio website built with modern web technologies",
        tech: ["Next.js", "TailwindCSS", "Framer Motion"],
        image: "/assets/work/portfolio1.png",
        url: "https://shubhams-portfolio.vercel.app/"
      },
      {
        title: "Purushotam Portfolio",
        description: "Professional portfolio showcasing development expertise",
        tech: ["React", "TailwindCSS", "Three.js"],
        image: "/assets/work/portfolio2.png",
        url: "#"
      },
      {
        title: "HiaiDo Cloud",
        description: "Cloud services platform with advanced infrastructure",
        tech: ["React", "Node.js", "AWS"],
        image: "/assets/work/hiaido.png",
        url: "https://hiaido.cloud/pricing"
      },
      {
        title: "EventEco",
        description: "Event management and planning platform",
        tech: ["Next.js", "MongoDB", "Express"],
        image: "/assets/work/eventeco.png",
        url: "#"
      },
      {
        title: "ShopO",
        description: "Full-featured e-commerce platform with admin panel",
        tech: ["MERN Stack", "Docker", "Redis"],
        image: "/assets/work/shopo.png",
        url: "#"
      },
      {
        title: "DevOps Guy",
        description: "Technical blog and DevOps resources platform",
        tech: ["Next.js", "MDX", "TailwindCSS"],
        image: "/assets/work/devops.png",
        url: "#"
      }
    ],
    designs: [
        {
          title: "Event Eco UI/UX",
          description: "Complete event platform design system",
          url: "https://www.figma.com/design/EK4l1PU0YAETTluC0qsfOz/EventEcho",
          tech: ["Figma", "UI/UX", "Design System"],
          image: "/assets/designs/eventeco.png"
        },
        {
          title: "DevOps Guy Platform",
          description: "DevOps learning platform interface design",
          url: "https://www.figma.com/design/ub4g6akB8S2j5yrNzpz9wF/The-DevOps-Guy",
          tech: ["Figma", "Prototype", "UI Design"],
          image: "/assets/designs/devopsguy.png"
        },
        {
          title: "HiaiDo Cloud Interface",
          description: "Cloud services dashboard and user interface",
          url: "https://www.figma.com/design/6qlkWJBGPyBwV7T53Hy8ib/HiAiDo",
          tech: ["Figma", "Dashboard", "Cloud UI"],
          image: "/assets/designs/hiaido.png"
        },
        {
          title: "KryptoMix",
          description: "Cryptocurrency trading platform design",
          url: "https://www.figma.com/design/6qlkWJBGPyBwV7T53Hy8ib/HiAiDo",
          tech: ["Figma", "Crypto", "Trading UI"],
          image: "/assets/designs/kryptomix.png"
        },
        {
          title: "Next Crest",
          description: "Corporate website design system",
          url: "https://www.figma.com/design/z3qaFvcr0Cvil6v81FEpzR/Our-Comapany-Design",
          tech: ["Figma", "Corporate", "Web Design"],
          image: "/assets/designs/nextcrest.png"
        }
      ]
  };

  return (
    <div className="min-h-screen bg-primary relative">
      {/* Background Effects - Exactly matching home page */}
      <div className="fixed inset-0">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(0,255,153,0.15),transparent_50%)]" 
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,255,153,0.15),transparent_50%)]" 
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" 
        />
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 pt-24">
        {/* Category Navigation */}
        <div className="flex justify-center space-x-6 mb-12">
          {['websites', 'designs'].map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setCategory(cat)}
              whileHover={{ scale: 1.05 }}
              className={`
                px-6 py-3 rounded-full transition-all duration-300
                ${category === cat 
                  ? 'bg-accent text-primary' 
                  : 'bg-[#1A2333]/50 text-accent border border-accent/20 hover:bg-accent/10'}
              `}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects[category].map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Work;