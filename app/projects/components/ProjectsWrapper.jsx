"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import Projects from "@/public/data/works.json";
import ProjectCard from "./ProjectCard";

function ProjectsWrapper() {
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    const projectSelected = Projects.filter(
      (project) => project.id === selectedId
    );
    console.log(projectSelected);
  }, [selectedId]);
  return (
    <>
      <div className="absolute w-full flex justify-center">
        <span className="text-[16rem] font-[900] opacity-10">Projects</span>
      </div>
      <div
        id="projects-wrapper"
        className="flex flex-wrap justify-center w-full items-center mt-20 gap-20"
      >
        {Projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
        ))}
        <AnimatePresence>
          {selectedId && (
            <motion.div layoutId={selectedId}>
              <motion.h5>{projectSelected[0]?.name}</motion.h5>
              <motion.h2>{projectSelected[0]?.class}</motion.h2>
              <motion.button onClick={() => setSelectedId(null)} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default ProjectsWrapper;
