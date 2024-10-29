// src/components/Navbar.js
"use client"; // Tambahkan ini

import { useState } from "react";
import Link from "next/link"; // Import Link dari next/link
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOthersOpen, setIsOthersOpen] = useState(false); // State untuk dropdown "Others"

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleOthersMenu = () => {
    setIsOthersOpen(!isOthersOpen);
  };

  return (
    <nav className={styles.navbar}>
      {/* Logo with Link to Homepage */}
      <Link href="/" passHref legacyBehavior>
        <a className={styles.logo}>MyPortfolio 🎮</a>
      </Link>

      <div className={styles.hamburger} onClick={toggleMenu}>
        <span className={`${styles.bar} ${isOpen ? styles.change : ""}`}></span>
        <span className={`${styles.bar} ${isOpen ? styles.change : ""}`}></span>
        <span className={`${styles.bar} ${isOpen ? styles.change : ""}`}></span>
      </div>

      <ul className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experiences">Experiences</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#certifications">Certifications</a>
        </li>
        <li className={styles.others} onClick={toggleOthersMenu}>
          <a
            href="#"
            onClick={(e) => e.preventDefault()} // Mencegah perilaku default agar "#" tidak muncul di URL
            className={styles.dropdownToggle}
          >
            Others
          </a>
          {isOthersOpen && (
            <div className={styles.dropdownMenu}>
              <a href="#academics">Academics</a>
              <a href="#contact">Contact Me</a>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
