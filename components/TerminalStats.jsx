// components/TerminalStats.jsx
"use client";
import { motion } from "framer-motion";
import { Zap, Rocket, Code, GitBranch } from 'lucide-react';

const TerminalStats = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="relative"
    >
      {/* Terminal Window */}
      <div className="bg-[#1a1d24]/80 rounded-lg overflow-hidden border border-accent/10">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#151922]">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c841]" />
          </div>
          <span className="text-xs text-gray-500 font-mono">stats.sh</span>
        </div>

        {/* Terminal Content */}
        <div className="p-4 space-y-3">
          {[
            { icon: Zap, command: "experience.length", value: "4+ years", bgColor: "from-blue-500/10" },
            { icon: Rocket, command: "projects.completed", value: "26", bgColor: "from-purple-500/10" },
            { icon: Code, command: "technologies.mastered", value: "8", bgColor: "from-green-500/10" },
            { icon: GitBranch, command: "git.commits", value: "500+", bgColor: "from-yellow-500/10" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`group flex items-center bg-gradient-to-r ${stat.bgColor} to-transparent p-4 rounded-lg hover:translate-x-2 transition-all duration-300`}
            >
              <div className="w-6 flex justify-center">
                <stat.icon size={18} className="text-accent" />
              </div>
              <span className="text-accent ml-3">$</span>
              <span className="text-gray-400 ml-2 font-mono">{stat.command}</span>
              <span className="text-accent mx-2">→</span>
              <span className="text-white font-mono">{stat.value}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TerminalStats;