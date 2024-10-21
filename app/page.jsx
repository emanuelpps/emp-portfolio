//import NavBar from "@/components/NavBar/NavBar";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/footer/Footer";
import Intro from "./intro/Intro";
import PortfolioContainer from "./portfolio/PortfolioContainer";
import Experience from "./experience/Experience";
import Projects from "./projects/Projects";
import Skills from "./Skills/Skills";
import Contact from "./contact/Contact";
import WidgetWrapper from "@/components/widget/WidgetWrapper";


export default function page() {
  return (
    <div>
      <NavBar />
      <main className="flex flex-col items-center justify-center min-h-screen gap-20 px-5 overflow-hidden md:pl-24 md:pr-24 md:gap-60 scroll-smooth">
        <Intro />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
      <WidgetWrapper />
    </div>
  );
}
