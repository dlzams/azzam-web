import Image from "next/image";
import styles from "../styles/Certifications.module.css";
import Link from "next/link"; // Import Link dari Next.js

const certificationsData = [
  {
    imageUrl: "/certifications/certf-34.jpg",
    title: "Advanced Computer Vision with TensorFlow",
    description: [
      "Image Segmentation",
      "TensorFlow Object Detection API",
      "Class Activation Maps",
      "Model Interpretability",
    ],
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/QEK5C8FK6HCK",
  },
  {
    imageUrl: "/certifications/certf-28.jpg",
    title: "DeepLearning.AI TensorFlow Developer",
    description: [
      "Build natural language processing systems using TensorFlow.",
      "Handle real-world image data and explore strategies to prevent overfitting, including augmentation and dropout.",
      "Apply RNNs, GRUs, and LSTMs as train them using text repositories.",
      "Convolutional Neural Network",
      "Time Series, TensorFlow",
      "Transfer Learning, NLP, Tokenization, Computer Vision, etc",
    ],
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/GXAKEPSRSRNP",
  },
  {
    imageUrl: "/certifications/certf-6.jpg",
    title: "Learn Data Analysis with Python (ID-EN)",
    description: [
      "Understand basic data analysis concepts and the steps involved.",
      "Learn the basics of descriptive statistics and how to use them in data analysis.",
      "Use various data wrangling techniques to prepare clean, ready-to-analyze data.",
      "Apply exploratory data analysis (EDA) techniques to get insights from the data.",
      "Use effective data visualization methods to make it easier to share analysis results.",
      "Create interactive dashboards with Streamlit to present data analysis results in an engaging way.",
    ],
    credentialUrl: "https://www.dicoding.com/certificates/2VX3O9ORNZYQ",
  },
  {
    imageUrl: "/certifications/certf-24.jpg",
    title: "Natural Language Processing in TensorFlow",
    description: [
      "Build natural language processing systems using TensorFlow",
      "Apply RNNs, GRUs, and LSTMs in TensorFlow",
      "Process text, including tokenization and representing sentences as vectors",
      "Train LSTMs on existing text to create original poetry and more",
    ],
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/XE5AN5P5YMY7",
  },
];

const Certifications = () => {
  return (
    <section className={styles.certificationsSection}>
      <h2 className={styles.sectionTitle}>Certifications</h2>
      <div className={styles.certificationGrid}>
        {certificationsData.slice(0, 4).map(
          (
            cert,
            index // Hanya ambil 4 sertifikat
          ) => (
            <div className={styles.certificationCard} key={index}>
              <Image
                src={cert.imageUrl}
                alt={`${cert.title} certificate`}
                className={styles.certificateImage}
                width={300}
                height={200}
              />
              <h3 className={styles.certificateTitle}>{cert.title}</h3>
              <ul className={styles.certificateDescription}>
                {cert.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.certificateLink}
              >
                🔗 Credential
              </a>
            </div>
          )
        )}
      </div>
      <div className={styles.viewMoreContainer}>
        <Link href="/certifications" passHref>
          <button className={styles.viewMoreButton}>
            See All Certifications
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Certifications;
