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
            className={styles.link} // Tambahkan class ini
          >
            <FaGithub className={styles.icon} />
          </a>
          <a
            href="https://www.linkedin.com/in/muh-azzam/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={styles.link} // Tambahkan class ini
          >
            <FaLinkedin className={styles.icon} />
          </a>
        </div>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Muhammad Abdullah Azzam. All rights
          reserved.
        </p>
        <p className={styles.info}>
          Built with Next.js and styled with CSS Modules. <br />{" "}
          {/* Tambahkan class */}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
