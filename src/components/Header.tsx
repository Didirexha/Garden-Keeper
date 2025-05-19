import React from 'react';
import styles from '../styles/Header.module.css';
import tree from '../img/tree.png';

const Header: React.FC = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div  className={styles.logo}>
      <img src={tree} alt=''  className={styles.tree}/>
      <span>GreenFix</span>
      </div>
        <ul className={styles.navLinks}>
          <li><a href="#home" onClick={(e) => handleClick(e, 'home')}>Home</a></li>
          <li><a href="#tips" onClick={(e) => handleClick(e, 'tips')}>Gardening Tips</a></li>
          <li><a href="#plants" onClick={(e) => handleClick(e, 'plants')}>Plants</a></li>
          <li><a href="#contact" onClick={(e) => handleClick(e, 'contact')}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 