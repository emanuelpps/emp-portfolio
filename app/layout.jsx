import "./globals.css";
import { Outfit } from "next/font/google";
import Head from "next/head";
import "react-toastify/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import GoogleAnalytics from "./GoogleAnalytics";

export const metadata = {
  title: "Emanuel Pagés | Frontend Developer",
  description:
    "I'm passionate about programming. I'm always seeking opportunities to enhance my skills and knowledge.",
  lang: "en",
};
const outfit = Outfit({
  subsets: ["latin"],
});

export default async function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.className} scroll-smooth`}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className="scroll-smooth">
        <GoogleAnalytics />
        {children}
        <ToastContainer closeButton={false} />
      </body>
    </html>
  );
}
