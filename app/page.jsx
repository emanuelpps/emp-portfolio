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
      <main className="flex min-h-screen flex-col items-center justify-center md:pl-24 md:pr-24 gap-20 md:gap-60 overflow-hidden scroll-smooth px-5">
        <Intro />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
      <WidgetWrapper />
    </div>
  );
}
