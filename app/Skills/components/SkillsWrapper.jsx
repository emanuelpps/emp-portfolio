import React from "react";
import Frontend from "./Frontend/Frontend";
import Native from "./Native/Native";
import Backend from "./Backend/Backend";

function SkillsWrapper() {
  return (
    <>
      <div className="absolute w-full flex justify-center">
        <span className="text-[5rem] md:text-[16rem] font-[900] opacity-10">Skills</span>
      </div>
      <div className="flex flex-wrap justify-center w-full items-center md:mt-20 gap-24">
        <Frontend />
        <Native />
        <Backend />
      </div>
    </>
  );
}

export default SkillsWrapper;
