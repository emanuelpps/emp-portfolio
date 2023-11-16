import React from "react";
import Image from "next/image";
import arrowRight from "@/public/assets/arrowRight.svg";

function ProjectCard({ project }) {
  return (
    <div className="window-outline mb-20">
      <div className="p-10">
        <div id="title-container" className="flex justify-between">
          <h1>{project.name}</h1>
          <Image src={arrowRight} alt="arrow" width={50} height={50} />
        </div>
        <div id="description-container">
          <h2>
            {project.class} - {project.type}:
          </h2>
          <p>{project.description}</p>
        </div>
        <div id="img-container" className="flex justify-center">
          <Image
            src={project.img}
            alt={project.name}
            width={500}
            height={500}
          />
        </div>
        <div id="tech-container" className="flex justify-center">
          <p>{project.lenguage}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
