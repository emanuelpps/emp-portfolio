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
    <motion.div
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
      className="flex flex-wrap justify-center items-center gap-10 md:gap-43 md:mt-44 w-[360px] md:p-0 md:w-[90rem] h-[auto] md:h-auto"
    >
      {dataProjects?.map((project, index) => (
        <Link key={uuid()}  href={`/works/${project.linkName}`}>
          <ProjectCard index={index} project={project} />
        </Link>
      ))}
    </motion.div>
  );
}

export default PortfolioContainer;
