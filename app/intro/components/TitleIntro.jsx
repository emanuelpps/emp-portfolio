import React from "react";

function TitleIntro() {
  return (
    <div
      id="title-intro"
      className="w-full h-[100vh] md:h-full flex flex-col justify-center items-start leading-tight mt-0 md:mt-[10%] animate-fade-right animate-ease-in animate-normal animate-fill-forwards"
    >
      <div>
        <span className="hidden md:flex md:text-[8rem] font-[300] opacity-20">
          Hi,
        </span>
      </div>
      <div className="flex gap-5">
        <span className="hidden md:flex md:text-[8rem] font-[300] opacity-20">
          I'm
        </span>
        <h1 className="text-[4rem] md:text-[8rem] font-bold">Emanuel Pagés.</h1>
      </div>
      <div className="text-[4rem] md:text-[8rem] font-light">
        Frontend Developer
      </div>
    </div>
  );
}

export default TitleIntro;
