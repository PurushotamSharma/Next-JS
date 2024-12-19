"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Terminal, Code2, Server } from "lucide-react";

const PageTransition = ({ children }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} className="relative">
        {/* Transition Overlay */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ 
            opacity: 0,
            transition: { delay: 1.2, duration: 0.4, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-[45] pointer-events-none"
        >
          {/* Background with grid and gradient */}
          <div className="absolute inset-0 bg-gray-900/95 backdrop-blur-sm">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,#4ADE8033,transparent_50%)]" />
          </div>

          {/* Terminal window */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl">
            <motion.div
              initial={{ width: 0 }}
              animate={{ 
                width: "100%",
                transition: { duration: 0.5, ease: "easeInOut" }
              }}
              className="h-8 bg-emerald-500/20 rounded overflow-hidden mb-4"
            />
            
            {/* DevOps icons */}
            <div className="flex justify-center gap-8">
              {[Terminal, Code2, Server].map((Icon, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{
                    scale: 1,
                    rotate: 0,
                    transition: {
                      duration: 0.4,
                      delay: i * 0.15,
                      type: "spring",
                      stiffness: 200
                    }
                  }}
                >
                  <Icon 
                    className="w-8 h-8 text-emerald-500" 
                    strokeWidth={1.5}
                  />
                </motion.div>
              ))}
            </div>
            
            {/* Loading text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.3, duration: 0.4 }
              }}
              className="text-center mt-6 font-mono text-emerald-500"
            >
              Deploying {pathname.slice(1) || 'home'}_
            </motion.div>
          </div>
        </motion.div>

        {/* Main Content */}
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;