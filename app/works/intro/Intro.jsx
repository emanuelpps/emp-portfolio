"use client";
import React from "react";
import Image from "next/image";
import "./Intro.css";
import arrowDown from "@/public/assets/arrowDown.svg";
import Contact from "@/components/buttons/Contact/Contact";
import MyWork from "@/components/buttons/MyWork/MyWork";
import { motion, AnimatePresence } from "framer-motion";

export default function Intro() {
  return (
    <div className="flex justify-center items-center -outline-offset-1 overflow-hidden p-2 rounded-3xl md:p-10 md:w-[80rem] h-screen pb-20 md:h-auto md:mt-1">
      <div id="titles-container" className="p-10 md:p-10 text">
        <div className="window-main flex flex-col w-[360px] max-w-[360px] md:w-full md:max-w-full ml-5 md:ml-0 gap-5 md:gap-3">
          <AnimatePresence>
            <motion.div
              key={"intro"}
              initial={{ x: -800 }}
              animate={{
                x: 0,
                transition: {
                  type: "spring",
                  stiffness: 50,
                  damping: 30,
                },
              }}
              exit={{ opacity: 0 }}
              className="flex flex-row"
            >
              <h3 className="hidden md:flex text-4xl md:text-6xl textShadow mt-10 md:mt-1 font-extralight tracking-wide ">
                Hi!
              </h3>
            </motion.div>
            <motion.div
              key={"introName"}
              initial={{ x: -1300 }}
              animate={{
                x: 0,
                transition: {
                  type: "spring",
                  stiffness: 55,
                  damping: 30,
                },
              }}
              exit={{ opacity: 0 }}
              className="flex flex-col md:flex-row w-full gap-2 md:gap-5"
            >
              <p className="md:flex text-3xl md:text-8xl textShadow mt-0  font-extralight tracking-wide  gap-5">
                I'm
                </p>
                <h1 className="flex text-4xl md:text-8xl textShadow mt-0 font-bold tracking-wide">
                  Emanuel Pagés
                </h1>
            </motion.div>
            <motion.div
              key={"introJob"}
              initial={{ x: -1200 }}
              animate={{
                x: 0,
                transition: {
                  type: "spring",
                  stiffness: 60,
                  damping: 30,
                },
              }}
              exit={{ opacity: 0 }}
            >
              <h2 className="text-3xl md:text-7xl textShadow mt-0 md:mt-2 font-extralight tracking-wide ">
                Frontend Developer
              </h2>
            </motion.div>
          </AnimatePresence>
          <AnimatePresence>
            <motion.div
              key={"introText"}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  type: "spring",
                  duration: 1.5,
                  delay: 2.3,
                },
              }}
              exit={{ opacity: 0 }}
            >
              <div
                id="intro-button-container"
                className="flex mt-10 md:mt-16 justify-evenly "
              >
                <Contact />
                <MyWork />
              </div>
              <div className="flex justify-center items-center mt-20 md:mt-10">
                <Image
                  src={arrowDown}
                  className="w-9 text-center mx-0 my-[5%] animate-[bounce_2s_infinite]"
                  alt="Arrow Down"
                ></Image>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="z-[2] h-3/6 bg-[linear-gradient(_to_right,transparent_5%,var(--on-background)_50%,transparent_95%_)] opacity-70 blur-[100px] hidden absolute rounded-[2000px] top-24 bottom-auto inset-x-6"></div>
      <div className="bg-[url('https://assets-global.website-files.com/63dcb6e1a80e9454b630f4c4/644af0299bc01254815ae442_noise-overlay-2.png')] bg-[0_0] bg-[200px] block inset-[0%]"></div>
    </div>
  );
}
