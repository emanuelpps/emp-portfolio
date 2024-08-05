import React from "react";
import { motion } from "framer-motion";

function TitleIntro() {
  return (
    <div
      id="title-intro"
      className="w-full h-[100vh] md:h-full flex flex-col justify-center items-start leading-tight mt-0 md:mt-[20%] lg:mt-[10%]"
    >
      <motion.div 
      initial={{ x: -900, y: 0, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1, transition: { duration: 1 }, type: "spring"  }}>
        <span className="hidden md:hidden lg:flex md:text-[8rem] font-[300] opacity-20">
          Hi,
        </span>
      </motion.div>
      <motion.div 
      initial={{ x: -600, y: 0, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1, transition: { duration: 1 }, type: "spring"    }} className="flex gap-5">
        <span className="hidden md:hidden lg:flex md:text-[8rem] font-[300] opacity-20">
          I'm
        </span>
        <h1 className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-bold">Emanuel Pagés.</h1>
      </motion.div>
      <motion.div 
      initial={{ x: -400, y: 0, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1, transition: { duration: 1 }, type: "spring"    }} className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-light">
        Frontend Developer
      </motion.div>
    </div>
  );
}

export default TitleIntro;
