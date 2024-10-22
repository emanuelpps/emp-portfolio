import React from "react";

function ProjectCardHighlight({ highlight }) {
  return (
    <div id="project-card-highlight-container">
      <div id="project-card-highlight" className="w-[100%]">
        <p className="leading-7 text-pretty">{highlight}</p>
      </div>
    </div>
  );
}

export default ProjectCardHighlight;
