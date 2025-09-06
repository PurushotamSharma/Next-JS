"use client";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Twitter } from "lucide-react";
import TerminalStats from "@/components/TerminalStats";
import { useState, useEffect } from 'react';

export default function HomeClient() {
  const [command, setCommand] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [output, setOutput] = useState([]);

  // Social media links from your previous component
  const socialLinks = [
    { Icon: Github, url: "https://github.com/PurushotamSharma" },
    { Icon: Linkedin, url: "https://www.linkedin.com/in/purushotamsharma/" },
    { Icon: Twitter, url: "https://twitter.com/iampurushotamps" }
  ];

  const processCommand = (input) => {
    const commands = {
      'help': 'Available commands: help, about, skills, experience, contact, clear',
      'about': 'I am a DevOps engineer passionate about automation and cloud infrastructure.',
      'skills': 'Docker, Kubernetes, AWS, Jenkins, Terraform, Git, CI/CD',
      'experience': '3+ years of experience in DevOps and cloud technologies',
      'contact': 'Email: sharmapurushotam57@gmail.com | GitHub: @PurushotamSharma | Contact: 7383055495',
      'clear': 'CLEAR'
    };

    if (input.startsWith('ps aux | grep')) {
      const searchTerm = input.replace('ps aux | grep', '').trim();
      return `Searching for processes matching "${searchTerm}"...
USER       PID  %CPU %MEM      VSZ    RSS   TT  STAT STARTED      TIME COMMAND
purushotam 1234  2.0  1.0  5592824  166496  ??  S    9:00AM   0:15.94 ${searchTerm}
purushotam 5678  1.5  0.8  4492428  138240  ??  S    9:30AM   0:10.32 ${searchTerm}-worker`;
    }

    return commands[input.toLowerCase()] || `Command not found: ${input}. Type 'help' for available commands.`;
  };

  const handleSubmit = () => {
    if (command.trim()) {
      const response = processCommand(command);
      if (response === 'CLEAR') {
        setOutput([]);
      } else {
        setOutput([...output, { command, response }]);
      }
      setCommand('');
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const animations = {
    containerVariants: {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.3
        }
      }
    },
    itemVariants: {
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0 }
    }
  };

  return (
    <div className="min-h-screen bg-primary relative">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
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
      <div className="container pt-40">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <motion.div
            variants={animations.containerVariants}
            initial="hidden"
            animate="show"
            className="space-y-10"
          >
            <motion.div 
              variants={animations.itemVariants}
              whileHover={{ scale: 1.05, x: 10 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-[#1A2333]/50 rounded-full border border-accent/20 group cursor-pointer"
            >
              <span className="text-accent text-lg group-hover:tracking-wider transition-all duration-300">
                DevOps Engineer
              </span>
            </motion.div>

            <motion.div variants={animations.itemVariants} className="space-y-6">
              <h1 className="text-7xl font-bold leading-tight">
                Hello, I'm{" "}
                <motion.span 
                  className="text-accent block"
                  whileHover={{ scale: 1.02, x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Purushotam Sharma
                </motion.span>
              </h1>

              {/* Interactive Terminal */}
              <motion.div 
                variants={animations.itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-[#1A2333]/50 rounded-lg p-6 font-mono text-lg relative group overflow-hidden"
              >
                <div className="relative space-y-2">
                  {output.map((item, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-accent">❯</span>
                        <span>{item.command}</span>
                      </div>
                      <div className="text-gray-400 whitespace-pre-line pl-6">
                        {item.response}
                      </div>
                    </div>
                  ))}
                  <div className="flex items-center gap-2">
                    <span className="text-accent">❯</span>
                    <input
                      type="text"
                      value={command}
                      onChange={(e) => setCommand(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                      className="bg-transparent outline-none flex-1 text-white font-mono"
                      placeholder="Type a command (try 'help')..."
                      spellCheck="false"
                      aria-label="Terminal command input"
                    />
                    <span 
                      className={`w-2 h-5 bg-accent transition-opacity duration-100 ${showCursor ? 'opacity-100' : 'opacity-0'}`}
                    />
                  </div>
                </div>
              </motion.div>

              <motion.p 
                variants={animations.itemVariants}
                className="text-gray-400 text-xl leading-relaxed hover:text-gray-300 transition-colors duration-300"
              >
                A passionate DevOps engineer specializing in CI/CD pipelines,
                cloud infrastructure, and automation. Building robust systems
                that scale.
              </motion.p>
            </motion.div>

            <motion.div 
              variants={animations.itemVariants}
              className="flex items-center gap-6"
            >
              <motion.a
                href="/assets/PurushotamSharma.pdf"
                download
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 bg-accent text-primary px-8 py-4 rounded-full text-lg group relative overflow-hidden"
              >
                <motion.span 
                  className="relative flex items-center gap-3"
                  whileHover={{ scale: 1.05 }}
                >
                  <Download 
                    size={24}
                    className="group-hover:rotate-12 transition-transform duration-300" 
                  />
                  <span className="group-hover:tracking-wider transition-all duration-300">
                    Download CV
                  </span>
                </motion.span>
              </motion.a>

              <div className="flex gap-5">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={animations.itemVariants}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                      boxShadow: "0 0 20px rgba(0, 255, 153, 0.2)"
                    }}
                    className="p-4 rounded-full border border-accent/20 text-accent hover:bg-accent/10 transition-colors duration-300 relative group"
                    aria-label={`Visit my ${social.Icon.name} profile`}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-accent/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <social.Icon 
                      size={24}
                      className="group-hover:rotate-12 transition-transform duration-300" 
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Terminal Stats */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <TerminalStats />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
