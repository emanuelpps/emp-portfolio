import React from "react";
import ExperienceTitle from "./components/ExperienceTitle";
import ExperienceBox from "./components/ExperienceBox";

function Experience() {
  return (
    <div id="experience" className="w-full min-h-[100vh] flex items-center">
      <div id="experience-container" className="flex flex-col gap-20 relative ">
        <ExperienceTitle />
        <ExperienceBox />
      </div>
    </div>
  );
}

export default Experience;
