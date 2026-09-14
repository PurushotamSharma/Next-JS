"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { person } from "@/lib/person";

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-0.5" aria-label="Primary">
      {person.navigation.map((link) => {
        const isActive =
          link.path === "/"
            ? pathname === "/"
            : pathname === link.path || pathname.startsWith(`${link.path}/`);
        return (
          <Link href={link.path} key={link.path}>
            <motion.div className="relative group px-2 py-2" whileHover={{ scale: 1.03 }}>
              <span
                className={`text-[13px] transition-colors duration-300 ${
                  isActive ? "text-accent" : "text-white/80 group-hover:text-accent"
                }`}
              >
                {link.name}
              </span>
              {isActive && (
                <motion.div
                  layoutId="navIndicator"
                  className="absolute bottom-0 left-1.5 right-1.5 h-0.5 bg-accent"
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
