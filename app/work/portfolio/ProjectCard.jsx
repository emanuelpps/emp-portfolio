import React, { useState } from "react";
import Image from "next/image";
import arrowRight from "@/public/assets/arrowRight.svg";
import Link from "next/link";

function ProjectCard({ project }) {
  const [hoverState, setHoverState] = useState(false);
  const [hoverTransition, setHoverTransition] = useState();

  return (
    <div
      className={`md:pl-10 md:pr-10 md:pt-10 md:pb-10 cursor-pointer window-outline mb-20 ${
        hoverState ? "hover:shadow-xl transition duration-300 hover:scale-105" : ""
      } transition duration-800 ease-in-out`}
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
    >
      <div className="p-10">
        <div id="title-container" className="flex justify-between">
          <h1 className="text-2xl md:text-3xl">{project.name}</h1>
          <Image
            src={arrowRight}
            alt="arrow"
            width={30}
            height={30}
          />
        </div>
        <div id="description-container" className="mt-5">
          <h2 className="text-sm md:text-base font-extralight">
            {project.class} - {project.type}
          </h2>
          <p className="text-sm md:text-base font-extralight">{project.description}</p>
        </div>
        <div id="img-container" className="flex justify-center mt-5">
          <Image
            src={project.img}
            alt={project.name}
            width={600}
            height={800}
            className={`rounded-lg shadow-[0px_3px_15px_0px_#000000]`}
          />
        </div>
        <div id="tech-container" className="flex justify-center mt-5">
          <p className="font-semibold text-sm md:text-sm">{project.lenguage}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
