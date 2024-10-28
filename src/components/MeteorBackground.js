// src/components/MeteorBackground.js
import React from "react";
import styles from "../styles/MeteorBackground.module.css";

const MeteorBackground = () => {
  return (
    <div className={styles.background}>
      <div className={styles.meteor}></div>
      <div className={styles.meteor}></div>
      <div className={styles.meteor}></div>
      <div className={styles.meteor}></div>
      <div className={styles.meteor}></div>
    </div>
  );
};

export default MeteorBackground;
