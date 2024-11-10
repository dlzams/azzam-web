"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import styles from "./aquaflow.module.css";
import ErrorBoundary from "../../components/ErrorBoundary";

const AquaFlow = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const images = [
    "/aquaflow/aquaflow1.jpg",
    "/aquaflow/aquaflow2.jpg",
    "/aquaflow/aquaflow3.jpg",
    "/aquaflow/aquaflow4.jpg",
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
        <p className={styles.loadingText}>Loading</p>
      </div>
    );
  }

  return (
    <div className={styles.content}>
      <Link href="/" passHref>
        <button className={styles.backButton}>Back</button>
      </Link>
      <h1 className={styles.title}>AquaFlow Innovillage IoT-Based</h1>
      {/* Slider */}
      <div className={styles.slider}>
        <button onClick={prevSlide} className={styles.slideButton}>
          ❮
        </button>
        <Image
          src={images[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          width={800}
          height={450}
          className={styles.slideImage}
        />
        <button onClick={nextSlide} className={styles.slideButton}>
          ❯
        </button>
      </div>
      {/* Dots Indicator */}
      <div className={styles.dotsContainer}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              currentSlide === index ? styles.activeDot : ""
            }`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
      <div className={styles.divider}></div> {/* Garis di bawah dots */}
      {/* Section: What is Innovillage */}
      <section className={styles.section}>
        <h2>What is Innovillage?</h2>
        <p>
          Innovillage 2023 is a sociopreneurship program initiated by Telkom
          Indonesia and Telkom University to empower students in creating
          innovative, digital-based solutions to address social issues, aligning
          with the Sustainable Development Goals (SDGs). This program attracted
          2,385 students from various universities across Indonesia, submitting
          a total of 818 project proposals. Among them, 163 projects received
          funding for implementation.
        </p>
      </section>
      <div className={styles.sectionDivider}></div> {/* Divider for sections */}
      {/* Section: Location */}
      <section className={styles.section}>
        <h2>Location</h2>
        <div className={styles.imageContainer}>
          <Image
            src="/aquaflow/location-map1.jpg"
            alt="Cihideung Village Location"
            width={400} // Tentukan width untuk optimasi Next.js
            height={300} // Tentukan height untuk optimasi Next.js
            className={styles.image}
          />
          <Image
            src="/aquaflow/location-map2.jpg"
            alt="Cihideung Village Survey"
            width={400} // Sama dengan gambar pertama
            height={300} // Sama dengan gambar pertama
            className={styles.image}
          />
        </div>
        <p>
          Our team conducted a survey in <strong>Cihideung Village</strong>,
          located in Parongpong, West Bandung, Indonesia. This area relies
          heavily on the Irung-irung spring as the main water source, essential
          for agricultural irrigation.
        </p>
      </section>
      <div className={styles.sectionDivider}></div>
      <section className={styles.section}>
        <h2>Problem Identification</h2>
        <div className={styles.problemImages}>
          <div>
            <Image
              src="/aquaflow/news1.jpg"
              alt="News Report 1"
              width={280}
              height={250}
            />
            <p>
              The article highlights the Irung-irung spring in Cihideung
              Village, West Bandung Regency, which serves as the primary water
              source for the local community. This spring is crucial for daily
              needs, including irrigation for agricultural land. However, the
              Irung-irung spring has limited water capacity, making efficient
              management essential to meet the community&apos;s needs,
              especially for irrigation during the dry season. To honor this
              vital resource, the village holds a traditional ceremony known as
              &quot;Irung-irung,&quot; emphasizing the spring&apos;s
              significance to the community&apos;s livelihood. This tradition
              reflects the community&apos;s respect for the water source and
              their hope that it remains sustainable, capable of providing
              enough water to support their needs in the future.
            </p>
            <p>
              <a
                href="https://kumparan.com/bandungkiwari/foto-upacara-irung-irung-tradisi-menjaga-mata-air-di-bandung-barat-1s0W7U4No2u/full"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source 1
              </a>
            </p>
          </div>
          <div>
            <Image
              src="/aquaflow/news2.jpg"
              alt="News Report 2"
              width={280}
              height={250}
            />
            <p>
              The article from TelusuRI discusses the significance of the
              Irung-irung spring in Cihideung Village, which serves as the
              primary water source for local flower farmers. This spring is
              essential for supporting the agricultural activities of the
              village, especially for flower cultivation, which relies on a
              steady water supply. The community places a high value on
              maintaining and protecting this water source, as it directly
              impacts their livelihoods and sustains their farming practices.
            </p>
            <p>
              <a
                href="https://telusuri.id/menjaga-irung-irung-sumber-air-yang-menghidupi-warga-cihideung/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source 2
              </a>
            </p>
          </div>
          <section className={styles.interviewSection}>
            <div className={styles.interviewContent}>
              <Image
                src="/aquaflow/farmer-interview.jpg"
                alt="Interview with Farmer Pak Budi"
                width={250}
                height={300}
                className={styles.interviewImage}
              />
              <blockquote className={styles.quote}>
                <p>
                  &quot;The manual irrigation system has long consumed a lot of
                  time and energy that could be used for other, more productive
                  activities. Price fluctuations in cut flowers add financial
                  challenges for farmers. Improving efficiency through automatic
                  irrigation technology can help reduce the negative impacts of
                  market price instability...&quot;
                </p>
                <cite>
                  — Summary of an interview with Pak Budi, a rose farmer and
                  greenhouse owner.
                </cite>
              </blockquote>
            </div>
          </section>
        </div>
      </section>
      <div className={styles.sectionDivider}></div>
      {/* Section: Sustainable Development Goals */}
      <section className={styles.section}>
        <h2>Sustainable Development Goals (SDGs)</h2>
        <div>
          <Image src="/aquaflow/sdgs.jpg" alt="SDG" width={400} height={250} />
          <p>
            <strong>Sustainable Development Goals from United Nations</strong>
          </p>
        </div>
        <p className={styles.description}>
          The Sustainable Development Goals (SDGs) were established by the
          United Nations (UN) as a universal call to action aimed at ending
          poverty, protecting the planet, and ensuring prosperity for all by
          2030. These 17 goals are designed to address a wide range of global
          challenges, including economic inequality, climate change, peace, and
          justice, by promoting sustainable solutions that balance social,
          economic, and environmental needs.
        </p>
        <div className={styles.sdgsContainer}>
          <div className={styles.sdg}>
            <Image
              src="/aquaflow/sdgs8.jpg"
              alt="SDG 8"
              width={100}
              height={100}
            />
            <p>
              <strong>SDG 8:</strong> Decent Work and Economic Growth
            </p>
          </div>
          <div className={styles.sdg}>
            <Image
              src="/aquaflow/sdgs9.jpg"
              alt="SDG 9"
              width={100}
              height={100}
            />
            <p>
              <strong>SDG 9:</strong> Industry, Innovation, and Infrastructure
            </p>
          </div>
          <div className={styles.sdg}>
            <Image
              src="/aquaflow/sdgs12.jpg"
              alt="SDG 12"
              width={100}
              height={100}
            />
            <p>
              <strong>SDG 12:</strong> Responsible Consumption and Production
            </p>
          </div>
        </div>
        <p className={styles.sdgDescription}>
          This IoT project aligns with SDG 8, 9, and 12 by improving
          agricultural efficiency and sustainability in Cihideung Village. SDG 8
          is supported by enhancing farmers&apos; economic opportunities through
          more efficient irrigation practices, reducing labor and saving costs.
          SDG 9 is addressed by integrating innovative technology in the
          agricultural process, promoting the adoption of sustainable
          infrastructure. Lastly, SDG 12 is achieved by optimizing resource use,
          ensuring that water—a critical and limited resource—is managed
          responsibly and efficiently.
        </p>
      </section>
      <div className={styles.sectionDivider}></div>
      {/* Section: System Components */}
      <section className={styles.section}>
        <h2>System Components</h2>

        <div className={styles.componentsContainer}>
          {/* ESP32 Microcontroller */}
          <div className={styles.componentItem}>
            <Image
              src="/aquaflow/esp32.jpg"
              alt="ESP32"
              width={100}
              height={100}
            />
            <p>
              <strong>ESP32 Microcontroller</strong> – Functions as the primary
              microcontroller to control and manage the system. It connects
              sensors and modules to the Blynk app via Wi-Fi, enabling remote
              monitoring and control.
            </p>
          </div>

          {/* DHT22 Sensor */}
          <div className={styles.componentItem}>
            <Image
              src="/aquaflow/dht22.jpg"
              alt="DHT22 Sensor"
              width={100}
              height={100}
            />
            <p>
              <strong>DHT22 Sensor</strong> – Measures air temperature and
              humidity around the plants, providing data that helps maintain the
              ideal conditions for rose growth.
            </p>
          </div>

          {/* Relay 4 Module */}
          <div className={styles.componentItem}>
            <Image
              src="/aquaflow/relay4module.jpg"
              alt="Relay 4 Module"
              width={100}
              height={100}
            />
            <p>
              <strong>Relay 4 Module</strong> – Controls electrical power to
              various components, such as the water pump and solenoid valve.
              Activates or deactivates components based on signals from ESP32
              and sensor data.
            </p>
          </div>

          {/* Arduino Uno R3 */}
          <div className={styles.componentItem}>
            <Image
              src="/aquaflow/arduino_uno_r3.jpg"
              alt="Arduino Uno R3"
              width={100}
              height={100}
            />
            <p>
              <strong>Arduino Uno R3</strong> – A supporting microcontroller
              used for additional functions or as a backup to the ESP32,
              facilitating integration with additional sensors or modules if
              required.
            </p>
          </div>

          {/* Soil Moisture Sensor */}
          <div className={styles.componentItem}>
            <Image
              src="/aquaflow/soil_moisture_sensor.jpg"
              alt="Soil Moisture Sensor"
              width={100}
              height={100}
            />
            <p>
              <strong>Soil Moisture Sensor</strong> – Measures soil moisture
              levels to ensure that plants receive the appropriate amount of
              water. The data is used to determine when the pump should activate
              or deactivate.
            </p>
          </div>

          {/* AC-DC Adaptor */}
          <div className={styles.componentItem}>
            <Image
              src="/aquaflow/ac_dc_adaptor.jpg"
              alt="AC-DC Adaptor"
              width={100}
              height={100}
            />
            <p>
              <strong>AC-DC Adaptor</strong> – Converts AC power from the mains
              to DC to operate the system components, ensuring a stable power
              supply for continuous operation.
            </p>
          </div>

          {/* Acrylic Container */}
          <div className={styles.componentItem}>
            <Image
              src="/aquaflow/acrylic_container.jpg"
              alt="Acrylic Container"
              width={100}
              height={100}
            />
            <p>
              <strong>Acrylic Container</strong> – Protects electronic
              components, such as the ESP32 and sensors, from dust and water.
              Ensures the safety and durability of the system when deployed in
              the field.
            </p>
          </div>
        </div>
      </section>
      <div className={styles.sectionDivider}></div>
      {/* Section: How It Works */}
      <section className={styles.section}>
        <h2>How It Works</h2>

        {/* Wrapper for images in a row, positioned left */}
        <div className={styles.imageRow}>
          <Image
            src="/aquaflow/system-diagram1.jpg"
            alt="System Diagram 1"
            width={400} /* Ukuran disesuaikan */
            height={200}
            className={styles.imgdesign}
          />
          <Image
            src="/aquaflow/system-diagram2.jpg"
            alt="System Diagram 2"
            width={400} /* Ukuran disesuaikan */
            height={200}
            className={styles.imgdesign}
          />
        </div>

        {/* Explanation Section */}
        <div className={styles.systemExplanation}>
          <p>
            <strong>Real-Time Monitoring:</strong>
            The AquaFlow system is equipped with sensors like the DHT22 for
            temperature and humidity, and soil moisture sensors to monitor the
            environmental and soil conditions around the crops. These sensors
            continuously collect data on critical parameters such as soil
            moisture levels and ambient conditions, which are essential for
            optimal irrigation. This data is then transmitted to the ESP32
            microcontroller, which acts as the main controller for the system.
            The ESP32 ensures that all relevant information is processed and
            recorded in real time, allowing the system to adapt to changing
            conditions effectively.
          </p>
          <p>
            <strong>Data Processing:</strong>
            Once the ESP32 receives data from the sensors, it processes this
            information to make real-time decisions. The controller assesses the
            current soil moisture and weather conditions to determine whether
            the plants require watering. If the soil moisture level falls below
            a predefined threshold, the ESP32 prepares the system for irrigation
            by activating the relay connected to the water pump. This
            data-driven decision-making process ensures water efficiency by
            delivering irrigation only when necessary, conserving resources, and
            optimizing plant growth.
          </p>
          <p>
            <strong>Automatic Irrigation:</strong>
            After the ESP32 has determined that irrigation is required, it
            automatically activates the water pump via a relay module. The pump
            draws water from a storage tank and delivers it to the crops through
            connected pipes or a drip irrigation system. Additionally, a
            solenoid valve is integrated into the system to regulate the flow of
            water precisely. This valve opens or closes based on commands from
            the ESP32, allowing water to be supplied only to the designated
            areas needing irrigation. The automated irrigation process minimizes
            human intervention, reduces labor costs, and ensures consistent
            water delivery to the crops.
          </p>
          <p>
            <strong>Remote Access:</strong>
            The AquaFlow system leverages the Blynk application, allowing
            farmers to monitor and control the irrigation system remotely via a
            smartphone or other internet-enabled devices. The ESP32
            microcontroller connects to the Blynk server over Wi-Fi, enabling
            real-time updates and control access for the user. Through the Blynk
            app, farmers can view the current status of the sensors (e.g.,
            temperature, humidity, and soil moisture levels) and manually
            override the system if needed, such as starting or stopping the pump
            directly from the app. This remote accessibility enhances
            convenience and provides farmers with the flexibility to manage
            irrigation schedules without needing to be on-site, ultimately
            improving productivity and efficiency.
          </p>
        </div>
      </section>
      <div className={styles.sectionDivider}></div>
      {/* Section: Project Videos */}
      <section className={styles.section}>
        <h2>Project Videos</h2>
        <div className={styles.videoContainerGrid}>
          <div>
            <iframe
              src="https://www.youtube.com/embed/F609IbolNUs"
              title="Video 1"
              className={styles.video}
            ></iframe>
            <p>Introduction to AquaFlow Project</p>
          </div>
          <div>
            <iframe
              src="https://www.youtube.com/embed/wLU0lgGgkfw"
              title="Video 2"
              className={styles.video}
            ></iframe>
            <p>Installation and Setup of AquaFlow System</p>
          </div>
          <div>
            <iframe
              src="https://www.youtube.com/embed/sKaDeGo1CUE"
              title="Video 3"
              className={styles.video}
            ></iframe>
            <p>System Testing and Operation</p>
          </div>
          <div>
            <iframe
              src="https://www.youtube.com/embed/zbjOCfy0FqA"
              title="Video 4"
              className={styles.video}
            ></iframe>
            <p>Final Implementation and Feedback</p>
          </div>
        </div>
      </section>
      <div className={styles.sectionDivider}></div>
      {/* Section: Certification */}
      <section className={styles.section}>
        <h2>Certification</h2>
        <Image
          src="/aquaflow/certificate.jpg" // Replace with actual path
          alt="Certification"
          width={600}
          height={400}
          className={styles.imgcertf}
        />
      </section>
    </div>
  );
};

export default function AquaFlowPage() {
  return (
    <ErrorBoundary>
      <AquaFlow />
    </ErrorBoundary>
  );
}
