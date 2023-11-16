"use client";
import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import projects from "@/public/data/works.json";

function PortfolioContainer() {
  const [dataProjects, setDataProjects] = useState([]);

  useEffect(() => {
    setDataProjects(projects);
  }, []);

  console.log(dataProjects);

  return (
    <div className="mt-44">
      {dataProjects?.map((project) => (
        <ProjectCard project={project} />
      ))}
    </div>
  );
}

export default PortfolioContainer;
