import React, { useState } from "react";
import Image from "next/image";
import arrowRight from "@/public/assets/arrowRight.svg";
import Link from "next/link";

function ProjectCard({ project }) {
  const [hoverState, setHoverState] = useState(false);
  const [hoverTransition, setHoverTransition] = useState();

  return (
    <div
      className={`cursor-pointer window-outline mb-20 ${
        hoverState ? "hover:bg-stone-800" : ""
      } transition duration-800 ease-in-out`}
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
    >
      <div className="p-10">
        <div id="title-container" className="flex justify-between">
          <h1 className="text-3xl">{project.name}</h1>
          <Image
            className="hover:width[60]"
            src={arrowRight}
            alt="arrow"
            width={50}
            height={50}
          />
        </div>
        <div id="description-container" className="mt-5">
          <h2>
            {project.class} - {project.type}
          </h2>
          <p>{project.description}</p>
        </div>
        <div id="img-container" className="flex justify-center mt-5">
          <Image
            src={project.img}
            alt={project.name}
            width={1200}
            height={1000}
            className={`rounded-lg ${
              hoverState
                ? "transition ease-in-out delay-150 -translate-y-1 scale-105 duration-300"
                : "transition ease-in-out delay-150 translate-y-1 scale-100 duration-300"
            }`}
          />
        </div>
        <div id="tech-container" className="flex justify-center mt-5">
          <p>{project.lenguage}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
