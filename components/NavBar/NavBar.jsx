"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import PortfolioLogo from "@/public/assets/EP-logo.svg";
import "./NavBar.css";
import Link from "next/link";
import arrow from "@/public/assets/arrow.svg";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const [showWork, setShowWork] = useState(true);
  const [showInfo, setShowInfo] = useState(false);
  const [checkedToggle, setCheckedToggle] = useState();
  const router = useRouter();

  /*   useEffect(() => {
    showWork ? router.push("/work") : router.push("/info");
  }, [homeContent]);
 */

const focusButtonHandler = () => {
  show
}

  return (
    <div className="relative z-50">
      <nav className="grid grid-cols-3 grid-rows-1 gap-4 pt-5 fixed top-0 align-middle justify-center ustify-items-center  w-screen">
        <div
          id="LogoContainer"
          className="flex justify-center items-center pr-40"
        >
          <Image
            src={PortfolioLogo}
            alt="Emanuel Pagés Front End Developer Logo"
            width={45}
            height={45}
            className="rounded-lg bg-black"
          ></Image>
          <div id="titleLogo">
            <h1 className="text-md font-light bg-white-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40">
              Emanuel Pagés
            </h1>
            <h3 className="text-xs font-bold  bg-white-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 text-gray-500">
              Frontend Developer
            </h3>
          </div>
        </div>
        <div id="ButtonContainer" className="flex justify-center align-middle">
          <div className="flex items-center justify-center ">
            <label
              for="Toggle3"
              className="inline-flex items-center p-2 h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100
              cursor-pointer dark:text-gray-800 "
            >
              <input id="Toggle3" type="checkbox" className="hidden peer" />
              <Link href={"/work"}>
                <button
                  className={`px-4 py-2 rounded-l-md text-white font-semibold ${
                    showWork ? "bg-gray-500" : "focus:bg-gray-500"
                  }`}
                  onClick={() => {
                    setShowWork(true);
                    setShowInfo(false);
                  }}
                >
                  Work
                </button>
              </Link>
              <Link href={"/info"}>
                <button
                  className={`px-4 py-2 rounded-r-md text-white font-semibold ${
                    showInfo ? "bg-gray-500" : "focus:bg-gray-500"
                  }`}
                  onClick={() => {
                    setShowWork(false);
                    setShowInfo(true);
                  }}
                >
                  Info
                </button>
              </Link>
            </label>
          </div>
        </div>
        <div
          id="MenuContainer"
          className="flex justify-center items-center pl-40"
        >
          <button className="font-extralight hover:font-semibold bg-opacity-40">
            <Link
              className="flex justify-center items-center h-10 w-auto p-5"
              href="https://www.linkedin.com/in/emanuel-ps/"
              target="_blank"
            >
              Linkedin
              <Image src={arrow} className="h-5 w-5" />
            </Link>
          </button>
          <button className="font-extralight hover:font-semibold bg-black rounded-md">
            <Link
              className="flex justify-center items-center h-10 w-auto p-5"
              href="https://duodigitalmarketing.000webhostapp.com/portafolio/EmanuelPagesResume.pdf"
              target="_blank"
            >
              Resume
              <Image src={arrow} className="h-5 w-5" />
            </Link>
          </button>
        </div>
      </nav>
    </div>
  );
}
