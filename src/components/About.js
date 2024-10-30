"use client"; // Tambahkan ini di baris paling atas

import { useState } from "react";
import Image from "next/image";
import styles from "../styles/About.module.css";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const shortDescription = (
    <>
      <p>
        I&apos;m a Computer Science student at Telkom University with a strong
        interest in data science, artificial intelligence, and cybersecurity.
        I&apos;ve worked on projects analyzing data to solve real-world
        problems, such as predicting weather patterns and understanding student
        performance.
      </p>
      <p>
        Recently, I completed an internship at Telkomsigma, a subsidiary of
        Telkom Indonesia, where I was responsible for monitoring network traffic
        and handling cybersecurity tasks for multinational clients, including
        IBM and Oracle. I used tools like SIEM and Qradar to detect unusual
        activity and create reports that helped clients improve their security.
      </p>
    </>
  );

  const fullDescription = (
    <>
      {shortDescription}
      <p>
        In late 2023, I had the honor of securing project funding of 13 million
        Rupiah (about $850) for an Internet of Things (IoT) project, ranking in
        the top 163 nationally in the Innovillage Competition. This project
        involved designing an automated irrigation system that utilized time,
        humidity, and temperature data to optimize water usage. Beyond IoT, I
        have significant experience in machine learning, deep learning, and
        artificial intelligence, with a strong foundation in data analysis, NLP,
        and computer vision.
      </p>
      <p>
        I also recently completed the Bangkit Academy program, led by Google,
        Tokopedia, Gojek, and Traveloka. This immersive experience introduced me
        to advanced machine learning topics and practical model deployment. I
        led the development of an AI model for &apos;Sereluna&apos;, a mental
        health mobile app, using natural language processing to analyze user
        diary entries for mental health insights.
      </p>
      <p>
        Alongside my studies, I have actively contributed to Telkom
        University&apos;s Informatics Laboratory as an assistant, teaching data
        structures and supporting practicum sessions for nearly 90 students.
        Additionally, my involvement in the Forensic and Security Laboratory has
        strengthened my knowledge in cybersecurity, where I honed my skills in
        Linux, network security, and web hacking through practical challenges
        like Capture the Flag (CTF) exercises.
      </p>
    </>
  );

  return (
    <section className={styles["about-section"]}>
      <div className={styles["about-container"]}>
        {/* Left Side: Image */}
        <div className={styles["about-image-container"]}>
          <Image
            src="/aboutme.jpg" // Ganti dengan path gambar yang sesuai di folder public
            alt="Your photo"
            width={300}
            height={400}
            className={styles["about-image"]}
          />
        </div>

        {/* Right Side: Content */}
        <div className={styles["about-content"]}>
          <h2 className={styles["about-title"]}>About Me</h2>
          <div className={styles["about-description"]}>
            {isExpanded ? fullDescription : shortDescription}
            <button onClick={handleToggle} className={styles["toggle-button"]}>
              {isExpanded ? "Show Less" : "Show More"}
            </button>
          </div>

          {/* Skills Section */}
          <div className={styles["about-skills"]}>
            <h3 className={styles["skills-title"]}>Skills</h3>
            <ul className={styles["skills-list"]}>
              <li>Security Analysis</li>
              <li>Machine Learning, Deep Learning, AI</li>
              <li>Data Cleaning, Data Analysis, Data Visualization</li>
              <li>TensorFlow</li>
              <li>Front-End Web Development</li>
              <li>Python, C++, Golang, JavaScript</li>
              <li>Teamwork, Communication, Time Management</li>
              <li>Football and Running :)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
