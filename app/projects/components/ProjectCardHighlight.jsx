import React from "react";

function ProjectCardHighlight({ highlight }) {
  return (
    <div id="project-card-highlight-container">
      <div id="project-card-highlight" className="w-[70%]">
        <p>{highlight}</p>
      </div>
    </div>
  );
}

export default ProjectCardHighlight;
