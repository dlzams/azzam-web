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
      Junior Endpoint Security Engineer — currently onsite at BNI Pejompongan,
      Central Jakarta. I am a fresh graduate in Informatics from Telkom University
      (May 2025) with a strong focus on cybersecurity, networking, and modern
      security operations & solutions.
    </p>
    <p>
      Previously at <strong>Virtus Technology Indonesia</strong>, I gained
      technical and presales exposure with leading solutions such as Palo Alto
      Networks, and developed familiarity with security platforms including
      CrowdStrike and Sophos — allowing me to understand their unique strengths,
      use cases, and differences in enterprise security environments.
    </p>
    <p>
      I also completed an internship at <strong>Telkomsigma</strong> (Telkom
      Indonesia Group) as a Security Analyst in their SOC, where I worked
      hands-on with SIEM, IBM QRadar, Cybereason, Stellar, and other
      platforms for real-time monitoring, threat detection, and reporting for
      multinational clients.
    </p>
    <p>
      My expertise spans <strong>endpoint security (EDR/XDR)</strong>,{" "}
      <strong>network architecture</strong>, and{" "}
      <strong>security solutions</strong>. I have a strong understanding of routers,
      switches, network devices, OSI 7 Layers, NAT, LAN/WAN, VPN, SD-WAN,
      storage solutions (NAS, DAS), and various network topologies — ensuring a
      comprehensive understanding from design to defense.
    </p>
  </>
);

const fullDescription = (
  <>
    {shortDescription}
    <p>
      In late 2023, I secured national project funding of 13 million Rupiah
      (≈$850) in the Innovillage Competition, ranking in the top 163. My project
      developed an IoT-based smart irrigation system integrating time, humidity,
      and temperature data to optimize water usage — an experience that honed my
      skills in IoT, automation, and system integration.
    </p>
    <p>
      In 2024, I was selected for the <strong>Bangkit Academy</strong> by Google,
      Tokopedia, Gojek, and Traveloka, specializing in Machine Learning. I led
      the AI model development for <em>Sereluna</em>, a mobile app for mental
      health support, applying NLP to analyze user diaries and deliver
      data-driven insights.
    </p>
    <p>
      Throughout university, I actively contributed to Telkom University&apos;s{" "}
      <strong>Informatics Laboratory</strong> as a practicum assistant,
      delivering sessions in Data Structures for 90+ students. I was also a
      member of the <strong>Forensic & Security Laboratory</strong>, where I
      sharpened my skills in Linux, ethical hacking, and penetration testing
      through Capture The Flag (CTF) exercises and real-world simulations.
    </p>
    <p>
      These diverse experiences — from SOC operations and enterprise security
      solutions, to AI-driven applications and academic leadership — have
      equipped me with both the <strong>technical depth</strong> and the{" "}
      <strong>problem-solving mindset</strong> needed to grow in cybersecurity,
      networking, and advanced IT solutions.
    </p>
    <p>
      Thanks for scrolling this far — I look forward to new opportunities to
      contribute, learn, and secure the enterprise infrastructure 🙌.
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
              "Threat Detection & Incident Response (SIEM Qradar, SOC Operations)",
              "EDR/XDR (Cortex XDR, CrowdStrike, Cybereason), DLP (Forcepoint), NAC Aruba",
              "Routing, Switching, OSI 7 Layers, Network Topologies & Devices",
              "Machine Learning, Deep Learning, Data Analysis & Visualization",
              "Teamwork, Communication, Time Management",
              "Football ⚽ & Running 🏃",
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
