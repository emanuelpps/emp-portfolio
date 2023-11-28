"use client";
import React, { useState, useEffect } from "react";
import projects from "@/public/data/works.json";

function ProjectName({ params }) {
  const [dataProjects, setDataProjects] = useState([]);
  const [projectPage, setProjectPage] = useState([]);

  useEffect(() => {
    setDataProjects(projects);
    const findProject = dataProjects.find(
      (element) => element.linkName === params.projectName
    );
    setProjectPage(findProject);
  }, []);

  console.log(projectPage);
  return <div>{projectPage}</div>;
}

export default ProjectName;
