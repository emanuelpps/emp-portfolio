"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import GenericButton from "@/components/buttons/GenericButton/GenericButton";
import Link from "next/link";
import { GrClose } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";

function ProjectDetails({ ...props }) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 0,
        transition: { duration: 0.5 },
        scale: 0,
      }}
      animate={
        isClicked
          ? { y: 0, opacity: 0, transition: { duration: 0.5 }, scale: 0 }
          : { y: -300, opacity: 1, transition: { duration: 0.5 }, scale: 1 }
      }
      exit={{ opacity: 0, x: 0, scale: 0, transition: { duration: 0.5 } }}
      layoutId={props.selectedId}
      className="absolute bg-[#252525] flex justify-center items-center p-10 rounded-xl"
    >
      <div id="project-details" className="h-[100%] w-[100%]">
        <div
          id="project-details-close"
          className="flex items-center justify-end"
        >
          <div className="text-xl bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 rounded-lg p-1 mb-5">
            <GrClose onClick={() => setIsClicked(!isClicked)} />
          </div>
        </div>
        <div id="project-details-video-container">
          {props?.projectSelected[0]?.video ? (
            <video autoPlay muted loop className="w-[100%] rounded-xl">
              <source src={props?.projectSelected[0]?.video} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={props.projectSelected[0]?.img2}
              width={500}
              height={300}
              property="cover"
              className={`bg-fill rounded-xl`}
              alt="Project Image"
            />
          )}
        </div>
        <div id="project-details-buttons">
          <div className="flex justify-evenly">
            <Link href={`${props.projectSelected[0]?.link}`}>
              <GenericButton label="Demo"></GenericButton>
            </Link>
            <Link href={`${props.projectSelected[0]?.github}`}>
              <GenericButton
                label={
                  <>
                    <FaGithub /> Code
                  </>
                }
              ></GenericButton>
            </Link>
          </div>
        </div>
        <div className="flex w-full justify-between">
          <motion.h5>{props.projectSelected[0]?.name}</motion.h5>
          <motion.h2>{props.projectSelected[0]?.class}</motion.h2>
        </div>
        <div id="project-details-description">
          <div className="flex w-full justify-center">
            <p>{props.projectSelected[0]?.description}</p>
          </div>
          <div id="project-details-overview">
            <div>{props.projectSelected[0]?.infoProject?.overview}</div>
          </div>
        </div>
        <motion.button onClick={() => setSelectedId(null)} />
      </div>
    </motion.div>
  );
}

export default ProjectDetails;
