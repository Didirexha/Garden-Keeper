import React from 'react';
import styles from '../styles/Tips.module.css';
import { FaSun, FaCloudSun, FaLeaf } from 'react-icons/fa';
import { useLanguage, translations } from '../context/LanguageContext';

const Tips: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="tips" className={styles.tipsSection}>
      <h2>{t.tips.title}</h2>
      <div className={styles.tipsGrid}>
        <div className={styles.tipCard}>
          <FaSun size={40} className={styles.icon} />
          <h3>{t.tips.spring.title}</h3>
          <p>{t.tips.spring.description}</p>
        </div>
        <div className={styles.tipCard}>
          <FaCloudSun size={40} className={styles.icon} />
          <h3>{t.tips.summer.title}</h3>
          <p>{t.tips.summer.description}</p>
        </div>
        <div className={styles.tipCard}>
          <FaLeaf size={40} className={styles.icon} />
          <h3>{t.tips.fall.title}</h3>
          <p>{t.tips.fall.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Tips; 