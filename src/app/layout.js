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
  title: "Muh Azzam - Personal Website",
  description:
    "Explore the personal website of Muh Azzam, showcasing his skills in security analysis, machine learning, and web development. Discover projects, experiences, and certifications.",
  keywords:
    "Muhammad Abdullah Azzam, Telkom, Telkom University, Azzam, Informatika, Telkomsigma, Computer Science, Security Analysis, Machine Learning, Web Development, Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <title>{metadata.title}</title>
      </head>
      <body className={`${geistSans.variable}`}>
        <main>{children}</main>
        <ScrollToTop />
      </body>
    </html>
  );
}
