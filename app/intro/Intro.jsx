"use client";
import React from "react";
import Image from "next/image";
import "./Intro.css";
import arrowDown from "@/public/assets/arrowDown.svg";
import Contact from "@/components/buttons/Contact/Contact";
import MyWork from "@/components/buttons/MyWork/MyWork";
import { motion, AnimatePresence } from "framer-motion";
import TitleIntro from "./components/TitleIntro";
import ArrowIntro from "./components/ArrowIntro";

export default function Intro() {
  return (
    <div className="w-full max-w-[1400px] h-[100%] relative">
      <div className="absolute bottom-[400px] right-[340px]">
        {/*<span className="text-[8rem] font-[900] opacity-[.03]">{"</>"}</span>*/}
      </div>
      <TitleIntro />
      <ArrowIntro />
    </div>
  );
}
