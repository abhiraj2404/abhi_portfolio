"use client";
import { motion } from "framer-motion";
import { Spotlight } from "./ui/spotlight";

export default function Navigation() {
  return (
    <nav className="fixed top-0 z-50 w-full">
      <Spotlight>
        <div className="relative border-b border-white/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0">
                <p className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                  PORTFOLIO
                </p>
              </div>
              <div className="hidden sm:flex sm:items-center sm:space-x-8">
                <NavLink href="/">About</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/#skills">Skills</NavLink>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/#contact"
                  className="px-4 py-2 rounded-lg bg-blue-500/10 hover:bg-vlue-500/20 text-blue-500 border border-blue-500/20 transition-colors"
                >
                  Contact Me
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </Spotlight>
    </nav>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href={href}
      className="text-gray-300 hover:text-white transition-colors"
    >
      {children}
    </motion.a>
  );
}
