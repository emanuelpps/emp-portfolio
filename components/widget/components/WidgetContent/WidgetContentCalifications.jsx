"use client";
import React, { useState } from "react";
import { calculatePercentage } from "@/utils/calculatePercentage";

function WidgetContentCalifications() {
  const [skills, setSkills] = useState({
    "Team Work": 9.4,
    Communication: 9.1,
    Proactivity: 9.4,
    "Learning Agility": 9.3,
    "Change Resilience": 9.0,
    Adaptability: 9.3,
    "Problem Solving": 9.3,
    Autonomy: 9.2,
    "Positive Attitude": 8.0,
    Empathy: 9.3,
    Punctuality: 9.2,
    "Time Management": 9.3,
    Solidarity: 9.4,
  });

  return (
    <div id="widget-content-califications">
      <div
        id="widget-content-califications-container"
        className=" pl-5 text-black pb-5 pr-5"
      >
        <ul className="flex flex-col gap-5 text-[0.8rem]">
          {Object.entries(skills).map(([skill, value]) => (
            <li key={skill} className="flex flex-row gap-10">
              <span className="w-full">{skill}:</span>
              <span className="font-bold"> {value}</span>
              <div
                id="skill-bar-container"
                className="border-solid border-black border-[0.1rem] w-[100%] rounded-lg"
              >
                <div id="skill-bar">
                  <div
                    className={`bg-lime-600 rounded-md m-[0.1rem]`}
                    style={{ width: `${calculatePercentage(value)}%` }}
                  >
                    <p className="invisible">5</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default WidgetContentCalifications;
