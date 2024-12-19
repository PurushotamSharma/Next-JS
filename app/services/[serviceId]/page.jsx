"use client";

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Target,
  Phone,
  Calendar,
  Clock,
  Users,
  Quote,
  Check
} from "lucide-react";
import Link from "next/link";
import { services } from '@/lib/services-data';

// Testimonial Card Component
const TestimonialCard = ({ testimonial }) => (
  <div className="flex-none w-full md:w-[400px] p-6 rounded-2xl backdrop-blur-sm bg-[#1A2333]/20 border border-white/10 hover:border-[#4ADE80]/20 transition-colors duration-300">
    <div className="flex flex-col h-full">
      <Quote className="w-8 h-8 text-[#4ADE80]/20 mb-4" />
      <p className="text-white/80 mb-6 italic leading-relaxed">"{testimonial.testimonial}"</p>
      <div className="mt-auto flex items-center gap-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover border border-[#4ADE80]/20"
        />
        <div>
          <h4 className="font-semibold text-[#4ADE80]">{testimonial.name}</h4>
          <p className="text-sm text-white/60">{testimonial.position}</p>
        </div>
      </div>
    </div>
  </div>
);

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CTO, TechCorp Solutions",
    company: "TechCorp Solutions",
    image: "/api/placeholder/100/100",
    testimonial: "The cloud migration service provided exceptional results. Our infrastructure is now more efficient and scalable than ever before."
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "IT Director, GlobalTech",
    company: "GlobalTech Industries",
    image: "/api/placeholder/100/100",
    testimonial: "Outstanding service! The team's expertise in cloud architecture helped us reduce costs by 40% while improving performance."
  },
  // ... add more testimonials as needed
];

export default function ServiceDetailPage({ params }) {
  const [showScheduler, setShowScheduler] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const scale = useTransform(scrollY, [0, 200], [1, 0.95]);

  const service = services.find(s =>
    s.href.split('/').pop() === params.serviceId
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  if (!service) {
    return (
      <div className="relative min-h-screen pt-24">
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[#0F172A]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(74,222,128,0.1),transparent_50%)]" />
        </div>
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-bold mb-4 text-white">Service Not Found</h1>
          <Link href="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#4ADE80] text-gray-900 px-8 py-3 rounded-lg font-medium"
            >
              Back to Services
            </motion.button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen pt-24">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        {/* Dark background */}
        <div className="absolute inset-0 bg-[#0F172A]" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* Radial gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(74,222,128,0.1),transparent_50%)]" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(74,222,128,0.1),transparent_50%)]"
        />
      </div>

      <main className="container mx-auto max-w-6xl px-4">
        {/* Back to Services Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link href="/services">
            <motion.div
              whileHover={{ x: -5 }}
              className="inline-flex items-center text-white/60 hover:text-white gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Services</span>
            </motion.div>
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.section
          className="py-20 text-center relative"
          style={{ opacity, scale }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="inline-block px-4 py-1 rounded-full text-sm font-mono border border-white/10 mb-6 bg-[#1A2333]/20 backdrop-blur-sm"
            >
              {service.num}
            </motion.span>
            <h1 className="text-5xl font-bold mb-6 text-white">
              {service.title}
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-lg text-white/60"
            >
              {service.description}
            </motion.p>
          </motion.div>
        </motion.section>

        {/* What We Offer Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 border-t border-white/10"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-12 text-white">
            What We Offer
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="group p-8 rounded-2xl backdrop-blur-sm bg-[#1A2333]/20 border border-white/10 hover:border-[#4ADE80]/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="bg-[#4ADE80]/10 p-3 rounded-lg"
                  >
                    <CheckCircle2 className="w-6 h-6 text-[#4ADE80]" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-[#4ADE80] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Process Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 border-t border-white/10"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-12 text-white">
            Our Process
          </motion.h2>
          <div className="space-y-6">
            {service.workflow.map((step, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="p-8 rounded-2xl backdrop-blur-sm bg-[#1A2333]/20 border border-white/10 hover:border-[#4ADE80]/30"
              >
                <div className="flex items-center gap-4 mb-4">
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-[#4ADE80]/10 text-[#4ADE80] font-mono"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </motion.span>
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                </div>
                <p className="text-white/60 pl-12">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 border-t border-white/10"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">What Our Clients Say</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Discover how we've helped businesses transform their {service.title.toLowerCase()} infrastructure
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-[#0F172A] to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-[#0F172A] to-transparent z-10" />

            <div className="overflow-hidden">
              <div className="flex flex-nowrap gap-6 animate-scroll">
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                  <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 border-t border-white/10"
        >
          <motion.div
            variants={itemVariants}
            className="text-center backdrop-blur-sm bg-[#1A2333]/20 border border-white/10 rounded-2xl p-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#4ADE80]/10 via-transparent to-blue-500/10 opacity-50" />

            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6 text-white">Ready to Transform Your Business?</h2>
              <p className="text-white/60 mb-12 max-w-2xl mx-auto">
                Schedule a free consultation to discuss how our {service.title.toLowerCase()} solutions can help you achieve your goals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/consultation">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#4ADE80] text-gray-900 px-8 py-3 rounded-lg font-medium flex items-center justify-center gap-2 w-full sm:w-auto hover:bg-[#4ADE80]/90 transition-colors"
                  >
                    <span>Schedule Free Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border border-white/20 hover:border-[#4ADE80] text-white px-8 py-3 rounded-lg font-medium backdrop-blur-sm transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Book a Call</span>
                  </motion.button>
                </Link>
              </div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 text-white/40 text-sm flex flex-col sm:flex-row items-center justify-center gap-6"
              >
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>30-minute free consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Flexible scheduling</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>Expert team members</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 border-t border-white/10"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-12 text-white">
            Key Benefits
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="flex items-start gap-4 p-6 rounded-xl backdrop-blur-sm bg-[#1A2333]/20 border border-white/10 hover:border-[#4ADE80]/30"
              >
                <CheckCircle2 className="w-5 h-5 text-[#4ADE80] mt-1 flex-shrink-0" />
                <span className="text-white/80">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
}