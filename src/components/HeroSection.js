"use client";

import React, { useEffect, useState } from "react";
import styles from "../styles/HeroSection.module.css";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("Muhammad Abdullah Azzam");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDisplayText((prev) => {
        // Menangani kelas untuk animasi fade
        if (prev === "Muhammad Abdullah Azzam") {
          document
            .querySelector(`.${styles.animateText}`)
            .classList.add(styles.fadeOut);
          setTimeout(() => {
            document
              .querySelector(`.${styles.animateText}`)
              .classList.remove(styles.fadeOut);
            document
              .querySelector(`.${styles.animateText}`)
              .classList.add(styles.fadeIn);
          }, 100); // Waktu menunggu sebelum mengubah teks
          return "Azzam";
        } else {
          document
            .querySelector(`.${styles.animateText}`)
            .classList.remove(styles.fadeIn);
          document
            .querySelector(`.${styles.animateText}`)
            .classList.add(styles.fadeOut);
          setTimeout(() => {
            document
              .querySelector(`.${styles.animateText}`)
              .classList.remove(styles.fadeOut);
            document
              .querySelector(`.${styles.animateText}`)
              .classList.add(styles.fadeIn);
          }, 500);
          return "Muhammad Abdullah Azzam";
        }
      });
    }, 500); // ganti waktunya

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
          <h1 className={styles.animateText}>{displayText}</h1>
          <p>
            Professional [Job Title] specialized in [Specialization]. Passionate
            about delivering high-quality solutions and creating impactful
            digital experiences.
          </p>
        </div>
        <button className={styles.heroButton}>Contact Me →</button>
      </div>
    </section>
  );
};

export default HeroSection;
