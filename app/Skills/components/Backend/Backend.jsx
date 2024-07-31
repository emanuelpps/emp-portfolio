"use client";
import uuid from "react-uuid";
import React, { useState } from "react";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";

function Backend() {
  const [backendSkills] = useState([
    {
      id: uuid(),
      title: "Node.js",
      icon: <FaNodeJs className="text-[#339933] text-[2rem] md:text-[3rem]" />,
      url: "https://nodejs.org",
    },
    {
      id: uuid(),
      title: "Express.js",
      icon: <SiExpress className="text-[#000000] text-[2rem] md:text-[3rem]" />,
      url: "https://expressjs.com",
    },
    {
      id: uuid(),
      title: "MongoDB",
      icon: <SiMongodb className="text-[#4DA53F] text-[2rem] md:text-[3rem]" />,
      url: "https://www.mongodb.com",
    },
    {
      id: uuid(),
      title: "Firebase",
      icon: (
        <IoLogoFirebase className="text-[#F7C52D] text-[2rem] md:text-[3rem]" />
      ),
      url: "https://firebase.google.com",
    },
  ]);
  return (
    <div className="w-[100%] flex justify-center">
      <div id="frontend-skill" className="md:w-[85%]">
        <div id="forntend-title">
          <h2 className="text-3xl md:text-5xl opacity-75">Backend</h2>
        </div>
        <div id="frontend-container">
          <div
            id="frontend-icons"
            className="flex flex-wrap gap-10 justify-center items-center mt-10"
          >
            {backendSkills.map((skill, index) => (
              <div
                key={index}
                className="flex justify-center items-center bg-[#252525] p-1 md:p-5 rounded-md gap-2 md:gap-5 w-[40%] min-h-[50px] md:w-60 text-[0.8rem] md:text-[1rem]"
                title={skill.title}
              >
                <div>{skill.icon} </div>
                <span className="text-[0.9rem] md:text-[1rem] w-[fit-content]">
                  {skill.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Backend;
