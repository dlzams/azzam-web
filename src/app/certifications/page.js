"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import styles from "./certificate.module.css";
import ErrorBoundary from "../../components/ErrorBoundary";
import certificationsData from "./certificationsData";

const Certifications = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [isPageLoading, setIsPageLoading] = useState(false);
  const itemsPerPage = 4;
  const cardRefs = useRef([]);

  const totalPages = Math.ceil(certificationsData.length / itemsPerPage);

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setIsLoading(false); // Set initial loading to false after 3 seconds
    }, 3000);
    return () => clearTimeout(initialTimer);
  }, []);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setIsPageLoading(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsPageLoading(false);
      }, 300);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setIsPageLoading(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsPageLoading(false);
      }, 300);
    }
  };

  // IntersectionObserver hanya untuk halaman selain halaman pertama
  useEffect(() => {
    if (currentPage === 1) return; // Skip observer for first page on initial load

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.scrollFadeIn);
            observer.unobserve(entry.target); // Unobserve after animating in
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [currentPage]);

  if (isLoading || isPageLoading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
        <p className={styles.loadingText}>Loading</p>
      </div>
    );
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCertifications = certificationsData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className={styles.content}>
      <Link href="/" passHref>
        <button className={styles.backButton}>Back</button>
      </Link>
      <h1 className={styles.title}>My Certifications</h1>
      <p className={styles.description}>
        These are my professional certifications, recognized globally. Explore
        the details below!
      </p>
      <hr className={styles.divider} />

      <div className={styles.cardContainer}>
        {/* Render certifications for the current page */}
        {currentCertifications.map((cert, index) => (
          <div
            className={`${styles.certificationCard} ${
              currentPage === 1 ? "" : styles.hidden
            }`} // Show directly on first page
            key={index}
            ref={(el) => (cardRefs.current[startIndex + index] = el)}
          >
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
                🔗 View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.pagination}>
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={styles.paginationButton}
        >
          Previous
        </button>
        <span className={styles.pageNumber}>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={styles.paginationButton}
        >
          Next
        </button>
      </div>
    </div>
  );
};

// Wrap the Certifications component with ErrorBoundary
export default function CertificationsPage() {
  return (
    <ErrorBoundary>
      <Certifications />
    </ErrorBoundary>
  );
}
