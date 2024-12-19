// components/TerminalInput.jsx
"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TerminalInput = () => {
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState([]);
  const [showCursor, setShowCursor] = useState(true);

  const processCommand = (input) => {
    const commands = {
      'help': 'Available commands: help, about, skills, contact, clear',
      'about': 'DevOps Engineer specializing in CI/CD pipelines and cloud infrastructure',
      'skills': 'Docker, Kubernetes, AWS, Jenkins, Terraform, Git',
      'contact': 'Email: sharmapurushotam57@gmail.com | GitHub: @PurushotamSharma | Contact: 7383055495',
      'clear': 'CLEAR'
    };

    if (input.startsWith('ps aux | grep')) {
      const searchTerm = input.replace('ps aux | grep', '').trim();
      return `Searching for processes matching "${searchTerm}"...
USER       PID  %CPU %MEM      VSZ    RSS   TT  STAT STARTED      TIME COMMAND
purushotam 1234  2.0  1.0  5592824  166496  ??  S    9:00AM   0:15.94 ${searchTerm}
purushotam 5678  1.5  0.8  4492428  138240  ??  S    9:30AM   0:10.32 ${searchTerm}-worker
`;
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

  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
      initial="hidden"
      animate="show"
      className="bg-[#1A2333] rounded-lg p-6 font-mono text-lg relative group overflow-hidden"
    >
      <motion.div 
        className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
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
            className="bg-transparent outline-none flex-1 text-white"
            placeholder="Type a command..."
            spellCheck="false"
          />
          <span 
            className={`w-2 h-5 bg-accent transition-opacity duration-100 ${showCursor ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default TerminalInput;