"use client";

import Achievements from "@/components/achievements/AchievementsContainer";
import DimensionalAchievements from "@/components/achievements/DimensionalAchievements";
import Experience from "@/components/experience/ExperienceContainer";
import GalacticExperiences from "@/components/experience/ProfessionalExperience";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col">
        <Hero />
        <Skills />
        <Projects />
        <Experience>
          <GalacticExperiences />
        </Experience>
        <Achievements>
          <DimensionalAchievements />
        </Achievements>
      </div>
    </main>
  );
}
