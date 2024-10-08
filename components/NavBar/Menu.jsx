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
import { useRouter } from "next/navigation";

function Menu({ ...props }) {
  const router = useRouter();
  const [mailCopied, setMailCopied] = useState(false);
  const sequence = [];
  animate(sequence);
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

  const closeMenuHandler = () => {
    props.setIsOpen(!props.isOpen);
  };
  return (
    <motion.div
      id="navBar-menu"
      className="fixed top-0 right-0 z-50 flex flex-col justify-between h-screen transition-transform -translate-x-full bg-white z-909 w-60 sm:translate-x-0"
      initial={{ x: 400 }}
      animate={{ x: 0 }}
      transition={{
        duration: 0.5,
        ease: props.isOpen ? "backIn" : "backOut",
        type: "tween",
      }}
      exit={{ transition: { duration: 0.8, ease: "backOut", type: "tween" } }}
    >
      <div
        id="navBar-menu-close"
        className="flex justify-end [fit-content] p-4"
      >
        <GrClose
          className="text-2xl text-black cursor-pointer"
          onClick={closeMenuHandler}
        />
      </div>
      <div
        id="navBar-menu-container"
        className="flex flex-col justify-center items-start h-[100vh] overflow-hidden"
      >
        <Link
          href={"/#home"}
          className="w-full pt-2 pb-2 pl-5 text-black hover:bg-black hover:text-white hover:font-semibold"
        >
          <div className="text-3xl" scroll={true}>
            Home
          </div>
        </Link>
        <Link
          href={"/#experience"}
          className="w-full pt-2 pb-2 pl-5 text-black hover:bg-black hover:text-white hover:font-semibold"
        >
          <div className="text-3xl" scroll={true}>
            Experience
          </div>
        </Link>
        <Link
          href={"/#projects"}
          className="w-full pt-2 pb-2 pl-5 text-black hover:bg-black hover:text-white hover:font-semibold"
        >
          <div className="text-3xl" scroll={true}>
            Projects
          </div>
        </Link>
        <Link
          href={"/#skills"}
          className="w-full pt-2 pb-2 pl-5 text-black hover:bg-black hover:text-white hover:font-semibold"
        >
          <div className="text-3xl" scroll={true}>
            Skills
          </div>
        </Link>
        <Link
          href={"/#contact"}
          className="w-full pt-2 pb-2 pl-5 text-black hover:bg-black hover:text-white hover:font-semibold"
        >
          <div className="text-3xl" scroll={true}>
            Contact
          </div>
        </Link>
      </div>
      <div
        id="socialMedia-container"
        className="flex flex-row m-4 justify-evenly"
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
          href="https://res.cloudinary.com/dkgoszhfr/image/upload/v1727211444/att3iubmuvxolbtagder.pdf"
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
            <MdOutlineMarkEmailRead className="text-3xl text-black" />
          ) : (
            <MdOutlineMailOutline className="text-3xl text-black" />
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default Menu;
