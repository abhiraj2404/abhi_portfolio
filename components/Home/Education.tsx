"use client"
import Image from "next/image";
import React from "react";

export default function Education() {
  return (
    <div className="mb-20 mt-5 py-8 mx-4 sm:mx-8 lg:mx-48 px-4 sm:px-8 lg:px-24 rounded-xl border border-zinc-400 bg-zinc-950">
      <div className="p-4 sm:p-8 w-[80vw]">
        <h3 className="text-2xl font-bold text-zinc-100 mb-4">Education</h3>
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
          <div className="w-12 h-12 sm:w-16 sm:h-[3.75rem] flex items-center justify-center rounded-full bg-zinc-800 border border-zinc-600 group-hover:border-zinc-400 transition-colors">
            <Image
              src={"/college.png"}
              alt={"IIIT Sri City"}
              width={44}
              height={44}
              className="rounded-sm"
            />
          </div>
          <div className="space-y-2 sm:space-y-0">
            <h4 className="text-xl text-zinc-100">
              Indian Institute of Information Technology, Sri City, Chittoor
            </h4>
            <p className="text-zinc-400">
              B.Tech • Computer Science • 2023-2027
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
