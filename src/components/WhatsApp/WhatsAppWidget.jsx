import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';
import styles from './WhatsAppWidget.module.css';

export const WhatsAppWidget = () => {
  const primaryNumber = personalInfo?.whatsapp?.primary || "201211586527";
  const whatsappUrl = `https://wa.me/${primaryNumber}?text=${encodeURIComponent('Hi Shenouda, I reached out through your portfolio!')}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappFloat}
      aria-label="Contact on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};