// src/components/About.js
"use client"; // Tambahkan ini di baris paling atas

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "../styles/About.module.css";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const aboutImageRef = useRef(null);
  const aboutTitleRef = useRef(null);
  const aboutDescriptionRef = useRef(null);
  const skillsSectionRef = useRef(null);
  const skillsListRef = useRef([]);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.scrollFadeIn);
          observer.unobserve(entry.target); // Hanya animasi sekali
        }
      });
    }, observerOptions);

    // Observe each element in About section
    if (aboutImageRef.current) observer.observe(aboutImageRef.current);
    if (aboutTitleRef.current) observer.observe(aboutTitleRef.current);
    if (aboutDescriptionRef.current)
      observer.observe(aboutDescriptionRef.current);
    if (skillsSectionRef.current) observer.observe(skillsSectionRef.current);
    skillsListRef.current.forEach((skill) => {
      if (skill) observer.observe(skill);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const shortDescription = (
    <>
      <p>
        I&apos;m a Computer Science student at Telkom University with a strong
        interest in research and career opportunities in data science,
        artificial intelligence, and cybersecurity. I&apos;ve intern-ed at
        Telkomsigma and have gained hands-on experience in the Hardware and
        Embedded System Lab as well as the Forensic and Security Lab. My
        projects involve analyzing data, creating visualizations, and building
        machine learning models to solve real-world problems, such as predicting
        weather patterns, assessing student performance, and others.
      </p>
      <p>
        Recently, I completed an internship at Telkomsigma, a subsidiary of
        Telkom Indonesia, where I was responsible for monitoring network traffic
        and handling cybersecurity tasks for multinational clients. I used tools
        like SIEM, Qradar, Cybereason, Stellar, and others to detect unusual
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
        <div className={styles["about-image-container"]} ref={aboutImageRef}>
          <Image
            src="/aboutme.jpg"
            alt="Your photo"
            width={300}
            height={400}
            className={styles["about-image"]}
          />
        </div>

        {/* Right Side: Content */}
        <div className={styles["about-content"]}>
          <h2 className={styles["about-title"]} ref={aboutTitleRef}>
            About Me
          </h2>
          <div
            className={styles["about-description"]}
            ref={aboutDescriptionRef}
          >
            {isExpanded ? fullDescription : shortDescription}
            <button onClick={handleToggle} className={styles["toggle-button"]}>
              {isExpanded ? "Show Less" : "Show More"}
            </button>
          </div>

          {/* Skills Section */}
          <div className={styles["about-skills"]} ref={skillsSectionRef}>
            <h3 className={styles["skills-title"]}>Skills</h3>
            <ul className={styles["skills-list"]}>
              {[
                "Security Analysis",
                "Machine Learning, Deep Learning, AI",
                "Data Cleaning, Data Analysis, Data Visualization",
                "TensorFlow",
                "Front-End Web Development",
                "Python, C++, Golang, JavaScript",
                "Teamwork, Communication, Time Management",
                "Football and Running :)",
              ].map((skill, index) => (
                <li
                  key={index}
                  ref={(el) => (skillsListRef.current[index] = el)}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
