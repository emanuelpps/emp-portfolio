import React from "react";

function TitleIntro() {
  return (
    <div
      id="title-intro"
      className="w-full flex flex-col justify-start align-start  leading-tight"
    >
      <div>
        <span className="text-7xl font-extralight">Hi</span>
      </div>
      <div className="flex gap-5">
        <span className="text-[8rem] font-extralight">I'm</span>
        <h1 className="text-[8rem] font-bold">Emanuel Pagés</h1>
      </div>
      <div className="text-[7rem] font-light">Frontend Developer</div>
    </div>
  );
}

export default TitleIntro;
