// src/components/Navbar.js
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>MyPortfolio</div>
      <ul className={styles.navLinks}>
        <li>
          <a href="#experiences">Experiences</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#certifications">Certifications</a>
        </li>
        <li>
          <a href="#academics">Academics</a>
        </li>
        <li>
          <a href="#others">Others</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
