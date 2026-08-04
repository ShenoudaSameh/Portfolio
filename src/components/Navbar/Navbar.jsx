import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', labelKey: 'nav.home', defaultLabel: 'Home' },
    { id: 'about', labelKey: 'nav.about', defaultLabel: 'About' },
    { id: 'skills', labelKey: 'nav.skills', defaultLabel: 'Skills' },
    { id: 'services', labelKey: 'nav.services', defaultLabel: 'Services' },
    { id: 'projects', labelKey: 'nav.projects', defaultLabel: 'Projects' },
    { id: 'contact', labelKey: 'nav.contact', defaultLabel: 'Contact' },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <header className={`${styles.header} glass`}>
      <div className={`${styles.container} container`}>
        <div className={styles.logo}>
          <a href="#home">Shenouda</a>
        </div>

        <nav className={styles.nav}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`${styles.navLink} ${activeSection === item.id ? styles.active : ''}`}
            >
              {t(item.labelKey, item.defaultLabel)}
            </a>
          ))}
        </nav>

        <div className={styles.controls}>
          <ThemeToggle />
          <select 
            value={i18n.language} 
            onChange={handleLanguageChange}
            className={styles.langSelect}
            aria-label="Select Language"
          >
            <option value="en">GB English</option>
            <option value="ar">EG العربية</option>
            <option value="fr">FR Français</option>
          </select>
        </div>
      </div>
    </header>
  );
};