import Image from "next/image";
import React from "react";
import PortfolioLogo from "@/public/assets/logo-ep.svg";
import Link from "next/link";
import { frontendIcons } from "@/components/imagesContainer/frontendIcons";
import { VscGithub } from "react-icons/vsc";
import uuid from "react-uuid";

function Footer() {
  return (
    <div id="footer-container" className="w-full mt-20">
      <hr className="border-t-1 border-gray-800 border-gray my-8" />
      <div className="md:grid md:grid-cols-2 md:grid-rows-2 gap-4 mt-20">
      {/*<div id="footer-logo-container">
          <div className="w-full flex items-center justify-center flex-row">
            <Image
              src={PortfolioLogo}
              alt="Emanuel Pagés Front End Developer Logo"
              width={45}
              height={45}
              className="mr-2"
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
              <ul className="flex flex-col">
                <h3 className="text-gray-500 font-semibold text-sm mb-5">
                  MAIN
                </h3>
                <Link href={"/work"} className="mb-5 hover:font-semibold w-12">
                  Work
                </Link>
                <Link href={"/about"} className="mb-5 hover:font-semibold w-12">
                  About
                </Link>
              </ul>
            </div>
            <div className="w-full flex items-center justify-center">
              <ul className="flex flex-col">
                <h3 className="text-gray-500 font-semibold text-sm mb-5">
                  CONTACT
                </h3>
                <Link
                  href={"https://www.linkedin.com/in/emanuel-ps"}
                  target="_blank"
                  className="mb-5 hover:font-semibold w-12"
                >
                  Linkedin
                </Link>
                <Link
                  href={
                    "https://res.cloudinary.com/dkgoszhfr/image/upload/v1714355292/EmanuelPagesResume_lh3cvm.pdf"
                  }
                  target="_blank"
                  className="mb-5 hover:font-semibold w-12"
                >
                  Resume
                </Link>
              </ul>
            </div>
          </div>
        </div>*/}
        <div className="flex flex-col md:flex-row w-auto md:col-span-2 justify-center items-center gap-2 mt-8">
          <p className="text-center md:pr-10 text-sm">
            This site was built with:
          </p>
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
                  key={uuid()}
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
          id="footer-code-button"
          className="flex flex-col md:flex-row w-auto md:col-span-2 justify-center items-center gap-2 mt-10 md:mt-0"
        >
          <p className="text-center md:pr-10 text-sm">
            View this website on GitHub
          </p>
          <Link
            href={"https://github.com/emanuelpps/emp-portfolio"}
            target="_blank"
            className="flex justify-center items-center"
          >
            <button className="py-1 px-2 inline-flex items-center gap-x-2 text-sm rounded-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100 hover:bg-gray-200 hover:text-black">
              <VscGithub />
              <p>Repository</p>
            </button>
          </Link>
        </div>
        <div
          id="footer-rights-container"
          className="md:col-span-2 pt-10 w-auto items-end h-[auto] mb-0 md:mb-[-80px]"
        >
          <div className="w-full flex flex-col items-center justify-center text-center">
            <h3 className="text-sm md:text-base">© 2024 Emanuel Pagés.</h3>
            <h4 className="text-[10px]">v{process.env.PORTFOLIO_VERSION}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
