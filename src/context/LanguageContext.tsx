import React, { createContext, useState, useContext } from 'react';

type Language = 'en' | 'sq';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  en: {
    hero: {
      title: "Welcome to Garden Keeper",
      subtitle: "Your personal guide to beautiful gardens",
      cta: "Get Started"
    },
    tips: {
      title: "Seasonal Gardening Tips",
      spring: {
        title: "Spring Care",
        description: "Prepare your soil and start planting your favorite flowers and vegetables."
      },
      summer: {
        title: "Summer Maintenance",
        description: "Regular watering and pest control are essential during hot months."
      },
      fall: {
        title: "Fall Preparation",
        description: "Clean up your garden and prepare for the winter season."
      }
    },
    plants: {
      title: "Popular Plants",
      viewAll: "View All Plants"
    },
    contact: {
      title: "Contact Us",
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send Message"
    },
    footer: {
      about: "Making gardening simple and enjoyable",
      followUs: "Follow Us",
      rights: "All rights reserved."
    }
  },
  sq: {
    hero: {
      title: "Mirë se vini në Garden Keeper",
      subtitle: "Udhëzuesi juaj personal për kopshte të bukura",
      cta: "Filloni"
    },
    tips: {
      title: "Këshilla për Kopshtin Sipas Stinëve",
      spring: {
        title: "Kujdesi i Pranverës",
        description: "Përgatisni tokën dhe filloni të mbillni lule dhe perime të preferuara."
      },
      summer: {
        title: "Mirëmbajtja e Verës",
        description: "Ujitja e rregullt dhe kontrolli i dëmtuesve janë thelbësor gjatë muajve të nxehtë."
      },
      fall: {
        title: "Përgatitja e Vjeshtës",
        description: "Pastroni kopshtin tuaj dhe përgatisuni për stinën e dimrit."
      }
    },
    plants: {
      title: "Bimët Popullore",
      viewAll: "Shiko Të Gjitha Bimët"
    },
    contact: {
      title: "Na Kontaktoni",
      name: "Emri",
      email: "Email",
      message: "Mesazhi",
      submit: "Dërgo Mesazhin"
    },
    footer: {
      about: "Duke e bërë kopshtarinë të thjeshtë dhe të këndshme",
      followUs: "Na Ndiqni",
      rights: "Të gjitha të drejtat e rezervuara."
    }
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'sq' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 