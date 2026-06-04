import React from 'react';
import styles from './ExperienceSection.module.css';

export default function ExperienceSection() {
  return (
    <section className={styles.container}>
      <div className={styles.mainGrid}>
        
        {/* Left Content Column */}
        <div className={styles.contentCol}>
          <h2 className={styles.heading}>
            Secure Land Investments for a Better Future
          </h2>
          
          <p className={styles.description}>
            We help individuals and businesses acquire verified land, develop valuable properties, and build lasting investments with confidence.
          </p>

          {/* Outline Pills */}
          <div className={styles.pillGroup}>
            <span className={styles.pill}>Verified Land</span>
            <span className={styles.pill}>Property Development</span>
            <span className={styles.pill}>Investment Growth</span>
          </div>

          {/* Stats Counter Section */}
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <h3 className={styles.statNumber}>500+</h3>
              <p className={styles.statLabel}>plots secured</p>
            </div>
            <div className={styles.statItem}>
              <h3 className={styles.statNumber}>98%</h3>
              <p className={styles.statLabel}>client satisfaction</p>
            </div>
            <div className={styles.statItem}>
              <h3 className={styles.statNumber}>10+</h3>
              <p className={styles.statLabel}>years of experience</p>
            </div>
          </div>
        </div>

        {/* Right Media Column */}
        <div className={styles.imageWrapper}>
          <img 
            src="/land2.png" 
            alt="Land Development Project" 
            className={styles.mainImage} 
          />

          {/* Floating Top Right Button */}
          <button className={styles.floatingBtn}>
            Explore Properties
          </button>
          
          {/* Minimalist circular badge (top-left) */}
          <div className={styles.cornerIcon}>
            {/* <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                d="M12 3v18M3 12h18M12 3a9 9 0 019 9M12 21a9 9 0 01-9-9"
                strokeLinecap="round"
              />
            </svg> */}
          </div>
        </div>

      </div>
    </section>
  );
}