import Image from "next/image";
import styles from "../styles/Certifications.module.css";
import Link from "next/link"; // Import Link dari Next.js

const certificationsData = [
  {
    imageUrl: "/certifications/certf-34.jpg",
    title: "Advanced Computer Vision with TensorFlow",
    description: [
      "Dasar-dasar supervised learning.",
      "Penerapan regresi dan klasifikasi dalam ML.",
      "Keterampilan yang didapat: Supervised learning.",
    ],
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/QEK5C8FK6HCK",
  },
  {
    imageUrl: "/certifications/certf-28.jpg",
    title: "DeepLearning.AI TensorFlow Developer",
    description: [
      "Dasar-dasar supervised learning.",
      "Penerapan regresi dan klasifikasi dalam ML.",
      "Keterampilan yang didapat: Supervised learning.",
    ],
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/GXAKEPSRSRNP",
  },
  {
    imageUrl: "/certifications/certf-6.jpg",
    title: "Learn Data Analysis with Python (ID-EN)",
    description: [
      "Mempelajari analisis data menggunakan Python.",
      "Penggunaan pustaka Python untuk analisis data.",
      "Keterampilan yang didapat: Data analysis dengan Python.",
    ],
    credentialUrl: "https://www.dicoding.com/certificates/2VX3O9ORNZYQ",
  },
  {
    imageUrl: "/certifications/certf-24.jpg",
    title: "Natural Language Processing in TensorFlow",
    description: [
      "Dasar-dasar supervised learning.",
      "Penerapan regresi dan klasifikasi dalam ML.",
      "Keterampilan yang didapat: Supervised learning.",
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
