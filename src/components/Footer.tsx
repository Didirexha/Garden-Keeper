import React from 'react';
import styles from '../styles/Footer.module.css';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { useLanguage, translations } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h4>Garden Keeper</h4>
          <p>{t.footer.about}</p>
        </div>
        <div className={styles.footerSection}>
          <h4>{t.footer.followUs}</h4>
          <div className={styles.socialLinks}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook size={30} />

            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram size={30} />
            </a>
          </div>
        </div>
        <div className={styles.footerSection}>
          <button 
            onClick={toggleLanguage} 
            className={styles.languageButton}
            aria-label={`Switch to ${language === 'en' ? 'Albanian' : 'English'}`}
          >
            {language === 'en' ? 'Shqip' : 'English'}
          </button>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Garden Keeper. {t.footer.rights}</p>
      </div>
    </footer>
  );
};

export default Footer; 