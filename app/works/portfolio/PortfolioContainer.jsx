"use client";
import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import projects from "@/public/data/works.json";
import Link from "next/link";
import { LuPlusSquare } from "react-icons/lu";
import { LuMinusSquare } from "react-icons/lu";
import uuid from "react-uuid";

function PortfolioContainer() {
  const [dataProjects, setDataProjects] = useState([]);
  const [moreProjects, setMoreProjects] = useState(false);

  useEffect(() => {
    setDataProjects(projects);
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center gap-3 md:mt-44 w-screen md:p-0 md:w-[90rem] h-[auto] md:h-auto">
      {dataProjects?.map((project, index) => (
        <Link key={uuid()} href={`/works/${project.linkName}`}>
          <ProjectCard project={project} />
        </Link>
      ))}
      {/* {moreProjects ? (
        <>
          {dataProjects?.slice(6).map((project, index) => (
            <Link key={uuid()} href={`/works/${project.linkName}`}>
              <ProjectCard project={project} />
            </Link>
          ))}
        </>
      ) : null} */}
      <div></div>
      {/* {moreProjects ? (
        <div className="w-full flex justify-center items-center">
          <div
            onClick={() => setMoreProjects(false)}
            className="py-3 mt-12 px-10 inline-flex items-center gap-x-2 text-sm font-normal rounded-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100 hover:bg-gray-200 hover:text-black cursor-pointer"
          >
            <LuMinusSquare className="text-[1.5rem]" />
            Show Less Projects
          </div>
        </div>
      ) : (
        <div className="w-full flex justify-center items-center">
          <div
            onClick={() => setMoreProjects(true)}
            className="py-3 mt-12 px-10 inline-flex items-center gap-x-2 text-sm font-normal rounded-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100 hover:bg-gray-200 hover:text-black cursor-pointer"
          >
            <LuPlusSquare className="text-[1.5rem]" />
            Show More Projects
          </div>
        </div>
      )} */}
    </div>
  );
}

export default PortfolioContainer;
