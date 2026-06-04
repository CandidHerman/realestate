'use client'

import React, { useState } from 'react';
import styles from './HowItWorks.module.css';

const steps = [
  {
  id: '01',
  title: 'Explore Prime Locations',
  description: 'Discover carefully selected plots in fast-growing areas across Ghana with excellent development and investment potential.',
  image: '/land3.jpg'
},
{
  id: '02',
  title: 'Inspect & Verify',
  description: 'Visit the site and review all legal documents with confidence, knowing every property undergoes thorough verification.',
  image: '/land2.png'
},
{
  id: '03',
  title: 'Own With Confidence',
  description: 'Finalize your purchase and receive complete ownership documentation, securing a valuable asset for generations.',
  image: '/land1.png'
}
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1); // Default to Search Property (Step 02) as per image_6b679d.jpg

  return (
    <section className={styles.container}>
      <div className={styles.contentGrid}>
        
        {/* Left Column: Interactive Steps */}
        <div className={styles.stepsCol}>
          <h2 className={styles.mainTitle}>How It works?</h2>
          
          <div className={styles.stepsList}>
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className={`${styles.stepItem} ${activeStep === index ? styles.active : ''}`}
                onClick={() => setActiveStep(index)}
              >
                <span className={styles.stepNumber}>{step.id}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Dynamic Image Display */}
        <div className={styles.imageCol}>
          <div className={styles.imageWindow}>
            <img 
              src={steps[activeStep].image} 
              alt={steps[activeStep].title} 
              className={styles.displayImage} 
            />
          </div>
        </div>

      </div>
    </section>
  );
}