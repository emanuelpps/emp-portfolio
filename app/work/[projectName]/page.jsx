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
    <div className="pt-16 grid grid-cols-auto grid-rows-auto gap-4">
      {projectPage ? (
        <>
          <div id="project-title-container" className="col-span-5">
            <h1 className="text-center text-3xl">{projectPage.name}</h1>
            <div id="h2-container" className="flex flex-row justify-center">
              <h2 className="text-center ">{projectPage.class}</h2>
            </div>
          </div>
          <div className="row-span-6 col-start-1 row-start-2"></div>
          <div
            id="image-container"
            className="flex col-span-3 row-span-4 col-start-2 row-start-2"
          >
            <Image
              src={projectPage.img}
              width={1200}
              height={1200}
              className="self-auto"
              alt="Project Image"
            />
          </div>
          <div
            id="overview-container"
            className="grid grid-cols-5 grid-rows-5 gap-4"
          >
            <div className="col-span-2 row-span-2">
              <h4 className="flex flex-row">My Role -</h4>
              <h3 className="flex flex-row">
                {projectPage.infoProject[0].myRole}
              </h3>
            </div>
            <div className="col-span-2 row-span-2 col-start-1 row-start-4">
              <h4>Team</h4>
              <p>{projectPage.infoProject[0].team}</p>
            </div>
            <div className="col-span-2 row-span-5 col-start-4 row-start-1">
              5
            </div>
            <div className="col-span-2 col-start-1 row-start-3">6</div>
            <div className="row-span-5 col-start-3 row-start-1">7</div>
          </div>
        </>
      ) : (
        <p className="text-center">Loading Project... Please Wait</p>
      )}
      <div className="row-span-4 col-start-5 row-start-2">
        <ul>
          <h3>Contents</h3>
          <li>Overview</li>
          <li>Highlights</li>
          <li>Review</li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectName;
