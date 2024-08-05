"use client";
import React, { useState, useEffect, useRef } from "react";
import projects from "@/public/data/works.json";
import Image from "next/image";
import { VscGithub } from "react-icons/vsc";
import { VscLinkExternal } from "react-icons/vsc";
import { VscArrowLeft } from "react-icons/vsc";
import { FaRegLightbulb } from "react-icons/fa6";
import "ldrs/tailChase";
import Link from "next/link";
import loader from "@/components/loader/loader";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { SlClose } from "react-icons/sl";
import uuid from "react-uuid";
import ProjectInfo from "./ProjectInfo";
import ProjectTitle from "./ProjectTitle";

function ProjectName({ params }) {
  const [dataProjects, setDataProjects] = useState([]);
  const [projectPage, setProjectPage] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [isViewing, setIsViewing] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState({});
  const [inSection, setInSection] = useState("");

  const ref = useRef(null);
  const scrollRef = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    setDataProjects(projects);
  }, []);

  useEffect(() => {
    const findProject = dataProjects.find(
      (element) => element.linkName === params.projectName
    );
    setProjectPage(findProject);
  }, [dataProjects, params.projectName]);
  /* 
  const handleLoaded = () => {
    setLoading(false);
  };

  const handleImageSelected = (photo) => {
    setSelectedPhoto(photo);
    console.log("photo", photo);
    setIsViewing(true);
    console.log("isViewing", isViewing);
  };

  useEffect(() => {
    setInSection(scrollRef.current?.id);
  }, [ref]);

  console.log("inSection", ref.current?.id); */

  return (
    <div>
      <Link href={"/"}>
        <button className="md:m-5 hidden py-2 md:px-4 md:inline-flex items-center gap-x-2 text-sm font-normal rounded-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100 hover:bg-gray-200 hover:text-black">
          <VscArrowLeft />
          Go Back
        </button>
      </Link>
      <ProjectTitle projectPage={projectPage} />
      <ProjectInfo
        projectPage={projectPage}
        isLoading={isLoading}
        setLoading={setLoading}
        dataProjects={dataProjects}
      />
    </div>
  );
}

export default ProjectName;
