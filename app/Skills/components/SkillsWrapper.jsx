import React from "react";
import Frontend from "./Frontend/Frontend";

function SkillsWrapper() {
  return (
    <>
      <div className="absolute w-full flex justify-center">
        <span className="text-[16rem] font-[900] opacity-10">SKILLS</span>
      </div>
      <div className="flex flex-wrap justify-center w-full items-center mt-20 gap-20">
        <Frontend />
      </div>
    </>
  );
}

export default SkillsWrapper;
