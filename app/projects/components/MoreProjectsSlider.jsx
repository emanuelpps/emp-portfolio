import React, { useState } from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { MdWeb } from "react-icons/md";

function MoreProjectsSlider({ otherProjects }) {
  const [showButtons, setShowButtons] = useState(false);

  return (
    <div id="more-projects-slider">
      <div className="relative w-full h-full">
        <div
          className={`absolute w-full h-full ${
            showButtons ? "bg-black opacity-60 fade-in" : ""
          }`}
        ></div>
        <div
          className="absolute w-full h-full"
          onMouseEnter={() => {
            setShowButtons(true);
          }}
          onMouseLeave={() => {
            setShowButtons(false);
          }}
        >
          <div
            className={`${
              showButtons ? "flex" : "hidden"
            } w-full h-full justify-center items-center gap-5 flex-col`}
          >
            <div className="flex items-center justify-center">
              <h3 className="text-3xl font-bold stroke-2 stroke-black">{otherProjects.name}</h3>
            </div>
            <div className="flex items-center justify-center gap-10">
              <button className="flex items-center justify-center gap-2 p-3 text-black bg-white rounded-md hover:bg-gray-200">
                <MdWeb className="text-xl" />
                Deploy
              </button>
              <button className="flex items-center justify-center gap-2 p-3 text-black bg-white rounded-md hover:bg-gray-200">
                <FaGithub className="text-xl" />
                Code
              </button>
            </div>
          </div>
        </div>
        <Image src={otherProjects.img} width={600} height={600} className="rounded-xl"/>
      </div>
    </div>
  );
}

export default MoreProjectsSlider;
