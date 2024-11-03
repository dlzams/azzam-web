"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "./certificate.module.css";
import ErrorBoundary from "../../components/ErrorBoundary"; // Pastikan path ini benar
import certificationsData from "./certificationsData"; // Import data sertifikat

const Certifications = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className={`${styles.loading} ${styles.fadeOut}`}>
        <div className={styles.spinner}>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>
        <p className={styles.loadingText}>Loading</p>
      </div>
    );
  }

  return (
    <div className={styles.content}>
      <Link href="/" passHref>
        <button className={styles.backButton}>Back</button>
      </Link>
      <h1 className={styles.title}>My Certifications</h1>
      <p className={styles.description}>
        This page showcases my certifications in various fields of study and
        expertise. Feel free to explore the details of each certification below.
      </p>
      <hr className={styles.divider} />
      <div className={styles.cardContainer}>
        {/* Render sertifikat secara dinamis */}
        {certificationsData.map((cert, index) => (
          <div className={styles.certificationCard} key={index}>
            <img
              src={cert.imageUrl}
              alt="Certification Image"
              className={styles.certificateImage}
            />
            <div className={styles.cardDetails}>
              <h3 className={styles.cardTitle}>{cert.title}</h3>
              <div className={styles.issuerContainer}>
                <p className={styles.cardIssuer}>Issued by: {cert.issuer}</p>
              </div>
              <ul className={styles.cardDescription}>
                {cert.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.certificateLink}
              >
                🔗 Credential
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Bungkus komponen Certifications dengan ErrorBoundary
export default function CertificationsPage() {
  return (
    <ErrorBoundary>
      <Certifications />
    </ErrorBoundary>
  );
}
