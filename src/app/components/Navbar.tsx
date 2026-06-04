import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="1.5" y1="6.5" x2="1.51" y2="6.5"></line></svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a1 1 0 0 0 .23-1.01A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/></svg>
);

const LoginIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M10 21v-2H5V5h5V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5zm11-9l-4-4v3H9v2h8v3l4-4z"/>
  </svg>
);

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      {/* Hidden checkbox to drive the pure CSS menu toggle */}
      <input type="checkbox" id="menuToggle" className={styles.menuCheckbox} />
      
      {/* Hamburger Label Icon */}
      <label htmlFor="menuToggle" className={styles.hamburger}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </label>

      {/* Center Logo (Stays visible or repositions nicely) */}
      <div className={styles.logoContainer}>
        <Link href="/" className={styles.logo}>
          Logo
        </Link>
      </div>

      {/* Main Collapsible Content Wrapper */}
      <div className={styles.navContent}>
        {/* Navigation Pills */}
        <div className={styles.navGroup}>
          <Link href="/" className={`${styles.navLink} ${styles.active}`}>
            Home
          </Link>
          <Link href="/agents" className={styles.navLink}>
            About
          </Link>
          <Link href="/work-in-progress" className={styles.navLink}>
            Work In Progress
          </Link>
          <Link href="/collection" className={styles.navLink}>
            Projects
          </Link>
          <Link href="/about" className={styles.navLink}>
            Completed Projects
          </Link>
        </div>

        {/* Action Elements (Socials + Phone) */}
        <div className={styles.actionsGroup}>
          

          
        <Link href="/login" className={styles.signInLink}>
  <svg viewBox="0 0 24 24" fill="currentColor" className={styles.signInIcon}>
    <path d="M10 21v-2H5V5h5V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5zm11-9l-4-4v3H9v2h8v3l4-4z"/>
  </svg>
  <span>Sign In</span>
</Link>

{/* Contact Us Pill */}
<Link href="/contact" className={styles.contactButton}>
  <span className={styles.iconCircle}>
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-8.29-1.42 1.42L16.86 11H5v2z"/>
    </svg>
  </span>
  <span className={styles.buttonText}>Contact Us</span>
</Link>
        </div>
      </div>
    </nav>
  );
}