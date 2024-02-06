import React from "react";
import notFoundImage from "@/public/assets/images/pulp-fiction-john-travolta.gif";
import Image from "next/image";
import Link from "next/link";
import { VscArrowLeft } from "react-icons/vsc";
import "./globals.css";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl">Error 404</h1>
      <Image src={notFoundImage} className="w-96" />
      <h2 className="text-2xl pt-10">Page Not Found</h2>
      <div className="">
        <Link href={"/"}>
          <button className="md:m-10 px-6 py-3 md:px-4 flex md:inline-flex items-center gap-x-2 text-sm font-normal rounded-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100 hover:bg-gray-200 hover:text-black">
            <VscArrowLeft />
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
