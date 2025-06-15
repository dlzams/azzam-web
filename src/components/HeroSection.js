// src/components/HeroSection.js
"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "../styles/HeroSection.module.css";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("Muhammad Abdullah Azzam");
  const textRef = useRef(null); // Menyimpan referensi ke elemen animasi teks
  const heroRef = useRef(null); // Referensi untuk elemen HeroSection untuk animasi scroll

  useEffect(() => {
    // Interval untuk mengganti teks
    const intervalId = setInterval(() => {
      if (textRef.current) {
        textRef.current.classList.add(styles.fadeOut);
      }
      const timeoutId = setTimeout(() => {
        setDisplayText((prev) =>
          prev === "Muhammad Abdullah Azzam"
            ? "Azzam"
            : "Muhammad Abdullah Azzam"
        );

        if (textRef.current) {
          textRef.current.classList.remove(styles.fadeOut);
          textRef.current.classList.add(styles.fadeIn);
        }
        setTimeout(() => {
          if (textRef.current) {
            textRef.current.classList.remove(styles.fadeIn);
          }
        }, 500);
      }, 250);

      return () => clearTimeout(timeoutId);
    }, 1500);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Intersection Observer untuk animasi scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.scrollFadeIn);
            observer.unobserve(entry.target); // Hanya animasi sekali
          }
        });
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section
      className={`${styles.heroSection} ${styles.scrollFadeIn}`}
      ref={heroRef}
    >
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
          <h1 className={`${styles.animateText}`} ref={textRef}>
            {displayText}
          </h1>
          <p>
            Techincal Consultant Data Security at Virtus Indonesia (CTI Group).
          </p>
        </div>
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
        <Link href="#contact">
          <button className={styles.heroButton}>Contact Me →</button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
