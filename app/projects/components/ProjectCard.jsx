import Image from "next/image";
//import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectDetails from "./ProjectDetails";

function ProjectCard({ ...props }) {
  //const [onMouseOver, setOnMouseOver] = useState(false);

  const cardClickHandler = () => {
    props.onCardClick(props.project.id);
  };

  return (
    <motion.div
      id={props.project.id}
      className="flex flex-col"
      onClick={cardClickHandler}
    >
      <div
        id="project-card-header"
        className="flex items-center px-5 mb-5 justify-evenly"
      >
        <div className="flex w-full px-2 ">
          <h2 className="text-xl font-semibold md:text-2xl">
            {props.project.name}
          </h2>
        </div>
      </div>
      <motion.div
        id="project-card"
        className="flex items-center justify-center w-full cursor-pointer rounded-xl"
        whileHover={{
          scale: 1.04,
          transition: {
            duration: 0.6,
            ease: "easeOut",
            repeat: 0,
            repeatDelay: 0,
            delay: 0,
          },
        }}
      >
        <Image
          src={props.project.img}
          width={600}
          height={300}
          property="cover"
          className={`bg-fill rounded-xl`}
          //onMouseEnter={() => setOnMouseOver(true)}
          //onMouseLeave={() => setOnMouseOver(false)}
          alt="Project Image"
          loading="lazy"
        />
      </motion.div>
      <div
        id="project-content"
        className="flex flex-col items-center justify-center"
      >
        <div
          id="project-technologies"
          className="flex flex-wrap items-center justify-center gap-2 md:flex-nowrap"
        >
          {props.project.lenguage?.map((tech) => (
            <span className="bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 rounded-lg p-2 mt-5 text-[0.8rem] md:text-[1rem]">
              {tech}
            </span>
          ))}
        </div>
        {props.selectedId === props.project.id && props.isOpen && (
          <AnimatePresence>
            {props.projectSelected ? (
              <ProjectDetails {...props} />
            ) : (
              "Loading..."
            )}
          </AnimatePresence>
        )}
      </div>
    </motion.div>
  );
}

export default ProjectCard;
