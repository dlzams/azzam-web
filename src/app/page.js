// src/app/page.js
import Navbar from "@/components/Navbar";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Experiences from "../components/Experiences";
import Projects from "../components/Projects";

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
      <Projects />
    </main>
  );
}
