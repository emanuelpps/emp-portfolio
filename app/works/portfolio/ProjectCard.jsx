import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import noCountryLogo from "@/public/assets/images/noCountryLogo.svg";
import { FiPlus } from "react-icons/fi";
import Link from "next/link";
import { motion } from "framer-motion";

function ProjectCard({ project }) {
  const [hoverState, setHoverState] = useState(false);
  const [hoverTransition, setHoverTransition] = useState("");
  const [mediaQuery, setMediaQuery] = useState("");

  const animationAttributes = {};

  useEffect(() => {
    setMediaQuery(window.matchMedia("(max-width: 768px)"));
  }, [mediaQuery]);

  console.log(mediaQuery);

  return (
    <div
      className={`flex justify-center text-center md:text-left cursor-pointer -outline-offset-1  overflow-hidden  border-t-[rgba(242,242,242,0.15)] border-x-[rgba(242,242,242,0.15)] border-l border-solid border-r border-t hover:border-none hover:-outline-offset-0 w-[340px] h-[400px] md:w-[600px] md:h-[400px] transition duration-800 bg-cover bg-no-repeat ease-in-out  rounded-xl`}
      style={{
        backgroundImage: `url(${project.img})`,
        backgroundPosition: "center",
      }}
      onMouseEnter={() => {
        setHoverState(true);
      }}
      onMouseLeave={() => {
        setHoverState(false);
      }}
    >
      <Link
        href={`/works/${project.linkName}`}
        className={`flex flex-col justify-between h-full md:w-[100%]`}
      >
        <motion.div
          id="title-container"
          className={`flex md:flex p-5 bg-[#1f1d1d] w-[350px] md:w-full justify-between`}
          initial={{ opacity: 0, y: -20 }}
          animate={
            mediaQuery.matches
              ? { opacity: 1, y: 0 }
              : { opacity: hoverState ? 1 : 0, y: hoverState ? 0 : -20 }
          }
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-center md:text-left text-1xl md:text-3xl md:gap-2 ">
            {project.name}
          </h1>
          <div className="flex justify-center items-end p-2 w-[fit-content]">
            <h2 className="text-[0.8rem] text-balance">{project.class}</h2>
          </div>
          {project.noCountry ? (
            <div className="">
              <h3 className="md:text-sm text-[0.5rem]">Developed at</h3>
              <Image
                src={noCountryLogo}
                alt="No Country"
                className="w-[70px] md:w-[100px]"
              />
            </div>
          ) : (
            ""
          )}
        </motion.div>
        <div
          id="description-container"
          className="flex flex-col justify-evenly h-full"
        >
          {/*<h2 className="text-sm md:text-base font-extralight">
            {project.class} - {project.type}
          </h2>
          <p className="text-sm md:text-base font-extralight w-[300px]">
            {project.description}
          </p>
        </div>
        {/*<div
          id="img-container"
          className="flex flex-column overflow-hidden justify-center mt-5 md:h-[300px]"
        >
          <img
            src={project.img}
            alt={project.name}
            loading="lazy"
            className="object-fit"
          />
        </div>*/}
          <div className="flex md:invisible justify-center items-center gap-2 h-full">
            <span className="justify-center  text-md font-bold text-white py-3 px-5 inline-flex items-center text-sm rounded-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100 hover:bg-gray-200 hover:text-black">
              See more details
            </span>
          </div>
          <motion.div
            id="tech-container"
            className={`hidden md:flex flex-grow justify-center items-center w-full bg-[#1f1d1d] h-12 gap-3`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: hoverState ? 1 : 0, y: hoverState ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
            {project.lenguage.map((lenguage, index) => (
              <p className="flex justify-center items-centerfont-semibold text-[0.6rem] md:text-[0.7rem] w-[fit-content]  border-solid border-white border-[1px] bg-[#353535] rounded-md">
                <span key={index} className="md:p-1  text-pretty">
                  {lenguage}
                </span>
              </p>
            ))}
          </motion.div>
        </div>
      </Link>
    </div>
  );
}

export default ProjectCard;
