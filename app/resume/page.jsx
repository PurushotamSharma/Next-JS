"use client";
import { FaAws, FaGithub, FaLinux, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiAzuredevops,
  SiTerraform,
  SiKubernetes,
  SiDocker,
  SiTailwindcss,
  SiNextdotjs,
  SiAnsible,
  SiJenkins,
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

// skills data
const skills = {
  title: "My Skills",
  description:
    "I have a wide range of skills in DevOps, cloud services, and software development. I am proficient in CI/CD, IaC, and cloud services, and have experience with tools like Docker, Kubernetes, Jenkins, AWS, and Terraform. I am also skilled in programming languages like Python, JavaScript, and Java, and have experience with front-end and back-end development. I am committed to continuous learning and improvement, and am always looking for new ways to enhance my skills and knowledge.",
  skillList: [
    {
      icon: FaAws,
      name: "AWS",
    },
    {
      icon: FaGithub,
      name: "GitHub",
    },
    {
      icon: FaLinux,
      name: "Linux",
    },
    {
      icon: FaNodeJs,
      name: "Node.js",
    },
    {
      icon: FaReact,
      name: "React",
    },
    {
      icon: SiAzuredevops,
      name: "Azure DevOps",
    },
    {
      icon: SiDocker,
      name: "Docker",
    },
    {
      icon: SiAnsible,
      name: "Ansible",
    },
    {
      icon: SiJenkins,
      name: "Jenkins",
    },
    {
      icon: SiKubernetes,
      name: "Kubernetes",
    },
    {
      icon: SiNextdotjs,
      name: "Next.js",
    },
    {
      icon: SiTailwindcss,
      name: "Tailwind CSS",
    },
    {
      icon: SiTerraform,
      name: "Terraform",
    },
  ],
};

import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    const IconComponent = skill.icon;
                    return (
                      <li
                        key={index}
                        className="group bg-[#232329] h-[150px] py-6 px-10 rounded-xl flex flex-col justify-center items-center transition-all duration-300 relative"
                      >
                        <IconComponent className="text-6xl text-white mb-2 group-hover:text-accent transition-all duration-300" />
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-[120px] h-[30px] bg-white opacity-0 group-hover:opacity-100 flex justify-center items-center rounded-xl">
                          <p className="text-black text-xs capitalize">
                            {skill.name}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {about.info.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between sm:justify-start sm:gap-4"
                    >
                      <span className="font-bold text-white/80">
                        {item.fieldName}:
                      </span>
                      <span className="text-white/60">{item.fieldValue}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
