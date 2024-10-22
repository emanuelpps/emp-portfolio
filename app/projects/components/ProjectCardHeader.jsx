import React from "react";

export default function ProjectCardHeader({ title, skills }) {
  return (
    <div
      id="project-card-header-container"
      className="flex flex-col lg:flex-row w-[100%] justify-center items-center"
    >
      <div
        id="project-card-header"
        className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between w-[100%]"
      >
        <h2 id="project-card-header-title" className="text-3xl md:text-4xl">
          {title}
        </h2>
        <div
          id="project-card-header-skills"
          className="flex flex-wrap items-center justify-center gap-2 md:gap-10 md:flex-nowrap"
        >
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
