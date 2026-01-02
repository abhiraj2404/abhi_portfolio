"use client";
import { motion } from "framer-motion";
import ProjectCard from "@/components/Projects/ProjectCard";
import { Spotlight } from "@/components/ui/spotlight";
import data from "@/data.json";

const { projectsData: projects, minorProjectsData: minorProjects } = data;

export default function ProjectsPage() {
  return (
    <main className="min-h-screen max-w-screen">
      <Spotlight>
        <div className="pt-40 px-6 md:px-40 pb-20 mx-auto">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-4xl font-bold mb-20 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500"
          >
            My Projects
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* minor projects  */}
        <div className="mx-auto px-6 py-32 md:mx-40 border-t border-zinc-800">
          {/* <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-4xl font-bold mb-20 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500"
          >
            Minor Projects
          </motion.h1> */}

          <div className="grid md:grid-cols-3 gap-12 md:gap-20">
            {minorProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>
      </Spotlight>
    </main>
  );
}
