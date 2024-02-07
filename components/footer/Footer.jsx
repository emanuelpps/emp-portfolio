import Image from "next/image";
import React from "react";
import PortfolioLogo from "@/public/assets/EP-logo.svg";
import Link from "next/link";
import { frontendIcons } from "@/components/imagesContainer/frontendIcons";

function Footer() {
  return (
    <div id="footer-container" className="w-full mt-20">
      <hr class="border-t-1 border-gray-800 border-gray my-8" />
      <div className="md:grid md:grid-cols-2 md:grid-rows-2 gap-4 mt-20">
        <div id="footer-logo-container">
          <div className="w-full flex items-center justify-center flex-row">
            <Image
              src={PortfolioLogo}
              alt="Emanuel Pagés Front End Developer Logo"
              width={45}
              height={45}
              className="rounded-lg"
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
        </div>
        <div
          id="footer-links-container"
          className="w-full flex items-center justify-center mt-10 md:mt-0"
        >
          <div
            id="nav-links-container"
            className="grid grid-cols-2 grid-rows-1 gap-4 "
          >
            <div className="w-full flex items-center justify-center">
              <ul className="">
                <li className="text-gray-500 font-semibold text-sm mb-5">
                  MAIN
                </li>
                <Link href={"/work"}>
                  <li className="mb-5 hover:font-semibold">Work</li>
                </Link>
                <Link href={"/info"}>
                  <li className="mb-5 hover:font-semibold">Info</li>
                </Link>
              </ul>
            </div>
            <div className="w-full flex items-center justify-center">
              <ul>
                <li className="text-gray-500 font-semibold text-sm mb-5">
                  CONTACT
                </li>
                <Link
                  href={"https://www.linkedin.com/in/emanuel-ps"}
                  target="_blank"
                >
                  <li className="mb-5 hover:font-semibold">Linkedin</li>
                </Link>
                <Link
                  href={
                    "https://duodigitalmarketing.000webhostapp.com/portafolio/EmanuelPagesResume.pdf"
                  }
                >
                  <li className="mb-5 hover:font-semibold">Resume</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-auto md:col-span-2 justify-center items-center gap-4">
          <p className="text-center mt-5 md:pr-10 text-sm">This site was built with:</p>
          <div className="flex flex-row justify-center items-center text-center md:gap-4">
          {frontendIcons
            .filter((image) =>
              ["CSS 3", "Next.js", "Tailwind CSS", "Framer Motion"].includes(
                image.name
              )
            )
            .map((image) => (
              <div
                className="flex flex-row justify-center items-center text-center align-middle w-20 gap-2"
                key={image.id}
              >
                <Image
                  src={image.path}
                  alt={image.name}
                  width={30}
                  height={30}
                />
                <h4 className="text-[0.6rem] text-center mt-2 font-extralight">
                  {image.name}
                </h4>
              </div>
            ))}
            
            </div>
        </div>
        <div
          id="footer-rights-container"
          className="md:col-span-2 pt-10 w-auto items-end h-[auto] mb-0 md:mb-[-80px]"
        >
          <div className="w-full flex items-center justify-center text-center">
            <h3 className="text-sm md:text-base">© 2024 Emanuel Pagés.</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
