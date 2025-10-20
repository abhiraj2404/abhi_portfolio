"use client";
import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";
import Skills from "@/components/Skills/index";
import Contact from "@/components/Home/Contact";
import ContactMe from "@/components/Home/ContactMe";
import { Spotlight } from "@/components/ui/spotlight";
import Experience from "@/components/Home/Experience";
import Education from "@/components/Home/Education";
// import Achievements from "@/components/Home/Achievements";

export default function Home() {
  return (
    <main className="min-h-screen dark">
      {/* <Navigation /> */}
      <Spotlight>
        <Hero />
        {/* <About /> */}
        <Education />
        <Experience />
        <Skills />
        <ContactMe />
        {/* <Contact /> */}
      </Spotlight>
    </main>
  );
}
