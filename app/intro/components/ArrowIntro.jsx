import React from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

function ArrowIntro() {
  return (
    <div
      id="arrow-intro"
      className="w-full flex flex-col items-end justify-center animate-fade-down animate-duration-[2000ms] animate-delay-500"
    >
      <div id="arrow-intro-container" className="flex flex-col gap-8 justify-center items-center pt-[2%]">
        <div className="gap-5 rotate-90">
          <span className="text-sm">Scroll</span>
        </div>
        <MdKeyboardDoubleArrowDown className="text-[1.5rem] text-white animate-bounce animate-infinite" />
      </div>
    </div>
  );
}

export default ArrowIntro;
