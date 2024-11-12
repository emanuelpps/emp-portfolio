import React, { useState } from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import Link from "next/link";

function MoreProjectsSlider({ otherProjects }) {
  const [showButtons, setShowButtons] = useState(false);

  console.log("other", otherProjects);

  return (
    <div id="more-projects-slider" className="animate-fade-in-left">
      <div className="relative w-full h-full">
        <div
          className={`absolute w-full h-full bg-black opacity-60 lg:bg-inherit${
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
              showButtons ? "flex" : "flex lg:hidden"
            } w-[100%] h-full justify-center items-center flex-col gap-5`}
          >
            {otherProjects.noCountry && (
              <div className="flex-col items-end justify-center hidden h-0 p-5 bg-gray-400 rounded-md lg:flex bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
                <p className="text-[0.6rem]">Developed at</p>
                <div className="flex gap-1">
                  <img
                    src="https://res.cloudinary.com/dkgoszhfr/image/upload/v1729276741/bu0ywbxaqjnf7x4skkxu.png"
                    width={20}
                    height={3}
                  />
                  <p className="font-sans text-[0.8rem]">No Country</p>
                </div>
              </div>
            )}
            <div className="flex items-center justify-center p-5 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
              <h3 className="text-xl font-bold stroke-2 md:text-3xl stroke-black">
                {otherProjects.name}
              </h3>
            </div>
            <div className="hidden md:flex w-[80%] items-center justify-center p-5 text-center bg-black rounded-md border border-gray-600">
              <p>{otherProjects.description}</p>
            </div>
            <div className="flex items-center justify-center gap-10">
              {otherProjects.isInProgress ? (
                ""
              ) : (
                <Link target="_blank" href={`${otherProjects?.demo}`}>
                  <button className="flex items-center justify-center gap-2 p-3 text-black bg-white rounded-md hover:bg-gray-200">
                    <MdWeb className="text-xl" />
                    Deploy
                  </button>
                </Link>
              )}
              <Link target="_blank" href={`${otherProjects?.code}`}>
                <button className="flex items-center justify-center gap-2 p-3 text-black bg-white rounded-md hover:bg-gray-200">
                  <FaGithub className="text-xl" />
                  Code
                </button>
              </Link>
            </div>
            <div className="flex gap-5 mt-5">
              {otherProjects?.lenguage?.map((leng, index) => (
                <div
                  key={index}
                  className="flex flex-wrap items-center justify-center gap-2 p-2 text-[0.5rem] md:text-[1.2rem] lg:text-[0.8rem] text-white bg-black border border-gray-600 rounded-md"
                >
                  {leng}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-[100vw] lg:w-full flex justify-center items-center">
          <Image
            src={otherProjects.img}
            width={700}
            height={700}
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default MoreProjectsSlider;
