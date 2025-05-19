import React from 'react';
import styles from '../styles/Hero.module.css';
import { useLanguage, translations } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>{t.hero.title}</h1>
        <p>{t.hero.subtitle}</p>
        <button className={styles.ctaButton}>{t.hero.cta}</button>
      </div>
    </section>
  );
};

export default Hero; 