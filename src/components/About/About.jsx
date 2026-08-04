import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './About.module.css';

export const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className={styles.heading}>{t('about.title', 'About Me')}</h2>
        
        <div className={`${styles.card} glass`}>
          <div className={styles.content}>
            <p>
              {t(
                'about.description',
                'I am a passionate Front-End Developer with strong expertise in modern React architectures, state management, and localized Web applications. I build fast, responsive, and visually clean interfaces adhering to strict accessibility standards and modern CSS techniques.'
              )}
            </p>
            
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>3+</span>
                <span className={styles.statLabel}>Years Coding</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>10+</span>
                <span className={styles.statLabel}>Projects Built</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>Responsive Design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};