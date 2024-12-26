"use client";

import { Typewriter } from "../ui/TypeWriter";
import { Meteors } from "../ui/meteors";

export default function Hero() {
  return (
    <section className="min-h-screen w-full px-4 md:px-16 py-5 md:py-52 gap-2 flex flex-col justify-center items-center">
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
        </div>

        <div className="flex items-center w-1/2 sm:w-3/4 h-auto object-contain justify-center ">
          <img
            className="rounded-full "
            src="/profile1.png"
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
