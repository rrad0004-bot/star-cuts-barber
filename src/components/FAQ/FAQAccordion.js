'use client';

import { useState } from 'react';
import styles from './FAQ.module.css';

const faqs = [
  {
    question: 'Do I need an appointment?',
    answer: 'While we welcome walk-ins, we highly recommend booking an appointment to ensure you don\'t have to wait, especially during busy periods like weekends.'
  },
  {
    question: 'Are walk-ins welcome?',
    answer: 'Yes, we always try our best to accommodate walk-ins. If we have a free slot, we\'ll get you in straight away!'
  },
  {
    question: 'How long does a standard haircut take?',
    answer: 'A standard precision haircut typically takes between 30 to 45 minutes, depending on the complexity of the style.'
  },
  {
    question: 'Do you offer kids haircuts?',
    answer: 'We certainly do! We take pride in being a family-friendly shop and are very patient with our younger customers.'
  },
  {
    question: 'Where are you located?',
    answer: 'We are conveniently located at Shop 3A/2-14 Calder Park Dr, Taylors Hill VIC 3037. There is plenty of free parking available.'
  }
];

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.accordion}>
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className={`${styles.item} ${activeIndex === index ? styles.active : ''}`}
        >
          <button 
            className={styles.question} 
            onClick={() => toggleFAQ(index)}
          >
            <span>{faq.question}</span>
            <span className={styles.icon}>{activeIndex === index ? '-' : '+'}</span>
          </button>
          <div className={styles.answer}>
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
