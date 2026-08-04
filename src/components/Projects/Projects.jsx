import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolioData';
import styles from './Projects.module.css';

export const Projects = () => {
  const { t } = useTranslation();

  const handleImageError = (e, fallback) => {
    e.target.onerror = null;
    e.target.src = fallback;
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className={styles.heading}>{t('projects.title', 'Featured Projects')}</h2>

        <div className={styles.grid}>
          {portfolioData.projects.map((proj) => (
            <article key={proj.id} className={`${styles.card} glass`}>
              <div className={styles.imageContainer}>
                <img 
                  src={proj.image} 
                  alt={proj.title}
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="337"
                  onError={(e) => handleImageError(e, proj.fallbackImage)}
                  className={styles.img}
                />
              </div>

              <div className={styles.details}>
                <h3 className={styles.projectTitle}>{proj.title}</h3>
                <p className={styles.projectDesc}>{proj.description}</p>

                <div className={styles.techStack}>
                  {proj.technologies.map((tech, idx) => (
                    <span key={idx} className={styles.techTag}>{tech}</span>
                  ))}
                </div>

                <div className={styles.links}>
                  <a 
                    href={proj.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn btn-outline"
                  >
                    <FaGithub /> Code
                  </a>
                  <a 
                    href={proj.demo} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn btn-primary"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};