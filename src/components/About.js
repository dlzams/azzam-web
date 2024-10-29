import Image from "next/image";
import styles from "../styles/About.module.css"; // Pastikan path ini benar

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
              Saya adalah seorang mahasiswa jurusan Computer Science dengan
              minat besar dalam bidang analisis keamanan, machine learning, dan
              pengembangan web. Selain itu, saya memiliki pengalaman dalam deep
              learning dan analisis data, yang membantu saya untuk berkontribusi
              dalam proyek-proyek yang berorientasi pada data.
            </p>
          </div>

          {/* Skills Section */}
          <div className={styles["about-skills"]}>
            <h3 className={styles["skills-title"]}>Skills</h3>
            <ul className={styles["skills-list"]}>
              <li>Security Analysis</li>
              <li>Machine Learning, Deep Learning, AI</li>
              <li>Data Cleaning, Data Analysis, Data Visualization</li>
              <li>Front-End Web Development</li>
              <li>Python, C++, Golang, JavaScript</li>
              <li>Teamwork, Communication, Time Management</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
