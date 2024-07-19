//import NavBar from "@/components/NavBar/NavBar";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/footer/Footer";
import Intro from "./intro/Intro";
import PortfolioContainer from "./portfolio/PortfolioContainer";
import Experience from "./experience/Experience";
import Projects from "./projects/Projects";
import Skills from "./Skills/Skills";
import Contact from "./contact/Contact";

export default function page() {
  return (
    <div>
      <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-between pl-24 pr-24 gap-60 overflow-hidden scroll-smooth">
        <Intro />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
