import React from "react";
import Image from "next/image";
import aboutmeImage from "@/public/assets/aboutme-image.png";

function AboutMe() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4 pt-10 md:mt-20 w-full md:w-[60rem]">
      <div id="summary-text-container">
        <h3 className="font-semibold text-md md:pl-10 md:pt-10">About Me</h3>
        <p className="pt-10 text-[14px] font-thin tracking-wide @apply whitespace-pre-line md:pr-10 md:pl-10">
          A few years ago, I began working in the culinary industry (now a meditative hobby), before venturing into the
          realm of Digital Marketing. While working in digital marketing, I got
          introduced to HTML, CSS, and JavaScript. Since then, I have been
          meaning to learn more about web development.
        </p>
        <br />
        <p className="text-[14px] font-thin tracking-wide @apply whitespace-pre-line md:pr-10 md:pl-10">
          I spent most of my life in Ushuaia (Tierra del Fuego), then several
          years in Capital Federal (Buenos Aires), and finally, I rooted myself
          in the city of General Roca (Río Negro). Here, I started teaching
          flight lessons as a Flight Instructor. During the COVID-19 pandemic, I
          took the opportunity to explore programming on my own.
        </p>
        <br />
        <p className="text-[14px] font-thin tracking-wide @apply whitespace-pre-line md:pr-10 md:pl-10 pb-10">
          While working as a Marketing Manager, I decided to dive into Full
          Stack Development studies. I dedicate each day to learning something
          new. It's a journey I find both challenging and exciting. I am
          constantly seeking out new projects and challenges to expand my skills
          and knowledge in the world of web development. My goal is to become
          proficient in various programming languages and frameworks, and
          ultimately, to become a successful Full Stack Developer. I am
          passionate about creating innovative and user-friendly digital
          solutions, and I am excited to see where this journey in programming
          will take me.
        </p>
      </div>
      <div
        id="summary-image-container"
        className="flex flex-col md:ml-20 justify-center items-center"
      >
        <div className="window-outline">
          <Image
            src={aboutmeImage}
            alt="computer Image"
            width={400}
            height={1800}
            className="rounded-2xl text-center"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
