"use client";
import React, { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Experience() {
  return (
    <div className="flex justify-center text-center md:text-left md:p-10 window-outline mb-20 mt-20  w-full md:w-[60rem] md:flex-row flex-col">
      <div id="expereice-title" className="w-full flex flex-row">
        <h1 className="flex justify-start items-start mt-10 md:mt-0">
          My Experience
        </h1>
      </div>
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
        id="experience-container"
        className="pt-10 ml-5"
      >
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2023 - Present
            </time>
            <h3 className="text-lg text-[14px] font-light mb-5 md:mb-0 text-gray-900 dark:text-white flex flex-row">
              Frontend Developer
              <p className="ml-2 text-gray-400 font-light text-[0.9rem]">
                - NoCountry
              </p>
            </h3>
            <p className="mb-4 text-base font-light text-gray-500 dark:text-gray-400">
              Development and maintenance of frontend components using React JS
              or Next JS. Translate designs and specifications into functional
              user interfaces. Work closely with other team members to achieve
              shared objectives. Integrate services and APIs to fetch data and
              dynamically display it in the user interface. Maintain and update
              current code, troubleshoot, and fix bugs actively. Review your
              peers’ code and conform to development guidelines.
            </p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2022 - Present
            </time>
            <h3 className="text-lg  text-[14px] font-light mb-5 md:mb-0 text-gray-900 dark:text-white flex items-center">
              Digital Marketing Manager
              <p className="ml-2 text-gray-400 font-light text-[0.9rem]">
                - Duo Digital
              </p>
            </h3>
            <p className="mb-4 text-base font-light text-gray-500 dark:text-gray-400">
              Content creation, writing, and sending of Email Marketing
              campaigns. Content Manager, Community Manager, and Paid Media
              Manager. Preparation of reports and tracking of KPIs.
              Administration and building of websites in Wordpress.
            </p>
          </li>
          <li className="ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2021 - 2022
            </time>
            <h3 className="text-lg  text-[14px] font-light mb-5 md:mb-0 text-gray-900 dark:text-white flex">
              Marketing Manager
              <p className="ml-2 text-gray-400 font-light text-[0.9rem]">
                - Vital Servicios
              </p>
            </h3>
            <p className="mb-4 text-base font-light text-gray-500 dark:text-gray-400">
              SEM. SEO. Development, implementation, and monitoring of the
              strategic online and offline marketing plan. Proposals for digital
              actions. Development of the marketing plan for social media.
              Monitoring and tracking the marketing budget. Implementation and
              improvements in the Ecommerce web page.
            </p>
          </li>
        </ol>
      </motion.div>
    </div>
  );
}

export default Experience;
