import React from "react";
import Image from "next/image";
import summaryImage from "@/public/assets/summary-image.png";

function Summary() {
  return (
    <div className="grid grid-cols-2 grid-rows-1 gap-4 pt-20 w-full md:w-[62rem]">
      <div
        id="summary-image-container"
        className="flex flex-col justify-center items-center"
      >
        <Image
          src={summaryImage}
          alt="computer Image"
          width={1200}
          height={1200}
          className="rounded-xl text-center"
        />
      </div>
      <div id="summary-text-container">
        <h3 className="ml-20 font-semibold text-md">Summary</h3>
        <p className="pt-10 ml-20 text-[14px] font-thin tracking-wide @apply whitespace-pre-line">
          Hello, I'm Emanuel Pagés, a Frontend Developer based in Río Negro,
          Argentina. With a background ranging from flight instructor to
          managing digital marketing campaigns, I've found my true passion in
          coding.
        </p>
        <br />
        <p className="ml-20 text-[14px] font-thin tracking-wide @apply whitespace-pre-line">
          I have skills in Agile Methodologies, Github, GIT, HTML 5, CSS 3,
          Javascript, Bootstrap, SASS, React JS, Framer Motion, Next JS,
          Tailwindcss, React Native, Expo, Node JS, MongoDB, SEO, SEM, Email
          Marketing, and Wordpress.
        </p>
        <br />
        <p className="ml-20 text-[14px] font-thin tracking-wide @apply whitespace-pre-line">
          Previously and currently, I wear two hats – as a Digital Marketing
          Manager and a Frontend Developer. In my digital marketing role, I
          handle Email Marketing Campaigns, create content, and manage WordPress websites.
          As a Marketing Manager, I lead online and offline marketing
          strategies, develop social media plans, and manage the marketing
          budget.
        </p>
        <br />
        <p className="ml-20 text-[14px] font-thin tracking-wide @apply whitespace-pre-line">
          In my current role as a Frontend Developer, I focus on developing and
          maintaining frontend components using React JS or Next JS. I collaborate with team members, integrate services and APIs, and actively participate in code review, ensuring the implementation of best development practices.
        </p>
      </div>
    </div>
  );
}

export default Summary;
