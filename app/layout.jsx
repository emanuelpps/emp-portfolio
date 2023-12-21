import './globals.css';
import { Poppins } from 'next/font/google'


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
})
 
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body >{children}</body>
    </html>
  )
}