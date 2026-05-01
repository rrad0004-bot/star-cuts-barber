'use client';

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';

const ContactForm = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      'service_n1tpopl',
      'template_rmiteba',
      formRef.current,
      'eyuLIDzmulYYSOUP7'
    )
      .then(() => {
        setLoading(false);
        alert('Thank you! We will get back to you soon.');
        formRef.current.reset();
      })
      .catch((error) => {
        setLoading(false);
        alert('Something went wrong. Please try again.');
        console.error(error);
      });
  };

  return (
    <form
      ref={formRef}
      className={styles.form}
      onSubmit={sendEmail}
    >

      <div className={styles.field}>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="from_name"   // 🔥 IMPORTANT CHANGE
          required
          placeholder="John Doe"
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="from_email"  // 🔥 IMPORTANT CHANGE
          required
          placeholder="john@example.com"
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="(03) 1234 5678"
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="service">Service Interested In</label>
        <select
          id="service"
          name="service"
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
          placeholder="Any special requests or questions?"
        ></textarea>
      </div>

      <button type="submit" className="btn" style={{ width: '100%' }}>
        {loading ? 'Sending...' : 'Send Message'}
      </button>

    </form>
  );
};

export default ContactForm;