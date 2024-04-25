import React, { useState, useRef } from "react";
import Image from "next/image";
import arrowRight from "@/public/assets/arrowRight.svg";
import { motion } from "framer-motion";
import noCountryLogo from "@/public/assets/images/noCountryLogo.svg";

function ProjectCard({ project }) {
  const [hoverState, setHoverState] = useState(false);
  const [hoverTransition, setHoverTransition] = useState();

  return (
    <motion.div
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
      whileTap={{
        scale: 0.8,
      }}
      exit={{ opacity: 0 }}
      viewport={{ once: true }}
      id={`id-${project.id}`}
      className={`flex justify-center text-center md:text-left md:p-10 cursor-pointer -outline-offset-1 bg-[#161515] overflow-hidden p-2 rounded-3xl border-t-[rgba(242,242,242,0.15)] border-x-[rgba(242,242,242,0.15)] border-l border-solid border-r border-t mb-20 ${
        hoverState
          ? "hover:shadow-xl transition duration-300 hover:scale-105"
          : ""
      } transition duration-800 ease-in-out`}
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
    >
      <div className="p-2 md:p-10">
        <div id="title-container" className="flex justify-between">
          <h1 className="w-full text-center md:text-left text-2xl md:text-3xl md:gap-4">
            {project.name}
          </h1>
          {project.noCountry ? (
            <div>
              <h3 className="md:text-sm text-[0.5rem]">Developed at</h3>
              <Image src={noCountryLogo} width={130} height={130} />
            </div>
          ) : (
            ""
          )}
        </div>
        <div id="description-container" className="mt-5">
          <h2 className="text-sm md:text-base font-extralight">
            {project.class} - {project.type}
          </h2>
          <p className="text-sm md:text-base font-extralight">
            {project.description}
          </p>
        </div>
        <div
          id="img-container"
          className="flex flex-column overflow-hidden justify-center mt-5 "
        >
          <Image
            src={project.img}
            alt={project.name}
            loading="lazy"
            width="0"
            height="0"
            sizes="100vw"
            className={`w-full h-full object-cover rounded-lg shadow-[0px_3px_15px_0px_#000000]`}
          />
        </div>
        <div id="tech-container" className="flex justify-center mt-5">
          <p className="font-semibold text-sm md:text-sm">{project.lenguage}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
