"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "./aquaflow.module.css";
import ErrorBoundary from "../../components/ErrorBoundary"; // Pastikan path ini benar

const AquaFlow = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div> {/* Spinner berputar */}
        <p className={styles.loadingText}>Loading</p> {/* Teks loading */}
      </div>
    );
  }

  return (
    <div className={styles.content}>
      <Link href="/" passHref>
        <button className={styles.backButton}>Back</button>
      </Link>
      <h1>AquaFlow Innovillage IoT-Based</h1>
      <p>Under Construction</p>
      <p>This page will showcase IoT solutions for smart living.</p>{" "}
      {/* Menambahkan deskripsi */}
    </div>
  );
};

// Bungkus komponen AquaFlow dengan ErrorBoundary
export default function AquaFlowPage() {
  return (
    <ErrorBoundary>
      <AquaFlow />
    </ErrorBoundary>
  );
}
