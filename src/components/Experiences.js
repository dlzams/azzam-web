// src/components/Experiences.js
"use client";
import React, { useEffect, useRef } from "react";
import styles from "../styles/Experiences.module.css";

const experiences = [
  {
    title: "Research Group",
    company: "Hardware and Embedded System Laboratory",
    date: "November 2023 - Present (November 2024)",
    description: [
      "Collaborated with a team to create an IoT-based automatic watering device, which operates based on soil and air humidity levels.",
      "Gained hands-on experience with IoT modules such as Arduino, ESP32, various sensors, and other related technologies.",
      "Served as a 'mentor' for junior students, offering guidance and insights for innovation competitions and projects in hardware and embedded systems.",
    ],
    image: "/hes.jpg",
  },
  {
    title: "Security Analyst Intern",
    company: "Telkomsigma by Telkom Indonesia",
    date: "June 2024 - September 2024",
    description: [
      "Monitored network traffic for multiple multinational companies, managing cybersecurity for over 6 companies to spot unusual activity or threats.",
      "Detected network anomalies and potential attacks, creating clear incident reports and sharing them with clients to keep them informed.",
      "Utilized cybersecurity tools such as SIEM, Cybereason, Group-IB Threat Hunting Framework (THF), Qradar, and Stellar to enhance monitoring, threat detection, and incident response processes.",
      "Built attack flow diagrams to show where attacks started, how they moved, and what they targeted, giving clients a better understanding of security risks.",
      "Worked closely with the team to monitor and report together, also taking on Level 1 (L1) analyst tasks and covering shift work when extra support was needed.",
    ],
    image: "/telkomsigma.jpg",
  },
  {
    title: "Machine Learning Cohort",
    company: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
    date: "February 2024 - June 2024",
    description: [
      "Engaged in weekly consultations and completed various learning modules including Growth Mindset, Time and Energy Management, Critical Thinking, Project Management, and Professional Branding.",
      "Learned foundational and advanced machine learning concepts through hands-on modules such as Collecting Data with Python, Deep Dive into Data Analysis, Machine Learning Fundamentals, Unsupervised Learning, and Advanced Deep Learning with TensorFlow.",
      "Gained experience in deploying machine learning models through real-world application sessions like TensorFlow Deployment with TF.js, TF Lite, and TF Serving.",
      "Developed and led AI model development for Sereluna, a mobile application designed for mental health detection. Utilizing natural language processing (NLP), the model analyzes user diary entries and generates output labels to identify potential mental health conditions, overseeing model design and integration to ensure optimal performance in the app.",
    ],
    image: "/bangkit.jpg",
  },
  {
    title: "Practicum Assistant of Data Structure",
    company: "Informatics Laboratory Telkom University",
    date: "September 2023 - January 2024",
    description: [
      "Planned, organized, and facilitated teaching sessions focusing on data structure concepts to enhance understanding and engagement among students.",
      "Taught key data structures including single linked lists, double linked lists, multiple linked lists, trees, and graphs.",
      "Assisted in managing a practicum course for 80-90 students, ensuring effective communication and support for each student's learning experience.",
    ],
    image: "/iflab.jpg",
  },
  {
    title: "Study Group",
    company: "Forensic And Security Laboratory",
    date: "March 2023 - December 2023",
    description: [
      "Engaged in discussions on forensic and security principles.",
      "Gained foundational skills in Linux (Ubuntu), network security, and web hacking techniques",
      "Actively participated in Capture the Flag (CTF) challenges, enhancing problem-solving skills and applying knowledge in practical cybersecurity scenarios.",
    ],
    image: "/forestylab.jpg",
  },
  {
    title: "Student Internship",
    company: "Advanced Software Engineering Laboratory",
    date: "June 2023 - July 2023",
    description: [
      "Analyzed and documented business processes to support software development planning.",
      "Identified suitable software development models aligned with user requirements.",
      "Authored comprehensive documentation detailing business processes from initial stages through to software development initiation.",
    ],
    image: "/aselab.jpg",
  },
];

const Experiences = () => {
  const cardRefs = useRef([]); // Gunakan array ref untuk setiap card

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.scrollFadeIn);
            observer.unobserve(entry.target); // Hentikan pengamatan setelah animasi
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

  return (
    <section id="experiences" className={styles.experiences}>
      <div className={styles.bubble1}></div>
      <div className={styles.bubble2}></div>
      <div className={styles.bubble3}></div>
      <div className={styles.bubble4}></div>
      <div className={styles.bubble5}></div>

      <h2 className={styles.title}>Experiences</h2>
      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`${styles.card} ${styles.hidden}`} // Tambahkan kelas hidden awalnya
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <div className={styles.header}>
              <h3 className={styles.jobTitle}>{exp.title}</h3>
              <img src={exp.image} alt={exp.title} className={styles.image} />
            </div>
            <p className={styles.company}>{exp.company}</p>
            <p className={styles.date}>
              <span className={styles.calendarIcon}>📅</span> {exp.date}
            </p>
            <ul className={styles.description}>
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
