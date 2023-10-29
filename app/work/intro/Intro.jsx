import React from "react";
import Image from "next/image";
import "./Intro.css";
import arrowDown from "@/public/assets/arrowDown.svg";

export default function Intro() {
  return (
    <div className="window-outline">
      <div id="titles-container" className="h-full w-full">
        <div className="window-main  pl-28 pr-28 mt-25">
          <h3 className="text-7xl textShadow mt-16">Hi! </h3>
          <h1 className="text-7xl textShadow">I'm Emanuel Pages</h1>
          <h2 className="text-7xl textShadow">Front End Developer</h2>
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
