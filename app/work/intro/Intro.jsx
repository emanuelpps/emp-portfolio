import React from "react";
import Image from "next/image";
import "./Intro.css";
import arrowDown from "@/public/assets/arrowDown.svg";
import Contact from "@/components/buttons/Contact/Contact";
import MyWork from "@/components/buttons/MyWork/MyWork";

export default function Intro() {
  return (
    <div className="-outline-offset-1 bg-[radial-gradient(_circle_farthest-side_at_50%_0,rgba(242,242,242,0.2),rgba(0,0,0,0)_)] overflow-hidden p-2 rounded-3xl border-t-[rgba(242,242,242,0.15)] border-x-[rgba(242,242,242,0.15)] border-l border-solid border-r border-t w-screen md:p-10 md:w-[60rem] h-[auto] md:h-auto md:mt-1">
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
          <div className="flex justify-center items-center mt-5 md:mt-10">
            <Image
              src={arrowDown}
              className="w-9 text-center mx-0 my-[5%] animate-[bounce_2s_infinite]"
            ></Image>
          </div>
        </div>
      </div>
      <div className="z-[2] h-3/6 bg-[linear-gradient(_to_right,transparent_5%,var(--on-background)_50%,transparent_95%_)] opacity-70 blur-[100px] hidden absolute rounded-[2000px] top-24 bottom-auto inset-x-6"></div>
      <div className="bg-[url('https://assets-global.website-files.com/63dcb6e1a80e9454b630f4c4/644af0299bc01254815ae442_noise-overlay-2.png')] bg-[0_0] bg-[200px] block inset-[0%]"></div>
    </div>
  );
}
