import Link from "next/link";
import React from "react";

function ProjectCardButtons({ code, demo }) {
  return (
    <div
      id="project-card-buttons-container"
      className="w-[100%] flex justify-center items-center"
    >
      <div
        id="project-card-buttons"
        className="flex items-center justify-center w-[50%] gap-10"
      >
        <Link
          href={code}
          className="flex text-[1rem] bg-slate-100 p-2 text-black justify-center items-center rounded-lg w-[100%] hover:bg-slate-200"
        >
          Code
        </Link>
        <Link
          href={demo}
          className="flex text-[1rem] bg-slate-100 p-2 text-black justify-center items-center rounded-lg w-[100%] hover:bg-slate-200"
        >
          Demo
        </Link>
      </div>
    </div>
  );
}

export default ProjectCardButtons;
