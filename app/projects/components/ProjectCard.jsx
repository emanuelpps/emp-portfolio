import Image from "next/image";
//import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectDetails from "./ProjectDetails";

function ProjectCard({ ...props }) {
  //const [onMouseOver, setOnMouseOver] = useState(false);

  const cardClickHandler = () => {
    props.setSelectedId(props.project.id);
    props.setIsClicked(true);
  };

  return (
    <motion.div
      id={props.project.id}
      className="flex flex-col"
      onClick={() => props.setSelectedId(props.project.id)}
    >
      <div
        id="project-card-header"
        className="flex justify-evenly mb-5 items-center"
      >
        <div className="flex w-full px-2 ">
          <h2 className="text-2xl font-semibold">{props.project.name}</h2>
        </div>
      </div>
      <motion.div
        id="project-card"
        className="flex justify-center items-center w-full rounded-xl cursor-pointer"
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
        />
      </motion.div>
      <div
        id="project-content"
        className="flex flex-col justify-center items-center"
      >
        <div
          id="project-technologies"
          className="flex justify-center items-center gap-2"
        >
          {props.project.lenguage?.map((tech) => (
            <span className="bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 rounded-lg p-2 mt-5">
              {tech}
            </span>
          ))}
        </div>
        { props.selectedId === props.project.id && props.projectSelected?.length > 0 &&
        <AnimatePresence>
          {props.selectedId === props.project.id && (
            <ProjectDetails {...props}/>
          )}
        </AnimatePresence>}
      </div>
    </motion.div>
  );
}

export default ProjectCard;
