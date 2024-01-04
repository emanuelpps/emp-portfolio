import React from "react";
import Image from "next/image";
import "./Intro.css";
import arrowDown from "@/public/assets/arrowDown.svg";
import Contact from "@/components/buttons/Contact/Contact";
import MyWork from "@/components/buttons/MyWork/MyWork";

export default function Intro() {
  return (
    <div className="window-outline w-full md:w-[62rem]">
      <div id="titles-container" className="p-20">
        <div className="window-main">
          <h3 className="text-6xl textShadow mt-10 font-extralight tracking-wide">
            Hi!{" "}
          </h3>
          <h1 className="text-6xl textShadow font-nomal tracking-wide">
            I'm Emanuel Pages
          </h1>
          <h2 className="text-6xl textShadow font-extralight tracking-wide">
            Front End Developer
          </h2>
          <div
            id="intro-button-container"
            className="flex mt-20 justify-evenly"
          >
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
