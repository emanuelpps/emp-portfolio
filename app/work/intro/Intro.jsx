import React from "react";
import Image from "next/image";
import "./Intro.css";
import arrowDown from "@/public/assets/arrowDown.svg";
import Contact from "@/components/buttons/Contact/Contact";
import MyWork from "@/components/buttons/MyWork/MyWork";

export default function Intro() {
  return (
    <div className="window-outline w-screen p-10 md:w-[60rem] h-[auto] mt-28 md:h-auto md:mt-1">
      <div id="titles-container" className="p-10 md:p-20">
        <div className="window-main ml">
          <h3 className="text-4xl md:text-5xl textShadow mt-0 md:mt-1 font-extralight tracking-wide md:pl-24">
            Hi!
          </h3>
          <h1 className="text-4xl md:text-5xl textShadow mt-5 md:mt-2 font-normal tracking-wide md:pl-24">
            I'm Emanuel Pagés
          </h1>
          <h2 className="text-4xl md:text-5xl textShadow mt-5 md:mt-2 font-extralight tracking-wide md:pl-24">
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
            <Image src={arrowDown} className="w-9"></Image>
          </div>
        </div>
      </div>
      <div className="noise-gradient"></div>
      <div className="noise"></div>
    </div>
  );
}
