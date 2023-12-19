"use client";
import React, { useState, useEffect } from "react";
import projects from "@/public/data/works.json";
import Image from "next/image";

function ProjectName({ params }) {
  const [dataProjects, setDataProjects] = useState([]);
  const [projectPage, setProjectPage] = useState(null);

  useEffect(() => {
    setDataProjects(projects);
  }, []);

  useEffect(() => {
    const findProject = dataProjects.find(
      (element) => element.linkName === params.projectName
    );
    setProjectPage(findProject);
  }, [dataProjects, params.projectName]);

  console.log(projectPage);

  return (
    <div>
      {projectPage ? (
        <>
          <h1>{projectPage.name}</h1>
          <h2>{projectPage.class}</h2>
          <h2>{projectPage.type}</h2>
          <Image src={projectPage.img} width={1200} height={1200}/>
          <p>{projectPage.description}</p>
        </>
      ) : (
        <p className="text-center">Loading Project... Please Wait</p>
      )}
    </div>
  );
}

export default ProjectName;
