'use client';

import { useState } from 'react';
import styles from './Contact.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Haircut',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', service: 'Haircut', message: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form className={styles.form} onClick={(e) => e.stopPropagation()} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label htmlFor="name">Full Name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          required 
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="email">Email Address</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          required 
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="phone">Phone Number</label>
        <input 
          type="tel" 
          id="phone" 
          name="phone" 
          value={formData.phone}
          onChange={handleChange}
          placeholder="(03) 1234 5678"
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="service">Service Interested In</label>
        <select 
          id="service" 
          name="service" 
          value={formData.service}
          onChange={handleChange}
        >
          <option value="Haircut">Men's Haircut</option>
          <option value="Kids Haircut">Kids Haircut</option>
          <option value="Beard Grooming">Beard Grooming</option>
          <option value="Shave">Hot Towel Shave</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className={styles.field}>
        <label htmlFor="message">Message</label>
        <textarea 
          id="message" 
          name="message" 
          rows="5" 
          value={formData.message}
          onChange={handleChange}
          placeholder="Any special requests or questions?"
        ></textarea>
      </div>
      <button type="submit" className="btn" style={{ width: '100%' }}>Send Message</button>
    </form>
  );
};

export default ContactForm;
