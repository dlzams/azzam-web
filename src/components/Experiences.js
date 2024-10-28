// src/components/Experiences.js
import React from "react";
import styles from "../styles/Experiences.module.css";

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Telkom Indonesia",
    date: "July 2023 - September 2023",
    description:
      "Worked on developing and optimizing internal tools using modern web technologies. Collaborated with cross-functional teams to deliver high-quality solutions.",
  },
  {
    title: "Frontend Developer",
    company: "Freelance",
    date: "May 2022 - June 2023",
    description:
      "Designed and developed responsive web interfaces for various clients. Focused on creating modern, user-friendly UI/UX experiences.",
  },
  {
    title: "Frontend Developer",
    company: "Freelance",
    date: "May 2022 - June 2023",
    description:
      "Designed and developed responsive web interfaces for various clients. Focused on creating modern, user-friendly UI/UX experiences.",
  },
];

const Experiences = () => {
  return (
    <section id="experiences" className={styles.experiences}>
      <h2 className={styles.title}>Experiences</h2>
      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.jobTitle}>{exp.title}</h3>
            <p className={styles.company}>{exp.company}</p>
            <p className={styles.date}>{exp.date}</p>
            <p className={styles.description}>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
