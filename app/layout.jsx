import NavBar from "@/components/NavBar/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Emanuel Pagés | Frontend Developer",
  description: "I'm passionate about programming. I'm always seeking opportunities to enhance my skills and knowledge.",
};
const poppins = Inter({
  subsets: ["latin"],
});

export default async function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
