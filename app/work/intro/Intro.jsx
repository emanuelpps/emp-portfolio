import React from "react";
import Image from "next/image";
import "./Intro.css";
import arrowDown from "@/public/assets/arrowDown.svg";
import Contact from "@/components/buttons/Contact/Contact";
import MyWork from "@/components/buttons/MyWork/MyWork";

export default function Intro() {
  return (
    <div className="window-outline">
      <div id="titles-container" className="h-auto w-full">
        <div className="window-main pl-28 pr-28 mt-25">
          <h3 className="text-6xl textShadow mt-16 font-light">Hi! </h3>
          <h1 className="text-7xl textShadow font-nomal ">I'm Emanuel Pages</h1>
          <h2 className="text-6xl textShadow font-extralight">Front End Developer</h2>
          <div id="intro-button-container" className="flex mt-16 justify-evenly">
            <Contact />
            <MyWork />
          </div>
          <div className="flex justify-center items-center arrow bounce">
            <Image src={arrowDown}></Image>
          </div>
        </div>
      </div>
      <div className="noise-gradient"></div>
      <div className="noise"></div>
    </div>
  );
}
