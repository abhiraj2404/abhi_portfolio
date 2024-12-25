"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  deployedUrl: string;
  githubUrl: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  techStack,
  deployedUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300" />
      <div className="relative bg-neutral-900 rounded-xl p-6 h-full flex flex-col gap-1">
        <div className="aspect-video mb-4 overflow-hidden rounded-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-full transform group-hover:scale-105 transition duration-300"
          />
        </div>
        <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4 pt-4 border-t border-zinc-800">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={deployedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-md p-2  rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-500 border border-emerald-500/20 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Live Site
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-md p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
