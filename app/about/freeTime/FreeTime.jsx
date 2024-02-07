"use client";
import React, { useRef } from "react";
import Image from "next/image";
import freeTimeImage from "@/public/assets/free-time-image.png";
import { AnimatePresence, motion, useInView } from "framer-motion";

function FreeTime() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4 pt-10 md:pt-40 w-full md:w-[62rem]">
      <div
        id="free-time-image-container"
        className="flex flex-col justify-center items-center "
      >
        <div className="window-outline">
          <Image
            src={freeTimeImage}
            alt="computer Image"
            className="rounded-2xl text-center object-cover h-[400px] w-[250px] md:object-cover md:h-auto md:w-[400px]"
          />
        </div>
      </div>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              stiffness: 50,
              damping: 30,
            },
          }}
          exit={{ opacity: 0 }}
          viewport={{ once: true }}
          id="free-time-text-container"
        >
          <h3 className="md:pt-10 md:pl-10 font-semibold text-md text-center md:text-start">
            In my Free Time
          </h3>
          <p className="pt-10 pl-2 pr-2 md:pl-10 md:pr-10 pb-10 text-[14px] font-thin tracking-wide @apply whitespace-pre-line text-center md:text-start">
            Probably developing new projects to enhance my skills or perfecting
            my portfolio in some ways. Besides that, I spend my time hiking or
            reading books about history. Another thing that I love is playing
            game simulators for any kind of machine, be it planes, trucks, cars,
            or ships.
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default FreeTime;
