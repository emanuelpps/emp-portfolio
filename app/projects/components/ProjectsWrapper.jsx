"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import Projects from "@/public/data/works.json";
import ProjectCard from "./ProjectCard";

function ProjectsWrapper() {
  const [selectedId, setSelectedId] = useState(null);
  const [projectSelected, setProjectSelected] = useState({});
  //const [isClicked, setIsClicked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [forceUpdate, setForceUpdate] = useState(0);

  useEffect(() => {
    const selectedProject = Projects.find(
      (project) => project.id === selectedId
    );
    setProjectSelected(selectedProject);
  }, [selectedId, forceUpdate]);

  const handleCardClick = (id) => {
    if (selectedId === id) {
      setForceUpdate((prev) => prev + 1);
    } else {
      setSelectedId(id);
    }
    setIsOpen(true);
  };
  return (
    <>
      <div className="absolute flex justify-center w-full">
        <span className="text-[5rem] md:text-[11rem] lg:text-[16rem] font-[900] opacity-10">Projects</span>
      </div>
      <div
        id="projects-wrapper"
        className="relative flex flex-wrap items-center justify-center w-full gap-20 mt-20"
      >
        {Projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            onCardClick={handleCardClick}
            projectSelected={projectSelected}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        ))}
      </div>
    </>
  );
}

export default ProjectsWrapper;
