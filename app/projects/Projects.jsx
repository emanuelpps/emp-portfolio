import React from "react";
import ProjectsWrapper from "./components/ProjectsWrapper";
import SectionTitle from "@/components/SectionTitles/SectionTitles";

function Projects() {
  return (
    <div id="projects" className="w-full">
      <div id="projects-container" className="flex flex-col gap-40 relative ">
        <SectionTitle text="I've been working on these" title="Projects" />
        <ProjectsWrapper />
      </div>
    </div>
  );
}

export default Projects;
