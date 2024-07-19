import React from "react";

function TitleIntro() {
  return (
    <div
      id="title-intro"
      className="w-full h-full flex flex-col justify-center items-start leading-tight mt-[5%] animate-fade-right animate-duration-[2000ms] animate-delay-500 "
    >
      <div>
        <span className="text-[7rem] font-bold opacity-20">Hi,</span>
      </div>
      <div className="flex gap-5">
        <span className="text-[7rem] font-bold opacity-20">I'm</span>
        <h1 className="text-[7rem] font-bold">Emanuel Pagés.</h1>
      </div>
      <div className="text-[7rem] font-light">Frontend Developer</div>
    </div>
  );
}

export default TitleIntro;
