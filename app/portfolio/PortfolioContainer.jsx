"use client";
import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import projects from "@/public/data/works.json";
import Link from "next/link";
import { LuPlusSquare } from "react-icons/lu";
import { LuMinusSquare } from "react-icons/lu";
import uuid from "react-uuid";
import { motion } from "framer-motion";

function PortfolioContainer() {
  const [dataProjects, setDataProjects] = useState([]);
  const [moreProjects, setMoreProjects] = useState(false);

  useEffect(() => {
    setDataProjects(projects);
  }, []);

  return (
    <div className="flex flex-column justify-center items-center relative mt-[200px]">
      <div className="flex flex-column justify-center items-center absolute top-[-270px] z-0 opacity-10">
        <h1 className="text-[27rem]">Projects</h1>
      </div>
      <motion.div
        id="projects-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            stiffness: 50,
            damping: 30,
          },
        }}
        exit={{ opacity: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center items-center gap-10 md:gap-43 md:mt-44 w-[360px] md:p-0 md:w-[90rem] h-[auto] md:h-auto z-40"
      >
        {dataProjects?.map((project, index) => (
          <Link key={uuid()} href={`/works/${project.linkName}`}>
            <ProjectCard index={index} project={project} />
          </Link>
        ))}
      </motion.div>
    </div>
  );
}

export default PortfolioContainer;
