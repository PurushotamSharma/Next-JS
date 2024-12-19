'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../app/context/ThemeContext';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, handleThemeChange } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleThemeChange}
      className={`fixed top-24 right-4 z-50 p-2 rounded-full backdrop-blur-sm transition-colors duration-200 ${
        theme === 'dark' 
          ? 'bg-white/10 hover:bg-white/20'
          : 'bg-gray-100 hover:bg-gray-200'
      }`}
    >
      {theme === 'light' ? (
        <Moon className="w-6 h-6 text-slate-700" />
      ) : (
        <Sun className="w-6 h-6 text-yellow-400" />
      )}
    </motion.button>
  );
}