import React from "react";

export default function ProjectCardHeader({ title, skills }) {
  return (
    <div
      id="project-card-header-container"
      className="flex w-[100%]  justify-center items-center"
    >
      <div id="project-card-header" className="flex justify-between w-[100%]">
        <h2 id="project-card-header-title" className="text-4xl">
          {title}
        </h2>
        <div id="project-card-header-skills" className="flex items-center justify-center gap-10">
          {skills.map((skill) => (
            <div className="text-[0.8rem] border border-white p-2 text-white justify-center items-center rounded-lg">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
