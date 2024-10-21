import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdWeb } from "react-icons/md";

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
        {code === "https://github.com/emanuelpps/the-coffee-roastery" && (
          <Link
            target="_blank"
            href={code}
            className="flex text-[1.2rem] bg-slate-100 p-2 text-black justify-center items-center rounded-lg w-[50%] hover:bg-slate-200 gap-5"
          >
            <FaGithub className="hidden md:flex"/>
            Code
          </Link>
        )}

        <Link
          target="_blank"
          href={demo}
          className="flex text-[1.2rem] bg-slate-100 p-2 text-black justify-center items-center rounded-lg w-[50%]  hover:bg-slate-200 gap-5"
        >
          <MdWeb  className="hidden md:flex"/>
          Deploy
        </Link>
      </div>
    </div>
  );
}

export default ProjectCardButtons;
