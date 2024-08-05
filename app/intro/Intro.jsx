"use client";
import React from "react";
import Image from "next/image";
import "./Intro.css";
//import arrowDown from "@/public/assets/arrowDown.svg";
import Contact from "@/components/buttons/Contact/Contact";
import MyWork from "@/components/buttons/MyWork/MyWork";
import { motion, AnimatePresence } from "framer-motion";
import TitleIntro from "./components/TitleIntro";
import ArrowIntro from "./components/ArrowIntro";

export default function Intro() {
  return (
    <div className="w-full max-w-[1400px] h-[100%] relative ">
      <TitleIntro />
    </div>
  );
}
