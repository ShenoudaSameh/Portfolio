import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.css';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);
    updateDocumentDirection(newLang);
  };

  const updateDocumentDirection = (lang) => {
    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    updateDocumentDirection(i18n.language || 'en');
  }, [i18n.language]);

  return (
    <div className={styles.switcherWrapper}>
      <select 
        value={i18n.language?.slice(0, 2) || 'en'} 
        onChange={handleLanguageChange}
        className={styles.select}
        aria-label="Select Language"
      >
        <option value="en">🇬🇧 English</option>
        <option value="ar">🇪🇬 العربية</option>
        <option value="fr">🇫🇷 Français</option>
      </select>
    </div>
  );
};