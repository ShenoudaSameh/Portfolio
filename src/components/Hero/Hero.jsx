import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import styles from './Hero.module.css';

export const Hero = () => {
  const { t } = useTranslation();

  const handleCvDownload = (e) => {
    e.preventDefault();
    alert(t('alerts.cvUnderConstruction'));
  };

  return (
    <section id="home" className={styles.heroSection}>
      <div className="container">
        <div className={styles.heroGrid}>
          <div className={styles.textContent}>
            <span className={styles.greeting}>{t('hero.greeting')}</span>
            <h1 className={styles.name}>Shenouda Sameh</h1>
            <h2 className={styles.title}>{t('hero.title')}</h2>
            <p className={styles.description}>{t('hero.description')}</p>

            <div className={styles.actions}>
              <a href="#contact" className="btn btn-primary">
                {t('hero.getInTouch')}
              </a>
              <button 
                onClick={handleCvDownload} 
                className="btn btn-outline"
                type="button"
              >
                {t('hero.downloadCv')}
              </button>
            </div>

            <div className={styles.socials}>
              <a href="https://github.com/ShenoudaSameh" target="_blank" rel="noreferrer" aria-label="GitHub Profile">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn Profile">
                <FaLinkedin />
              </a>
              <a href="mailto:shenoudasameh16.12@email.com" aria-label="Send Email">
                <FaEnvelope />
              </a>
              <a href="https://wa.me/201211586527" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <div className={styles.imageWrapper}>
            <img 
              src="/profile.jpg" 
              alt="Shenouda Sameh" 
              className={styles.profileImg}
              width="350"
              height="350"
            />
          </div>
        </div>
      </div>
    </section>
  );
};