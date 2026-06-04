import React from 'react';
import Image from 'next/image';
import styles from './HeroHeading.module.css';

export default function HeroHeading() {
  return (
    <div className={styles.heroContainer}>
      
      {/* Top Line: Badge + Text */}
      <h1 className={styles.mainHeading}>
        <div className={styles.inlineRow}>
          {/* Green Metric Badge */}
          <span className={styles.badge}>
            <div className={styles.avatarGroup}>
              <div className={styles.avatar}>
                <Image src="/avatar1.jpg" alt="Client 1" width={28} height={28} />
              </div>
              <div className={styles.avatar}>
                <Image src="/avatar2.jpg" alt="Client 2" width={28} height={28} />
              </div>
              <div className={styles.avatar}>
                <Image src="/avatar3.jpg" alt="Client 3" width={28} height={28} />
              </div>
            </div>
            <div className={styles.badgeText}>
              <strong className={styles.metricNumber}>578M +</strong>
              <span className={styles.metricLabel}>Clients Active</span>
            </div>
          </span>
          
          <span className={styles.headingText}>INVEST IN LAND.</span>
        </div>

        {/* Bottom Line */}
        <div className={styles.bottomLine}>
          INVEST IN <span className={styles.accentText}>TOMORROW.</span>
        </div>
      </h1>

      {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, reprehenderit.</p> */}

    </div>
  );
}