import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaLaptopCode, FaMobileAlt, FaRocket, FaGlobe } from 'react-icons/fa';
import styles from './Services.module.css';

export const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <FaLaptopCode />,
      title: 'React SPA Development',
      desc: 'Building responsive, scalable Single Page Applications with clean component trees and modular styling.'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Responsive & Glassmorphic UI',
      desc: 'Designing fully mobile-friendly layouts with modern CSS glassmorphism effects and light/dark theme modes.'
    },
    {
      icon: <FaGlobe />,
      title: 'i18n Localization',
      desc: 'Integrating multi-language routing (Arabic/English/French) with dynamic LTR to RTL text direction switching.'
    },
    {
      icon: <FaRocket />,
      title: 'Performance & SEO Optimization',
      desc: 'Achieving 90+ Lighthouse scores with WebP compression, lazy loading, ARIA accessibility, and structured metadata.'
    }
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className={styles.heading}>{t('services.title', 'Services')}</h2>

        <div className={styles.grid}>
          {services.map((srv, idx) => (
            <div key={idx} className={`${styles.serviceCard} glass`}>
              <div className={styles.icon}>{srv.icon}</div>
              <h3 className={styles.title}>{srv.title}</h3>
              <p className={styles.desc}>{srv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};