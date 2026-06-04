'use client'

import React, { useState } from 'react';
import styles from './PropertyListings.module.css';

// Mock Data matching the layout in image_6c58b6.jpg
const properties = [
  {
    id: 1,
    title: "Green Valley Estates",
    location: "Prampram, Greater Accra",
    size: "100 Plots",
    status: "Available",
    zoning: "Residential",
    mainImage: "/land1.png",
    thumbnails: ["/land3.jpg", "/land2.png", "/land1.png", "/land3.jpg"]
  },
  {
    id: 2,
    title: "Lakeside Development Site",
    location: "Ashaley Botwe, Accra",
    size: "75 Plots",
    status: "Selling Fast",
    zoning: "Mixed Use",
    mainImage: "/land2.png",
    thumbnails: ["/land3.jpg", "/land2.png", "/land1.png", "/land3.jpg"]
  },
  {
    id: 3,
    title: "Harmony Hills Estate",
    location: "Kasoa, Central Region",
    size: "150 Plots",
    status: "New Release",
    zoning: "Residential",
    mainImage: "/land3.jpg",
    thumbnails: ["/land3.jpg", "/land2.png", "/land1.png", "/land3.jpg"]
  }
  ,
  {
    id: 4,
    title: "Harmony Hills Estate",
    location: "Kasoa, Central Region",
    size: "150 Plots",
    status: "New Release",
    zoning: "Residential",
    mainImage: "/land3.jpg",
    thumbnails: ["/land3.jpg", "/land2.png", "/land1.png", "/land3.jpg"]
  }
];

export default function PropertyListings() {
  const [activeCategory, setActiveCategory] = useState('Home');

  return (
    <section className={styles.sectionContainer}>
      
      {/* Header Info */}
      <div className={styles.header}>
        <span className={styles.topBadge}>✦ Featured Opportunities</span>

        <h2 className={styles.title}>
        Explore Premium Land Investment Opportunities
        </h2>

        <p className={styles.subtitle}>
        Discover verified land developments in strategic locations designed for future growth, security, and long-term value.
        </p>
      </div>

      {/* Categories Filter Bar */}
      {/* <div className={styles.filterBar}>
        {['Home', 'Vila', 'Apartment'].map((category) => (
          <button
            key={category}
            className={`${styles.filterTab} ${activeCategory === category ? styles.activeTab : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div> */}

      {/* Main 3-Column Card Grid */}
      <div className={styles.cardsGrid}>
        {properties.map((property) => (
          <div key={property.id} className={styles.card}>
            
            {/* Image Preview Container */}
            <div className={styles.imageContainer}>
              <img src={property.mainImage} alt={property.title} className={styles.mainCardImg} />
              <button className={styles.arrowOverlayBtn}>↗</button>
              
              {/* Overlapping Carousel Thumbnails */}
              <div className={styles.thumbnailTrack}>
                {property.thumbnails.map((thumb, index) => (
                  <img key={index} src={thumb} alt="Preview" className={styles.thumbImg} />
                ))}
              </div>
            </div>

            {/* Meta Text details */}
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{property.title}</h3>
              <p className={styles.cardLocation}>
                <span className={styles.locIcon}>📍</span> {property.location}
              </p>
              
              <div className={styles.featuresLine}>
                <span>📍 {property.zoning}</span>
                <span>📊 {property.size}</span>
                <span>✅ {property.status}</span>
                </div>
            </div>

          </div>
        ))}
      </div>

      {/* Footer Navigation Bar */}
      <div className={styles.footerControls}>
        <button className={styles.exploreBtn}>Explore All</button>
        <div className={styles.arrowGroup}>
          <button className={styles.navArrow}>←</button>
          <button className={styles.navArrow}>→</button>
        </div>
      </div>

    </section>
  );
}