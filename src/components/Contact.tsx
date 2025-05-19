import React, { useState } from 'react';
import styles from '../styles/Contact.module.css';
import { useLanguage, translations } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const whatsappMessage = `Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
    
    // Replace with your WhatsApp number (include country code)
    const whatsappNumber = "+38349732127"; // Replace with your actual WhatsApp number
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Clear form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <h2>{t.contact.title}</h2>
      <div className={styles.contactContainer}>
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">{t.contact.name}</label>
            <input 
              type="text" 
              value={formData.name} 
              onChange={handleChange} 
              id="name" 
              name="name" 
              placeholder='Name' 
              required 
            />
          </div>
          <div className={styles.formGroup}> 
            <label htmlFor="email">{t.contact.email}</label>
            <input 
              type="email" 
              value={formData.email} 
              onChange={handleChange} 
              id="email" 
              name="email" 
              placeholder='Email' 
              required 
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">{t.contact.message}</label>
            <textarea 
              id="message" 
              value={formData.message} 
              onChange={handleChange} 
              name="message" 
              placeholder='Message' 
              rows={5} 
              required
            ></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>
            {t.contact.submit}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact; 