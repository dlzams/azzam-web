"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "../styles/HeroSection.module.css";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("Muhammad Abdullah Azzam");
  const textRef = useRef(null); // Menyimpan referensi ke elemen animasi teks

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Menambahkan kelas fadeOut sebelum mengganti teks
      if (textRef.current) {
        textRef.current.classList.add(styles.fadeOut);
      }

      // Ganti teks setelah animasi fadeOut selesai (250 ms)
      const timeoutId = setTimeout(() => {
        setDisplayText((prev) =>
          prev === "Muhammad Abdullah Azzam"
            ? "Azzam"
            : "Muhammad Abdullah Azzam"
        );

        // Setelah teks diganti, tambahkan kelas fadeIn
        if (textRef.current) {
          textRef.current.classList.remove(styles.fadeOut);
          textRef.current.classList.add(styles.fadeIn);
        }

        // Hapus kelas fadeIn setelah beberapa waktu untuk persiapan animasi berikutnya
        setTimeout(() => {
          if (textRef.current) {
            textRef.current.classList.remove(styles.fadeIn);
          }
        }, 500);
      }, 250);

      return () => clearTimeout(timeoutId);
    }, 1500); // Ganti teks setiap 1.5 detik

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className={styles.heroSection}>
      <div className={styles.content}>
        <div className={styles.avatar}>
          <div className={styles.flipCard}>
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardFront}>
                <img
                  src="/avatar2.jpg"
                  alt="Avatar2"
                  className={styles.avatarImage}
                />
              </div>
              <div className={styles.flipCardBack}>
                <img
                  src="/avatar1.jpg"
                  alt="Avatar1"
                  className={styles.avatarImage}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.description}>
          {/* Gunakan ref untuk elemen animateText */}
          <h1 className={`${styles.animateText}`} ref={textRef}>
            {displayText}
          </h1>
          <p>
            YPT Telkom University Scholarship Awardee & final-year Computer
            Science student specializing in Security Analysis, Machine Learning,
            Deep Learning, Data Analysis, and Front-End Web Development.
          </p>
        </div>
        <Link href="#contact">
          <button className={styles.heroButton}>Contact Me →</button>
        </Link>
        <div className={styles.socialIcons}>
          <a
            href="https://github.com/dlzams"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className={styles.icon} />
          </a>
          <a
            href="https://www.linkedin.com/in/muh-azzam/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className={styles.icon} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
