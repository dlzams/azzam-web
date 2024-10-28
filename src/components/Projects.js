// src/components/Projects.js
import React from "react";
import styles from "../styles/Projects.module.css";

const projects = [
  {
    title: "Website for Business Startup for Used and New Cars Sell",
    description: "Built with Laravel, TailwindCSS, and Firebase",
    imageUrl: "/project1.jpg",
    caption: "BaroCars Website-Based", // Caption singkat
  },
  {
    title: "Project 2",
    description: "A short description of project 2",
    imageUrl: "/project2.jpg",
    caption: "Project 2 - E-commerce Platform",
  },
  {
    title: "Project 3",
    description: "A short description of project 3",
    imageUrl: "/project3.jpg",
    caption: "Project 3 - Data Visualization",
  },
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageContainer}>
              <img
                src={project.imageUrl}
                alt={project.title}
                className={styles.image}
              />
              <div className={styles.overlay}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
              </div>
            </div>
            <p className={styles.caption}>{project.caption}</p>{" "}
            {/* Caption di bawah proyek */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
