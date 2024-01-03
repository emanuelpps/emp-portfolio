"use client";
import React, { useState, useEffect } from "react";
import projects from "@/public/data/works.json";
import Image from "next/image";
import { VscGithub } from "react-icons/vsc";
import { VscLinkExternal } from "react-icons/vsc";
import { VscArrowLeft } from "react-icons/vsc";
import { FaRegLightbulb } from "react-icons/fa6";

import Link from "next/link";

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
          <div className="grid grid-cols-6 grid-rows-17 gap-4">
            <div className="col-start-1 row-start-1">
              <Link href={"/work"}>
                <button className="m-10 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-white text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                  <VscArrowLeft />
                  Go Back
                </button>
              </Link>
            </div>
            <div className="col-span-4 row-span-4 col-start-2 row-start-2">
              <div id="title-container" className="mb-10 mt-10">
                <h1 className="text-center @apply bg-[linear-gradient(to_bottom,var(--on-background)_50%,transparent)] tracking-[-1px] bg-clip-text text-[50px] leading-[72px] [text-shadow:_0_1px_1_rgb(0_0_0_/_80%)]  neon-text">
                  {projectPage.name}
                </h1>
                <div
                  id="h2-container"
                  className="flex flex-row justify-center rounded-3xl"
                >
                  <h2 className="text-center ">{projectPage.class}</h2>
                </div>
              </div>
              <div>
                <div id="video-container" className="flex justify-center">
                  {projectPage.infoProject[0].video ? (
                    <video
                      autoPlay
                      muted
                      loop
                      aspect-auto
                      rounded-lg
                      className="rounded-3xl rounded-video"
                      alt="Project Image"
                    >
                      <source src={projectPage.infoProject[0].video} />
                    </video>
                  ) : (
                    <div className="text-center">
                      <p>Please wait... loading video</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div
              id="content-container"
              className="row-span-4 col-start-6 row-start-2 flex justify-center pt-32"
            >
              <ul>
                <h3 className="text-lg mb-4 font-semibold text-md">Contents</h3>
                <Link href={"#overview-container"}>
                  <li className="font-light text-sm">Overview</li>
                </Link>
                <Link href={"#highlights-container"}>
                <li className="font-light text-sm">Highlights</li>
                </Link>
                <Link href={"#review-container"}>
                <li className="font-light text-sm">Review</li>
                </Link>
              </ul>
            </div>
            <div className="col-span-4 col-start-2 row-start-6">
              <div
                id="buttons-project-container"
                className="flex justify-center mt-20 pb-20"
              >
                <Link href={projectPage.demo} target="_blank">
                  <button className="m-10 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-white text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    <VscLinkExternal />
                    <p>Deploy</p>
                  </button>
                </Link>
                <Link href={projectPage.code} target="_blank">
                  <button className="m-10 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-white text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    <VscGithub className="w-full " />
                    <p>Repository</p>
                  </button>
                </Link>
              </div>
            </div>
            <div className="pl-20 col-span-2 col-start-2 row-start-7">
              <div id="role-container">
                <h4 className="font-semibold text-sm">My Role</h4>
                <h3 className="font-extralight">
                  {projectPage.infoProject[0].myRole}
                </h3>
              </div>
            </div>
            <div className="pl-20 col-span-2 row-span-2 col-start-2 row-start-8">
              <div id="team-container">
                {projectPage.infoProject[0].team ? (
                  <h4 className="font-semibold text-sm">Team</h4>
                ) : (
                  <></>
                )}
                {projectPage.infoProject[0].team?.map((teamMate) => (
                  <p className="font-thin">{teamMate}</p>
                ))}
              </div>
            </div>
            <div
              id="overview-container"
              className="col-span-2 row-span-3 col-start-4 row-start-7 mb-20"
            >
              <h3 className="font-semibold text-sm">Overview</h3>
              <p className="font-thin tracking-wide @apply whitespace-pre-line">
                {projectPage.infoProject[0].overview}
              </p>
            </div>
            <div
              id="highlights-container"
              className="col-span-4 row-span-3 col-start-2 row-start-10 window-outline flex flex-col justify-center"
            >
              <FaRegLightbulb
                size={30}
                className="justify-center w-full mt-10 mb-2 neon-text stroke-white stroke-2"
              />
              <h3 className="justify-center text-center w-full mb-10 dropShadow:glow">
                HIGHLIGHTS
              </h3>
              <p className="font-extralight justify-center text-center pl-20 pr-20 mb-10">
                {projectPage.infoProject[0].highlight}
              </p>
              <Image
                src={projectPage.infoProject[0].images[0].highlight}
                alt={projectPage.name}
                width={800}
                height={800}
                className="w-full p-10"
              ></Image>
            </div>
            <div className="flex justify-center col-span-4 row-span-4 col-start-2 row-start-13">
              <div id="review-container">
                <h3>Review</h3>
                <div id="gallery-container"></div>
              </div>
            </div>
            <div className="row-span-4 col-start-1 row-start-2"></div>
            <div className="row-span-4 col-start-3 row-start-8 justify-center"></div>
            <div className="col-start-5 row-start-5"></div>
          </div>
          <div className="col-span-6 row-start-17"></div>
        </>
      ) : (
        <p className="grid content-center text-center">
          Loading Project... Please Wait
        </p>
      )}
    </div>
  );
}

export default ProjectName;
