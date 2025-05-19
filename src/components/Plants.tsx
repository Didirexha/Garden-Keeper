import React from 'react';
import styles from '../styles/Plants.module.css';
import { useLanguage, translations } from '../context/LanguageContext';
import Garden1 from '../img/garden1.jpg';
import Garden2 from '../img/garden2.jpg';
import Garden3 from '../img/garden3.jpg';



interface PlantCard {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

const plants: PlantCard[] = [
  {
    id: 1,
    name: 'Tomatoes',
    description: 'Perfect for beginners, great for salads and cooking.',
    imageUrl: Garden1
  },
  {
    id: 2,
    name: 'Lavender',
    description: 'Beautiful, fragrant, and attracts pollinators.',
    imageUrl: Garden2
  },
  {
    id: 3,
    name: 'Basil',
    description: 'Easy to grow and perfect for cooking.',
    imageUrl: Garden3
  }
];

const Plants: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="plants" className={styles.plantsSection}>
      <h2>{t.plants.title}</h2>
      <div className={styles.plantsGrid}>
        {plants.map((plant) => (
          <div key={plant.id} className={styles.plantCard}>
            <img src={plant.imageUrl} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>{plant.description}</p>
          </div>
        ))}
      </div>
      {/* <button className={styles.viewAllButton}>{t.plants.viewAll}</button> */}
    </section>
  );
};

export default Plants; 