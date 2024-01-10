import React from "react";
import Image from "next/image";
import freeTimeImage from "@/public/assets/free-time-image.png"

function FreeTime() {
  return (
    <div className="grid grid-cols-2 grid-rows-1 gap-4 pt-20 w-full md:w-[62rem]">
      <div
        id="summary-image-container"
        className="flex flex-col justify-center items-center"
      >
        <Image
          src={freeTimeImage}
          alt="computer Image"
          width={1200}
          height={1200}
          className="rounded-xl text-center"
        />
      </div>
      <div id="summary-text-container">
        <h3 className="ml-20 font-semibold text-md">In my Free Time</h3>
        <p className="pt-10 ml-20 text-[14px] font-thin tracking-wide @apply whitespace-pre-line">
          Probably developing new projects to enhance my skills or perfecting my
          portfolio in some ways. Besides that, I spend my time hiking or
          reading books about history. Another thing that I love is playing game
          simulators for any kind of machine, be it planes, trucks, cars, or
          ships.
        </p>
      </div>
    </div>
  );
}

export default FreeTime;
