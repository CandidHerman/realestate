'use client'

import React, { useState } from 'react';
import styles from './Accordion.module.css';

const faqData = [
  {
    question: "What makes this land valuable?",
    answer: "Its strategic location, accessibility, and development potential make it an excellent investment opportunity for residential, commercial, or mixed-use projects."
  },
  {
    question: "Why invest in land?",
    answer: "Land is a finite resource that typically appreciates over time, offering long-term value and flexibility for future development."
  },
  {
    question: "How do we verify ownership?",
    answer: "Every property undergoes thorough documentation and title verification to ensure a secure and transparent purchase process."
  },
  {
    question: "What development opportunities exist?",
    answer: "The land is suitable for residential estates, commercial facilities, agricultural projects, or custom developments depending on zoning regulations."
  },
  {
    question: "How do we measure investment potential?",
    answer: "We assess factors such as location growth, infrastructure development, market demand, and projected appreciation rates."
  },
  {
    question: "What makes this location attractive?",
    answer: "Its proximity to major roads, essential amenities, growing communities, and future infrastructure projects increases its desirability."
  }
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default as seen in image_6be058.png

  return (
    <section className={styles.container}>
      {/* Top Tagline */}
      <div className={styles.header}>
        <h2 className={styles.mainTitle}>
          <span className={styles.goldText}>We believe</span> great architecture starts with asking the right questions — 
          <strong> about people, space, and the way design shapes everyday life</strong>
        </h2>
      </div>

      <div className={styles.contentGrid}>
        {/* Left Column: Image and Caption */}
        <div className={styles.imageCol}>
          <div className={styles.imageWrapper}>
            <img 
              src="/land3.jpg" 
              alt="Modern Office Building" 
              className={styles.mainImage} 
            />
          </div>
          <div className={styles.caption}>
  <p className={styles.brandName}>Prime Land Estates</p>
  <p className={styles.projectName}>Available Residential Plots</p>
</div>
        </div>

        {/* Right Column: Accordion */}
        <div className={styles.accordionCol}>
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`${styles.accordionItem} ${openIndex === index ? styles.active : ''}`}
              onClick={() => setOpenIndex(index)}
            >
              <h3 className={styles.question}>
                {item.question}
              </h3>
              <div className={styles.answerWrapper}>
                <p className={styles.answer}>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}