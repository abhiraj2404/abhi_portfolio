"use client";
import Link from "next/link";
import { TypewriterEffectSmooth } from "./typewriter-effect";
export function Typewriter() {
  const words = [
    {
      text: "Full-Stack",
      className: "text-white text-2xl sm:text-3xl ",
    },
    {
      text: "Web Developer",
      className: "text-blue-500 dark:text-blue-500 text-2xl sm:text-3xl",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[10rem]">
      <TypewriterEffectSmooth words={words} className="text-white" />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <Link href="https://firebasestorage.googleapis.com/v0/b/clipify-back.appspot.com/o/clips%2FWUw1yoHwXTnJKzzIVAhw%2FAbhiraj_resume_frontend.pdf?alt=media&token=2a573a41-15d7-44ba-bbaa-539c2f51d27b">
          <button className="w-40 h-10 rounded-xl bg-blue-500 hover:bg-blue-900 dark:border-white border-white text-white text-sm">
            Download CV
          </button>
        </Link>
        <Link href="/projects">
          <button className="w-40 h-10 rounded-xl bg-white text-black hover:bg-gray-400 border border-black  text-sm">
            Projects
          </button>
        </Link>
      </div>
    </div>
  );
}
