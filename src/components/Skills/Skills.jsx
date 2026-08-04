import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJsSquare, 
  FaReact, 
  FaGitAlt, 
  FaGithub 
} from 'react-icons/fa';
import { SiVite, SiI18Next, SiRedux } from 'react-icons/si';
import styles from './Skills.module.css';

export const Skills = () => {
  const { t } = useTranslation();

  const skillList = [
    { name: 'React 18', icon: <FaReact />, category: 'Frontend' },
    { name: 'JavaScript (ES6+)', icon: <FaJsSquare />, category: 'Language' },
    { name: 'HTML5', icon: <FaHtml5 />, category: 'Frontend' },
    { name: 'CSS3 / Modules', icon: <FaCss3Alt />, category: 'Styling' },
    { name: 'Vite', icon: <SiVite />, category: 'Tooling' },
    { name: 'i18next', icon: <SiI18Next />, category: 'Localization' },
    { name: 'Redux / Context', icon: <SiRedux />, category: 'State Management' },
    { name: 'Git & GitHub', icon: <FaGitAlt />, category: 'Version Control' },
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className={styles.heading}>{t('skills.title', 'Skills & Technologies')}</h2>
        
        <div className={styles.grid}>
          {skillList.map((skill, index) => (
            <div key={index} className={`${styles.skillCard} glass`}>
              <div className={styles.icon}>{skill.icon}</div>
              <h3 className={styles.skillName}>{skill.name}</h3>
              <span className={styles.category}>{skill.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};