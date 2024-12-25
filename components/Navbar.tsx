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
                <a
                  className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500"
                  href="/"
                >
                  PORTFOLIO
                </a>
              </div>
              <div className="flex sm:items-center sm:space-x-8">
                <NavLink href="/" className="hidden sm:flex">
                  About
                </NavLink>
                <NavLink href="/projects" className="mr-2 sm:mr-0">
                  Projects
                </NavLink>
                <NavLink href="/#skills" className="hidden sm:flex">
                  Skills
                </NavLink>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/#contact"
                  className="hidden sm:flex px-4 py-2 rounded-lg bg-blue-500/10 hover:bg-vlue-500/20 text-blue-500 border border-blue-500/20 transition-colors"
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
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href={href}
      className={`text-gray-300 hover:text-white transition-colors ${className}`}
    >
      {children}
    </motion.a>
  );
}
