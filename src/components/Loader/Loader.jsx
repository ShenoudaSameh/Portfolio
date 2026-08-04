import React from 'react';
import styles from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.spinner}></div>
      <p className={styles.text}>Loading Portfolio...</p>
    </div>
  );
};