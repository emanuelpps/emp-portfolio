import Link from "next/link";
import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMailOutline, MdOutlineMarkEmailRead } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCheckCircle } from "react-icons/fa";
import { animate } from "framer-motion";
import { motion } from "framer-motion";

function Menu({ ...props }) {
  const [mailCopied, setMailCopied] = useState(false);
  const sequence = [];
  animate(sequence)
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
      theme: "dark",
      closeOnClick: true,
      icon: ({ theme, type }) => <FaCheckCircle className="h-10" />,
    });
  };
  return (
    <motion.div
      id="navBar-menu"
      className="bg-white fixed top-0 right-0 z-909 w-60 h-screen transition-transform -translate-x-full sm:translate-x-0 flex flex-col justify-between z-50"
      initial={{ x: 400 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, ease: props.isOpen ? "backIn" : "backOut", type: "tween" }}
      exit={{transition: { duration: 0.8, ease: "backOut" , type: "tween"} }}
    >
      <div
        id="navBar-menu-close"
        className="flex justify-end [fit-content] p-4"
      >
        <GrClose
          className="text-black text-2xl cursor-pointer"
          onClick={() => {
            props.setIsOpen(!props.isOpen);
          }}
        />
      </div>
      <div
        id="navBar-menu-container"
        className="flex flex-col justify-center items-start"
      >
        <Link
          href={"/#home"}
          className="pl-5 pt-2 pb-2 text-black hover:bg-black hover:text-white hover:font-semibold w-full"
        >
          <div className="text-3xl" scroll={true}>
            Home
          </div>
        </Link>
        <Link
          href={"/#experience"}
          className="pl-5 pt-2 pb-2 text-black hover:bg-black hover:text-white hover:font-semibold w-full"
        >
          <div className="text-3xl" scroll={true}>
            Experience
          </div>
        </Link>
        <Link
          href={"/#experience"}
          className="pl-5 pt-2 pb-2 text-black hover:bg-black hover:text-white hover:font-semibold w-full"
        >
          <div className="text-3xl" scroll={true}>
            Projects
          </div>
        </Link>
        <Link
          href={"/#experience"}
          className="pl-5 pt-2 pb-2 text-black hover:bg-black hover:text-white hover:font-semibold w-full"
        >
          <div className="text-3xl" scroll={true}>
            Skills
          </div>
        </Link>
        <Link
          href={"/#experience"}
          className="pl-5 pt-2 pb-2 text-black hover:bg-black hover:text-white hover:font-semibold w-full"
        >
          <div className="text-3xl" scroll={true}>
            Contact
          </div>
        </Link>
      </div>
      <div
        id="socialMedia-container"
        className="flex flex-row justify-evenly m-4"
      >
        <Link
          href="https://github.com/emanuelpps"
          id="github-link"
          target="_blank"
          title="Github Profile"
        >
          <FaGithub className="text-black text-3xl hover:text-white hover:stroke-black hover:stroke-[1.5rem]" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/emanuel-ps"
          id="linkedin-link"
          target="_blank"
          title="Linkedin Profile"
        >
          <FaLinkedinIn className="text-black text-3xl hover:text-white hover:stroke-black hover:stroke-[1.5rem]" />
        </Link>
        <Link
          href="https://res.cloudinary.com/dkgoszhfr/image/upload/v1714355292/EmanuelPagesResume_lh3cvm.pdf"
          id="resume-link"
          target="_blank"
          title="See my Resume"
        >
          <IoDocumentText className="text-black text-3xl hover:text-white hover:stroke-black hover:stroke-[1.5rem]" />
        </Link>
        <div
          id="resume-link"
          target="_blank"
          title="Copy my email"
          onClick={(e) => {
            setMailCopied(true), notifyCopied();
          }}
          className="cursor-pointer"
        >
          {mailCopied ? (
            <MdOutlineMarkEmailRead className="text-black text-3xl" />
          ) : (
            <MdOutlineMailOutline className="text-black text-3xl" />
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default Menu;
