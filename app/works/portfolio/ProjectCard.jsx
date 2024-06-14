import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import noCountryLogo from "@/public/assets/images/noCountryLogo.svg";
import { FiPlus } from "react-icons/fi";

function ProjectCard({ project }) {
  const [hoverState, setHoverState] = useState(false);
  const [hoverTransition, setHoverTransition] = useState();

  return (
    <motion.div
      key={"projecrt"}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 50,
          damping: 30,
        },
      }}
      exit={{ opacity: 0 }}
      viewport={{ once: true }}
      id={`id-${project.id}`}
      className={`flex justify-center text-center md:text-left cursor-pointer -outline-offset-1  overflow-hidden  border-t-[rgba(242,242,242,0.15)] border-x-[rgba(242,242,242,0.15)] border-l border-solid border-r border-t  w-[600px] h-[400px] ${
        hoverState
          ? "md:hover:bg-[#1f1d1d] md:hover:shadow-xl md:transition md:duration-300 md:hover:scale-105"
          : ""
      } transition duration-800 ease-in-out`}
      style={{
        backgroundImage: `url(${project.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
    >
      <div
        className={`flex ${
          hoverState ? "md:flex" : "md:hidden"
        } flex-col justify-between h-full md:w-[100%]`}
      >
        <div id="title-container" className="flex p-2 bg-[#1f1d1d] w-full justify-between">
          <h1 className="text-center md:text-left text-2xl md:text-3xl md:gap-2 ">
            {project.name}
          </h1>
          <div className="flex justify-center items-end p-2 w-[fit-content]">
            <h2 className="text-[1rem] text-balance">{project.class}</h2>
          </div>
          {project.noCountry ? (
            <div className="">
              <h3 className="md:text-sm text-[0.5rem]">Developed at</h3>
              <Image
                src={noCountryLogo}
                width={130}
                height={130}
                alt="No Country"
              />
            </div>
          ) : (
            ""
          )}
        </div>
        <div
          id="description-container"
          className="flex flex-col justify-evenly h-full"
        >
          {/*<h2 className="text-sm md:text-base font-extralight">
            {project.class} - {project.type}
          </h2>
          <p className="text-sm md:text-base font-extralight w-[300px]">
            {project.description}
          </p>
        </div>
        {/*<div
          id="img-container"
          className="flex flex-column overflow-hidden justify-center mt-5 md:h-[300px]"
        >
          <img
            src={project.img}
            alt={project.name}
            loading="lazy"
            className="object-fit"
          />
        </div>*/}
          <div className="flex md:invisible justify-center items-center gap-2 h-full">
            <span className="flex justify-center items-center mx-auto text-md font-bold rounded-md text-black">
              See more details
            </span>
            <FiPlus />
          </div>
          <div
            id="tech-container"
            className="flex flex-grow justify-center items-center w-full  bg-[#1f1d1d] h-12 gap-3"
          >
            {project.lenguage.map((lenguage, index) => (
              <p className="flex justify-center items-centerfont-semibold text-sm md:text-[0.7rem] w-[fit-content]  border-solid border-white border-[1px] bg-[#353535]">
                <span key={index} className="p-1 px-1 text-pretty">
                  {lenguage}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
