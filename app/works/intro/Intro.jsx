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
    <div className="-outline-offset-1 bg-[#161515] overflow-hidden p-2 rounded-3xl border-t-[rgba(242,242,242,0.15)] border-x-[rgba(242,242,242,0.15)] border-l border-solid border-r border-t w-[400px] md:p-10 md:w-[60rem] h-screen md:h-auto md:mt-1">
      <div id="titles-container" className="p-10 md:p-20 text">
        <div className="window-main ml">
          <AnimatePresence>
            <motion.div
              initial={{ x: -300 }}
              animate={{
                x: 0,
                transition: {
                  type: "spring",
                  stiffness: 50,
                  damping: 30,
                },
              }}
              exit={{ opacity: 0 }}
            >
              <h3 className="text-4xl md:text-5xl textShadow mt-10 md:mt-1 font-extralight tracking-wide md:pl-24">
                Hi!
              </h3>
            </motion.div>
            <motion.div
              initial={{ x: -800 }}
              animate={{
                x: 0,
                transition: {
                  type: "spring",
                  stiffness: 55,
                  damping: 30,
                },
              }}
              exit={{ opacity: 0 }}
            >
              <h1 className="text-4xl md:text-5xl textShadow mt-0 md:mt-2 font-normal tracking-wide md:pl-24">
                I'm Emanuel Pagés
              </h1>
            </motion.div>
            <motion.div
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
              <h2 className="text-4xl md:text-5xl textShadow mt-0 md:mt-2 font-extralight tracking-wide md:pl-24">
                Frontend Developer
              </h2>
            </motion.div>
          </AnimatePresence>
          <AnimatePresence>
            <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                type: "spring",
                duration: 1.5,
                delay:2.3
              },
            }}
            exit={{ opacity: 0 }}>
              <div
                id="intro-button-container"
                className="flex mt-10 md:mt-20 justify-center md:justify-evenly gap-20"
              >
                <Contact />
                <MyWork />
              </div>
              <div className="flex justify-center items-center mt-20 md:mt-10">
                <Image
                  src={arrowDown}
                  className="w-9 text-center mx-0 my-[5%] animate-[bounce_2s_infinite]"
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
