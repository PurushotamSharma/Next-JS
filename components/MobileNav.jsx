// components/MobileNav.jsx
"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { CiMenuFries } from "react-icons/ci";
import { 
  Home, 
  Layers, 
  FileText, 
  Briefcase, 
  MessageSquare 
} from "lucide-react";

const links = [
  { name: "home", path: "/", icon: Home },
  { name: "services", path: "/services", icon: Layers },
  { name: "resume", path: "/resume", icon: FileText },
  { name: "work", path: "/work", icon: Briefcase },
  { name: "contact", path: "/contact", icon: MessageSquare },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative p-2 rounded-full bg-[#1A2333]/50 border border-accent/20"
        >
          <CiMenuFries className="text-[32px] text-accent" />
        </motion.button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-primary/95 backdrop-blur-lg border-l border-accent/10 p-0">
        <div className="relative h-full">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(0,255,153,0.15),transparent_50%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          </div>

          <div className="h-full flex flex-col p-6 relative">
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-20 mb-20 text-center"
            >
              <Link href="/" className="inline-flex items-center gap-3">
                <span className="text-3xl font-mono">
                  Purushotam<span className="text-accent">.</span>
                </span>
                <div className="relative w-10 h-10">
                  <Image
                    src="/assets/photo.png"
                    alt="Purushotam"
                    fill
                    className="rounded-full border border-accent/20"
                  />
                </div>
              </Link>
            </motion.div>

            {/* Nav Links */}
            <nav className="flex flex-col justify-center items-center gap-6">
              {links.map((link, index) => {
                const isActive = link.path === pathname;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link href={link.path}>
                      <motion.div 
                        className={`flex items-center gap-3 px-6 py-3 rounded-full
                          ${isActive ? 'bg-[#1A2333]/50 text-accent' : 'text-white'}
                          hover:bg-[#1A2333]/30 group transition-all duration-300`}
                        whileHover={{ x: 10 }}
                      >
                        <link.icon 
                          size={22} 
                          className="group-hover:rotate-12 transition-transform duration-300"
                        />
                        <span className="text-xl capitalize">{link.name}</span>
                      </motion.div>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Hire Me Button */}
            <motion.div 
              className="mt-auto mb-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-accent text-primary rounded-full font-medium hover:bg-accent-hover transition-all duration-300"
              >
                Hire Me
              </motion.button>
            </motion.div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;