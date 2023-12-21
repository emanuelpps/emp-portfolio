//import NavBar from "@/components/NavBar/NavBar";
import Intro from "./intro/Intro";
import PortfolioContainer from "./portfolio/PortfolioContainer";

export default function page() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Intro/>
      <PortfolioContainer/>
      </main>
    </>
  );
}
