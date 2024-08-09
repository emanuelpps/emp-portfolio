"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import PortfolioLogo from "@/public/assets/logo-ep.svg";
//import Link from "next/link";
//import arrow from "@/public/assets/arrow.svg";
//import { useRouter } from "next/navigation";
//import { usePathname } from "next/navigation";
//import { GrMenu } from "react-icons/gr";
//import { FaGithub } from "react-icons/fa";
//import { FaLinkedinIn } from "react-icons/fa";
//import { RiMailCheckFill } from "react-icons/ri";
//import { RiMailFill } from "react-icons/ri";
import { BsFillFileEarmarkMedicalFill } from "react-icons/bs";
//import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCheckCircle } from "react-icons/fa";
import { TfiMenu } from "react-icons/tfi";
import Menu from "./Menu";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  /*   const [showWork, setShowWork] = useState(true);
  const [showInfo, setShowInfo] = useState(false);
  const [menuClicked, setMenuClicked] = useState(false);
  const [checkedToggle, setCheckedToggle] = useState();
  const [mailCopied, setMailCopied] = useState(false);
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
  }; */

  return (
    <>
      <div id="navbar" className="fixed top-0 z-30 w-full">
        <div
          id="navBarContainer"
          className="z-30 flex items-center justify-between pt-5 pl-10 pr-10"
        >
          <Image
            src={PortfolioLogo}
            alt="Portfolio Logo"
            width={45}
            height={45}
            className="font-bold"
          />
          <TfiMenu
            className="text-4xl cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>
      {isOpen && <Menu isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
}
