"use client";
import { motion } from "framer-motion";
import ProjectCard from "@/components/Projects/ProjectCard";
import { Spotlight } from "@/components/ui/spotlight";

const projects = [
  {
    title: "Arena",
    description:
      "A decentralized gaming platform built on Solana where players can compete in classic games and earn SOL rewards.",
    image: "/projectImages/minigameArena.png",
    techStack: ["NextJS", "Solana/web3.js", "MongoDB", "Rust", "Anchor"],
    deployedUrl: "https://arena.abhiraj0x.me",
    githubUrl: "https://github.com/abhiraj2404/minigame-arena",
  },
  {
    title: "EventChain",
    description:
      "Host Events on the Blockchain, manage registrations, and reward attendees with unique NFTs.",
    image: "/projectImages/eventChain.png",
    techStack: [
      "Next.js",
      "TypeScript",
      "Pinata",
      "Supabase",
      "Thirdweb",
    ],
    deployedUrl: "https://web3ssh.abhiraj0x.me",
    githubUrl: "https://github.com/abhiraj2404/EventChain",
  },
  {
    title: "Solana Launchpad",
    description:
      "A Token Launchpad for creating and managing your own token on Solana.",
    image: "/projectImages/solanalaunchpad.png",
    techStack: ["NextJS", "Solana/web3.js", "MongoDB", "Pinata", "IPFS"],
    deployedUrl: "https://solanatokenlaunchpad.vercel.app",
    githubUrl: "https://github.com/abhiraj2404/Token_launchpad",
  },
  {
    title: "SendX",
    description:
      "A twitter bot and ai agent to send crpto to anyone on X with just their username.",
    image: "/projectImages/sendX.jpg",
    techStack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Langchain",
      "Ollama",
      "Cron",
    ],
    deployedUrl: "https://sendx-pi.vercel.app",
    githubUrl: "https://github.com/abhiraj2404/SendX_frontend",
  },
  {
    title: "Aurelia",
    description:
      "Mint your favourite photos as unique NFTs and keep them forever on the blockchain, everything cost free.",
    image: "/projectImages/aurelia.png",
    techStack: ["NextJS", "Solidity", "Pinata", "Thirdweb"],
    deployedUrl: "https://aurelia-ten.vercel.app",
    githubUrl: "https://github.com/abhiraj2404/Aurelia",
  },
  {
    title: "Gamejam",
    description:
      "A single page 3D website designed and developed for the annual Global gamejam.",
    image: "/projectImages/gamejam.png",
    techStack: ["React", "TypeScript", "Three.js", "Tailwind", "Cloudflare"],
    deployedUrl: "https://gamejam2024.pages.dev",
    githubUrl: "https://github.com/abhiraj2404/gamejam_2024",
  },
  {
    title: "UBUS",
    description:
      "A full-stack student marketplace where students can buy, sell, rent and donate essentials.",
    image: "/projectImages/ubus.png",
    techStack: ["React", "JavaScript", "Firebase", "Tailwind", "Cloudinary"],
    deployedUrl: "https://ubus.tech",
    githubUrl: "https://github.com/abhiraj2404/UB_US",
  },
  {
    title: "Portfolio",
    description: "A sleek and modern looking portfolio website.",
    image: "/projectImages/portfolio.png",
    techStack: ["NextJS", "TypeScript", "AceternityUI", "MagicUI"],
    deployedUrl: "https://chauhanabhiraj.vercel.app",
    githubUrl: "https://github.com/abhiraj2404/abhi_portfolio",
  },
];

const minorProjects = [
  {
    title: "Clipify",
    description:
      "An online clipboard for storing messages, passwords and images",
    image: "/projectImages/clipify.png",
    techStack: ["React", "Firebase", "Tailwind", "Firebase storage"],
    deployedUrl: "https://clipify-rho.vercel.app",
    githubUrl: "https://github.com/abhiraj2404/Clipify",
  },
  {
    title: "DeepChat",
    description: "A real-time chat application with session based storage.",
    image: "/projectImages/deepchatsmall.png",
    techStack: ["Node.js", "Socket.io", "React", "Flowbite"],
    deployedUrl: "https://real-time-chat-app-client-omega.vercel.app",
    githubUrl: "https://github.com/abhiraj2404/DeepChat",
  },
  {
    title: "Chakravyuh",
    description: "A digital portal for hosting technical treasure hunts.",
    image: "/projectImages/chakravyuh.png",
    techStack: ["NextJS", "TypeScript", "NestJS", "Swagger", "MongoDB"],
    deployedUrl: "https://admin.deploy.chakravyuh.live",
    githubUrl: "https://github.com/abhiraj2404/chakravyuh",
  },
  {
    title: "EthSplit",
    description: "A decentralized expense-sharing blockchain application",
    image: "/projectImages/ethsplit.png",
    techStack: ["Solidity", "Hardhat", "Ethers.js", "React", "Tailwind"],
    deployedUrl: "#",
    githubUrl: "https://github.com/abhiraj2404/Ethsplit",
  },
  {
    title: "Reminders_xyz",
    description:
      "A recurring reminders client CLI built using TS and cron jobs.",
    image: "/projectImages/reminders_xyz.png",
    techStack: ["Node.js", "TypeScript", "Cron", "Enquirer", "Nodemailer"],
    deployedUrl: "https://www.npmjs.com/package/reminders-xyz",
    githubUrl: "https://github.com/abhiraj2404/reminders-xyz",
  },
];

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
