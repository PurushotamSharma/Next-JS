"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// Updated services data with only the requested services
const services = [
  {
    num: "01",
    title: "UI/UX Design",
    description: "Create intuitive and engaging user experiences with our UI/UX design services. We focus on user-centered design principles to deliver interfaces that are both beautiful and functional.",
    href: "/services/ui-ux-design"
  },
  {
    num: "02",
    title: "DevOps Engineering",
    description: "Streamline your development and operations with our DevOps services. We implement CI/CD pipelines, infrastructure as code, and automated testing to enhance your software delivery lifecycle.",
    href: "/services/devops"
  },
  {
    num: "03",
    title: "Cloud Solutions",
    description: "Leverage the power of cloud computing with our comprehensive cloud services. We help you migrate, optimize, and manage your infrastructure on AWS, Azure, or Google Cloud Platform.",
    href: "/services/cloud"
  },
  {
    num: "04",
    title: "Web Development",
    description: "Build modern, responsive, and scalable web applications with our expert development team. We utilize the latest technologies to create powerful web solutions tailored to your business needs.",
    href: "/services/web-development"
  }
];

// ServiceCard Component
const ServiceCard = ({ num, title, description, href, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="p-8 rounded-2xl border border-white/10 backdrop-blur-sm transition-all duration-300 hover:border-white/20 bg-[#1A2333]/20">
        {/* Number Badge */}
        <div className="inline-block px-4 py-1 rounded-full text-sm font-mono border border-white/10 mb-6">
          {num}
        </div>

        {/* Title with Hover Effect */}
        <h2 className="text-3xl font-bold mb-4 text-white group-hover:text-[#4ADE80] transition-colors duration-300">
          {title}
        </h2>

        {/* Description */}
        <p className="text-white/60 mb-8 leading-relaxed">
          {description}
        </p>

        {/* Link Button */}
        <Link href={href} className="inline-flex items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-[#4ADE80] font-medium"
          >
            Learn more
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </motion.div>
        </Link>

        {/* Decorative Elements */}
        <div className="absolute -z-10 top-0 left-0 w-full h-full rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#4ADE80]/10 to-transparent" />
      </div>
    </motion.div>
  );
};

// Main Services Page Component
const ServicesPage = () => {
  return (
    <section className="relative min-h-screen pt-24">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-50">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-[#0F172A] bg-gradient-to-b from-gray-900 to-gray-800" />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* Radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(74,222,128,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 py-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto mb-16 text-center"
        >
          <div className="inline-block px-4 py-1 rounded-full text-sm font-mono border border-white/10 mb-6 text-white/60 bg-[#1A2333]/20">
            Our Services
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Comprehensive Digital Solutions
          </h1>
          <p className="text-white/60 text-lg">
            We offer a wide range of digital services to help your business grow and succeed in the modern digital landscape.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {services.map((service, index) => (
            <ServiceCard
              key={service.num}
              index={index}
              {...service}
            />
          ))}
        </div>

        {/* Contact CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Need a Custom Solution?
          </h2>
          <p className="text-white/60 mb-8">
            Let's discuss how we can help you achieve your goals
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#4ADE80] text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-[#4ADE80]/90 transition-colors"
            >
              Get in Touch
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPage;
