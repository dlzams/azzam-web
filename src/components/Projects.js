// src/components/Projects.js
import React from "react";
import Link from "next/link"; // Import Link dari Next.js
import styles from "../styles/Projects.module.css";

const projects = [
  {
    title: "Website for Business Startup for Used and New Cars Sell",
    description: "Built with Laravel, TailwindCSS, and Firebase",
    imageUrl: "/abpweb.jpg",
    caption: "BaroCars Website-Based",
    url: "https://barocars.up.railway.app/", // Tambahkan URL untuk setiap proyek
  },
  {
    title: "Project 2",
    description: "A short description of project 2",
    imageUrl: "/sereluna.jpg",
    caption: "SereLuna Mobile-Based using AI",
    url: "https://github.com/dlzams/SereLunaApp",
  },
  {
    title: "Project 3",
    description: "A short description of project 3",
    imageUrl: "/project3.jpg",
    caption: "AquaFlow Innovillage IoT-Based",
    internalUrl: "/aquaflow",
  },
  {
    title: "Project 3",
    description: "A short description of project 3",
    imageUrl: "/blockchain.jpg",
    caption: "Blockchain Mining System",
    url: "https://github.com/dlzams/blockchain-mining",
  },
  {
    title: "Project 3",
    description: "A short description of project 3",
    imageUrl: "/cnnimages.jpg",
    caption: "CNN Images Classification using Cats-Dogs Dataset",
    url: "https://github.com/dlzams/cnn-images",
  },
  {
    title: "Project 3",
    description: "A short description of project 3",
    imageUrl: "/strukdat.jpg",
    caption: "Data Structure - Implement Double Linked List",
    url: "https://github.com/dlzams/data-structure",
  },
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.title}>My Projects</h2>
      <div className={styles.grid}>
        {projects.map((project, index) =>
          project.internalUrl ? (
            <Link
              key={index}
              href={project.internalUrl}
              legacyBehavior
              passHref
            >
              <a className={styles.cardLink}>
                <div className={styles.card}>
                  <div className={styles.imageContainer}>
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className={styles.image}
                    />
                    <div className={styles.overlay}>
                      <h3 className={styles.projectTitle}>{project.title}</h3>
                      <p className={styles.description}>
                        {project.description}
                      </p>
                    </div>
                  </div>
                  <p className={styles.caption}>{project.caption}</p>
                </div>
              </a>
            </Link>
          ) : (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cardLink}
            >
              <div className={styles.card}>
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
                <p className={styles.caption}>{project.caption}</p>
              </div>
            </a>
          )
        )}
      </div>
    </section>
  );
};

export default Projects;
