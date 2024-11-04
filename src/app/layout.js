// src/app/layout.js
import localFont from "next/font/local";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import LastUpdate from "../components/LastUpdate";
import MeteorBackground from "../components/MeteorBackground"; // Import MeteorBackground
import "../styles/globals.css"; // Import CSS global

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Muh Azzam",
  description: "personal website by Azzam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Tambahkan favicon secara eksplisit di sini */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <main>{children}</main>
        <ScrollToTop />
      </body>
    </html>
  );
}
