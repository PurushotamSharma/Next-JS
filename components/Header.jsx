"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { person } from "@/lib/person";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 w-full z-50 py-4"
    >
      <div className="container mx-auto relative flex justify-center">
        <motion.div
          className="bg-ink text-snow shadow-[0_10px_30px_rgba(0,0,0,0.12)] rounded-full px-4 md:px-6 py-2.5 flex items-center gap-4 md:gap-8 max-w-full"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-lg font-display font-bold text-snow">
              {person.givenName}
              <span className="text-accent">.</span>
            </span>
            <div className="relative w-7 h-7">
              <Image
                src={person.avatarPath}
                alt={person.name}
                fill
                className="rounded-full object-cover"
              />
            </div>
          </Link>

          <div className="hidden md:flex">
            <Nav />
          </div>

          <Link href="/contact" className="hidden md:flex">
            <span className="px-5 py-2 bg-accent text-snow rounded-full text-sm font-semibold hover:bg-accent-hover transition-all duration-300">
              Contact
            </span>
          </Link>
        </motion.div>

        <div className="md:hidden absolute right-4 top-1/2 -translate-y-1/2">
          <MobileNav />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
