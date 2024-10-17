import React from "react";
import Image from "next/image";

function ProjectCardImage({ image }) {
  return (
    <div id="project-card-image-container" className="w-[100%] flex justify-center items-center">
      <div
        id="project-card-image"
        className="flex w-[100%] justify-center items-center"
      >
        <Image src={image} width={1600} height={1200} />
      </div>
    </div>
  );
}

export default ProjectCardImage;
