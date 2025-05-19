import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Tips from './components/Tips';
import Plants from './components/Plants';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Header />
        <main>
          <Hero />
          <Tips />
          <Plants />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App; 