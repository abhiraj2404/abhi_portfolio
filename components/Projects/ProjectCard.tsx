"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { IconBrandGithub, IconBrandX } from "@tabler/icons-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  deployedUrl?: string;
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
      <div className="relative bg-neutral-900 rounded-xl md:p-6 h-full flex flex-col md:gap-1">
        <div className="aspect-video mb-4 overflow-hidden rounded-lg">
          <Link
            href={deployedUrl || githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-full transform group-hover:scale-105 transition duration-300"
            />
          </Link>
        </div>
        <h3 className="text-xl md:text-2xl font-bold mb-2 text-white px-4 md:px-0">
          {title}
        </h3>
        <p className="text-gray-400 mb-4 text-md md:text-base px-4 md:px-0">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6 px-4 md:px-0">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs md:text-sm rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4 pt-4 border-t border-zinc-800 px-4 md:px-0 mb-4 md:mb-0">
          {deployedUrl && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={deployedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 md:text-md p-2 text-sm rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-500 border border-emerald-500/20 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Site
            </motion.a>
          )}

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm md:text-md p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors"
          >
            <IconBrandGithub className="w-4 h-4" />
            GitHub
          </motion.a>
          {title == "SendX" && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={"https://x.com/crypt0_tracker"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm md:text-md p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors"
            >
              <IconBrandX className="w-4 h-4" />
              Twitter
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
