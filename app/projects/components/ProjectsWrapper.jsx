import React from "react";
import Projects from "@/public/data/works.json";
import ProjectCard from "./ProjectCard";

function ProjectsWrapper() {
  return (
    <>
      <div className="absolute w-full flex justify-center">
        <span className="text-[16rem] font-[900] opacity-10">PROJECTS</span>
      </div>
      <div id="projects-wrapper" className="flex flex-wrap justify-center w-full items-center mt-20 gap-20">
        {Projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}

export default ProjectsWrapper;
