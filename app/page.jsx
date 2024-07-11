//import NavBar from "@/components/NavBar/NavBar";
import NavBar from "@/components/NavBar/NavBar";
import Contact from "./contact/Contact";
import Footer from "@/components/footer/Footer";
import Intro from "./intro/Intro";
import PortfolioContainer from "./portfolio/PortfolioContainer";
import Experience from "./experience/Experience";
import Projects from "./projects/Projects";

export default function page() {
  return (
    <div>
      <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-60 overflow-x-hidden scroll-smooth">
        <Intro />
        <Experience />
        <Projects />
        <PortfolioContainer />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
