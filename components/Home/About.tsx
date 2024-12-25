"use client";
import { motion } from "framer-motion";
import { Spotlight } from "../ui/spotlight";
import { Card } from "../Card";

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Spotlight>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative h-full bg-gradient-to-r from-neutral-900/90 to-neutral-900/50 rounded-3xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-emerald-500 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:blur-3xl before:group-hover:opacity-10 after:absolute after:w-96 after:h-96 after:-right-40 after:-bottom-40 after:bg-emerald-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:blur-3xl after:group-hover:opacity-10"
            >
              <div className="relative h-full bg-neutral-900/90 rounded-3xl p-2">
                <img
                  alt="Profile picture"
                  className="w-full h-full object-cover rounded-3xl"
                  src="https://via.placeholder.com/400x400"
                />
              </div>
            </motion.div>
          </Spotlight>
          <div className="flex flex-col justify-center space-y-4">
            <p className="text-lg text-gray-300">
              I'm a passionate developer with expertise in building modern web
              applications. I specialize in creating responsive, user-friendly
              interfaces using the latest technologies.
            </p>
            <p className="text-lg text-gray-400">
              With years of experience in full-stack development, I bring ideas
              to life through clean code and innovative solutions.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
