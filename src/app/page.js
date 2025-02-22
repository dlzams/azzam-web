// src/app/page.js
import Navbar from "@/components/Navbar";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Experiences from "../components/Experiences";
import Projects from "../components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Metadata untuk halaman utama
export const metadata = {
  title: "Azzam Web",
  description:
    "Explore the personal website of Muh Azzam, showcasing his skills in security analysis, machine learning, and web development. Discover projects, experiences, and certifications.",
  keywords:
    "Muhammad Abdullah Azzam, Telkom, Telkom University, Azzam, Informatika, Telkomsigma, Computer Science, Security Analysis, Machine Learning, Web Development, Portfolio",
};

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <section id="hero">
        <HeroSection /> {/* HeroSection hanya muncul di halaman utama */}
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experiences">
        <Experiences />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="certifications">
        <Certifications />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </main>
  );
}
