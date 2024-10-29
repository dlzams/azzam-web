// src/components/LastUpdate.js
"use client"; // Pastikan ini adalah komponen client

import styles from "../styles/LastUpdate.module.css";

const LastUpdate = () => {
  // Tulis waktu build secara manual di sini
  const buildDate = "31 October 2024, 14:15:22"; // Ubah waktu ini saat melakukan update

  return (
    <div className={styles.lastUpdate}>Last update: {buildDate} GMT+7</div>
  );
};

export default LastUpdate;
