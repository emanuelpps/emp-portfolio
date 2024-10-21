import React from "react";
import Image from "next/image";

function ProjectCardImage({ image, imageTwo }) {
  return (
    <div id="project-card-image-container" className="relative flex">
      <div
        id="project-card-image"
        className="flex items-center justify-center w-full h-full overflow-hidden"
      >
        <img
          src={image}
          alt="project image"
          className="hidden md:flex w-[860px] md:w-[100%] h-[400px] md:h-[550px] lg:h-full object-cover sm:w-[100vw] sm:h-auto sm:max-w-none"
        />
        <img
          src={imageTwo}
          alt="project image"
          className="flex md:hidden w-[860px] md:w-[100%] h-[450px] md:h-[550px] lg:h-full object-fill sm:w-[100vw] sm:h-auto sm:max-w-none"
        />
      </div>
    </div>
  );
}

export default ProjectCardImage;
