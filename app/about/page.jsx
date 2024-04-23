import React from "react";
import NavBar from "@/components/NavBar/NavBar";
import Contact from "../works/contact/Contact";
import Footer from "@/components/footer/Footer";
import Summary from "./summary/Summary";
import Skills from "./skills/Skills";
import AboutMe from "./aboutMe/AboutMe";
import FreeTime from "./freeTime/FreeTime";
import Experience from "./experience/Experience";

function page() {
  return (
    <div>
      <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-between md:p-24 overflow-x-hidden scroll-smooth">
        <Summary/>
        <Skills/>
        <Experience/>
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default page;
