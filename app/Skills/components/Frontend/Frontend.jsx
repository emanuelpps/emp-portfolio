"use client";
import React, { useState } from "react";
import uuid from "react-uuid";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiNextui } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import { FaSass } from "react-icons/fa";
import { SiFramer } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

function Frontend() {
  const [frontendSkills] = useState([
    {
      id: uuid(),
      title: "HTML 5",
      icon: <FaHtml5 className="text-[#e34f26] text-[3rem]" />,
      url: "https://www.html5.org",
    },
    {
      id: uuid(),
      title: "CSS 3",
      icon: <FaCss3Alt className="text-[#2965f1] text-[3rem]" />,
      url: "https://www.w3.org/Style/CSS/",
    },
    {
      id: uuid(),
      title: "JavaScript",
      icon: <TbBrandJavascript className="text-[#f0db4f] text-[3rem]" />,
      url: "https://www.javascript.com",
    },
    {
      id: uuid(),
      title: "React",
      icon: <FaReact className="text-[#61dafb] text-[3rem]" />,
      url: "https://reactjs.org",
    },
    {
      id: uuid(),
      title: "Next.js",
      icon: <SiNextdotjs className="text-[#000000] text-[3rem] stroke-white" />,
      url: "https://nextjs.org",
    },
    {
      id: uuid(),
      title: "Bootstrap",
      icon: <FaBootstrap className="text-[#7952b3] text-[3rem]" />,
      url: "https://getbootstrap.com",
    },
    {
      id: uuid(),
      title: "Redux",
      icon: <SiRedux className="text-[#764abc] text-[3rem]" />,
      url: "https://redux.js.org",
    },
    {
      id: uuid(),
      title: "Tailwind CSS",
      icon: <RiTailwindCssFill className="text-[#06b6d4] text-[3rem]" />,
      url: "https://tailwindcss.com",
    },
    {
      id: uuid(),
      title: "TypeScript",
      icon: <TbBrandTypescript className="text-[#3178c6] text-[3rem]" />,
    },
    {
      id: uuid(),
      title: "Sass",
      icon: <FaSass className="text-[#cd6799] text-[3rem]" />,
      url: "https://sass-lang.com",
    },
    {
      id: uuid(),
      title: "Framer Motion",
      icon: <SiFramer className="text-[#000000] text-[3rem]" />,
      url: "https://www.framer.com",
    },
    {
      id: uuid(),
      title: "NextUI",
      icon: <SiNextui className="text-[#000000] text-[3rem]" />,
      url: "https://nextui.org",
    },
  ]);
  return (
    <div className="w-[100%] flex justify-center">
      <div id="frontend-skill" className="w-[85%]">
        <div id="forntend-title">
          <h2 className="text-6xl opacity-75">Frontend</h2>
        </div>
        <div id="frontend-container">
          <div
            id="frontend-icons"
            className="flex flex-wrap gap-10 justify-center items-center mt-10"
          >
            {frontendSkills.map((skill) => (
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

export default Frontend;
