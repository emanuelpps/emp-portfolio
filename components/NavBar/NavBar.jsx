"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import PortfolioLogo from "@/public/assets/EP-logo.svg";
import "./NavBar.css";
import Link from "next/link";
import arrow from "@/public/assets/arrow.svg";
//import { useRouter } from "next/navigation";

export default function NavBar() {
  const [homeContent, setHomeContent] = useState("work");
  const [showWork, setShowWork] = useState(true);
  const [showInfo, setShowInfo] = useState(false);
  //const router = useRouter();

  /*   useEffect(() => {
    const showContentInHome = () => {
      homeContent == 'work' ? (router.push('/work')) : (router.push('/info'));
    }
    showContentInHome()
  }, [homeContent]) */
  return (
    <div className="relative z-50">
      <nav className="grid grid-cols-3 grid-rows-1 gap-4 pt-5 fixed top-0 align-middle justify-center ustify-items-center  w-screen">
        <div id="LogoContainer" className="flex justify-center items-center">
          <Image
            src={PortfolioLogo}
            alt="Emanuel Pages Front End Developer Logo"
            width={45}
            height={45}
            className="rounded-lg bg-black"
          ></Image>
          <div id="titleLogo">
            <h1 className="text-md font-light bg-white-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40">Emanuel Pages</h1>
            <h3 className="text-xs font-extralight  bg-white-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40">
              Front End Developer
            </h3>
          </div>
        </div>
        <div id="ButtonContainer" className="flex justify-center">
          <input id="checkbox_toggle" type="checkbox" className="check" />
          <div className="checkbox">
            <label className="slide" for="checkbox_toggle">
              <label className="toggle" for="checkbox_toggle"></label>
              <button
                className="text font-extralight"
                for="checkbox_toggle"
                onClick={() => setHomeContent("work")}
              >
                Work
              </button>
              <label
                className="text"
                for="checkbox_toggle"
                onClick={() => setHomeContent("info")}
              >
                Info
              </label>
            </label>
          </div>
        </div>
        <div id="MenuContainer" className="flex justify-center items-center">
          <button className="font-extralight hover:font-semibold  bg-white-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40">
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
              href="https://www.linkedin.com/in/emanuel-ps/"
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
