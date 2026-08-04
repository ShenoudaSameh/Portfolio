import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import styles from './Footer.module.css';

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className={`${styles.footer} glass`}>
        <div className={`${styles.container} container`}>
          <p className={styles.copyright}>
            © {currentYear} Shenouda Sameh. {t('footer.rights')}
          </p>

          <div className={styles.socials}>
            <a href="https://github.com/ShenoudaSameh" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:shenoudasameh16.12@email.com" aria-label="Email">
              <FaEnvelope />
            </a>
            <a href="https://wa.me/201211586527" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Quick-Action Button */}
      <a 
        href="https://wa.me/201211586527" 
        target="_blank" 
        rel="noreferrer" 
        className={styles.floatingWhatsapp}
        aria-label="Chat on WhatsApp"
        title={t('footer.quickConnect')}
      >
        <FaWhatsapp />
      </a>
    </>
  );
};