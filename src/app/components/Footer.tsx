import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.container}>
      {/* Background Layer with Big Text */}
      <div className={styles.backgroundWrapper}>
        <h1 className={styles.giantLogo}>COMPANY</h1>
        
      </div>

      {/* Floating CTA Pills */}
      {/* <div className={styles.floatingActions}>
        <div className={`${styles.pill} ${styles.contactUs}`}>
          <span className={styles.dot}></span> Contact Us
        </div>
        <div className={`${styles.pill} ${styles.rentProperty}`}>
          <span className={styles.dot}></span> Rent Property
        </div>
        <div className={`${styles.pill} ${styles.sellProperty}`}>
          <span className={styles.dot}></span> Sell Property
        </div>
      </div> */}

      {/* Footer Component Overlay */}
      <footer className={styles.footerOverlay}>
        <div className={styles.topRow}>
          <nav className={styles.navLinks}>
            <a href="#">Home</a>
            <a href="#">About us</a>
            <a href="#">Work In Progress</a>
            <a href="#">Projects</a>
            <a href="#">Completed Projects</a>
          </nav>
          <nav className={styles.socialLinks}>
            <a href="#">Instagram</a>
            <a href="#">Linkedin</a>
            <a href="#">Facebook</a>
          </nav>
        </div>
        <hr className={styles.divider} />
        <div className={styles.bottomRow}>
          <p>Copyright HOFIN © 2024</p>
          <div className={styles.legalLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </footer>
    </div>
  );
}