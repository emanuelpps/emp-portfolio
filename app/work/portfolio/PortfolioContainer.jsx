"use client";
import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import projects from "@/public/data/works.json";
import Link from "next/link";

function PortfolioContainer() {
  const [dataProjects, setDataProjects] = useState([]);

  useEffect(() => {
    setDataProjects(projects);
  }, []);

  console.log(dataProjects);

  return (
    <div className="mt-44  w-full md:w-[62rem]">
      {dataProjects?.map((project) => (
        <Link href={`/work/${project.linkName}`}>
        <ProjectCard project={project} />
        </Link>
      ))}
    </div>
  );
}

export default PortfolioContainer;
