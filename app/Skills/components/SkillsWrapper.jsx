import React from "react";
import Frontend from "./Frontend/Frontend";
import Native from "./Native/Native";
import Backend from "./Backend/Backend";

function SkillsWrapper() {
  return (
    <>
      <div className="absolute flex justify-center w-full">
        <span className="text-[5rem] md:text-[11rem] lg:text-[16rem] font-[900] opacity-10">
          Skills
        </span>
      </div>
      <div className="flex flex-wrap items-center justify-center w-full gap-24 md:mt-20">
        <Frontend />
        <Native />
        <Backend />
      </div>
    </>
  );
}

export default SkillsWrapper;
