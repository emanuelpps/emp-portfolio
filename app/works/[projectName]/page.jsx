"use client";
import React, { useState, useEffect, useRef } from "react";
import projects from "@/public/data/works.json";
import Image from "next/image";
import { VscGithub } from "react-icons/vsc";
import { VscLinkExternal } from "react-icons/vsc";
import { VscArrowLeft } from "react-icons/vsc";
import { FaRegLightbulb } from "react-icons/fa6";
import "ldrs/tailChase";
import Link from "next/link";
import loader from "@/components/loader/loader";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { SlClose } from "react-icons/sl";
import uuid from "react-uuid";

function ProjectName({ params }) {
  const [dataProjects, setDataProjects] = useState([]);
  const [projectPage, setProjectPage] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [isViewing, setIsViewing] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState({});
  const [inSection, setInSection] = useState("");

  const ref = useRef(null);
  const scrollRef = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    setDataProjects(projects);
  }, []);

  useEffect(() => {
    const findProject = dataProjects.find(
      (element) => element.linkName === params.projectName
    );
    setProjectPage(findProject);
  }, [dataProjects, params.projectName]);

  const handleLoaded = () => {
    setLoading(false);
  };

  const handleImageSelected = (photo) => {
    setSelectedPhoto(photo);
    console.log("photo", photo);
    setIsViewing(true);
    console.log("isViewing", isViewing);
  };

  useEffect(() => {
    setInSection(scrollRef.current?.id);
  }, [ref]);

  console.log("inSection", ref.current?.id);

  return (
    <div>
      {projectPage ? (
        <>
          <div className="p-2 md:p-0 md:grid grid-cols-1 grid-rows-auto md:grid-cols-6 md:grid-rows-17 gap-4 overflow-x-hidden  overflow-y-hidden">
            <div className="col-start-1 row-start-1 fixed top-10 md:top-0 w-[200px] z-50">
              <Link href={"/"}>
                <button className="md:m-10 hidden py-2 md:px-4 md:inline-flex items-center gap-x-2 text-sm font-normal rounded-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100 hover:bg-gray-200 hover:text-black">
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
                  className="flex flex-row justify-center rounded-3xl "
                >
                  <h2 className="text-center font-light">
                    {projectPage.class}
                  </h2>
                </div>
              </div>
              <div>
                <div
                  id="video-container"
                  className="flex justify-center place-content-center place-items-center "
                >
                  {projectPage.infoProject[0].video ? (
                    <>
                      {isLoading && (
                        <div className="flex flex-col items-center  text-center mt-20">
                          <div className="loadership_MANQV">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                          </div>
                          <p>Please wait... Loading video</p>
                        </div>
                      )}
                      <video
                        controls={true}
                        autoPlay
                        loop
                        aspect-auto
                        rounded-lg
                        className={`relative w-[900px] overflow-hidden ${
                          isLoading ? "hidden" : ""
                        }`}
                        alt="Project Image"
                        onLoadedData={handleLoaded}
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
                <Link href="#overview-container">
                  <li
                    ref={scrollRef}
                    className={`font-light text-sm  hover:text-white ${
                      inSection == "overview-container"
                        ? "text-white"
                        : "text-gray-400"
                    }`}
                    viewport={{ root: scrollRef }}
                    whileInView={{
                      fontWeight: "bold",
                      fontSize: "3rem",
                    }}
                  >
                    Overview
                  </li>
                </Link>
                <Link href="#highlights-container" scroll={true}>
                  <li className="font-light text-sm text-gray-400 hover:text-white">
                    Highlights
                  </li>
                </Link>
                <Link href="#gallery-container" scroll={true}>
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
                {projectPage.isInProgress === false ? (
                  <Link href={projectPage.demo} target="_blank">
                    <button className="m-10 py-3 px-8 inline-flex items-center gap-x-2 text-sm rounded-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100 hover:bg-gray-200 hover:text-black">
                      <VscLinkExternal />
                      <p>Demo</p>
                    </button>
                  </Link>
                ) : null}
                <Link href={projectPage.code} target="_blank">
                  <button className="m-10 py-3 px-5 inline-flex items-center gap-x-2 text-sm rounded-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100 hover:bg-gray-200 hover:text-black">
                    <VscGithub />
                    <p>Repository</p>
                  </button>
                </Link>
              </div>
            </div>
            <AnimatePresence>
              <motion.div
                ref={scrollRef}
                initial={{ opacity: 0, y: 250 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 50,
                    damping: 30,
                  },
                }}
                exit={{ opacity: 0 }}
                viewport={{ once: true }}
                className="md:pl-20 col-span-4 col-start-2 row-start-7 md:col-span-2 md:col-start-2 md:row-start-7 text-center md:text-start"
              >
                <div id="role-container">
                  <h4 className="font-semibold text-md">My Role</h4>
                  <h3 className="font-extralight text-[14px]">
                    {projectPage.infoProject[0].myRole}
                  </h3>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 250 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 50,
                    damping: 30,
                  },
                }}
                exit={{ opacity: 0 }}
                viewport={{ once: true }}
                className="mt-5 md:mt-0 md:pl-20 col-span-4 md:col-span-2 row-span-4 col-start-2 md:row-span-2 md:col-start-2 row-start-8  text-center md:text-start"
              >
                <div
                  id="team-container"
                  className="flex flex-col md:flex-none justify-center md:justify-start md:items-start"
                >
                  {projectPage.infoProject[0].team ? (
                    <h4 className="font-semibold text-md">Team</h4>
                  ) : (
                    <></>
                  )}
                  {projectPage.infoProject[0].team?.map((teamMate, index) => (
                    <p key={uuid()} className="font-thin text-[14px]">
                      {teamMate}
                    </p>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 250 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 50,
                    damping: 30,
                  },
                }}
                exit={{ opacity: 0 }}
                viewport={{ once: true }}
                className="mt-5 md:mt-0 md:col-span-2 md:row-span-3 md:col-start-4 md:row-start-7 col-span-4 row-span-3 col-start-2 row-start-9 mb-4 md:mb-20 justify-center place-items-center text-center md:text-start"
              >
                <div ref={ref} id="overview-container" className="md:w-[26rem]">
                  <h3 className="font-semibold text-md">Overview</h3>
                  <p className="font-thin tracking-wide whitespace-pre-line text-[14px]">
                    {projectPage.infoProject[0].overview}
                  </p>
                </div>
                <div
                  id="technologies-container"
                  className="flex flex-col md:flex-none justify-center md:justify-start md:items-start mt-6 md:w-[26rem]"
                >
                  <h4 className="font-semibold text-md">Technologies used</h4>
                  <h3 className="font-extralight text-[14px]">
                    {projectPage.lenguage}
                  </h3>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 250 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 50,
                    damping: 30,
                  },
                }}
                exit={{ opacity: 0 }}
                viewport={{ once: true }}
                id="highlights-container"
                className="md:col-span-4 md:row-span-3 md:col-start-2 md:row-start-10 -outline-offset-1 bg-[#161515] overflow-hidden p-2 rounded-3xl border-t-[rgba(242,242,242,0.15)] border-x-[rgba(242,242,242,0.15)] border-l border-solid border-r border-t md:flex md:flex-col justify-center mb-20 animate-blinkingBg mt-10 md:mt-0 md:w-[55rem] mx-auto"
              >
                <FaRegLightbulb
                  size={30}
                  className="justify-center w-full mt-10 mb-2 neon-text stroke-white stroke-2 neon"
                />
                <h3 className="justify-center text-center w-full mb-10 dropShadow:glow text-md">
                  HIGHLIGHTS
                </h3>
                <p className="font-extralight justify-center text-center md:pl-20 md:pr-20 mb-10 text-[14px]">
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
                            key={uuid()}
                            src={value}
                            alt={`${projectPage.name}_${key}`}
                            width={600}
                            height={800}
                            className="mb-10 relative mx-auto rounded-lg overflow-hidden"
                            onLoadingComplete={(image) =>
                              image.classList.remove("opacity-0")
                            }
                            onLoadStart={loader}
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
                      onLoadingComplete={(image) =>
                        image.classList.remove("opacity-0")
                      }
                      onLoadStart={loader}
                      loader={loader}
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
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 250 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 50,
                    damping: 30,
                  },
                }}
                exit={{ opacity: 0 }}
                viewport={{ once: true }}
                className="flex justify-center col-span-4 row-span-4 col-start-2 row-start-13"
              >
                <div id="gallery-container" className="object-center">
                  <h3 className="justify-center text-center w-full mb-10 dropShadow:glow font-semibold text-md">
                    Gallery
                  </h3>
                  <div
                    id="gallery-container"
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    {isViewing ? (
                      <div className="md:absolute md:flex md:items-center md:justify-center md:w-[1020px] md:h-[1000px] md:backdrop-blur-[2px] md:backdrop-saturate-[180%] md:bg-[rgba(17,25,40,0)]">
                        <div
                          className="hidden md:flex md:absolute md:top-[23%] md:right-12 md:cursor-pointer"
                          onClick={() => {
                            setIsViewing(false), setSelectedPhoto("");
                          }}
                        >
                          <div className="md:h-6">
                            <SlClose className="md:w-[fit-content] md:h-full md:bg-black md:rounded-full" />
                          </div>
                        </div>
                        <Image
                          className="hidden md:flex md:object-cover md:rounded-lg md:min-w-[950px] md:max-w-[950px]"
                          src={selectedPhoto}
                          width={950}
                          height={800}
                          alt={projectPage.name}
                        />
                      </div>
                    ) : (
                      ""
                    )}
                    {Object.entries(
                      projectPage.infoProject[0].images[0].gallery
                    ).map(([key, image], index) => (
                      <div key={uuid()} className="flex flex-column">
                        <Image
                          onClick={() => handleImageSelected(image)}
                          loader={loader}
                          width={500}
                          height={100}
                          className="h-auto w-full object-cover rounded-lg cursor-pointer"
                          src={image}
                          alt={key}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="row-span-4 col-start-1 row-start-2"></div>
            <div className="row-span-4 col-start-3 row-start-8 justify-center"></div>
            <div className="col-start-5 row-start-5"></div>
          </div>
          <div className="col-span-6 row-start-17"></div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="flex gap-4 flex-wrap justify-center">
            <div className="loadership_MANQV">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <p className="object-center">Loading Project... Please Wait</p>
        </div>
      )}
    </div>
  );
}

export default ProjectName;
