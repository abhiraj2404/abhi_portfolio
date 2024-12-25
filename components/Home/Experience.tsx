import React from "react";
import Image from "next/image";

const experienceData = [
  {
    title: "Full Stack Developer Intern",
    company: "UBUS",
    type: "Internship",
    location: "Remote",
    period: "July 2024 - Current",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQE47jvNQx2jeg/company-logo_200_200/company-logo_200_200/0/1725617728912/letsubus_logo?e=1743033600&v=beta&t=qGLjMj7EIQTGHOMBLzm_UI3mOGeHg1EobYGHW1MVEec",
    achievements: [
      "Handling both the Frontend and Backend of their product website for AI calling agent",
      "Also contributed to the support chatbot using RAG pipeline and vector stores",
    ],
    skills: ["React", "Context API", "Firebase", "TailwindCSS"],
  },
  {
    title: "Backend Core Member",
    company: "GDSC IIIT Sri City",
    type: "Member",
    location: "In Office",
    period: "Sept 2024 - Current",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQHRzCjqlI9UZw/company-logo_200_200/company-logo_200_200/0/1648382258678/noidagdg_logo?e=1743033600&v=beta&t=chLt1Mn30oYq73DMnxjRpopvjKUcnYXTjmZB5kq-JV0",
    achievements: [
      "Developed NextJS-based documentation and blog site, boosting SEO performance by 37%",
      "Enhanced web extension for captcha solver product, implementing robust error handling and modifying Javascript events",
      "Collaborated on backend development with FastApi for company's internal tool",
    ],
    skills: ["NextJs", "MongoDB", "NestJS", "Postgres", "CI/CD", "AWS"],
  },
];

export default function Experience() {
  return (
    <div className="my-40 py-8 mx-4 sm:mx-8 lg:mx-48 px-4 sm:px-8 lg:px-24 rounded-xl border border-blue-300">
      <div className="p-4 sm:p-8 w-full">
        <h3 className="text-2xl font-bold text-zinc-100 mb-8">
          Work Experience
        </h3>
        <div className="relative space-y-8 sm:space-y-12">
          {/* Timeline line */}
          <div className="hidden w-0.5 h-full bg-zinc-800 absolute left-8 top-3 md:block"></div>

          {/* Experience Items */}
          {experienceData.map((experience, index) => (
            <div
              key={index}
              className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-6 group"
            >
              <div className="flex sm:flex-col items-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-zinc-800 border border-zinc-600 group-hover:border-zinc-400 transition-colors">
                  <Image
                    src={experience.logo}
                    alt={experience.company}
                    width={48}
                    height={48}
                    className="rounded-sm"
                  />
                </div>
                {index !== experienceData.length - 1 && (
                  <div className="hidden md:block w-0.5 h-full bg-zinc-800 group-hover:bg-zinc-600"></div>
                )}
              </div>
              <div className="flex-1 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h4 className="text-lg sm:text-xl font-semibold text-zinc-100">
                    {experience.title}
                  </h4>
                  <span className="text-sm text-zinc-400 shrink-0">
                    {experience.period}
                  </span>
                </div>
                <p className="text-zinc-400 font-medium text-sm sm:text-base">
                  {experience.company} • {experience.type} •{" "}
                  {experience.location}
                </p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {experience.skills.map((skill, i) => (
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
