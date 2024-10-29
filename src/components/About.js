import Image from "next/image";
import styles from "../styles/About.module.css";

const About = () => {
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
          <div>
            <h2 className={styles["about-title"]}>About Me</h2>
            <p className={styles["about-description"]}>
              I am a Computer Science undergraduate at Telkom University,
              passionate about data science, artificial intelligence, and
              cybersecurity. My journey has taken me through various exciting
              projects, from analyzing weather patterns to predicting student
              success with machine learning. I’m particularly drawn to
              intelligent systems and am eager to contribute innovative
              solutions in this field.
            </p>
            <p className={styles["about-description"]}>
              Recently, I gained valuable experience as a cybersecurity intern
              at Telkomsigma, a subsidiary of Telkom Indonesia, where I
              monitored network traffic and managed cybersecurity for
              multinational clients. I used tools like SIEM, Cybereason, and
              Qradar to detect network anomalies, create detailed incident
              reports, and build attack flow diagrams to help clients understand
              potential security risks.
            </p>
            <p className={styles["about-description"]}>
              In late 2023, I had the honor of securing project funding of 13
              million Rupiah for an Internet of Things (IoT) project, ranking in
              the top 163 nationally in the Innovillage Competition. This
              project involved designing an automated irrigation system that
              utilized time, humidity, and temperature data to optimize water
              usage. Beyond IoT, I have significant experience in machine
              learning, deep learning, and artificial intelligence, with a
              strong foundation in data analysis, NLP, and computer vision.
            </p>
            <p className={styles["about-description"]}>
              I also recently completed the Bangkit Academy program, led by
              Google, Tokopedia, Gojek, and Traveloka. This immersive experience
              introduced me to advanced machine learning topics and practical
              model deployment. I led the development of an AI model for
              'Sereluna', a mental health mobile app, using natural language
              processing to analyze user diary entries for mental health
              insights.
            </p>
            <p className={styles["about-description"]}>
              Alongside my studies, I have actively contributed to Telkom
              University’s Informatics Laboratory as an assistant, teaching data
              structures and supporting practicum sessions for nearly 90
              students. Additionally, my involvement in the Forensic and
              Security Laboratory has strengthened my knowledge in
              cybersecurity, where I honed my skills in Linux, network security,
              and web hacking through practical challenges like Capture the Flag
              (CTF) exercises.
            </p>
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
