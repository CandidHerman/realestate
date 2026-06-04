'use client'

import React, { useState } from 'react';
import styles from './SearchFilter.module.css';

export default function SearchFilter() {
  const [activeTab, setActiveTab] = useState('rent');

  return (
    <div className={styles.filterContainer}>
      {/* Top Header Section */}
      <div className={styles.topRow}>
        <div className={styles.toggleTabs}>
          <button 
            className={`${styles.tabBtn} ${activeTab === 'rent' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('rent')}
          >
            Rent
          </button>
          <button 
            className={`${styles.tabBtn} ${activeTab === 'buy' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('buy')}
          >
            Buy
          </button>
        </div>
        
        <div className={styles.reviews}>
          <div className={styles.avatarGroup}>
            <img src="/avatar1.jpg" alt="User" className={styles.avatar} />
            <img src="/avatar2.jpg" alt="User" className={styles.avatar} />
            <img src="/avatar3.jpg" alt="User" className={styles.avatar} />
          </div>
          <span className={styles.ratingText}>
            <span className={styles.star}>★</span> 4.5 <span className={styles.reviewCount}>(10K Reviews)</span>
          </span>
        </div>
      </div>

      {/* Main Grid Inputs */}
      <div className={styles.filterGrid}>
        
        {/* Location Box */}
        {/* Location */}
<div className={styles.inputGroup}>
  <label className={styles.label}>Location</label>
  <div className={styles.inputWrapper}>
    <input
      type="text"
      placeholder="Enter Region or Town"
      className={styles.inputField}
    />
  </div>
</div>

{/* Land Type */}
<div className={styles.inputGroup}>
  <label className={styles.label}>Land Type</label>
  <div className={styles.selectWrapper}>
    <select className={styles.selectField} defaultValue="residential">
      <option value="residential">Residential Plot</option>
      <option value="commercial">Commercial Land</option>
      <option value="agricultural">Agricultural Land</option>
      <option value="mixed">Mixed-Use Land</option>
    </select>
  </div>
</div>

{/* Plot Size */}
<div className={styles.inputGroup}>
  <label className={styles.label}>Plot Size</label>
  <div className={styles.selectWrapper}>
    <select className={styles.selectField} defaultValue="1plot">
      <option value="1plot">1 Plot</option>
      <option value="2plots">2 Plots</option>
      <option value="5plots">5 Plots</option>
      <option value="10plots">10+ Plots</option>
    </select>
  </div>
</div>

{/* Budget Range */}
<div className={styles.inputGroup}>
  <label className={styles.label}>Budget Range</label>
  <div className={styles.selectWrapper}>
    <select className={styles.selectField} defaultValue="range1">
      <option value="range1">GH₵ 20,000 - 50,000</option>
      <option value="range2">GH₵ 50,000 - 100,000</option>
      <option value="range3">GH₵ 100,000 - 250,000</option>
      <option value="range4">GH₵ 250,000+</option>
    </select>
  </div>
</div>

        {/* Search Button */}
        <div className={styles.btnContainer}>
          <button className={styles.searchBtn}>
            Search <span className={styles.arrow}>↗</span>
          </button>
        </div>

      </div>
    </div>
  );
}