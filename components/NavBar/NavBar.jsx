'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import PortfolioLogo from "@/public/assets/EP-logo.svg";
import "./NavBar.css";
import Link from "next/link";
import arrow from "@/public/assets/arrow.svg";
//import { useRouter } from "next/navigation";

export default function NavBar() {
  const [homeContent, setHomeContent] = useState("work");
  //const router = useRouter();


/*   useEffect(() => {
    const showContentInHome = () => {
      homeContent == 'work' ? (router.push('/work')) : (router.push('/info'));
    }
    showContentInHome()
  }, [homeContent]) */
  return (
    <>
      <nav className="grid grid-cols-3 pt-5">
        <div id="LogoContainer" className="flex justify-center items-center">
          <Image
            src={PortfolioLogo}
            alt="Emanuel Pages Front End Developer Logo"
            width={65}
            height={65}
            className="rounded-lg"
          ></Image>
          <div id="titleLogo">
            <h1 className="text-xl font-medium">Emanuel Pages</h1>
            <h3 className="text-md font-light">Front End Developer</h3>
          </div>
        </div>
        <div id="ButtonContainer" className="flex justify-center">
          <input id="checkbox_toggle" type="checkbox" class="check" />
          <div class="checkbox">
            <label class="slide" for="checkbox_toggle">
              <label class="toggle" for="checkbox_toggle"></label>
              <button class="text" for="checkbox_toggle" onClick={() => setHomeContent('work')}>
                Work
              </button>
              <label class="text" for="checkbox_toggle" onClick={() => setHomeContent('info')}>
                Info
              </label>
            </label>
          </div>
        </div>
        <div id="MenuContainer" className="flex justify-center items-center">
          <button className="hover:bg-[gray] rounded-full">
            <Link
              className="flex justify-center items-center h-10 w-auto p-5"
              href="https://www.linkedin.com/in/emanuel-ps/"
              target="_blank"
            >
              Linkedin<Image src={arrow} className="h-5 w-5"></Image>
            </Link>
          </button>
          <button className=" hover:bg-[gray] rounded-full">
            <Link
              className="flex justify-center items-center h-10 w-auto p-5"
              href="https://www.linkedin.com/in/emanuel-ps/"
              target="_blank"
            >
              Resume<Image src={arrow} className="h-5 w-5"></Image>
            </Link>
          </button>
        </div>
      </nav>
    </>
  );
}
