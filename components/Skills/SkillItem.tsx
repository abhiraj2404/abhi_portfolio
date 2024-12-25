"use client";
import { motion } from "framer-motion";

interface SkillItemProps {
  name: string;
  color: string;
}

export default function SkillItem({ name, color }: SkillItemProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative flex items-center gap-2 p-3 rounded-lg bg-neutral-900/50 border border-white/10"
    >
      <div
        className="w-2 h-2 rounded-full"
        style={{ backgroundColor: color }}
      />
      <span className="text-gray-300 text-lg">{name}</span>
      <div className="absolute inset-x-0 h-px bottom-0 bg-gradient-to-r" />
    </motion.div>
  );
}
