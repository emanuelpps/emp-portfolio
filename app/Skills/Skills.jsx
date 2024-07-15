import SectionTitle from "@/components/SectionTitles/SectionTitles";
import React from "react";
import SkillsWrapper from "./components/SkillsWrapper";

function Skills() {
  return (
    <div id="skills" className="w-full">
      <div className="flex flex-col gap-20 relative ">
        <SectionTitle text="What I can do" title="Skills" />
        <SkillsWrapper />
      </div>
    </div>
  );
}

export default Skills;
