"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import PortfolioLogo from "@/public/assets/EP-logo.svg";
import Link from "next/link";
import arrow from "@/public/assets/arrow.svg";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { GrMenu } from "react-icons/gr";

export default function NavBar() {
  const [showWork, setShowWork] = useState(true);
  const [showInfo, setShowInfo] = useState(false);
  const [menuClicked, setMenuClicked] = useState(false);
  const [checkedToggle, setCheckedToggle] = useState();
  const router = useRouter();

  const currentPath = usePathname();

  return (
    <div className="relative z-50">
      <nav className="grid grid-cols-3 md:grid-cols-3 gap-1 pt-5 fixed top-0 justify-center items-center w-screen">
        <div
          id="LogoContainer"
          className="flex justify-center items-center pr-4 md:pr-40"
        >
          <Image
            src={PortfolioLogo}
            alt="Emanuel Pagés Front End Developer Logo"
            className="rounded-lg bg-black hidden md:flex md:w-[45px]"
          ></Image>
          <div id="titleLogo">
            <h1 className="text-[0.7rem] md:text-md font-light bg-white-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40">
              Emanuel Pagés
            </h1>
            <h3 className="text-[0.5rem] md:text-xs font-bold  bg-white-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 text-gray-500">
              Frontend Developer
            </h3>
          </div>
        </div>
        <div
          id="ButtonContainer"
          className="flex justify-center items-center md:mr-5"
        >
          <div className="flex items-center justify-center">
            <label
              for="Toggle3"
              className="block p-2 h-10 w-full md:w-auto bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100 cursor-pointer dark:text-gray-800"
            >
              <input id="Toggle3" type="checkbox" className="hidden peer" />
              <Link href={"/work"}>
                <button
                  className={`text-[0.8rem] md:text-[1rem] px-2 md:px-4 py-0.6 rounded-l-md text-white font-semibold ${
                    currentPath === "/work" ? "bg-gray-500" : ""
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
                  className={`text-[0.8rem] md:text-[1rem] px-2 md:px-4 py-0.6 rounded-r-md text-white font-semibold ${
                    currentPath === "/info" ? "bg-gray-500" : ""
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
          className="md:flex justify-center items-center hidden md:visible md:pl-44"
        >
          <button className="font-extralight hover:font-semibold bg-opacity-40">
            <Link
              className="text-sm md:text-base flex justify-center items-center h-10 w-auto p-5"
              href="https://www.linkedin.com/in/emanuel-ps/"
              target="_blank"
            >
              Linkedin
              <Image src={arrow} className="h-5 w-5" />
            </Link>
          </button>
          <button className="font-extralight hover:font-semibold bg-black rounded-md">
            <Link
              className="text-sm md:text-base flex justify-center items-center h-10 w-auto p-5"
              href="https://duodigitalmarketing.000webhostapp.com/portafolio/EmanuelPagesResume.pdf"
              target="_blank"
            >
              Resume
              <Image src={arrow} className="h-5 w-5" />
            </Link>
          </button>
        </div>
        <div
          id="menu-mobile-container"
          className="flex flex-col md:hidden pl-10 w-fit"
        >
          <button
            className="active:bg-[#6b7280] focus:outline-none focus:ring focus:ring-[#6b7280] w-auto"
            onClick={() => setMenuClicked(!menuClicked)}
          >
            <GrMenu className="h-6 w-6" />
          </button>
        </div>
        {menuClicked ? (
          <div className="col-span-3 flex flex-row relative sm:w-auto justify-around bg-white-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40">
            <button className="font-extralight hover:font-semibold bg-opacity-40 ">
              <Link
                className="text-sm md:text-base flex justify-center items-center h-10 w-auto p-5"
                href="https://www.linkedin.com/in/emanuel-ps/"
                target="_blank"
              >
                Linkedin
                <Image src={arrow} className="h-5 w-5" />
              </Link>
            </button>
            <button className="font-extralight hover:font-semibold rounded-md">
              <Link
                className="text-sm md:text-base flex justify-center items-center h-10 w-auto p-5"
                href="https://duodigitalmarketing.000webhostapp.com/portafolio/EmanuelPagesResume.pdf"
                target="_blank"
              >
                Resume
                <Image src={arrow} className="h-5 w-5" />
              </Link>
            </button>
          </div>
        ) : (
          <div></div>
        )}
      </nav>
    </div>
  );
}
