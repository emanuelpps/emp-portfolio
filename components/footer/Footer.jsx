import Image from "next/image";
import React from "react";
import PortfolioLogo from "@/public/assets/logo-ep.svg";
import Link from "next/link";
import { frontendIcons } from "@/components/imagesContainer/frontendIcons";
import { VscGithub } from "react-icons/vsc";
import uuid from "react-uuid";

function Footer() {
  return (
    <div id="footer-container" className="w-full min-h-[50vh]">
      <hr className="border-t-1 border-gray-800 bor-der-gray" />
        <div className="flex flex-col justify-center items-center gap-2 mt-8 pb-8">
          <p className="text-center md:pr-10 text-[1rem] md:text-xl">
            This site was built with:
          </p>
          <div className="flex flex-row justify-center items-center text-center md:gap-4">
            {frontendIcons
              .filter((image) =>
                ["CSS 3", "Next.js", "Tailwindcss", "Framer Motion"].includes(
                  image.name
                )
              )
              .map((image) => (
                <div
                  className="flex flex-row justify-center items-center text-center align-middle w-full gap-2 ml-2"
                  key={uuid()}
                >
                  <Image
                    src={image.path}
                    alt={image.name}
                    width={30}
                    height={30}
                  />
                  <h4 className="text-[0.6rem] md:text-xl text-center mt-2 font-extralight w-[fit-content] text-balance">
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
          <p className="text-center md:pr-10 text-[1rem] md:text-xl">
            View this website on GitHub
          </p>
          <Link
            href={"https://github.com/emanuelpps/emp-portfolio"}
            target="_blank"
            className="flex justify-center items-center"
          >
            <button className="py-1 px-2 inline-flex items-center gap-x-2 text-[1rem] md:text-lg rounded-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100 hover:bg-gray-200 hover:text-black">
              <VscGithub />
              <p>Repository</p>
            </button>
          </Link>
        </div>
        <div
          id="footer-rights-container"
          className="md:col-span-2 pt-20 w-auto items-end h-[auto] mb-0 md:mb-[-80px]"
        >
          <div className="w-full flex flex-col items-center justify-center text-center">
            <h3 className="text-sm md:text-base">© 2024 Emanuel Pagés.</h3>
            <h4 className="text-[10px]">v{process.env.PORTFOLIO_VERSION}</h4>
          </div>
        </div>
      </div>
  );
}

export default Footer;
