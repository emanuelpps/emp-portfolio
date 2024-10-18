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
            showButtons ? "bg-black opacity-60 fade-in animate-delay-75" : ""
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
            } w-full h-full justify-center items-center flex-col`}
          >
            {otherProjects.noCountry && (
                  <div className="flex flex-col items-end justify-center w-[100%] h-0">
                    <p className="text-sm">Developed at</p>
                    <div className="flex gap-1">
                      <img src="https://res.cloudinary.com/dkgoszhfr/image/upload/v1729276741/bu0ywbxaqjnf7x4skkxu.png" width={22} height={5} />
                      <p className="font-sans text-sm">No Country</p>
                    </div>
                  </div>
                )}
            <div className="flex items-center justify-center">
              <h3 className="text-3xl font-bold stroke-2 stroke-black">
                {otherProjects.name}
              </h3>
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
            <div className="flex gap-5 mt-5">
              {otherProjects?.lenguage?.map((leng, index) => (
                <div
                  key={index}
                  className="flex flex-wrap items-center justify-center gap-2 p-2 text-sm text-white bg-black rounded-md"
                >
                  {leng}
                </div>
              ))}
            </div>
          </div>
        </div>
        <Image
          src={otherProjects.img}
          width={600}
          height={600}
          className="rounded-xl"
        />
      </div>
    </div>
  );
}

export default MoreProjectsSlider;
