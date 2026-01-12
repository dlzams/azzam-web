"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "../styles/Certifications.module.css";
import Link from "next/link";

const certificationsData = [
  {
    imageUrl: "/certifications/certfsec-1.jpg",
    title: "Endpoint Security",
    description: [
      "Explain how types of data can present unique challenges, with examples.",
      "Document and recommend threat mitigation measures for common and emerging network threats that are relevant to a given organization.",
      "Configure a simulated network according to organizational requirements.",
      "Analyze malware files that have been extracted from packet captures.",
      "Evaluate endpoint security.",
    ],
    credentialUrl:
      "https://www.credly.com/badges/c1215052-d53b-4682-93ab-4f3d14a42dfe/public_url",
  },
  {
    imageUrl: "/certifications/certfsec-2.jpg",
    title: "Ethical Hacker",
    description: [
      "Explain the importance of methodological ethical hacking and penetration testing.",
      "Create penetration testing preliminary documents.",
      "Perform information gathering and vulnerability scanning activities.",
      "Explain how social engineering attacks succeed.",
      "Explain how to exploit wired and wireless network vulnerabilities.",
      "Explain how to exploit application-based vulnerabilities.",
      "Explain how to exploit cloud, mobile, and lot security vulnerabilities.",
      "Explain how to perform post-exploitation activities.",
      "Create a penetration testing report.",
      "Classify pentesting tools by use case.",
    ],
    credentialUrl:
      "https://www.credly.com/badges/1a1ab7c7-d8b4-458d-8449-e7d120167bfc/public_url",
  },
  {
    imageUrl: "/certifications/certfsec-3.jpg",
    title: "Cyber Threat Management",
    description: [
      "Explain why organizations must conform with specific compliance frameworks according to institutional context.",
      "Evaluate network and systems vulnerability.",
      "Given an organizational context, create a vulnerability assessment plan by identifying and describing relevant threats.",
      "Explain how IT systems vulnerability is assessed.",
      "Select security controls based on organizational relevance and create a risk management plan.",
      "Explain how organizations recover from cybersecurity exploits.",
      "Given organizational contexts, recommend disaster recovery and incident response activities.",
      "Explain how forensic investigations of internal and external security incidents are performed.",
    ],
    credentialUrl:
    "https://www.credly.com/badges/194315f2-8cfc-4484-9bb7-6845b9e06af3/public_url",
  },
  {
    imageUrl: "/certifications/certfsec-4.jpg",
    title: "Network Support and Security",
    description: [
      "Demonstrate effective troubleshooting methodologies and help desk best practices.",
      "Explain common threats, vulnerabilities, and attacks on end points.",
      "Configure secure user access on a network.",
    ],
    credentialUrl:
      "https://www.credly.com/badges/a009e9ce-6eba-4698-9042-593559fd6952/public_url",
  },
];

const Certifications = () => {
  const cardRefs = useRef([]); // Use array ref to store each card element

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.scrollFadeIn);
            observer.unobserve(entry.target); // Stop observing once animated
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const handleRipple = (event) => {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add(styles.ripple);

    const ripple = button.getElementsByClassName(styles.ripple)[0];
    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  };

  return (
    <section className={styles.certificationsSection}>
      <h2 className={styles.sectionTitle}>Certifications</h2>
      <div className={styles.certificationGrid}>
        {certificationsData.slice(0, 4).map((cert, index) => (
          <div
            className={`${styles.certificationCard} ${styles.hidden}`}
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <Image
              src={cert.imageUrl}
              alt={`${cert.title} certificate`}
              className={styles.certificateImage}
              width={300}
              height={200}
            />
            <h3 className={styles.certificateTitle}>{cert.title}</h3>
            <ul className={styles.certificateDescription}>
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
        ))}
      </div>
      <div className={styles.viewMoreContainer}>
        <Link href="/certifications" passHref legacyBehavior>
          <a className={styles.viewMoreButton} onClick={handleRipple}>
            Show All Certifications
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Certifications;
