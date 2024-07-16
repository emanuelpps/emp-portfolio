import React from "react";
import ExperienceBox from "./components/ExperienceBox";
import SectionTitle from "@/components/SectionTitles/SectionTitles";

function Experience() {
  return (
    <div id="experience" className="w-full min-h-[100vh]">
      <div id="experience-container" className="flex flex-col gap-20 relative ">
        <SectionTitle text="My Journey So Far" title="Experience" />
        <ExperienceBox />
      </div>
    </div>
  );
}

export default Experience;
