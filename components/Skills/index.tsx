"use client";
import { motion } from "framer-motion";
import SkillCategory from "./SkillCategory";
import SkillItem from "./SkillItem";

const skillsData = {
  frontend: [
    { name: "React.js", color: "#61DAFB" },
    { name: "Tailwind", color: "#61DAFB" },
    { name: "Next.js", color: "#7928CA" },
    { name: "Redux", color: "#FF7846" },
    { name: "TypeScript", color: "#3178C6" },
    { name: "JavaScript", color: "#F7DF1E" },
  ],
  backend: [
    { name: "Node.js", color: "#339933" },
    { name: "Express.js", color: "#FFFFFF" },
    { name: "FastAPI", color: "#009688" },
    { name: "Prisma", color: "#2D3748" },
    { name: "Python", color: "#3776AB" },
  ],
  database: [
    { name: "PostgreSQL", color: "#336791" },
    { name: "MongoDB", color: "#47A248" },
    { name: "Firebase", color: "#FFCA28" },
  ],
};

export default function Skills() {
  return (
    <div
      className="py-20 mx-4 sm:mx-48 px-24 rounded-xl border border-blue-300"
      id="skills"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl text-center font-bold mb-20 text-white"
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-x-20 gap-y-10">
          <SkillCategory title="Frontend Development">
            {skillsData.frontend.map((skill, index) => (
              <SkillItem key={index} {...skill} />
            ))}
          </SkillCategory>
          <SkillCategory title="Backend Development">
            {skillsData.backend.map((skill, index) => (
              <SkillItem key={index} {...skill} />
            ))}
          </SkillCategory>
          <SkillCategory title="Database & Storage">
            {skillsData.database.map((skill, index) => (
              <SkillItem key={index} {...skill} />
            ))}
          </SkillCategory>
        </div>
      </div>
    </div>
  );
}