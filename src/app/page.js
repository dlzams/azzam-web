// src/app/page.js
import HeroSection from "../components/HeroSection";
import Experiences from "../components/Experiences";
import Projects from "../components/Projects";

export default function HomePage() {
  return (
    <main>
      <HeroSection /> {/* HeroSection hanya muncul di halaman utama */}
      <Experiences />
      <Projects />
    </main>
  );
}
