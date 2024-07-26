"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import GenericButton from "@/components/buttons/GenericButton/GenericButton";
import Link from "next/link";
import { GrClose } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { VscLinkExternal, VscGithub } from "react-icons/vsc";
import { BsCameraVideo } from "react-icons/bs";

function ProjectDetails({ ...props }) {
  const [isVideoSelected, setIsVideoSelected] = useState(false);
  const [imageSelected, setImageSelected] = useState(
    props.projectSelected[0]?.img2
  );

  const closeDetailHandler = () => {
    props.setIsClicked(false);
    props.setSelectedId(0)
    props.setProjectSelected({});
  };
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 0,
        transition: { duration: 0.5 },
        scale: 0,
      }}
      animate={
        //? { y: 0, opacity: 0, transition: { duration: 0.5 }, scale: 0 }
        {
          x: props.projectSelected[0].id % 2 === 0 ? "-25%" : "25%",
          y: -300,
          opacity: 1,
          transition: {
            duration: 0.5,
          },
          scale: 1,
        }
      }
      exit={{ opacity: 0, x: 0, scale: 0, transition: { duration: 0.5 } }}
      layoutId={props.selectedId}
      className="absolute bg-[#252525]  justify-center items-center rounded-xl min-h-[100vh] w-[100%] z-50 backdrop-blur-sm bg-opacity-90 mb-50"
    >
      <div
        id="project-details-close"
        className="flex w-full h-[50px] p-5 justify-center items-center rounded-t-xl"
      >
        <div
          className="w-full flex justify-end items-center rounded-t-xl cursor-pointer"
          onClick={() => closeDetailHandler()}
        >
          <GrClose />
        </div>
      </div>
      <div
        id="project-details"
        className="flex justify-center items-center gap-5 w-[100%] h-[100%]"
      >
        <div
          id="project-details-video-container"
          className="w-full justify-center items-center rounded-xl p-5"
        >
          <div className="w-[100%] h-[400px] flex justify-center items-center bg-fill">
            {isVideoSelected ? (
              <video
                className="bg-contain rounded-xl flex justify-center items-center w-[800px] bg-fill"
                src={props.projectSelected[0].infoProject[0]?.video}
                autoPlay
                loop
                muted
                controlsList="nodownload"
                controls
                width={800}
                height={600}
                property="cover"
              />
            ) : (
              <Image
                src={imageSelected}
                width={600}
                height={600}
                property="cover"
                className={`bg-cover rounded-xl flex justify-center items-center`}
                alt="Project Image"
              />
            )}
          </div>
        </div>
        <div className="flex flex-col gap-5 w-full">
          <div className="flex flex-col border-b-2 mr-10">
            <p className="font-thin text-sm opacity-45">
              {props.projectSelected[0]?.class}
            </p>
            <div className="flex justfy-between  w-full">
              <motion.h5 className="text-3xl font-semibold w-full">
                {props.projectSelected[0]?.name}
              </motion.h5>
              <div className="flex justify-center items-end mb-2 w-full">
                <span className="text-sm">
                  {props.projectSelected[0]?.isInProgress &&
                    "Currently under development..."}
                </span>
              </div>
            </div>
          </div>
          <div id="project-details-buttons" className="flex justify-evenly">
            <div className="flex w-full jflex justify-evenly">
              {props.projectSelected[0] ? (
                <>
                  {props.projectSelected[0]?.demo && (
                    <Link href={props.projectSelected[0]?.demo} target="_blank">
                      <button className="m-2 py-3 px-8 inline-flex items-center gap-x-2 text-sm rounded-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100 hover:bg-gray-200 hover:text-black">
                        <VscLinkExternal />
                        <p>Demo</p>
                      </button>
                    </Link>
                  )}
                  <Link href={props.projectSelected[0]?.code} target="_blank">
                    <button className="m-2 py-3 px-5 inline-flex items-center gap-x-2 text-sm rounded-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100 hover:bg-gray-200 hover:text-black">
                      <VscGithub />
                      <p>Repository</p>
                    </button>
                  </Link>
                    <button className="m-2 py-3 px-5 inline-flex items-center gap-x-2 text-sm rounded-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100 hover:bg-gray-200 hover:text-black" onClick={() => setIsVideoSelected(true)}>
                      <BsCameraVideo />
                      <p>Teaser</p>
                    </button>
                </>
              ) : (
                <div></div>
              )}
            </div>
          </div>
          <div id="project-details-description" className="flex flex-col gap-5">
            <div id="project-details-overview">
              <p>{props.projectSelected[0]?.infoProject?.overview}</p>
            </div>
            <div id="project-details-rol-team" className="flex flex-col gap-2">
              <div className="flex gap-5">
                <span className="font-thin text-balance opacity-80">
                  My Role:
                </span>
                <span className="font-semibold text-balance w-[fit-content]">
                  {props.projectSelected[0]?.infoProject[0]?.myRole}
                </span>
              </div>
              {props.projectSelected[0]?.infoProject[0]?.team && (
                <div className="flex flex-col">
                  <span className="font-thin text-balance opacity-80">
                    Team:
                  </span>
                  <div className="w-[95%]">
                    {props.projectSelected[0]?.infoProject[0]?.team.map(
                      (team) => (
                        <p className="font-semibold justify-end items-end w-full">
                          {team}
                        </p>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
            <div id="project-details-highlight">
              <div>
                <h5 className="font-thin text-balance opacity-80">
                  Highlight:
                </h5>
                <div>
                  <p className="w-[95%]">
                    {props.projectSelected[0]?.infoProject[0]?.highlight}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="project-details-gallery" className="w-full h-full mt-10 mb-10">
        <div className="flex gap-5 justify-center items-center w-[100%] max-w-[100%]  pl-5 pr-5">
          {Object.entries(
            props.projectSelected[0].infoProject[0].images[0].gallery
          ).map(([key, image], index) => (
            <div
              className="flex justify-center items-center flex-row w-[50%] cursor-pointer"
              onClick={() => {
                setImageSelected(image), setIsVideoSelected(false);
              }}
            >
              <Image
                key={index}
                src={image}
                width={400}
                height={800}
                objectFit="cover"
                className="bg-cover rounded-xl flex justify-center items-center"
                alt={`Project Image ${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectDetails;
