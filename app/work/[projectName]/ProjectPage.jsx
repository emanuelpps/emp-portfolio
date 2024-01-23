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
import { PulseLoader } from "react-spinners";



function ProjectName({ params }) {
  const [dataProjects, setDataProjects] = useState([]);
  const [projectPage, setProjectPage] = useState(null);
  const [isVideoLoading, setVideoLoading] = useState(true);

  useEffect(() => {
    setDataProjects(projects);
  }, []);

  useEffect(() => {
    const findProject = dataProjects.find(
      (element) => element.linkName === params.projectName
    );
    setProjectPage(findProject);
  }, [dataProjects, params.projectName]);

  const handleVideoLoaded = () => {
    setVideoLoading(false);
  };

  console.log(projectPage);

  return (
    <div>
      {projectPage ? (
        <>
          <div className="grid grid-cols-1 grid-rows-auto md:grid-cols-6 md:grid-rows-17 gap-4">
            <div className="col-start-1 row-start-1 sticky top-0 w-[300px] z-50">
              <Link href={"/work"}>
                <button className="m-10 px-6 py-3 md:px-4 flex md:inline-flex items-center gap-x-2 text-sm font-normal rounded-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100 hover:bg-gray-200 hover:text-black">
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
                <div
                  id="video-container"
                  className="flex justify-center place-content-center place-items-center"
                >
                  {projectPage.infoProject[0].video ? (
                    <>
                      {isVideoLoading && (
                        <div className="text-center mt-20">
                          <PulseLoader color="#ffff" />
                          <p>Please wait... Loading video</p>
                        </div>
                      )}
                      <video
                        autoPlay
                        muted
                        loop
                        aspect-auto
                        rounded-lg
                        className={`relative mx-auto rounded-lg overflow-hidden ${
                          isVideoLoading ? "hidden" : ""
                        }`}
                        alt="Project Image"
                        onLoadedData={handleVideoLoaded}
                      >
                        <source src={projectPage.infoProject[0].video} />
                      </video>
                    </>
                  ) : (
                    <div className="text-center">
                      <p>No video available</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div
              id="content-container"
              className="invisible md:visible md:row-span-4 col-start-6 row-start-2 md:flex md:justify-center md:pt-32 md:relative"
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
                className="flex justify-center mt-10 pb-10"
              >
                <Link href={projectPage.demo} target="_blank">
                  <button className="m-10 py-3 px-8 inline-flex items-center gap-x-2 text-sm rounded-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100 hover:bg-gray-200 hover:text-black">
                    <VscLinkExternal />
                    <p>Deploy</p>
                  </button>
                </Link>
                <Link href={projectPage.code} target="_blank">
                  <button className="m-10 py-3 px-5 inline-flex items-center gap-x-2 text-sm rounded-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100 hover:bg-gray-200 hover:text-black">
                    <VscGithub className="w-full " />
                    <p>Repository</p>
                  </button>
                </Link>
              </div>
            </div>
            <div className="md:pl-20 col-span-4 col-start-2 row-start-7 md:col-span-2 md:col-start-2 md:row-start-7 text-center md:text-start">
              <div id="role-container">
                <h4 className="font-semibold text-md">My Role</h4>
                <h3 className="font-extralight text-[14px]">
                  {projectPage.infoProject[0].myRole}
                </h3>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:pl-20 col-span-4 md:col-span-2 row-span-4 col-start-2 md:row-span-2 md:col-start-2 row-start-8  text-center md:text-start">
              <div
                id="team-container"
                className="flex flex-col md:flex-none justify-center md:justify-start md:items-start"
              >
                {projectPage.infoProject[0].team ? (
                  <h4 className="font-semibold text-md">Team</h4>
                ) : (
                  <></>
                )}
                {projectPage.infoProject[0].team?.map((teamMate) => (
                  <p className="font-thin text-[14px]">{teamMate}</p>
                ))}
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2 md:row-span-3 md:col-start-4 md:row-start-7 col-span-4 row-span-3 col-start-2 row-start-9 mb-4 md:mb-20 justify-center place-items-center text-center md:text-start">
              <div id="overview-container">
                <h3 className="font-semibold text-md">Overview</h3>
                <p className="font-thin tracking-wide @apply whitespace-pre-line text-[14px]">
                  {projectPage.infoProject[0].overview}
                </p>
              </div>
            </div>
            <div
              id="highlights-container"
              className="col-span-4 row-span-3 col-start-2 row-start-10 window-outline flex flex-col justify-center mb-20 animate-blinkingBg mt-10 md:mt-0"
            >
              <FaRegLightbulb
                size={30}
                className="justify-center w-full mt-10 mb-2 neon-text stroke-white stroke-2 neon"
              />
              <h3 className="justify-center text-center w-full mb-10 dropShadow:glow text-md">
                HIGHLIGHTS
              </h3>
              <p className="font-extralight justify-center text-center pl-20 pr-20 mb-10 text-[14px]">
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
                <h3 className="justify-center text-center w-full mb-10 dropShadow:glow font-semibold text-md">
                  Gallery
                </h3>
                <div
                  id="gallery-container"
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {Object.entries(
                    projectPage.infoProject[0].images[0].gallery
                  ).map(([key, image], index) => (
                    <div key={index} className="flex flex-column">
                      <Image
                        width={500}
                        height={100}
                        className="h-auto w-full object-cover rounded-lg"
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
