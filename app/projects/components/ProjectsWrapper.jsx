"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import Projects from "@/public/data/works.json";
import ProjectCard from "./ProjectCard";

function ProjectsWrapper() {
  const [selectedId, setSelectedId] = useState(0);
  const [projectSelected, setProjectSelected] = useState({});
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const projectFiltered = Projects.filter(
      (project) => project.id === selectedId
    );
    setProjectSelected(projectFiltered);
    console.log(projectSelected);
  }, [selectedId, isClicked]);

  
  console.log(projectSelected);
  return (
    <>
      <div className="absolute w-full flex justify-center">
        <span className="text-[16rem] font-[900] opacity-10">Projects</span>
      </div>
      <div
        id="projects-wrapper"
        className="flex flex-wrap justify-center w-full items-center mt-20 gap-20 relative"
      >
        {Projects.map((project, index) => (
          <ProjectCard
            layoutId={project.id}
            key={project.id}
            project={project}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            projectSelected={projectSelected}
            setProjectSelected={setProjectSelected}
            isClicked={isClicked}
            setIsClicked={setIsClicked}
          />
        ))}
      </div>
    </>
  );
}

export default ProjectsWrapper;
