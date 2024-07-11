import React from "react";
import ProjectsTitle from "./components/ProjectsTitle";
import ProjectsWrapper from "./components/ProjectsWrapper";

function Projects() {
  return (
    <div id="projects" className="w-full">
      <div id="projects-container" className="flex flex-col gap-20 relative ">
        <ProjectsTitle />
        <ProjectsWrapper />
      </div>
    </div>
  );
}

export default Projects;
