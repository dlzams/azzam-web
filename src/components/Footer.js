import styles from "../styles/Footer.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.socialMedia}>
          <a
            href="https://github.com/dlzams"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={styles.link}
          >
            <FaGithub className={styles.icon} />
          </a>
          <a
            href="https://www.linkedin.com/in/muh-azzam/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={styles.link}
          >
            <FaLinkedin className={styles.icon} />
          </a>
        </div>
        <p className={styles.info}>
          Built with <span className={styles.highlight}>Next.js</span> and
          styled with <span className={styles.highlight}>CSS Modules</span>.
        </p>
        <p className={styles.copyright}>
          © {new Date().getFullYear()}{" "}
          <span className={styles.highlight}>Muhammad Abdullah Azzam</span>. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
