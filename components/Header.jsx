// components/Header.jsx
"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 w-full z-50 py-6"
    >
      <div className="container mx-auto relative flex justify-center">
        <motion.div 
          className="bg-[#1A2333]/20 backdrop-blur-md border border-white/5 rounded-full px-6 py-3 flex items-center gap-8 hover:bg-[#1A2333]/30 transition-colors duration-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <motion.span 
              className="text-xl font-mono text-white/90"
              whileHover={{ scale: 1.05 }}
            >
              Purushotam<span className="text-accent">.</span>
            </motion.span>
            <motion.div
              whileHover={{ rotate: 5 }}
              className="relative w-8 h-8"
            >
              <Image
                src="/assets/avatar.svg"
                alt="Purushotam"
                fill
                className="rounded-full border border-accent/20"
              />
            </motion.div>
          </Link>

          {/* Navigation */}
          <div className="hidden xl:flex">
            <Nav />
          </div>

          {/* Hire Me Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden xl:flex px-5 py-2 bg-accent text-primary rounded-full hover:bg-accent-hover transition-all duration-300"
          >
            Hire Me
          </motion.button>
        </motion.div>

        {/* Mobile Menu */}
        <div className="xl:hidden absolute right-4">
          <MobileNav />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;