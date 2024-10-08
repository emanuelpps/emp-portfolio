"use client";
import React, { useState } from "react";
import { FaReact } from "react-icons/fa";
import { SiExpo } from "react-icons/si";
import uuid from "react-uuid";
function Native() {
  const [nativeSkills] = useState([
    {
      id: uuid(),
      title: "React Native",
      icon: <FaReact className="text-[#61dafb] text-[2rem] md:text-[3rem]" />,
      url: "https://reactnative.dev",
    },
    {
      id: uuid(),
      title: "Expo",
      icon: <SiExpo className="text-[#ffff] text-[2rem] md:text-[3rem]" />,
      url: "https://expo.dev",
    },
    {
      id: uuid(),
      title: "NativeWind",
      icon: <FaReact className="text-[#61dafb] text-[2rem] md:text-[3rem]" />,
      url: "https://www.nativewind.dev/",
    },
  ]);
  return (
    <div className="w-[100%] flex justify-center">
      <div id="native-skill" className="md:w-[85%]">
        <div id="native-title">
          <h2 className="text-3xl opacity-75 md:text-5xl">Native</h2>
        </div>
        <div id="native-container">
          <div
            id="native-icons"
            className="flex flex-wrap items-center justify-center gap-10 mt-10"
          >
            {nativeSkills.map((skill, index) => (
              <div
                key={index}
                className="flex justify-center items-center bg-[#252525] p-1 md:p-5 rounded-md gap-2 md:gap-5 w-[40%] min-h-[50px] h-[70px] md:w-60 text-[0.8rem] md:text-[1rem]"
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

export default Native;
