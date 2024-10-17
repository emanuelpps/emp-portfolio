import Image from "next/image";
//import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectDetails from "./ProjectDetails";
import ProjectCardHeader from "./ProjectCardHeader";
import ProjectCardHighlight from "./ProjectCardHighlight";
import ProjectCardButtons from "./ProjectCardButtons";
import ProjectCardImage from "./ProjectCardImage";

function ProjectCard({ ...props }) {
  //const [onMouseOver, setOnMouseOver] = useState(false);

  const cardClickHandler = () => {
    props.onCardClick(props.project.id);
  };
  console.log(props.project);

  return (
    <div
      id="project-card-container"
      className="flex w-[100%] justify-center items-center"
    >
      <div id="project-card" className="flex flex-col w-[90%] gap-10">
        <ProjectCardHeader
          title={props.project.name}
          skills={props.project.lenguage}
        />
        <ProjectCardHighlight
          highlight={props.project.infoProject[0].highlight}
        />
        <ProjectCardButtons />
        <ProjectCardImage />
      </div>
    </div>
  );
}

export default ProjectCard;
