"use client";
import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Meteors } from "../ui/meteors";
import { Spotlight } from "../ui/spotlight";
import { Typewriter } from "../ui/TypeWriter";

const socialLinks = [
  {
    icon: <FaGithub size={24} />,
    href: "https://github.com/yourusername",
    label: "GitHub",
  },
  {
    icon: <FaTwitter size={24} />,
    href: "https://twitter.com/yourusername",
    label: "Twitter",
  },
  {
    icon: <FaLinkedin size={24} />,
    href: "https://linkedin.com/in/yourusername",
    label: "LinkedIn",
  },
  {
    icon: <FaEnvelope size={24} />,
    href: "mailto:your.email@example.com",
    label: "Email",
  },
];

export default function Hero() {
  return (
    <section className="min-h-screen w-full px-4 md:px-16 py-10 md:py-52 gap-2 flex flex-col justify-center items-center">
      <div className="flex flex-row w-fit justify-center items-center max-w-4xl">
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="relative h-[100px] w-fit overflow-clip ">
            {/* <Meteors number={20} /> */}
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-gray-400 to-gray-300/80 bg-clip-text text-center text-5xl md:text-7xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
              Hi I&apos;m <span className="text-blue-500">Abhiraj.</span>
            </span>
          </div>
          <div className="md:w-[80%] ">
            <div className="text-sm  font-normal text-white dark:text-white ">
              I'm a passionate full-stack and Web3 developer with expertise in
              building scalable web applications and decentralized solutions. I
              thrive on innovation, bringing ideas to life with clean code and
              cutting-edge blockchain technologies.
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center ">
          <img
            className="rounded-full w-3/4 h-auto object-contain"
            src="https://i.pinimg.com/736x/d2/f2/08/d2f2086efdf6950a384bbf40c152992f.jpg"
            alt="profile_pic"
          />
        </div>
      </div>

      <div>
        <Typewriter />
      </div>
    </section>
  );
}
