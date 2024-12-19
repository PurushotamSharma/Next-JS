"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaAws, FaGithub, FaLinux, FaNodeJs, FaReact, FaPython, FaDocker, FaJava } from "react-icons/fa";
import {
    SiAzuredevops,
    SiTerraform,
    SiKubernetes,
    SiDocker,
    SiTailwindcss,
    SiNextdotjs,
    SiAnsible,
    SiJenkins,
    SiGrafana,
    SiPrometheus,
    SiMongodb,
    SiPostgresql,
    SiRedis,
    SiElasticsearch,
    SiApachekafka,
    SiRabbitmq,
    SiSonarqube,
    SiGithubactions,
    SiArgo,
    SiNewrelic,
    SiDatadog
  } from "react-icons/si";

// about data
const about = {
    title: "About Me",
    description:
        "I am a DevOps engineer with two years of experience in optimizing and automating software development processes. Skilled in CI/CD, IaC, and cloud services, I have successfully freelanced, delivering tailored solutions to enhance operational efficiency. Proficient with tools like Docker, Kubernetes, Jenkins, AWS, and Terraform, I thrive in dynamic environments and am committed to continuous learning and improvement. My goal is to bridge the gap between development and operations, fostering collaboration and innovation.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Purushotam Sharma",
        },
        {
            fieldName: "Phone",
            fieldValue: "(+91) 7383055495",
        },
        {
            fieldName: "Experience",
            fieldValue: "2+ Years",
        },
        {
            fieldName: "Skype",
            fieldValue: "purushotam.01",
        },
        {
            fieldName: "Nationality",
            fieldValue: "Indian",
        },
        {
            fieldName: "Email",
            fieldValue: "sharmapurushotam57@gmail.com",
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available",
        },
        {
            fieldName: "Languages",
            fieldValue: "English, Hindi",
        },
    ],
};

// experience data
const experience = {
    icon: "/assets/resume/badge.svg",
    title: "My Experience",
    description:
        "I have worked as a DevOps engineer for two years, optimizing and automating software development processes. I have successfully delivered tailored solutions to enhance operational efficiency, working with tools like Docker, Kubernetes, Jenkins, AWS, and Terraform. I have also freelanced, providing clients with CI/CD, IaC, and cloud services to meet their unique needs. I am committed to continuous learning and improvement, and my goal is to bridge the gap between development and operations, fostering collaboration and innovation.",
    items: [
        {
            company: "Credence Tech.",
            position: "DevOps Engineer",
            duration: "11/2023 - Present",
        },
        {
            company: "Quodars",
            position: "DevOps Engineer",
            duration: "02/2023 - 11/2023",
        },
        {
            company: "Upwork",
            position: "Freelancer",
            duration: "2022-Present",
        },
    ],
};

const education = {
    icon: "/assets/resume/cap.svg",
    title: "My Education",
    description:
        "I have worked as a DevOps engineer for two years, optimizing and automating software development processes. I have successfully delivered tailored solutions to enhance operational efficiency, working with tools like Docker, Kubernetes, Jenkins, AWS, and Terraform. I have also freelanced, providing clients with CI/CD, IaC, and cloud services to meet their unique needs. I am committed to continuous learning and improvement, and my goal is to bridge the gap between development and operations, fostering collaboration and innovation.",
    items: [
        {
            institution: "Charotar University",
            degree: "Master of Computer Application",
            duration: "2022-2024",
        },
        {
            institution: "MDSU University",
            degree: "Bachelor of Science",
            duration: "2019-2022",
        },
    ],
};

// Add more skills to the skillList
const skills = {
    title: "My Skills",
    description:
        "I have a wide range of skills in DevOps, cloud services, and software development. I am proficient in CI/CD, IaC, and cloud services, and have experience with tools like Docker, Kubernetes, Jenkins, AWS, and Terraform. I am also skilled in programming languages like Python, JavaScript, and Java, and have experience with front-end and back-end development. I am committed to continuous learning and improvement, and am always looking for new ways to enhance my skills and knowledge.",
    skillList: [
        {
            icon: FaAws,
            name: "AWS",
            category: "Cloud"
        },
        {
            icon: SiKubernetes,
            name: "Kubernetes",
            category: "Container Orchestration"
        },
        {
            icon: SiDocker,
            name: "Docker",
            category: "Containerization"
        },
        {
            icon: SiTerraform,
            name: "Terraform",
            category: "IaC"
        },
        {
            icon: SiAnsible,
            name: "Ansible",
            category: "Configuration Management"
        },
        {
            icon: SiJenkins,
            name: "Jenkins",
            category: "CI/CD"
        },
        {
            icon: FaGithub,
            name: "GitHub",
            category: "Version Control"
        },
        {
            icon: FaLinux,
            name: "Linux",
            category: "Operating System"
        },
        {
            icon: SiArgo,
            name: "ArgoCD",
            category: "GitOps"
        },
        {
            icon: SiGrafana,
            name: "Grafana",
            category: "Monitoring"
        },
        {
            icon: SiPrometheus,
            name: "Prometheus",
            category: "Monitoring"
        },
        {
            icon: SiNewrelic,
            name: "New Relic",
            category: "Monitoring"
        },
        {
            icon: SiDatadog,
            name: "Datadog",
            category: "Monitoring"
        },
        {
            icon: SiMongodb,
            name: "MongoDB",
            category: "Database"
        },
        {
            icon: SiPostgresql,
            name: "PostgreSQL",
            category: "Database"
        },
        {
            icon: SiRedis,
            name: "Redis",
            category: "Cache"
        },
        {
            icon: SiElasticsearch,
            name: "Elasticsearch",
            category: "Search"
        },
        {
            icon: SiApachekafka,
            name: "Kafka",
            category: "Message Queue"
        },
        {
            icon: SiRabbitmq,
            name: "RabbitMQ",
            category: "Message Queue"
        },
        {
            icon: SiSonarqube,
            name: "SonarQube",
            category: "Code Quality"
        },
        {
            icon: FaPython,
            name: "Python",
            category: "Programming"
        },
        {
            icon: FaNodeJs,
            name: "Node.js",
            category: "Programming"
        },
        {
            icon: FaJava,
            name: "Java",
            category: "Programming"
        },
        {
            icon: FaReact,
            name: "React",
            category: "Frontend"
        },
        {
            icon: SiNextdotjs,
            name: "Next.js",
            category: "Frontend"
        },
        {
            icon: SiTailwindcss,
            name: "Tailwind CSS",
            category: "Frontend"
        },
    ]
};

// ... keep your existing data objects (about, experience, education, skills) ...

const Resume = () => {
    const [activeTab, setActiveTab] = useState("experience");
    const [hoveredSkill, setHoveredSkill] = useState(null);

    // Group skills by category
    const groupedSkills = skills.skillList.reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
    }, {});

    // Animation variants for cards
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: "easeOut"
            }
        }),
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.2,
                ease: "easeInOut"
            }
        }
    };

    // Animation variants for tab content
    const tabContentVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            x: 20,
            transition: {
                duration: 0.3
            }
        }
    };

    // Animation variants for skill icons
    const skillIconVariants = {
        hover: {
            scale: 1.2,
            rotate: 360,
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative min-h-screen pt-24"
        >
            {/* Animated Background */}
            <div className="fixed inset-0 -z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 bg-[#0F172A]"
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
                />
                <motion.div
                    animate={{
                        opacity: [0.3, 0.5, 0.3],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(74,222,128,0.1),transparent_50%)]"
                />
            </div>

            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-10">
                    {/* Tab Buttons */}
                    <div className="flex flex-col w-full xl:w-[280px] bg-[#1A2333]/20 backdrop-blur-sm rounded-2xl p-4 h-fit gap-2">
                        {["experience", "education", "skills", "about"].map((tab, index) => (
                            <motion.button
                                key={tab}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    transition: { delay: index * 0.1 }
                                }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setActiveTab(tab)}
                                className={`w-full py-4 px-6 rounded-xl transition-all duration-300 ${activeTab === tab
                                        ? 'bg-[#4ADE80] text-gray-900'
                                        : 'bg-transparent text-white hover:bg-white/5'
                                    }`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </motion.button>
                        ))}
                    </div>

                    {/* Content Area */}
                    <div className="flex-1">
                        <AnimatePresence mode="wait">
                            {activeTab === "experience" && (
                                <motion.div
                                    key="experience"
                                    variants={tabContentVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className="bg-[#1A2333]/20 backdrop-blur-sm rounded-2xl p-8"
                                >
                                    <motion.h3
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-4xl font-bold mb-4"
                                    >
                                        {experience.title}
                                    </motion.h3>
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                        className="text-white/60 mb-8"
                                    >
                                        {experience.description}
                                    </motion.p>

                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                        {experience.items.map((item, index) => (
                                            <motion.div
                                                key={index}
                                                variants={cardVariants}
                                                initial="hidden"
                                                animate="visible"
                                                whileHover="hover"
                                                custom={index}
                                                className="group bg-[#232329]/50 backdrop-blur-sm rounded-xl p-6 border border-white/5 hover:border-[#4ADE80]/20 transition-all duration-300"
                                            >
                                                <motion.span
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ delay: index * 0.1 + 0.3 }}
                                                    className="inline-block px-3 py-1 rounded-full text-sm font-mono bg-[#4ADE80]/10 text-[#4ADE80] mb-4"
                                                >
                                                    {item.duration}
                                                </motion.span>
                                                <h3 className="text-xl font-semibold mb-2 group-hover:text-[#4ADE80] transition-colors">
                                                    {item.position}
                                                </h3>
                                                <div className="flex items-center gap-2 text-white/60">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]"></span>
                                                    <span>{item.company}</span>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === "skills" && (
                                <motion.div
                                variants={tabContentVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="bg-[#1A2333]/20 backdrop-blur-sm rounded-2xl p-8"
                              >
                                <motion.h3
                                  initial={{ opacity: 0, y: -20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  className="text-4xl font-bold mb-4"
                                >
                                  {skills.title}
                                </motion.h3>
                                <motion.p
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: 0.2 }}
                                  className="text-white/60 mb-8"
                                >
                                  {skills.description}
                                </motion.p>
                              
                                <div className="grid gap-8">
                                  {Object.entries(groupedSkills).map(([category, skillsList], categoryIndex) => (
                                    <motion.div
                                      key={category}
                                      initial={{ opacity: 0, y: 20 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ delay: categoryIndex * 0.1 }}
                                      className="bg-[#232329]/30 backdrop-blur-sm rounded-xl p-6 border border-white/5"
                                    >
                                      <h4 className="text-xl font-semibold mb-6 text-[#4ADE80] flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]"></div>
                                        {category}
                                      </h4>
                                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                                        {skillsList.map((skill, index) => {
                                          const IconComponent = skill.icon;
                                          return (
                                            <motion.div
                                              key={index}
                                              variants={cardVariants}
                                              initial="hidden"
                                              animate="visible"
                                              whileHover="hover"
                                              custom={index}
                                              className="group relative flex items-center gap-3 p-3 rounded-lg bg-[#1A2333]/40 border border-white/5 hover:border-[#4ADE80]/20 transition-all duration-300"
                                            >
                                              <motion.div
                                                variants={skillIconVariants}
                                                whileHover="hover"
                                                className="p-2 rounded-lg bg-[#4ADE80]/5 group-hover:bg-[#4ADE80]/10 transition-colors"
                                              >
                                                <IconComponent className="text-xl text-white/60 group-hover:text-[#4ADE80] transition-colors" />
                                              </motion.div>
                                              <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                                                {skill.name}
                                              </span>
                                            </motion.div>
                                          );
                                        })}
                                      </div>
                                    </motion.div>
                                  ))}
                                </div>
                              </motion.div>
                            )}

                            {activeTab === "education" && (
                                <motion.div
                                    key="education"
                                    variants={tabContentVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className="bg-[#1A2333]/20 backdrop-blur-sm rounded-2xl p-8"
                                >
                                    <motion.h3
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-4xl font-bold mb-4"
                                    >
                                        {education.title}
                                    </motion.h3>
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                        className="text-white/60 mb-8"
                                    >
                                        {education.description}
                                    </motion.p>

                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                        {education.items.map((item, index) => (
                                            <motion.div
                                                key={index}
                                                variants={cardVariants}
                                                initial="hidden"
                                                animate="visible"
                                                whileHover="hover"
                                                custom={index}
                                                className="group bg-[#232329]/50 backdrop-blur-sm rounded-xl p-6 border border-white/5 hover:border-[#4ADE80]/20 transition-all duration-300"
                                            >
                                                <motion.span
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ delay: index * 0.1 + 0.3 }}
                                                    className="inline-block px-3 py-1 rounded-full text-sm font-mono bg-[#4ADE80]/10 text-[#4ADE80] mb-4"
                                                >
                                                    {item.duration}
                                                </motion.span>
                                                <h3 className="text-xl font-semibold mb-2 group-hover:text-[#4ADE80] transition-colors">
                                                    {item.degree}
                                                </h3>
                                                <div className="flex items-center gap-2 text-white/60">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]"></span>
                                                    <span>{item.institution}</span>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === "about" && (
                                <motion.div
                                    key="about"
                                    variants={tabContentVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className="bg-[#1A2333]/20 backdrop-blur-sm rounded-2xl p-8"
                                >
                                    <motion.h3
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-4xl font-bold mb-4"
                                    >
                                        {about.title}
                                    </motion.h3>
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                        className="text-white/60 mb-8"
                                    >
                                        {about.description}
                                    </motion.p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        {about.info.map((item, index) => (
                                            <motion.div
                                                key={index}
                                                variants={cardVariants}
                                                initial="hidden"
                                                animate="visible"
                                                whileHover={{
                                                    scale: 1.02,
                                                    transition: { duration: 0.2 }
                                                }}
                                                custom={index}
                                                className="flex items-center justify-between gap-4 bg-[#232329]/50 backdrop-blur-sm rounded-xl p-4 border border-white/5 hover:border-[#4ADE80]/20 transition-all duration-300"
                                            >
                                                <motion.span
                                                    initial={{ x: -20, opacity: 0 }}
                                                    animate={{ x: 0, opacity: 1 }}
                                                    transition={{ delay: index * 0.1 }}
                                                    className="text-white/60"
                                                >
                                                    {item.fieldName}
                                                </motion.span>
                                                <motion.span
                                                    initial={{ x: 20, opacity: 0 }}
                                                    animate={{ x: 0, opacity: 1 }}
                                                    transition={{ delay: index * 0.1 }}
                                                    className="text-white font-medium"
                                                >
                                                    {item.fieldValue}
                                                </motion.span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Floating cursor glow effect */}
            <motion.div
                className="fixed w-[200px] h-[200px] rounded-full pointer-events-none z-0 hidden xl:block"
                animate={{
                    x: hoveredSkill ? -100 : 0,
                    y: hoveredSkill ? -100 : 0,
                    opacity: hoveredSkill ? 0.2 : 0
                }}
                transition={{ type: "spring", stiffness: 100 }}
                style={{
                    background: "radial-gradient(circle, rgba(74,222,128,0.2) 0%, transparent 70%)"
                }}
            />
        </motion.div>
    );
};

export default Resume;