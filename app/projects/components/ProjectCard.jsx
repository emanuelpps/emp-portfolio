'use client';
import Image from "next/image";
import { useState } from "react";

function ProjectCard({ project }) {
    const [onMouseOver, setOnMouseOver] = useState(false);
  return (
    <div id="project-card-container" className="flex flex-col">
      <div id="project-card-header" className="flex justify-evenly mb-5 items-center">
        <div className="px-2 ">
          <h2 className="text-2xl font-semibold">{project.name}</h2>
        </div>
        <div className="opacity-50 px-2 ">
          <span className="text-xl">{project.class}</span>
        </div>
      </div>
      <div id="project-card" className="flex justify-center items-center w-fullrounded-xl ">
        <Image
          src={onMouseOver ? project.img2 : project.img}
          width={620}
          height={300}
          property="cover"
          className="bg-fill rounded-xl "
          onMouseEnter={() => setOnMouseOver(true)}
          onMouseLeave={() => setOnMouseOver(false)}
        />
      </div>
      <div
        id="project-content"
        className="flex flex-col justify-center items-center"
      >
        <div id="project-technologies" className="flex justify-center items-center gap-2">
          {project.lenguage?.map((tech) => (
            <span className="bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 rounded-lg px-2 mt-5">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
