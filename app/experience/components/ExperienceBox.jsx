import React from "react";

function ExperienceBox() {
  return (
    <>
      <div className="absolute w-full flex justify-center">
        <span className="text-[16rem] font-[900] opacity-10">EXPERIENCE</span>
      </div>
      <div className="-outline-offset-1 overflow-hidden flex flex-col justify-center items-center mt-20">
        <div
          id="expereice-title"
          className="w-full flex flex-row justify-center md:justify-start"
        ></div>
        <div id="experience-container" className="pt-10 ml-5  w-[80%]">
          <ol className="relative border-s border-gray-200 dark:border-gray-700">
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-[2rem] font-normal leading-none text-gray-400 dark:text-gray-500">
                2023 - Present
              </time>
              <div className="flex flex-row items-center">
                <h3 className="text-[3rem] font-light  text-white flex flex-row">
                  Frontend Developer
                </h3>
                <p className="ml-2 text-gray-400 font-thin text-[3rem]">
                  - NoCountry
                </p>
              </div>
              <p className="mb-4 text-[1.2rem] font-light text-gray-400">
                Development and maintenance of frontend components using React
                JS or Next JS. Translate designs and specifications into
                functional user interfaces. Work closely with other team members
                to achieve shared objectives. Integrate services and APIs to
                fetch data and dynamically display it in the user interface.
                Maintain and update current code, troubleshoot, and fix bugs
                actively. Review your peers’ code and conform to development
                guidelines.
              </p>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-[2rem] font-normal leading-none text-gray-400 dark:text-gray-500">
                2022 - Present
              </time>
              <div className="flex flex-row items-center">
                <h3 className="text-[3rem] font-light  text-white flex flex-row">
                  Digital Marketing Manager
                </h3>
                <p className="ml-2 text-gray-400 font-thin text-[3rem]">
                  - Duo Digital
                </p>
              </div>
              <p className="mb-4 text-[1.2rem] font-light text-gray-400">
                Content creation, writing, and sending of Email Marketing
                campaigns. Content Manager, Community Manager, and Paid Media
                Manager. Preparation of reports and tracking of KPIs.
                Administration and building of websites in Wordpress.
              </p>
            </li>
            <li className="ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-[2rem] font-normal leading-none text-gray-400 dark:text-gray-500">
                2021 - 2022
              </time>
              <div className="flex flex-row items-center">
                <h3 className="text-[3rem] font-light  text-white flex flex-row">
                  Marketing Manager
                </h3>
                <p className="ml-2 text-gray-400 font-thin text-[3rem]">
                  - Vital Servicios
                </p>
              </div>
              <p className="mb-4 text-[1.2rem] font-light text-gray-400">
                SEM. SEO. Development, implementation, and monitoring of the
                strategic online and offline marketing plan. Proposals for
                digital actions. Development of the marketing plan for social
                media. Monitoring and tracking the marketing budget.
                Implementation and improvements in the Ecommerce web page.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default ExperienceBox;
