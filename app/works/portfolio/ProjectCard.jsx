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
      className={`flex justify-center text-center md:text-left cursor-pointer -outline-offset-1  overflow-hidden  border-t-[rgba(242,242,242,0.15)] border-x-[rgba(242,242,242,0.15)] border-l border-solid border-r border-t  w-[500px] h-[400px] ${
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
    >{ hoverState &&
      <div className="p-5  md:w-[100%]">
        <div id="title-container" className="flex justify-between ">
          <h1 className="w-full text-center md:text-left text-2xl md:text-3xl md:gap-4 ">
            {project.name}
          </h1>
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
        <div id="description-container" className="mt-5">
          <h2 className="text-sm md:text-base font-extralight">
            {project.class} - {project.type}
          </h2>
          {/*<p className="text-sm md:text-base font-extralight w-[300px]">
            {project.description}
          </p>*/}
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
        <div className="flex justify-center items-center pb-10 gap-2">
          <span className="flex justify-center items-center gap-x-2 text-sm font-normal rounded-md">
            See more details
          </span>
          <FiPlus />
        </div>
        <div id="tech-container" className="flex justify-center mt-5 ">
          <p className="font-semibold text-sm md:text-sm">{project.lenguage}</p>
        </div>
      </div>}
    </motion.div>
  );
}

export default ProjectCard;
