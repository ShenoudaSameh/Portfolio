import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import styles from './ThemeToggle.module.css';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className={styles.toggleBtn}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      type="button"
    >
      <svg
        className={styles.sunMoonSvg}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <mask id="moon-mask">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <circle
            className={`${styles.moonCutout} ${isDark ? styles.darkCutout : ''}`}
            cx="24"
            cy="10"
            r="6"
            fill="black"
          />
        </mask>

        <circle
          className={`${styles.sunCenter} ${isDark ? styles.darkCenter : ''}`}
          cx="12"
          cy="12"
          r={isDark ? "9" : "5"}
          fill="currentColor"
          mask="url(#moon-mask)"
        />

        <g className={`${styles.sunRays} ${isDark ? styles.darkRays : ''}`}>
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </g>
      </svg>
    </button>
  );
};