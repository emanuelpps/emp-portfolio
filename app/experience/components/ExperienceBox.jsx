import React from "react";

function ExperienceBox() {
  return (
    <>
      <div className="absolute w-full flex justify-center">
        <span className="text-[5rem] md:text-[16rem] font-[900] opacity-10">
          Experience
        </span>
      </div>
      <div className="-outline-offset-1 overflow-hidden flex flex-col justify-center items-center md:mt-20">
        <div
          id="expereice-title"
          className="w-full flex flex-row justify-center md:justify-start"
        ></div>
        <div
          id="experience-container"
          className="pt-10 ml-5 w-[95%] md:w-[80%]"
        >
          <ol className="relative border-s border-gray-200 dark:border-gray-700">
            <div className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-[0.8rem] md:text-[1.5rem] font-normal leading-none text-gray-400 dark:text-gray-500">
                2024 - Present
              </time>
              <div className="flex flex-row items-center">
                <h3 className="text-[1rem] md:text-[2rem] font-light  text-white flex flex-row">
                  Frontend Developer
                </h3>
                <p className="ml-2 text-gray-400 font-thin text-[0.8rem] md:text-[2rem]">
                  - The CodeMaker Lab
                </p>
              </div>
            </div>
            <div className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-[0.8rem] md:text-[1.5rem] font-normal leading-none text-gray-400 dark:text-gray-500">
                2024 - July
              </time>
              <div className="flex flex-row items-center">
                <h3 className="text-[1rem] md:text-[2rem] font-light  text-white flex flex-row">
                  Frontend Developer
                </h3>
                <p className="ml-2 text-gray-400 font-thin text-[0.8rem] md:text-[2rem]">
                  - Hackathon Participation at Justina.io
                </p>
              </div>
            </div>
            <div className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-[0.8rem] md:text-[1.5rem] font-normal leading-none text-gray-400 dark:text-gray-500">
                2023 - 2024
              </time>
              <div className="flex flex-row items-center">
                <h3 className="text-[1rem] md:text-[2rem] font-light  text-white flex flex-row">
                  Frontend Developer
                </h3>
                <p className="ml-2 text-gray-400 font-thin text-[0.8rem] md:text-[2rem]">
                  - NoCountry
                </p>
              </div>
            </div>
            <div className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-[0.8rem] md:text-[1.5rem] font-normal leading-none text-gray-400 dark:text-gray-500">
                2022 - 2024
              </time>
              <div className="flex flex-row items-center">
                <h3 className="text-[1rem] md:text-[2rem] font-light  text-white flex flex-row">
                  Digital Marketing Manager
                </h3>
                <p className="ml-2 text-gray-400 font-thin text-[0.8rem] md:text-[2rem]">
                  - Duo Digital
                </p>
              </div>
            </div>
            {/*             <div className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-[1.5rem] font-normal leading-none text-gray-400 dark:text-gray-500">
                2021 - 2022
              </time>
              <div className="flex flex-row items-center">
                <h3 className="text-[2rem] font-light  text-white flex flex-row">
                  Marketing Manager
                </h3>
                <p className="ml-2 text-gray-400 font-thin text-[2rem]">
                  - Vital Servicios
                </p>
              </div>
              <div className="mb-4 text-[1.1rem] font-light text-gray-400 flex flex-col gap-2">
                <li>
                  - Plan and execute SEM campaigns. Optimize website content to
                  improve SEO.
                </li>
                <li>
                  - Develop and implement both online and offline marketing
                  strategies to achieve business goals.
                </li>
                <li>
                  - Plan and execute marketing actions, such as social media
                  campaigns, online ads, and email marketing.
                </li>
                <li>
                  - Monitor and track the marketing budget. Ensure marketing
                  activities are cost-effective and within budget.
                </li>
                <li>
                  - Implement improvements on the Ecommerce website to enhance
                  user experience and increase sales.
                </li>
                <li>- Execute marketing campaigns across various channels.</li>
                <li>
                  - Prepare regular reports on marketing activities and their
                  effectiveness. Present reports and recommendations to senior
                  management.
                </li>
                <li className="text-balance">
                  - Work with other departments, such as sales and customer
                  services, to ensure cohesive and effective marketing efforts.
                </li>
              </div>
            </div> */}
            <li className="ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-[1rem] md:text-[2rem] font-normal leading-none text-gray-400 dark:text-gray-500">
                + Over 7 Years Working on Digital Products.
              </time>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default ExperienceBox;
