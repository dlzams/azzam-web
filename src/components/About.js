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
      I am a Cyber Security Analyst at Temika Cyber, focused on Blue Team operations, security monitoring, threat detection, and incident investigation. 
      My work involves analyzing security alerts, investigating suspicious activities, correlating events across security telemetry, 
      and supporting incident response to help organizations identify and respond to potential threats.
    </p>
    <p>
      Previously, I worked as an Endpoint Security Engineer supporting PT Bank Negara Indonesia (Persero), Tbk., 
      where I managed and maintained enterprise endpoint security solutions across Windows, macOS, and Linux environments. 
      I gained hands-on experience with EDR, DLP, and NAC technologies, endpoint and server hardening, security policy enforcement, troubleshooting, and remediation.
      This experience gave me a strong understanding of how defensive security is implemented and operated in a large enterprise environment.ments.
    </p>
    <p>
      My technical foundation extends beyond endpoint security. I have a strong understanding of networking and security fundamentals, including TCP/IP, OSI layers, 
      routing, switching, NAT, VPN, LAN/WAN, network architecture, and common attack patterns. I have also worked with SIEM platforms such as IBM QRadar, 
      endpoint security platforms including CrowdStrike, Cortex XDR, and Cybereason, as well as threat intelligence and threat hunting activities
    </p>
  </>
);

const fullDescription = (
  <>
    {shortDescription}
    <p>
     Earlier in my career, I interned as a Security Analyst in Telkomsigma&apos;s SOC, gaining experience in real-time security monitoring, threat detection, 
     investigation, and reporting. I also gained exposure to enterprise security solutions and presales activities at Virtus Technology Indonesia, 
     working with technologies from vendors such as Palo Alto Networks.
    </p>
    <p>
      Beyond professional experience, I have explored cybersecurity through the Forensic & Security Laboratory at Telkom University, 
      where I developed practical skills in Linux, ethical hacking, penetration testing, and Capture The Flag (CTF) challenges. 
      I graduated from Telkom University with a degree in Informatics in 2025.
    </p>
    <p>
      I am particularly interested in defensive cybersecurity, Security Operations, Threat Detection, Incident Response, 
      Threat Hunting, and Security Engineering. I continuously seek opportunities to deepen my technical expertise, understand how attacks work, 
      and build stronger defensive capabilities.
    </p>
    <p>
     Thanks for stopping by - always learning, always investigating, and always looking for better ways to defend. 🛡️
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
              "Threat Detection, Incident Response, Security Monitoring, SOC Operations, Threat Hunting, MITRE ATT&CK",
              "SIEM QRadar Wazuh, Security Alert Analysis, Event Correlation, Threat Intelligence",
              "EDR/XDR (CrowdStrike, Cortex XDR), DLP (Forcepoint, Trellix), NAC-Aruba ClearPass",
              "Endpoint & Server Hardening, Security Policy Enforcement, Linux, Windows, macOS",
              "Teamwork, Communication, Problem Solving, Time Management",
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
