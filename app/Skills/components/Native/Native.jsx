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
      icon: <FaReact className="text-[#61dafb] text-[3rem]" />,
      url: "https://reactnative.dev",
    },
    {
      id: uuid(),
      title: "Expo",
      icon: <SiExpo className="text-[#ffff] text-[3rem]" />,
      url: "https://expo.dev",
    },
  ]);
  return (
    <div className="w-[100%] flex justify-center">
      <div id="frontend-skill" className="w-[85%]">
        <div id="forntend-title">
          <h2 className="text-5xl opacity-75">Native</h2>
        </div>
        <div id="frontend-container">
          <div
            id="frontend-icons"
            className="flex flex-wrap gap-10 justify-center items-center mt-10"
          >
            {nativeSkills.map((skill) => (
              <div
                className="flex justify-center items-center bg-[#252525] p-5 rounded-md gap-5 w-60"
                title={skill.title}
              >
                <div>{skill.icon} </div>
                {skill.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Native;
