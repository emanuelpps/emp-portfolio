"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

function AboutMe() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4 mt-20 w-full md:w-[60rem]">
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
          id="summary-text-container"
        >
          <h3 className="font-semibold text-md md:pl-10 md:pt-10 text-center md:text-start">
            About Me
          </h3>
          <p className="pt-10 pl-2 pr-2  text-[14px] font-thin tracking-wide @apply whitespace-pre-line md:pr-10 md:pl-10 text-center md:text-start">
            A few years ago, I started working in Digital Marketing. During my
            time in digital marketing, I was introduced to HTML, CSS, and
            JavaScript. Since then, I have been meaning to learn more about web
            development.
          </p>
          <br />
          <p className="text-[14px] pl-2 pr-2 font-thin tracking-wide @apply whitespace-pre-line md:pr-10 md:pl-10 text-center md:text-start">
            I spent many years in Buenos Aires, Capital Federal, and eventually
            settled in General Roca, Río Negro. There, I began teaching flight
            lessons as a Flight Instructor. During the COVID-19 pandemic, I took
            the opportunity to explore programming on my own.
          </p>
          <br />
          <p className="text-[14px] pl-2 pr-2 font-thin tracking-wide @apply whitespace-pre-line md:pr-10 md:pl-10 pb-10 text-center md:text-start">
            While working as a Marketing Manager, I decided to dive into Full
            Stack Development studies. I dedicate each day to learning something
            new. It's a journey I find both challenging and exciting. I am
            constantly seeking out new projects and challenges to expand my
            skills and knowledge in the world of web development.
          </p>
          <p className="text-[14px] pl-2 pr-2 font-thin tracking-wide @apply whitespace-pre-line md:pr-10 md:pl-10 pb-10 text-center md:text-start">
            My goal is to become proficient in various programming languages and
            frameworks, and ultimately, to become a successful Full Stack
            Developer. I am passionate about creating innovative and
            user-friendly digital solutions, and I am excited to see where this
            journey in programming will take me.
          </p>
        </motion.div>
      </AnimatePresence>
      <div
        id="summary-image-container"
        className="flex flex-col md:ml-20 justify-center items-center"
      >
        <div className="window-outline">
          <Image
            src="https://res.cloudinary.com/dkgoszhfr/image/upload/v1709861423/hosting/portfolio-about-images/gixv7hil8tsjmvkszteu.png"
            alt="computer Image"
            className="rounded-2xl text-center object-cover h-[400px] w-[250px] md:object-cover md:h-auto md:w-[400px]"
            width={250}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
