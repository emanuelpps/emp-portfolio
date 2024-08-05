import React from "react";

function TechIcons() {
  return (
    <div className="flex flex-row justify-center items-center text-center md:gap-4">
      {frontendIcons
        .filter((image) =>
          ["CSS 3", "Next.js", "Tailwind CSS", "Framer Motion"].includes(
            image.name
          )
        )
        .map((image) => (
          <div
            className="flex flex-row justify-center items-center text-center align-middle w-20 gap-2"
            key={uuid()}
          >
            <Image src={image.path} alt={image.name} width={30} height={30} />
            <h4 className="text-[0.6rem] text-center mt-2 font-extralight">
              {image.name}
            </h4>
          </div>
        ))}
    </div>
  );
}

export default TechIcons;
