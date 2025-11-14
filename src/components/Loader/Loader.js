import React, { useState, useEffect } from 'react';
import styles from './Loader.module.css';

function Loader({ isLoading }) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    if (!isLoading) {
      // Ensure it shows 100% before fading out
      setPercentage(100);
      return;
    }

    // Reset percentage when loading starts
    setPercentage(0);
    
    let currentPercentage = 0;
    const startTime = Date.now();
    const duration = 2000; // Target duration of 2 seconds for animation
    
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Use easing function for smoother animation (ease-out)
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      currentPercentage = Math.floor(easedProgress * 100);
      
      // Add some randomness to make it feel more natural
      // Slow down as we approach 100%
      if (currentPercentage < 90) {
        currentPercentage += Math.floor(Math.random() * 3);
      } else if (currentPercentage < 95) {
        currentPercentage += Math.floor(Math.random() * 2);
      }
      
      if (currentPercentage >= 100) {
        currentPercentage = 100;
        clearInterval(interval);
      }
      
      setPercentage(Math.min(currentPercentage, 100));
    }, 50); // Update every 50ms for smoother animation

    return () => clearInterval(interval);
  }, [isLoading]);

  return (
    <div className={`${styles.loaderContainer} ${!isLoading ? styles.fadeOut : ''}`}>
      <div className={styles.loaderContent}>
        <div className={styles.loaderText}>NOAH IFE</div>
        <div className={styles.percentage}>{percentage}%</div>
        <div className={styles.progressBarContainer}>
          <div 
            className={styles.progressBar} 
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Loader;

