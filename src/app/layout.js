// src/app/layout.js
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import localFont from "next/font/local";
import ScrollToTop from "../components/ScrollToTop";
import "./globals.css";

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

// Measurement ID Google Analytics
const GA_TRACKING_ID = "G-V0SXBTCCQQ"; // Ganti dengan Measurement ID Anda

export default function RootLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (window.gtag) {
        window.gtag("config", GA_TRACKING_ID, {
          page_path: url,
        });
      }
    };

    handleRouteChange(pathname);
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* Tambahkan meta tags langsung di sini */}
        <meta
          name="description"
          content="Explore the personal website of Muh Azzam, showcasing his skills in security analysis, machine learning, and web development. Discover projects, experiences, and certifications."
        />
        <meta
          name="keywords"
          content="Muhammad Abdullah Azzam, Telkom, Telkom University, Azzam, Informatika, Telkomsigma, Computer Science, Security Analysis, Machine Learning, Web Development, Portfolio"
        />
        <title>Azzam Web</title>

        {/* Google Analytics Script */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable}`}>
        <main>{children}</main>
        <ScrollToTop />
      </body>
    </html>
  );
}
