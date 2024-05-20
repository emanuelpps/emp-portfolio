"use client";
import React from "react";
import Image from "next/image";
import { frontendIcons } from "@/components/imagesContainer/frontendIcons";
import { backendIcons } from "@/components/imagesContainer/backendIcons";
import { nativeIcons } from "@/components/imagesContainer/nativeIcons";
import { designIcons } from "@/components/imagesContainer/designIcons";
import { AnimatePresence, motion } from "framer-motion";
import uuid from "react-uuid";

function Skills() {
  return (
    <motion.div
    key={"skills"}
      initial={{ opacity: 0, y: 50 }}
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
      id="skills-container"
      className="grid grid-cols-1 grid-rows-8 w-full md:w-[62rem] md:grid-rows-5 md:pt-19"
    >
      <div className="flex justify-center md:col-start-1 md:col-span-1 md:justify-start md:items-end mb-10 md:mb-10 md:ml-10">
        <h1>Skills</h1>
      </div>
      <div
        id="skills-frontend-container"
        className="flex flex-col md:grid md:grid-cols-2 mb-14 md:mb-5"
      >
        <div
          id="frontend-title-container"
          className="flex flex-col justify-center items-center"
        >
          <h3 className="text-center text-[14px] font-light mb-5 md:mb-0">
            Frontend
          </h3>
        </div>
        <div
          id="frontend-icons-container"
          className="flex flex-wrap gap-5 justify-center md:justify-normal align-middle"
        >
          {frontendIcons.map((image) => (
            <div
              key={uuid()}
              className="flex flex-col justify-center items-center"
            >
              <Image src={image.path} alt={image.name} width={46} height={46} />
              <h4 className="text-xs text-center mt-2 font-extralight">
                {image.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
      <div
        id="skills-backend-container"
        className="flex flex-col md:grid md:grid-cols-2 mb-14 md:mb-0"
      >
        <div
          id="backend-title-container"
          className="flex flex-col justify-center items-center"
        >
          <h3 className="text-center text-[14px] font-light mb-5 md:mb-0">
            Backend
          </h3>
        </div>
        <div
          id="backend-icons-container"
          className="flex flex-wrap gap-5 justify-center md:justify-normal align-middle"
        >
          {backendIcons.map((image) => (
            <div
              key={uuid()}
              className="flex flex-col justify-center items-center"
            >
              <Image src={image.path} alt={image.name} width={36} height={36} />
              <h4 className="text-xs text-center mt-2 font-extralight">
                {image.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
      <div
        id="skills-native-container"
        className="flex flex-col md:grid md:grid-cols-2 mb-14 md:mb-0"
      >
        <div
          id="native-title-container"
          className="flex flex-col justify-center items-center"
        >
          <h3 className="text-center text-[14px] font-light  mb-5 md:mb-0">
            Mobile
          </h3>
        </div>
        <div
          id="native-icons-container"
          className="flex flex-wrap gap-5 justify-center md:justify-normal align-middle"
        >
          {nativeIcons.map((image) => (
            <div
              key={uuid()}
              className="flex flex-col justify-center items-center"
            >
              <Image src={image.path} alt={image.name} width={36} height={36} />
              <h4 className="text-xs text-center mt-2 font-extralight">
                {image.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
      <div
        id="skills-design-container"
        className="flex flex-col md:grid md:grid-cols-2"
      >
        <div
          id="design-title-container"
          className="flex flex-col justify-center items-center"
        >
          <h3 className="text-center text-[14px] font-light  mb-5 md:mb-0">
            Design
          </h3>
        </div>
        <div
          id="design-icons-container"
          className="flex flex-wrap gap-5 justify-center md:justify-normal align-middle"
        >
          {designIcons.map((image) => (
            <div
              key={uuid()}
              className="flex flex-col justify-center items-center"
            >
              <Image src={image.path} alt={image.name} width={46} height={46} />
              <h4 className="text-xs text-center mt-2 font-extralight">
                {image.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
