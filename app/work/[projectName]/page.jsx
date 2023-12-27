"use client";
import React, { useState, useEffect } from "react";
import projects from "@/public/data/works.json";
import Image from "next/image";
import { VscGithub } from "react-icons/vsc";
import { VscLinkExternal } from "react-icons/vsc";

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
          <div className="grid grid-cols-6 grid-rows-12 gap-4">
            <div id="title-container" className="col-span-6">
              <h1 className="text-center text-3xl">{projectPage.name}</h1>
              <div id="h2-container" className="flex flex-row justify-center">
                <h2 className="text-center ">{projectPage.class}</h2>
              </div>
            </div>
            <div className="col-span-4 row-span-3 col-start-2 row-start-2">
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
            </div>
            <div
              id="content-container"
              className="row-span-3 col-start-6 row-start-2"
            >
              <ul>
                <h3>Contents</h3>
                <li>Overview</li>
                <li>Highlights</li>
                <li>Review</li>
              </ul>
            </div>
            <div className="col-span-4 col-start-2 row-start-5">
              <div
                id="buttons-project-container"
                className="flex justify-center mt-20 pb-20"
              >
                <button className="m-10 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-white text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                  <VscLinkExternal />
                  <p>Deploy</p>
                </button>
                <button className="m-10 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-white text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                  <VscGithub className="w-full " />
                  <p>Repository</p>
                </button>
              </div>
            </div>
            <div className="pl-20 col-span-3 row-span-2 col-start-1 row-start-6">
              <div id="role-container">
                <h4>My Role</h4>
                <h3>{projectPage.infoProject[0].myRole}</h3>
              </div>
            </div>
            <div className="pl-20 col-span-3 row-span-2 col-start-1 row-start-7">
              <div id="team-container">
                {projectPage.infoProject[0].team ? <h4>Team</h4> : <></>}
                {projectPage.infoProject[0].team?.map((teamMate) => (
                  <p>{teamMate}</p>
                ))}
              </div>
            </div>
            <div className="pr-20 col-span-3 row-span-2 col-start-4 row-start-6">
              <div id="overview-container">
                <h3>Overview</h3>
                <p>{projectPage.infoProject[0].overview}</p>
              </div>
              <div id="highlights-container" className="pr-20 col-span-3 row-span-2 col-start-4 row-start-8 pt-20">
                <h3>Highlights</h3>
                <p>{projectPage.infoProject[0].highlight}</p>
              </div>
            </div>
            <div className="flex justify-center col-span-5 row-span-3 col-start-1 row-start-10">
              <div id="review-container">
                <h3>Review</h3>
                <div id="gallery-container"></div>
              </div>
            </div>
            <div className="row-span-4 col-start-1 row-start-2"></div>
            <div className="row-span-4 col-start-3 row-start-8 justify-center"></div>
            <div className="col-start-5 row-start-5"></div>
          </div>
        </>
      ) : (
        <p className="text-center">Loading Project... Please Wait</p>
      )}
    </div>
  );
}

export default ProjectName;
