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
        //? { y: 0, opacity: 0, transition: { duration: 0.5 }, scale: 0 }
        { y: -300, opacity: 1, transition: { duration: 0.5 }, scale: 1 }
      }
      exit={{ opacity: 0, x: 0, scale: 0, transition: { duration: 0.5 } }}
      layoutId={props.selectedId}
      className="absolute bg-[#252525] flexjustify-center items-center p-2 rounded-xl"
    >
      <div
        id="project-details-close"
        className="flex items-center justify-end "
      >
        <div
          className="text-xl bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 rounded-lg p-1 mb-5"
          onClick={() => {
            props.setSelectedId(0), props.setProjectSelected();
          }}
        >
          <GrClose />
        </div>
      </div>
      <div
        id="project-details"
        className="flex justify-center items-center gap-3 w-[700px]"
      >
        <div id="project-details-video-container" className="">
          {props?.projectSelected[0]?.video ? (
            <video autoPlay muted loop className="w-[100%] rounded-xl">
              <source src={props?.projectSelected[0]?.video} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={props.projectSelected[0]?.img2}
              width={800}
              height={300}
              property="cover"
              className={`bg-fill rounded-xl`}
              alt="Project Image"
            />
          )}
        </div>
        <div>
          <div className="flex w-full justify-between">
            <motion.h5>{props.projectSelected[0]?.name}</motion.h5>
          </div>
          <div id="project-details-buttons">
            <div className="flex justify-evenly w-full">
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
          <div id="project-details-description">
            <div className="flex w-full justify-center">
              <p>{props.projectSelected[0]?.description}</p>
            </div>
            <div id="project-details-overview">
              <div>{props.projectSelected[0]?.infoProject?.overview}</div>
            </div>
            <div id="project-details-rol-team">
              <div>
                <span>My Role: </span>
                {props.projectSelected[0]?.infoProject?.myRole}
              </div>
              <div>
                <span>Team: </span>
                <span>{props.projectSelected[0]?.infoProject?.team}</span>
              </div>
            </div>
          </div>
          <motion.button onClick={() => setSelectedId(null)} />
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectDetails;
