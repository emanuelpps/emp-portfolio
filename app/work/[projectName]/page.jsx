"use client";
import React, { useState, useEffect } from "react";
import projects from "@/public/data/works.json";
import Image from "next/image";
import { VscGithub } from "react-icons/vsc";
import { VscLinkExternal } from "react-icons/vsc";
import { VscArrowLeft } from "react-icons/vsc";
import { FaRegLightbulb } from "react-icons/fa6";
import "ldrs/tailChase";
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
            <div className="col-start-1 row-start-1 sticky top-0">
              <Link href={"/work"}>
                <button className="m-10 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-normal rounded-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100 hover:bg-gray-200 hover:text-black">
                  <VscArrowLeft />
                  Go Back
                </button>
              </Link>
            </div>
            <div className="col-span-4 row-span-4 col-start-2 row-start-2">
              <div id="title-container" className="mb-10 mt-10">
                <h1 className="text-center text-[50px]  neon-text">
                  {projectPage.name}
                </h1>
                <div
                  id="h2-container"
                  className="flex flex-row justify-center rounded-3xl"
                >
                  <h2 className="text-center font-light">
                    {projectPage.class}
                  </h2>
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
                      className="relative mx-auto rounded-lg overflow-hidden"
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
              className="row-span-4 col-start-6 row-start-2 flex justify-center pt-32 relative"
            >
              <ul className="fixed">
                <h3 className="text-lg mb-4 font-semibold text-md text-white">
                  Contents
                </h3>
                <Link href={"#overview-container"}>
                  <li className="font-light text-sm text-gray-400 hover:text-white">
                    Overview
                  </li>
                </Link>
                <Link href={"#highlights-container"}>
                  <li className="font-light text-sm text-gray-400 hover:text-white">
                    Highlights
                  </li>
                </Link>
                <Link href={"#review-container"}>
                  <li className="font-light text-sm text-gray-400 hover:text-white">
                    Gallery
                  </li>
                </Link>
              </ul>
            </div>
            <div className="col-span-4 col-start-2 row-start-6">
              <div
                id="buttons-project-container"
                className="flex justify-center mt-20 pb-20"
              >
                <Link href={projectPage.demo} target="_blank">
                  <button className="m-10 py-3 px-4 inline-flex items-center gap-x-2 text-sm rounded-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100 hover:bg-gray-200 hover:text-black">
                    <VscLinkExternal />
                    <p>Deploy</p>
                  </button>
                </Link>
                <Link href={projectPage.code} target="_blank">
                  <button className="m-10 py-3 px-4 inline-flex items-center gap-x-2 text-sm rounded-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100 hover:bg-gray-200 hover:text-black">
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
              className="col-span-4 row-span-3 col-start-2 row-start-10 window-outline flex flex-col justify-center mb-20 animate-blinkingBg"
            >
              <FaRegLightbulb
                size={30}
                className="justify-center w-full mt-10 mb-2 neon-text stroke-white stroke-2 neon"
              />
              <h3 className="justify-center text-center w-full mb-10 dropShadow:glow">
                HIGHLIGHTS
              </h3>
              <p className="font-extralight justify-center text-center pl-20 pr-20 mb-10">
                {projectPage.infoProject[0].highlight}
              </p>
              <div className="relative mx-auto rounded-lg overflow-hidden">
                {typeof projectPage.infoProject[0].images[0].highlight ===
                  "object" &&
                projectPage.infoProject[0].images[0].highlight !== null ? (
                  <div>
                    {Object.entries(
                      projectPage.infoProject[0].images[0].highlight
                    ).map(([key, value], index) =>
                      value.endsWith(".png") ? (
                        <Image
                          key={index}
                          src={value}
                          alt={`${projectPage.name}_${key}`}
                          width={800}
                          height={800}
                          className="mb-10 relative mx-auto rounded-lg overflow-hidden"
                        />
                      ) : (
                        <video
                          key={index}
                          autoPlay
                          muted
                          loop
                          className="mb-10 relative mx-auto rounded-lg overflow-hidden"
                          width={800}
                          height={800}
                        >
                          <source src={value} />
                        </video>
                      )
                    )}
                  </div>
                ) : projectPage.infoProject[0].images[0].highlight.endsWith(
                    ".png"
                  ) ? (
                  <Image
                    src={projectPage.infoProject[0].images[0].highlight}
                    alt={projectPage.name}
                    width={800}
                    height={800}
                    className="relative mx-auto rounded-lg overflow-hidden"
                  />
                ) : (
                  <video
                    autoPlay
                    muted
                    loop
                    className="relative mx-auto rounded-lg overflow-hidden"
                  >
                    <source
                      src={projectPage.infoProject[0].images[0].highlight}
                    />
                  </video>
                )}
              </div>
            </div>
            <div className="flex justify-center col-span-4 row-span-4 col-start-2 row-start-13">
              <div id="review-container object-center">
                <h3 className="justify-center text-center w-full mb-10 dropShadow:glow">
                  Gallery
                </h3>
                <div
                  id="gallery-container"
                  className="grid grid-cols-2 md:grid-cols-2 gap-4"
                >
                  {Object.entries(
                    projectPage.infoProject[0].images[0].gallery
                  ).map(([key, image], index) => (
                    <div key={index}>
                      <Image
                        width={500}
                        height={100}
                        className="h-auto max-w-full rounded-lg"
                        src={image}
                        alt={key}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="row-span-4 col-start-1 row-start-2"></div>
            <div className="row-span-4 col-start-3 row-start-8 justify-center"></div>
            <div className="col-start-5 row-start-5"></div>
          </div>
          <div className="col-span-6 row-start-17"></div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="flex gap-4 flex-wrap justify-center">
            <Image
              className="w-10 h-10 animate-spin"
              src="https://www.svgrepo.com/show/199956/loading-loader.svg"
              alt="Loading icon"
              width={10}
              height={10}
            />
          </div>
          <p className="object-center">Loading Project... Please Wait</p>
        </div>
      )}
    </div>
  );
}

export default ProjectName;
