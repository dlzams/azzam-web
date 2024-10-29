// src/components/Projects.js
import React from "react";
import styles from "../styles/Projects.module.css";

const projects = [
  {
    title: "Website for Business Startup for Used and New Cars Sell",
    description: "Built with Laravel, TailwindCSS, and Firebase",
    imageUrl: "/abpweb.jpg",
    caption: "BaroCars Website-Based",
  },
  {
    title: "Project 2",
    description: "A short description of project 2",
    imageUrl: "/sereluna.jpg",
    caption: "SereLuna Mobile-Based using AI",
  },
  {
    title: "Project 3",
    description: "A short description of project 3",
    imageUrl: "/project3.jpg",
    caption: "AquaFlow Innovillage IoT-Based",
  },
  {
    title: "Project 3",
    description: "A short description of project 3",
    imageUrl: "/strukdat.jpg",
    caption: "Data Structure - Implement Double Linked List",
  },
  {
    title: "Project 3",
    description: "A short description of project 3",
    imageUrl: "/blockchain.jpg",
    caption: "Blockchain Mining System",
  },
  {
    title: "Project 3",
    description: "A short description of project 3",
    imageUrl: "/cnnimages.jpg",
    caption: "CNN Images Classification using Cats-Dogs Dataset",
  },
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.title}>My Projects</h2>
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
