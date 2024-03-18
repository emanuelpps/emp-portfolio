"use client";
import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import projects from "@/public/data/works.json";
import Link from "next/link";
import { LuPlusSquare } from "react-icons/lu";
import { LuMinusSquare } from "react-icons/lu";

function PortfolioContainer() {
  const [dataProjects, setDataProjects] = useState([]);
  const [moreProjects, setMoreProjects] = useState(false);

  useEffect(() => {
    setDataProjects(projects);
  }, []);

  return (
    <div className="md:mt-44 w-screen p-6 md:p-0 md:w-[60rem] h-[auto] md:h-auto">
      {dataProjects?.slice(0, 6).map((project) => (
        <Link href={`/works/${project.linkName}`}>
          <ProjectCard key={project.id} project={project} />
        </Link>
      ))}
      {moreProjects ? (
        <>
          {dataProjects?.slice(6).map((project) => (
            <Link href={`/works/${project.linkName}`}>
              <ProjectCard key={project.id} project={project} />
            </Link>
          ))}
        </>
      ) : null}
      <div>
        {moreProjects ? (
          <div
            onClick={() => setMoreProjects(false)}
            className="flex p-5 justify-center text-center md:text-left md:p-10 cursor-pointer border-[0.1px] rounded-xl mb-20 gap-5 border-gray-500 hover:bg-gray-500 hover:text-black"
          >
            <LuMinusSquare className="text-[1.5rem]" />
            Hide Projects
          </div>
        ) : (
          <div
            onClick={() => setMoreProjects(true)}
            className="flex p-5 justify-center text-center md:text-left md:p-10 cursor-pointer rounded-xl mb-20 gap-5 border-[0.1px] border-gray-500 hover:bg-gray-500 hover:text-black"
          >
            <LuPlusSquare className="text-[1.5rem]" />
            More Projects
          </div>
        )}
      </div>
    </div>
  );
}

export default PortfolioContainer;
