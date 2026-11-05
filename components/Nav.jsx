"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { person } from "@/lib/person";

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-2" aria-label="Primary">
      {person.navigation.map((link) => {
        const isActive =
          link.path === "/"
            ? pathname === "/"
            : pathname === link.path || pathname.startsWith(`${link.path}/`);
        return (
          <Link href={link.path} key={link.path}>
            <motion.div className="relative group px-3 py-2" whileHover={{ scale: 1.03 }}>
              <span
                className={`text-[15px] font-medium transition-colors duration-300 ${
                  isActive ? "text-accent" : "text-snow/75 group-hover:text-snow"
                }`}
              >
                {link.name}
              </span>
              {isActive && (
                <motion.div
                  layoutId="navIndicator"
                  className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent"
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
