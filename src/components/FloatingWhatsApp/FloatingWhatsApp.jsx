import React from 'react';
import { personalInfo } from '../../data/portfolioData';
import { FiMessageSquare } from 'react-icons/fi';
import styles from './FloatingWhatsApp.module.css';

export const FloatingWhatsApp = () => {
  const whatsappNumber = personalInfo.whatsapp?.primary || '201211586527';

  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noreferrer"
      className={styles.floatingBtn}
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <FiMessageSquare size={24} />
      <span className={styles.pulse}></span>
    </a>
  );
};