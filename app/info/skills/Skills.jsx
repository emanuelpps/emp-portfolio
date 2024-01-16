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
      className="grid grid-cols-1 grid-rows-4 w-full md:w-[62rem] md:grid-cols-2 md:grid-rows-2 pt-10 md:pt-40"
    >
      <div
        id="skills-title-container"
        className="text-start grid grid-cols-2 grid-rows-1"
      >
        <h3 className="font-semibold text-md ml-12">Skills</h3>
      </div>
      <div
        id="skills-frontend-container"
        className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4 mt-5 md:mt-[-62px]"
      >
        <div id="frontend-title-container" className="flex flex-col justify-center items-center m-12">
          <h3 className="text-center text-[14px] font-light">Frontend</h3>
        </div>
        <div
          id="frontend-icons-container"
          className="flex flex-wrap gap-10 align-middle"
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
        className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4 mt-5 md:mt-10" 
      >
        <div id="backend-title-container" className="flex flex-col justify-center items-center m-12">
          <h3 className="text-center text-[14px] font-extralight">Backend</h3>
        </div>
        <div
          id="backend-icons-container"
          className="flex flex-wrap gap-10 align-middle"
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
        className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4 mt-5 md:mt-10"
      >
        <div id="native-title-container" className="flex flex-col justify-center items-center m-12">
          <h3 className="text-center text-[14px] font-extralight">Mobile</h3>
        </div>
        <div id="native-icons-container" className="flex flex-wrap gap-10 align-middle">
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
        className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4 mt-5 md:mt-10"
      >
        <div id="design-title-container" className="flex flex-col justify-center items-center m-12">
          <h3 className="text-center text-[14px] font-extralight">Design</h3>
        </div>
        <div
          id="design-icons-container"
          className="flex flex-wrap gap-10 align-middle"
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
