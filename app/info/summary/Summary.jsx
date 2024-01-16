import React from "react";
import Image from "next/image";
import summaryImage from "@/public/assets/summary-image.png";

function Summary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4 pt-10 md:pt-20 w-full md:w-[62rem]">
      <div
        id="summary-image-container"
        className="flex flex-col justify-center items-center"
      >
        <div className="window-outline hidden md:flex">
        <Image
          src={summaryImage}
          alt="computer Image"
          width={400}
          height={800}
          className="rounded-2xl text-center"
        />
        </div>
      </div>
      <div id="summary-text-container" className="">
        <h3 className="font-semibold text-md pl-10 pt-10">Summary</h3>
        <p className="flex flex-col justify-center items-center pt-10 text-[14px] font-thin tracking-wide @apply whitespace-pre-line pl-10 pr-10">
          Hello, I'm Emanuel Pagés, a Frontend Developer based in Río Negro,
          Argentina. With a background ranging from flight instructor to
          managing digital marketing campaigns, I've found my true passion in
          coding.
        </p>
        <br />
        <p className="flex flex-col justify-center items-center text-[14px] font-thin tracking-wide @apply whitespace-pre-line pl-10 pr-10">
          I have skills in Agile Methodologies, Github, GIT, HTML 5, CSS 3,
          Javascript, Bootstrap, SASS, React JS, Framer Motion, Next JS,
          Tailwindcss, React Native, Expo, Node JS, MongoDB, SEO, SEM, Email
          Marketing, and Wordpress.
        </p>
        <br />
        <p className="flex flex-col justify-center items-center text-[14px] font-thin tracking-wide @apply whitespace-pre-line pl-10 pr-10">
          Previously and currently, I wear two hats – as a Digital Marketing
          Manager and a Frontend Developer. In my digital marketing role, I
          handle Email Marketing Campaigns, create content, and manage WordPress websites.
          As a Marketing Manager, I lead online and offline marketing
          strategies, develop social media plans, and manage the marketing
          budget.
        </p>
        <br />
        <p className="flex flex-col justify-center items-center text-[14px] font-thin tracking-wide @apply whitespace-pre-line pl-10 pr-10 pb-10">
          In my current role as a Frontend Developer, I focus on developing and
          maintaining frontend components using React JS or Next JS. I collaborate with team members, integrate services and APIs, and actively participate in code review, ensuring the implementation of best development practices.
        </p>
      </div>
    </div>
  );
}

export default Summary;
