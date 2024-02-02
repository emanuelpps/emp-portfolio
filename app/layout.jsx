import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "Emanuel Pagés | Frontend Developer",
  description:
    "I'm passionate about programming. I'm always seeking opportunities to enhance my skills and knowledge.",
};
const poppins = Inter({
  subsets: ["latin"],
});

export default async function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className="scroll-smooth">
        {children}
        <ToastContainer closeButton={false} />
      </body>
    </html>
  );
}
