import NavBar from "@/components/NavBar/NavBar";
import Intro from "./intro/Intro";

export default function page() {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Intro/>
      </main>
    </>
  );
}
