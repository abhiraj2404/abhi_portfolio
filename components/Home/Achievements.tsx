"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import data from "@/data.json";

const { achievementsData } = data;

export default function Achievements() {
  return (
    <div className="my-40 py-8 mx-4 sm:mx-8 lg:mx-48 px-4 sm:px-8 lg:px-24 rounded-xl border border-green-300">
      <div className="p-4 sm:p-8 w-full">
        <h3 className="text-2xl font-bold text-zinc-100 mb-8">Achievements</h3>
        <div className="relative space-y-8 sm:space-y-12">
          {/* Timeline line */}
          <div className="hidden w-0.5 h-full bg-zinc-800 absolute left-8 top-3 md:block"></div>

          {/* Achievement Items */}
          {achievementsData.map((achievement, index) => (
            <div
              key={index}
              className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-6 group"
            >
              <div className="flex sm:flex-col items-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-zinc-800 border border-zinc-600 group-hover:border-green-400 transition-colors">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 text-green-400">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                </div>
                {index !== achievementsData.length - 1 && (
                  <div className="hidden md:block w-0.5 h-full bg-zinc-800 group-hover:bg-zinc-600"></div>
                )}
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h4 className="text-lg sm:text-xl font-semibold text-zinc-100">
                    {achievement.title}
                  </h4>
                  <span className="text-sm text-zinc-400 shrink-0">
                    {achievement.date}
                  </span>
                </div>
                <p className="text-zinc-400 font-medium text-sm sm:text-base">
                  {achievement.event} • {achievement.type}
                </p>
                <p className="text-zinc-300 text-sm sm:text-base">
                  {achievement.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {achievement.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs text-zinc-300 bg-zinc-800/50 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
