"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight, BsGlobe } from "react-icons/bs";
import { FaLock } from "react-icons/fa";

const ProjectCard = ({ project, index }) => {
  const imageExtension = project.url === "blog" ? ".svg" : ".png";
  const imagePath = project.image.endsWith(imageExtension) 
    ? project.image 
    : `${project.image.split('.')[0]}${imageExtension}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-xl overflow-hidden bg-[#1A2333]/50 border border-accent/20"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imagePath}
          alt={project.title}
          fill
          className="object-cover transform group-hover:scale-110 transition-all duration-700"
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

        {project.url === "blog" ? (
          <Link 
            href={`/blog/${project.id}`}
            className="inline-flex items-center text-accent hover:text-accent/80 group cursor-pointer"
          >
            <BsGlobe className="mr-2" />
            <span>View Case Study</span>
            <BsArrowUpRight className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ml-2" />
          </Link>
        ) : project.url !== "#" ? (
          <a 
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-accent hover:text-accent/80 group cursor-pointer"
          >
            <BsGlobe className="mr-2" />
            <span>View Live</span>
            <BsArrowUpRight className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ml-2" />
          </a>
        ) : (
          <div className="inline-flex items-center text-gray-400 cursor-not-allowed">
            <FaLock className="mr-2 text-sm" />
            <span>Private Project</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Work = () => {
  const [category, setCategory] = useState('websites');
  
  const projects = {
    websites: [
      {
        title: "Shubham Portfolio",
        description: "Personal portfolio website built with modern web technologies",
        tech: ["Next.js", "TailwindCSS", "Framer Motion"],
        image: "/assets/work/shubham-portfolio",
        url: "https://shubhams-portfolio.vercel.app/",
        category: "Portfolio"
      },
      {
        title: "Purushotam Portfolio",
        description: "Professional portfolio showcasing development expertise",
        tech: ["React", "TailwindCSS", "Three.js"],
        image: "/assets/work/purushotam",
        url: "https://purushotamsharma.netlify.app/",
        category: "Portfolio"
      },
      {
        title: "HiaiDo Cloud",
        description: "Cloud services platform with advanced infrastructure",
        tech: ["React", "Node.js", "AWS"],
        image: "/assets/work/hiaido",
        url: "https://hiaido.cloud/pricing",
        category: "SaaS"
      },
      {
        title: "EventEco",
        description: "Event management and planning platform",
        tech: ["Next.js", "MongoDB", "Express"],
        image: "/assets/work/event",
        url: "#",
        category: "Platform"
      },
      {
        title: "ShopO",
        description: "Full-featured e-commerce platform with admin panel",
        tech: ["MERN Stack", "Docker", "Redis"],
        image: "/assets/work/ShopO",
        url: "https://shop0-front-end.vercel.app/",
        category: "E-commerce"
      },
      {
        title: "DevOps Guy",
        description: "Technical blog and DevOps resources platform",
        tech: ["Next.js", "MDX", "TailwindCSS"],
        image: "/assets/work/devopsguy",
        url: "https://devopsguy-frontend.vercel.app/",
        category: "Blog"
      }
    ],
    devops: [
      {
        title: "CI/CD Pipeline Automation",
        description: "Built an automated pipeline for a fintech startup that reduced deployment time from 3-4 hours to 15 minutes with 99.5% success rate",
        tech: ["Jenkins", "GitHub Actions", "Docker", "Kubernetes", "ArgoCD", "SonarQube"],
        image: "/assets/work/cicd-pipeline",
        url: "blog",
        id: "cicd-pipeline-automation",
        category: "DevOps"
      },
      {
        title: "Infrastructure as Code Project",
        description: "Implemented IaC for an e-commerce company that reduced cloud costs by 32% and eliminated configuration drift between environments",
        tech: ["Terraform", "AWS CloudFormation", "Ansible", "GitOps", "HashiCorp Vault"],
        image: "/assets/work/iac-project",
        url: "blog",
        id: "infrastructure-as-code",
        category: "Infrastructure"
      },
      {
        title: "Microservices Monitoring System",
        description: "Developed comprehensive monitoring solution with anomaly detection that improved incident response time by 75%",
        tech: ["Prometheus", "Grafana", "ELK Stack", "Alertmanager", "OpenTelemetry"],
        image: "/assets/work/monitoring-system",
        url: "blog",
        id: "microservices-monitoring",
        category: "Monitoring"
      },
      {
        title: "Container Orchestration Platform",
        description: "Built Kubernetes platform handling 200+ microservices with automated scaling, securing 99.99% uptime for critical workloads",
        tech: ["Kubernetes", "Helm", "Istio", "Docker", "Harbor", "Calico"],
        image: "/assets/work/container-orchestration",
        url: "blog",
        id: "container-platform",
        category: "Containers"
      },
      {
        title: "GitOps Workflow Implementation",
        description: "Established GitOps practices for a healthcare company that accelerated deployment frequency by 400% while ensuring compliance",
        tech: ["ArgoCD", "Flux", "Kubernetes", "GitHub Actions", "Kustomize"],
        image: "/assets/work/gitops-workflow",
        url: "blog",
        id: "gitops-implementation",
        category: "GitOps"
      }
    ],
    cloud: [
      {
        title: "Multi-Cloud Disaster Recovery",
        description: "Implemented DR solution across AWS and GCP that reduced recovery time from 8+ hours to under 10 minutes with 40% cost reduction",
        tech: ["AWS", "GCP", "Terraform", "CloudFormation", "Database Replication", "Global Load Balancing"],
        image: "/assets/work/disaster-recovery",
        url: "blog",
        id: "multi-cloud-disaster-recovery",
        category: "Disaster Recovery"
      },
      {
        title: "Serverless E-commerce Backend",
        description: "Built scalable serverless architecture that handled 10x Black Friday traffic with zero downtime while reducing costs by 65%",
        tech: ["AWS Lambda", "DynamoDB", "API Gateway", "CloudFront", "Step Functions", "SQS", "SNS"],
        image: "/assets/work/serverless-ecommerce",
        url: "blog",
        id: "serverless-ecommerce-backend",
        category: "Serverless"
      },
      {
        title: "Cloud-Native Data Pipeline",
        description: "Developed real-time data processing pipeline that reduced latency from 12+ hours to sub-minute for a retail analytics company",
        tech: ["Apache Kafka", "Kubernetes", "Spark", "S3", "Airflow", "Delta Lake"],
        image: "/assets/work/data-pipeline",
        url: "blog",
        id: "cloud-native-data-pipeline",
        category: "Data Engineering"
      },
      {
        title: "Secure Cloud Infrastructure",
        description: "Designed HIPAA-compliant cloud architecture for healthcare tech with zero security incidents and 85% automated compliance checks",
        tech: ["AWS Control Tower", "Security Hub", "CloudTrail", "GuardDuty", "KMS", "WAF"],
        image: "/assets/work/secure-cloud",
        url: "blog",
        id: "secure-cloud-infrastructure",
        category: "Security"
      },
      {
        title: "Auto-scaling Microservices Platform",
        description: "Implemented Kubernetes-based platform with service mesh for a media streaming service, reducing infrastructure costs by 40%",
        tech: ["EKS", "HPA", "Istio", "CloudWatch", "Prometheus", "Grafana", "FluentD"],
        image: "/assets/work/auto-scaling",
        url: "blog",
        id: "auto-scaling-microservices",
        category: "Microservices"
      },
      {
        title: "FinTech Cloud Migration",
        description: "Led zero-downtime migration of legacy financial systems to cloud-native architecture, improving transaction processing by 60%",
        tech: ["Azure", "Kubernetes", "Terraform", "Azure Database", "Front Door", "Security Center"],
        image: "/assets/work/fintech-migration",
        url: "blog",
        id: "fintech-cloud-migration",
        category: "Migration"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-primary relative">
      {/* Background Effects */}
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
          {['websites', 'devops', 'cloud'].map((cat) => (
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
              {cat === 'devops' ? 'DevOps' : cat === 'cloud' ? 'Cloud' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* View Toggle for DevOps and Cloud */}
        {(category === 'devops' || category === 'cloud') && (
          <div className="flex justify-center mb-8">
            <Link href="/blog">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-accent text-primary rounded-full"
              >
                View All Case Studies
              </motion.button>
            </Link>
          </div>
        )}

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects[category].map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index} 
            />
          ))}
        </motion.div>

        {/* CTA for DevOps and Cloud */}
        {(category === 'devops' || category === 'cloud') && (
          <div className="mt-16 bg-[#1A2333]/50 border border-accent/20 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Need Professional {category === 'devops' ? 'DevOps' : 'Cloud'} Services?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I provide expert {category === 'devops' ? 'DevOps' : 'Cloud'} freelance services with proven results. 
              Let's discuss how I can help optimize your infrastructure and workflows.
            </p>
            <Link 
              href="/consultation" 
              className="inline-block px-8 py-3 bg-accent text-primary font-semibold rounded-full hover:bg-accent/90 transition-colors"
            >
              Schedule a Free Consultation
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Work;