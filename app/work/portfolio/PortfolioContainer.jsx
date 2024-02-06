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
    <div className="md:mt-44 w-screen p-6 md:p-0 md:w-[60rem] h-[auto] md:h-auto">
      {dataProjects?.map((project) => (
        <Link href={`/work/${project.linkName}`}>
          <ProjectCard key={project.id} project={project} />
        </Link>
      ))}
    </div>
  );
}

export default PortfolioContainer;
