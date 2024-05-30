"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import PortfolioLogo from "@/public/assets/logo-ep.svg";
import Link from "next/link";
import arrow from "@/public/assets/arrow.svg";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { GrMenu } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { RiMailCheckFill } from "react-icons/ri";
import { RiMailFill } from "react-icons/ri";
import { BsFillFileEarmarkMedicalFill } from "react-icons/bs";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCheckCircle } from "react-icons/fa";

export default function NavBar() {
  const [showWork, setShowWork] = useState(true);
  const [showInfo, setShowInfo] = useState(false);
  const [menuClicked, setMenuClicked] = useState(false);
  const [checkedToggle, setCheckedToggle] = useState();
  const [mailCopied, setMailCopied] = useState(false);
  const router = useRouter();

  const currentPath = usePathname();

  const resetCopied = () => {
    setInterval(() => {
      setMailCopied(false);
    }, 4000);
  };

  const notifyCopied = () => {
    navigator.clipboard.writeText("emanuelpages.ps@gmail.com");
    resetCopied();
    toast("Email address copied. Ready to paste!", {
      hideProgressBar: true,
      autoClose: 2000,
      type: "success",
      className: "mt-20 h-auto md:mt-8 text-sm",
      theme: "transparent",
      closeOnClick: true,
      icon: ({ theme, type }) => <FaCheckCircle className="h-10" />,
    });
  };

  return (
    <div className="relative z-50">
      <nav className="grid grid-cols-3 md:grid-cols-3 gap-1 pt-5 fixed top-0 justify-center items-center w-screen">
        <Link href={"/"}>
          <div
            id="LogoContainer"
            className="flex justify-center items-center pr-4 md:pr-48"
          >
            <Image
              src={PortfolioLogo}
              alt="Emanuel Pagés Front End Developer Logo"
              className="hidden md:flex md:w-[45px] mr-2"
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
        </Link>
        <div
          id="ButtonContainer"
          className="flex justify-center items-center md:mr-5"
        >
          <div className="flex items-center justify-center">
            <label
              htmlFor="Toggle3"
              className="block p-1 md:p-2 h-auto min-w-full md:w-auto bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100 cursor-pointer dark:text-gray-800"
            >
              <input id="Toggle3" type="checkbox" className="hidden peer" />
              <Link href={"/works"}>
                <button
                  className={`text-[0.7rem] md:text-[1rem] px-2 md:px-4 py-1 rounded-l-md text-white font-semibold ${
                    currentPath === "/works" ? "bg-gray-500" : ""
                  }`}
                  onClick={() => {
                    setShowWork(true);
                    setShowInfo(false);
                  }}
                >
                  Works
                </button>
              </Link>
              <Link href={"/about"}>
                <button
                  className={`text-[0.7rem] md:text-[1rem] px-2 md:px-4 py-1 rounded-r-md text-white font-semibold ${
                    currentPath === "/about" ? "bg-gray-500" : ""
                  }`}
                  onClick={() => {
                    setShowWork(false);
                    setShowInfo(true);
                  }}
                >
                  About
                </button>
              </Link>
            </label>
          </div>
        </div>
        <div
          id="MenuContainer"
          className="md:flex justify-center items-center hidden md:visible md:pl-44"
        >
          <button
            className="font-extralight hover:font-semibold bg-opacity-40"
            title="Github"
          >
            <Link
              className="text-sm md:text-base flex justify-center items-center h-10 w-auto p-4 "
              href="https://github.com/emanuelpps"
              target="_blank"
            >
              <FaGithub className="h-5 w-5 fill-gray-400 hover:fill-white" />
            </Link>
          </button>
          <button
            className="font-extralight hover:font-semibold bg-opacity-40"
            title="Linkedin"
          >
            <Link
              className="text-sm md:text-base flex justify-center items-center h-10 w-auto p-4"
              href="https://www.linkedin.com/in/emanuel-ps/"
              target="_blank"
            >
              <FaLinkedinIn className="h-5 w-5 fill-gray-400 hover:fill-white" />
            </Link>
          </button>
          <button
            className="font-extralight hover:font-semibold bg-opacity-40"
            title="Copy Email"
          >
            <div
              className="text-sm md:text-base flex justify-center items-center h-10 w-auto p-4"
              onClick={(e) => {
                setMailCopied(true), notifyCopied();
              }}
            >
              {mailCopied ? (
                <RiMailCheckFill className="h-5 w-5 fill-gray-400 hover:fill-white" />
              ) : (
                <RiMailFill className="h-5 w-5 fill-gray-400 hover:fill-white" />
              )}
            </div>
          </button>
          <button
            className="font-extralight hover:font-semibold bg-transparent rounded-md"
            title="Resume"
          >
            <Link
              className="text-sm md:text-base flex justify-center items-center h-10 w-auto p-4"
              href="https://res.cloudinary.com/dkgoszhfr/image/upload/v1714355292/EmanuelPagesResume_lh3cvm.pdf"
              target="_blank"
            >
              <BsFillFileEarmarkMedicalFill className="h-5 w-5 fill-gray-400 hover:fill-white" />
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
            aria-labelledby="menu-button"
          >
            <GrMenu className="h-6 w-6" />
          </button>
        </div>
        {menuClicked ? (
          <div className="col-span-3 flex flex-row relative sm:w-auto justify-around bg-white-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40">
            <button className="font-extralight hover:font-semibold bg-opacity-40 ">
              <Link
                className="text-sm md:text-base flex justify-center items-center h-10 w-auto p-5"
                href="https://github.com/emanuelpps"
                target="_blank"
              >
                <FaGithub className="w-5 h-5" />
              </Link>
            </button>
            <button className="font-extralight hover:font-semibold bg-opacity-40 ">
              <Link
                className="text-sm md:text-base flex justify-center items-center h-10 w-auto p-5"
                href="https://www.linkedin.com/in/emanuel-ps/"
                target="_blank"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </Link>
            </button>
            <button className="font-extralight hover:font-semibold bg-opacity-40 ">
              <div
                className="text-sm md:text-base flex justify-center items-center h-10 w-auto p-5"
                target="_blank"
                onClick={(e) => {
                  setMailCopied(true), notifyCopied();
                }}
              >
                {mailCopied ? (
                  <RiMailCheckFill className="w-5 h-5" />
                ) : (
                  <RiMailFill className="w-5 h-5" />
                )}
              </div>
            </button>
            <button className="font-extralight hover:font-semibold rounded-md">
              <Link
                className="text-sm md:text-base flex justify-center items-center h-10 w-auto p-5"
                href="https://res.cloudinary.com/dkgoszhfr/image/upload/v1714355292/EmanuelPagesResume_lh3cvm.pdf"
                target="_blank"
              >
                <BsFillFileEarmarkMedicalFill className="w-5 h-5" />
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
