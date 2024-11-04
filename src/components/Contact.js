"use client";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const [formStatus, setFormStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();

    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || !email || !message || !emailRegex.test(email)) {
      setFormStatus("error");
      setIsSubmitting(false);
      return;
    }

    // Data yang akan dikirim ke template EmailJS
    const templateParams = {
      from_name: name,
      reply_to: email,
      message: message,
    };

    // Mengirim email menggunakan EmailJS
    emailjs
      .send(
        "service_0clwpqc",
        "template_khsu7v3",
        templateParams,
        "V8c8Gx87NBpoe8N1o"
      )
      .then(
        (response) => {
          setFormStatus("success");
          setIsSubmitting(false);
          e.target.reset(); // Reset form fields
        },
        (error) => {
          setFormStatus("error");
          setIsSubmitting(false);
          console.error("FAILED...", error);
        }
      );
  };

  useEffect(() => {
    if (formStatus) {
      const timer = setTimeout(() => setFormStatus(""), 5000);
      return () => clearTimeout(timer); // Clean up
    }
  }, [formStatus]);

  useEffect(() => {
    if (formStatus === "success") {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  }, [formStatus]);

  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.title}>Contact Me</h2>
      {formStatus === "success" && (
        <p className={`${styles.successMessage} ${styles.formStatusActive}`}>
          Thank you! Your message has been sent.
        </p>
      )}
      {formStatus === "error" && (
        <p className={`${styles.errorMessage} ${styles.formStatusActive}`}>
          Please ensure all fields are filled out correctly.
        </p>
      )}
      <div className={styles.contactContainer}>
        <div className={styles.imageWrapper}>
          <Image
            src="/contactimg.jpg" // Pastikan gambar ada di dalam folder public
            alt="Contact"
            className={styles.contactImage}
            width={300} // Tambahkan lebar
            height={400} // Tambahkan tinggi
          />
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className={styles.input}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className={styles.input}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              className={styles.textarea}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
