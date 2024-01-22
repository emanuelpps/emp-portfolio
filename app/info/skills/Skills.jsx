import React from "react";
import Image from "next/image";
import { frontendIcons } from "@/components/imagesContainer/frontendIcons";
import { backendIcons } from "@/components/imagesContainer/backendIcons";
import { nativeIcons } from "@/components/imagesContainer/nativeIcons";
import { designIcons } from "@/components/imagesContainer/designIcons";

function Skills() {
  console.log(frontendIcons);
  return (
    <div
      id="skills-container"
      className="grid grid-cols-1 grid-rows-8 w-full md:w-[60rem] md:grid md:grid-cols-1 md:grid-rows-4 pt-10 md:pt-40"
    >
      <div
        id="skills-frontend-container"
        className="flex flex-col md:grid md:grid-cols-2"
      >
        <div className="flex justify-center md:col-start-1 md:col-span-4 md:justify-start mt-20 md:mt-10 mb-10">
          <h1>Skills</h1>
        </div>
        <div
          id="frontend-title-container"
          className="flex flex-col justify-center items-center pb-5 mb-8 md:mb-0 md:m-12"
        >
          <h3 className="text-center text-[14px] font-light">Frontend</h3>
        </div>
        <div
          id="frontend-icons-container"
          className="flex flex-wrap gap-5 justify-center md:justify-normal align-middle"
        >
          {frontendIcons.map((image) => (
            <div className="flex flex-col justify-center items-center">
              <Image
                key={image.id}
                src={image.path}
                alt={image.name}
                width={46}
                height={46}
              />
              <h4 className="text-xs text-center mt-2 font-extralight">
                {image.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
      <div
        id="skills-backend-container"
        className="flex flex-col md:grid md:grid-cols-2 pt-16 md:pt-12"
      >
        <div
          id="backend-title-container"
          className="flex flex-col justify-center items-center md:m-12 mb-8 md:mb-0"
        >
          <h3 className="text-center text-[14px] font-extralight">Backend</h3>
        </div>
        <div
          id="backend-icons-container"
          className="flex flex-wrap  gap-5 justify-center md:justify-normal align-middle"
        >
          {backendIcons.map((image) => (
            <div className="flex flex-col justify-center items-center">
              <Image
                key={image.id}
                src={image.path}
                alt={image.name}
                width={36}
                height={36}
              />
              <h4 className="text-xs text-center mt-2 font-extralight">
                {image.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
      <div
        id="skills-native-container"
        className="flex flex-col md:grid md:grid-cols-2 pt-10 md:pt-0"
      >
        <div
          id="native-title-container"
          className="flex flex-col justify-center items-center md:m-12 mb-8 md:mb-0"
        >
          <h3 className="text-center text-[14px] font-extralight">Mobile</h3>
        </div>
        <div
          id="native-icons-container"
          className="flex flex-wrap  gap-5 justify-center md:justify-normal align-middle mb-8 md:mb-0"
        >
          {nativeIcons.map((image) => (
            <div className="flex flex-col justify-center items-center">
              <Image
                key={image.id}
                src={image.path}
                alt={image.name}
                width={36}
                height={36}
              />
              <h4 className="text-xs text-center mt-2 font-extralight">
                {image.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
      <div
        id="skills-design-container"
        className="flex flex-col md:grid md:grid-cols-2 mt-5 md:mt-0 pb-20 md:pb-0"
      >
        <div
          id="design-title-container"
          className="flex flex-col justify-center items-center md:m-12 mb-8 md:mb-0"
        >
          <h3 className="text-center text-[14px] font-extralight">Design</h3>
        </div>
        <div
          id="design-icons-container"
          className="flex flex-wrap gap-5 justify-center md:justify-normal align-middle"
        >
          {designIcons.map((image) => (
            <div className="flex flex-col justify-center items-center">
              <Image
                key={image.id}
                src={image.path}
                alt={image.name}
                width={46}
                height={46}
              />
              <h4 className="text-xs text-center mt-2 font-extralight">
                {image.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
