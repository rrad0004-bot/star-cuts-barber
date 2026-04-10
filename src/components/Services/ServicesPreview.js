import styles from './Services.module.css';

const services = [
  {
    title: 'Precision Haircuts',
    description: 'Expertly tailored haircuts for men and kids, from classic styles to modern fades.',
    image: 'https://images.unsplash.com/photo-1599351431202-1e0f013d899a?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Beard Grooming',
    description: 'Professional beard trimming, shaping, and hot towel treatments for the sharpest look.',
    image: 'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Kids Haircuts',
    description: 'A welcoming and patient experience for the little ones, ensuring they leave with a smile.',
    image: 'https://images.unsplash.com/photo-1618331817316-2da98d896944?auto=format&fit=crop&q=80&w=800',
  }
];

const ServicesPreview = () => {
  return (
    <section className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="title">Our Services</h2>
          <p className="subtitle">Quality grooming for the modern gentleman</p>
        </div>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div 
                className={styles.cardImage} 
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>
              <div className={styles.cardContent}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
