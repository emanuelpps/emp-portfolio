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
              <h3 className="hidden md:flex text-4xl md:text-6xl textShadow mt-10 md:mt-1 font-extralight tracking-wide opacity-80">
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
              <p className="md:flex text-3xl md:text-8xl textShadow mt-0  font-extralight tracking-wide  gap-5  opacity-80">
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
              <h2 className="text-3xl md:text-7xl textShadow mt-0 md:mt-2 font-extralight tracking-wide  opacity-80">
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
              <div className="main__action flex justify-center items-center mx-auto w-full pt-40">
                <a className="main__scroll" href="#projects-container">
                  <div className="main__scroll-box w-10 h-30">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path
                        d="M11.9997 13.1716L7.04996 8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>

                  <span className="main__scroll-text color-white">Scroll</span>
                </a>
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
