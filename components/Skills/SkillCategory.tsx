"use client";
import { motion } from "framer-motion";

interface SkillCategoryProps {
  title: string;
  children: React.ReactNode;
}

export default function SkillCategory({ title, children }: SkillCategoryProps) {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-semibold mb-6 text-white">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-2">
        {children}
      </div>
    </div>
  );
}
