"use client";

import Link from "next/link";
import { Typewriter } from "../ui/TypeWriter";
import { Meteors } from "../ui/meteors";
import { IconBrandGithub, IconBrandLinkedin, IconBrandX, IconMail } from "@tabler/icons-react";

const socials = [
  {
    icon: <IconBrandGithub size={20} />,
    href: "https://github.com/abhiraj2404",
    label: "Github",
    handle: "abhiraj2404",
  },
  {
    icon: <IconBrandLinkedin size={20} />,
    href: "https://www.linkedin.com/in/abhiraj2404",
    label: "LinkedIn",
    handle: "abhiraj2404",
  },
  {
    icon: <IconBrandX size={20} />,
    href: "https://x.com/abhiraj_2404",
    label: "Twitter",
    handle: "@abhiraj_2404",
  },
  {
    icon: <IconMail size={20} />,
    href: "mailto:chauhanabhiraj06@gmail.com",
    label: "Email",
    handle: "chauhanabhiraj06@gmail.com",
  },
];

export default function Hero() {
  return (
    <section className="min-h-screen w-full px-4 md:px-16 py-5 md:py-44 gap-2 flex flex-col justify-center items-center">
      <div className="flex flex-col-reverse gap-4 md:gap-0 md:flex-row w-fit justify-center items-center max-w-4xl">
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="relative h-25 w-fit overflow-clip ">
            <Meteors number={20} />
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
          <div className="flex gap-4 py-2">
            {socials.map((s, i) => (
              <Link
                href={s.href}
                key={i}
                target="_blank"
                className="group relative p-3 text-zinc-400 bg-zinc-800/30 rounded-xl 
             transition-all duration-150 ease-in backdrop-blur-sm
             hover:text-zinc-100 hover:bg-blue-500 
             transform hover:-translate-y-2 hover:scale-105
             hover:shadow-lg hover:shadow-blue-500/25"
                title={s.label}
              >
                {s.icon}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center w-1/2 sm:w-3/4 h-auto object-contain justify-center ">
          <img
            className="rounded-full "
            src="/animated-profile.png"
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
