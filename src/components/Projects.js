// src/components/Projects.js
import React from "react";
import Link from "next/link"; // Import Link dari Next.js
import styles from "../styles/Projects.module.css";

const projects = [
  {
    title: "Automatic Watering",
    description: "Using Arduino, ESP32, Various Sensors, and IoT",
    imageUrl: "/innovillage.jpg",
    caption: "AquaFlow Innovillage IoT-Based",
    internalUrl: "/aquaflow",
  },
  {
    title: "Car Marketplace for New & Used Cars",
    description: "Built with Laravel, TailwindCSS, and Firebase",
    imageUrl: "/abpweb.jpg",
    caption: "BaroCars Website-Based",
    url: "https://barocars.up.railway.app/", // Tambahkan URL untuk setiap proyek
  },
  {
    title: "Detection User Mental Health",
    description:
      "Built with Kotlin, TensorFlow, and Natural Languange Processing",
    imageUrl: "/sereluna.jpg",
    caption: "SereLuna Mobile-Based using AI",
    url: "https://github.com/dlzams/SereLunaApp",
  },
  {
    title: "A Simple blockchain mining system implemented in Python",
    description:
      "The system is designed to demonstrate the basic principles of blockchain technology, including block creation, hashing, and mining.",
    imageUrl: "/blockchain.jpg",
    caption: "Blockchain Mining System",
    url: "https://github.com/dlzams/blockchain-mining",
  },
  {
    title: "Implement Convolutional Neural Network",
    description:
      "A CNN-based image classification project to accurately distinguish between images of cats and dogs using the 'Cats vs Dogs' dataset.",
    imageUrl: "/cnnimages.jpg",
    caption: "CNN Images Classification using Cats-Dogs Dataset",
    url: "https://github.com/dlzams/cnn-images",
  },
  {
    title:
      "Implementation of a data structure specifically designed to store and manage user history.",
    description:
      "The advantages of this approach include efficient navigation both forward and backward, providing an optimal storage solution for application or project development.",
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
