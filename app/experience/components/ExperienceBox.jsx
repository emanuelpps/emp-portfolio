import React from "react";

function ExperienceBox() {
  return (
    <>
      <div className="absolute flex justify-center w-full">
        <span className="text-[5rem] md:text-[11rem] lg:text-[16rem] font-[900] opacity-10">
          Experience
        </span>
      </div>
      <div className="flex justify-center items-center md:w-[100%]">
        <div className="md:w-[85%] -outline-offset-1 overflow-hidden flex flex-col justify-center items-center md:mt-40">
          <div
            id="expereice-title"
            className="flex flex-row justify-center w-full md:justify-start"
          ></div>
          <div
            id="experience-container"
            className="pt-10 ml-5 w-[100%] md:w-[90%]"
          >
            <ol className="relative border-gray-200 border-s dark:border-gray-700">
            <div className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-[1rem] md:text-[1.5rem] font-normal leading-none text-gray-400 dark:text-gray-500">
                2025 - Present
                </time>
                <div className="flex flex-row items-center md:gap-16">
                  <h3 className="text-[1.1rem] md:text-[2rem] font-light text-white flex flex-row w-[100%]">
                    Data Entry Specialist
                  </h3>
                  <span className="flex w-[50%] md:hidden">-</span>
                  <p className="text-gray-400 font-thin text-[1rem] md:text-[1.8rem] w-[100%]">
                    Vates Software an EPAM Company
                  </p>
                </div>
              </div>
              <div className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-[1rem] md:text-[1.5rem] font-normal leading-none text-gray-400 dark:text-gray-500">
                2024 - Present
                </time>
                <div className="flex flex-row items-center md:gap-16">
                  <h3 className="text-[1.1rem] md:text-[2rem] font-light text-white flex flex-row w-[100%]">
                    Frontend Developer
                  </h3>
                  <span className="flex w-[50%] md:hidden">-</span>
                  <p className="text-gray-400 font-thin text-[1rem] md:text-[1.8rem] w-[100%]">
                    The CodeMaker Lab
                  </p>
                </div>
              </div>
              <div className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-[1rem]  md:text-[1.2rem] lg:text-[1.5rem] font-normal leading-none text-gray-400 dark:text-gray-500">
                  2024 - July
                </time>
                <div className="flex flex-row items-center md:gap-16">
                  <h3 className="text-[1.1rem] md:text-[1.5rem] lg:text-[2rem] font-light  text-white flex flex-row w-[100%]">
                    Frontend Developer
                  </h3>
                  <span className="flex w-[50%] md:hidden">-</span>
                  <p className="ml-2 text-gray-400 font-thin text-[1rem] md:text-[1.8rem] w-[100%]">
                    Hackathon Participation at Justina.io
                  </p>
                </div>
              </div>
              <div className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1  text-[1rem]  md:text-[1.2rem] lg:text-[1.5rem] font-normal leading-none text-gray-400 dark:text-gray-500">
                  2023 - 2024
                </time>
                <div className="flex flex-row items-center md:gap-16">
                  <h3 className="text-[1.1rem] md:text-[1.5rem] lg:text-[2rem] font-light text-white flex flex-row w-[100%]">
                    Frontend Developer
                  </h3>
                  <span className="flex w-[50%] md:hidden">-</span>
                  <p className="text-gray-400 font-thin text-[1rem] md:text-[1.5rem] lg:text-[1.8rem] w-[100%]">
                    NoCountry
                  </p>
                </div>
              </div>
              <div className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-[1rem]  md:text-[1.2rem] lg:text-[1.5rem] font-normal leading-none text-gray-400 dark:text-gray-500">
                  2022 - 2024
                </time>
                <div className="flex flex-row items-center md:gap-16">
                  <h3 className="text-[1.1rem] md:text-[1.5rem] lg:text-[2rem] font-light  text-white flex flex-row w-[100%]">
                    Digital Marketing Manager
                  </h3>
                  <span className="flex w-[50%] md:hidden">-</span>
                  <p className="text-gray-400 font-thin text-[1rem] md:text-[1.5rem] lg:text-[1.8rem] w-[100%]">
                    Duo Digital
                  </p>
                </div>
              </div>
              {/* <div className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-[1rem]  md:text-[1.2rem] lg:text-[1.5rem] font-normal leading-none text-gray-400 dark:text-gray-500">
                  2021 - 2022
                </time>
                <div className="flex flex-row items-center md:gap-16">
                  <h3 className="text-[1.1rem] md:text-[1.5rem] lg:text-[2rem] font-light  text-white flex flex-row w-[100%]">
                    Marketing Manager
                  </h3>
                  <span className="flex w-[50%] md:hidden">-</span>
                  <p className="text-gray-400 font-thin text-[1rem] md:text-[1.5rem] lg:text-[1.8rem] w-[100%]">
                    Vital Servicios
                  </p>
                </div>
              </div> */}
              <li className="ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1text-[1.1rem] md:text-[1.5rem] lg:text-[2rem] font-normal leading-none text-gray-400 dark:text-gray-500">
                  + Over 7 Years Working on Digital Products.
                </time>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExperienceBox;
