import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';
import styles from './Contact.module.css';

export const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t('alerts.formSubmitted'));
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className={styles.heading}>{t('contact.title')}</h2>

        <div className={styles.grid}>
          {/* Contact Details Card */}
          <div className={`${styles.infoCard} glass`}>
            <h3 className={styles.subTitle}>{t('contact.subtitle')}</h3>
            <p className={styles.desc}>{t('contact.description')}</p>

            <div className={styles.infoGroup}>
              <h4><FaPhoneAlt className={styles.icon} /> {t('contact.phoneHeader')}</h4>
              <a href="tel:01211586527" className={styles.contactLink}>01211586527</a>
              <a href="tel:01515727940" className={styles.contactLink}>01515727940</a>
            </div>

            <div className={styles.infoGroup}>
              <h4><FaEnvelope className={styles.icon} /> {t('contact.emailHeader')}</h4>
              <a href="mailto:shenoudasameh16.12@email.com" className={styles.contactLink}>
                shenoudasameh16.12@email.com
              </a>
            </div>

            <div className={styles.whatsappBox}>
              <a 
                href="https://wa.me/201211586527" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                <FaWhatsapp /> WhatsApp (01211586527)
              </a>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <form onSubmit={handleSubmit} className={`${styles.formCard} glass`}>
            <div className={styles.field}>
              <label htmlFor="name">{t('contact.nameLabel')}</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required 
                placeholder="John Doe"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="email">{t('contact.emailLabel')}</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required 
                placeholder="john@example.com"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="message">{t('contact.messageLabel')}</label>
              <textarea 
                id="message" 
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="..."
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              <FaPaperPlane /> {t('contact.sendBtn')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};