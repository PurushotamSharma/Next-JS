// components/Nav.jsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, Layers, FileText, Briefcase, MessageSquare } from "lucide-react";

const links = [
  { name: "home", path: "/", icon: Home },
  { name: "services", path: "/services", icon: Layers },
  { name: "resume", path: "/resume", icon: FileText },
  { name: "work", path: "/work", icon: Briefcase },
  { name: "contact", path: "/contact", icon: MessageSquare },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-1">
      {links.map((link, index) => {
        const isActive = link.path === pathname;
        return (
          <Link href={link.path} key={index}>
            <motion.div
              className="relative group px-3 py-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className={`flex items-center gap-2 rounded-full transition-all duration-300
                ${isActive ? 'text-accent' : 'text-white'}`}
              >
                <link.icon 
                  size={16} 
                  className="group-hover:text-accent transition-colors" 
                />
                <span className="group-hover:text-accent transition-colors capitalize">
                  {link.name}
                </span>
              </div>
              {isActive && (
                <motion.div 
                  layoutId="navIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </motion.div>
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;