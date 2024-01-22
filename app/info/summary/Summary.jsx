import React from "react";
import Image from "next/image";
import summaryImage from "@/public/assets/summary-image.png";

function Summary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4 pt-10 md:pt-20 w-full md:w-[60rem]">
      <div
        id="summary-image-container"
        className="flex flex-col justify-center items-center"
      >
        <div className="window-outline md:flex">
          <Image
            src={summaryImage}
            alt="computer Image"
            width={400}
            height={1800}
            className="rounded-2xl text-center"
          />
        </div>
      </div>
      <div id="summary-text-container" className="">
        <h3 className="font-semibold text-md md:pl-10 md:pt-10 text-center md:text-start">Summary</h3>
        <p className="flex flex-col justify-center items-center pt-10 text-[14px] font-thin tracking-wide @apply whitespace-pre-line md:pl-10 md:pr-10 text-center md:text-start">
          Hello, I'm Emanuel Pagés, a Frontend Developer based in Río Negro,
          Argentina. I am passionate about coding and have a background in
          digital marketing.
        </p>
        <br />
        <p className="flex flex-col justify-center items-center text-[14px] font-thin tracking-wide @apply whitespace-pre-line md:pl-10 md:pr-10 text-center md:text-start">
          I have skills in Agile Methodologies, Github, GIT, HTML 5, CSS 3,
          Javascript, Bootstrap, SASS, React JS, Framer Motion, Next JS,
          Tailwindcss, React Native, Expo, Node JS, MongoDB, SEO, SEM, Email
          Marketing, and Wordpress.
        </p>
        <br />
        <p className="flex flex-col justify-center items-center text-[14px] font-thin tracking-wide @apply whitespace-pre-line md:pl-10 md:pr-10 text-center md:text-start">
          Currently, I wear two hats – working as a Digital Marketing Manager
          and a Frontend Developer. In my digital marketing role, I handle
          Email Marketing Campaigns, create content,
          and managing WordPress websites. As a Marketing Manager, I lead online
          and offline marketing strategies, develop social media plans, and
          manage the marketing budget.
        </p>
        <br />
        <p className="flex flex-col justify-center items-center text-[14px] font-thin tracking-wide @apply whitespace-pre-line md:pl-10 md:pr-10 pb-10 text-center md:text-start">
          In my role as a Frontend Developer, I focus on developing and
          maintaining frontend components using React JS or Next JS. I
          collaborate with team members, integrate services and APIs, and
          actively participate in code reviews to ensure the implementation of
          best development practices.
        </p>
      </div>
    </div>
  );
}

export default Summary;
