"use client";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { CiMenuFries } from "react-icons/ci";
import { person } from "@/lib/person";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label="Open navigation menu"
          className="relative p-2 rounded-full bg-surface border border-accent/20"
        >
          <CiMenuFries className="text-[28px] text-accent" />
        </button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="bg-primary/95 backdrop-blur-lg border-l border-accent/10 p-0"
      >
        <div className="relative h-full flex flex-col p-6">
          <div className="mt-16 mb-10 text-center">
            <SheetClose asChild>
              <Link href="/" className="inline-flex items-center gap-3">
                <span className="text-2xl font-medium">
                  {person.givenName}
                  <span className="text-accent">.</span>
                </span>
                <div className="relative w-10 h-10">
                  <Image
                    src={person.imagePath}
                    alt={person.name}
                    fill
                    className="rounded-full border border-accent/20 object-cover"
                  />
                </div>
              </Link>
            </SheetClose>
          </div>

          <nav className="flex flex-col items-center gap-3" aria-label="Mobile">
            {person.navigation.map((link, index) => {
              const isActive =
                link.path === "/"
                  ? pathname === "/"
                  : pathname === link.path || pathname.startsWith(`${link.path}/`);
              return (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <SheetClose asChild>
                    <Link
                      href={link.path}
                      className={`block px-6 py-3 rounded-full text-lg transition-colors ${
                        isActive
                          ? "bg-surface text-accent"
                          : "text-white hover:text-accent"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </SheetClose>
                </motion.div>
              );
            })}
          </nav>

          <div className="mt-auto mb-8 text-center">
            <SheetClose asChild>
              <Link
                href="/contact"
                className="inline-flex px-8 py-3 bg-accent text-primary rounded-full font-medium hover:bg-accent-hover transition-all"
              >
                Contact
              </Link>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
