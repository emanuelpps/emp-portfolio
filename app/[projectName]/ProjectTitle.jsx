import React from "react";

function ProjectTitle({ ...props }) {
  return (
    <div id="project-title" className="flex justify-center">
      <div id="title-container">
        <div id="project-title" className="font-[800] text-[3.2rem] neon-text">
          {props.projectPage?.name}
        </div>
        <div id="project-class" className="flex text-[2rem] justify-center">
          {props.projectPage?.class}
        </div>
      </div>
    </div>
  );
}

export default ProjectTitle;
