"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import Projects from "@/public/data/works.json";
import ProjectCard from "./ProjectCard";
import MoreProjectsSlider from "./MoreProjectsSlider";
import MoreProjects from "@/public/data/otherWorks.json";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import SectionTitle from "@/components/SectionTitles/SectionTitles";

function ProjectsWrapper() {
  const [selectedId, setSelectedId] = useState(null);
  const [projectSelected, setProjectSelected] = useState({});
  //const [isClicked, setIsClicked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [forceUpdate, setForceUpdate] = useState(0);
  const [moreProjectPosition, setMoreProjectPosition] = useState(1);
  const [projectPositionIndex, setProjectPositionIndex] = useState(0);

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

  console.log("project", projectPositionIndex, moreProjectPosition);
  const sliderHandler = (direction) => {
    const lastIndex = MoreProjects.length;

    if (direction === "increase") {
      if (moreProjectPosition < lastIndex) {
        setMoreProjectPosition(moreProjectPosition + 1);
        setProjectPositionIndex(projectPositionIndex + 1);
      } else {
        setMoreProjectPosition(1);
        setProjectPositionIndex(0);
      }
    } else {
      if (moreProjectPosition > 1) {
        setMoreProjectPosition(moreProjectPosition - 1);
        setProjectPositionIndex(projectPositionIndex - 1);
      } else {
        setMoreProjectPosition(lastIndex);
        setProjectPositionIndex(lastIndex - 1);
      }
    }
  };

  /*   useEffect(() => {
    setTimeout(() => {
      sliderHandler("increase");
    }, 8000);
  }, []); */

  return (
    <>
      <div className="absolute flex justify-center w-full">
        <span className="text-[5rem] md:text-[11rem] lg:text-[16rem] font-[900] opacity-10">
          Projects
        </span>
      </div>
      <div
        id="projects-wrapper"
        className="relative flex flex-col items-center justify-center w-full gap-20 mt-20 lg:gap-20"
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
        <div id="more-projects-slider-container" className="w-[95%] mt-20">
          <h2 className="mb-20 text-3xl">More Projects</h2>
          <div className="flex items-center justify-center gap-10 mb-10 lg:hidden">
            <button onClick={() => sliderHandler("descrease")}>
              <MdOutlineArrowBackIos className="text-[2.5rem]" />
            </button>
            <button onClick={() => sliderHandler("increase")}>
              <MdOutlineArrowForwardIos className="text-[2.5rem]" />
            </button>
          </div>
          <div className="flex items-center justify-center gap-20">
            <div className="">
              <button onClick={() => sliderHandler("descrease")}>
                <MdOutlineArrowBackIos className="text-[2.5rem]" />
              </button>
            </div>
            {MoreProjects.slice(projectPositionIndex, moreProjectPosition).map(
              (project, index) => (
                <MoreProjectsSlider key={index} otherProjects={project} />
              )
            )}
            <div className="">
              <button onClick={() => sliderHandler("increase")}>
                <MdOutlineArrowForwardIos className="text-[2.5rem]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectsWrapper;
