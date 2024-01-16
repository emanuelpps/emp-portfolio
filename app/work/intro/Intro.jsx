import React from "react";
import Image from "next/image";
import "./Intro.css";
import arrowDown from "@/public/assets/arrowDown.svg";
import Contact from "@/components/buttons/Contact/Contact";
import MyWork from "@/components/buttons/MyWork/MyWork";

export default function Intro() {
  return (
    <div className="window-outline w-screen p-10 md:w-[62rem] h-[auto] mt-28 md:h-full md:mt-10">
      <div id="titles-container" className="p-10 md:p-20">
        <div className="window-main">
          <h3 className="text-4xl md:text-6xl textShadow mt-0 md:mt-10 font-extralight tracking-wide">
            Hi!
          </h3>
          <h1 className="text-4xl md:text-6xl textShadow mt-5 md:mt-10 font-normal tracking-wide">
            I'm Emanuel Pagés
          </h1>
          <h2 className="text-4xl md:text-6xl textShadow mt-5 md:mt-10 font-extralight tracking-wide">
            Frontend Developer
          </h2>
          <div
            id="intro-button-container"
            className="flex mt-5 md:mt-20 justify-center md:justify-evenly gap-20"
          >
            <Contact />
            <MyWork />
          </div>
          <div className="flex justify-center items-center arrow mt-5 md:mt-10 bounce">
            <Image src={arrowDown}></Image>
          </div>
        </div>
      </div>
      <div className="noise-gradient"></div>
      <div className="noise"></div>
    </div>
  );
}
