"use client";
import { motion } from "framer-motion";
import ProjectCard from "@/components/Projects/ProjectCard";
import { Spotlight } from "@/components/ui/spotlight";

const projects = [
  {
    title: "Solana Launchpad",
    description:
      "A Token Launchpad for creating and managing your own token on Solana.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/clipify-back.appspot.com/o/clips%2FrN1ZL664yREnfAexDiN3%2FScreenshot%202024-12-18%20161103.png?alt=media&token=06704b55-923d-4349-95d5-da59994dac33",
    techStack: ["NextJS", "Solana/web3.js", "MongoDB", "Pinata", "IPFS"],
    deployedUrl: "https://solanatokenlaunchpad.vercel.app",
    githubUrl: "https://github.com/abhiraj2404/Token_launchpad",
  },
  {
    title: "SendX",
    description:
      "A twitter bot and ai agent to send crpto to anyone on X with just their username.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/clipify-back.appspot.com/o/clips%2FrN1ZL664yREnfAexDiN3%2FsendX.jpg?alt=media&token=50490022-9723-4442-abbc-69c9d3b80f46",
    techStack: ["Next.js", "TypeScript", "Node.js", "Langchain", "Ollama"],
    deployedUrl: "https://sendx-pi.vercel.app",
    githubUrl: "https://github.com/abhiraj2404/SendX_frontend",
  },
  {
    title: "Aurelia",
    description:
      "Mint your favourite photos as unique NFTs and keep them forever on the blockchain, everything cost free.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/clipify-back.appspot.com/o/clips%2FrN1ZL664yREnfAexDiN3%2FScreenshot%202024-12-25%20215545.png?alt=media&token=5b12cbfc-4bdf-48fc-9a42-38454bf0768a",
    techStack: ["NextJS", "Solidity", "Pinata", "Thirdweb"],
    deployedUrl: "https://aurelia-ten.vercel.app",
    githubUrl: "https://github.com/abhiraj2404/Aurelia",
  },
  {
    title: "Gamejam",
    description:
      "A visually appealing, UI intensive website designed and developed for the annual Global gamejam",
    image:
      "https://firebasestorage.googleapis.com/v0/b/clipify-back.appspot.com/o/clips%2FrN1ZL664yREnfAexDiN3%2FScreenshot%202024-12-25%20220428.png?alt=media&token=9c15769b-af14-4b46-a81e-b087706c7b27",
    techStack: ["React", "TypeScript", "Three.js", "Tailwind", "Cloudflare"],
    deployedUrl: "https://gamejam2024.pages.dev",
    githubUrl: "https://github.com/abhiraj2404/gamejam_2024",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen max-w-screen">
      <Spotlight>
        <div className="p-40 mx-auto">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-4xl font-bold mb-20 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500"
          >
            My Projects
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-20">
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
      </Spotlight>
    </main>
  );
}
