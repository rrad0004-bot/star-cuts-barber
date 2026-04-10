import styles from './Services.module.css';

const services = [
  {
    title: 'Precision Haircuts',
    description: 'Expertly tailored haircuts for men and kids, from classic styles to modern fades.',
    image: '/images/haircut.jpg', // Adult Fade
  },
  {
    title: 'Beard Grooming',
    description: 'Professional beard trimming, shaping, and hot towel treatments for the sharpest look.',
    image: '/images/beard.jpg',
  },
  {
    title: 'Kids Haircuts',
    description: 'A welcoming and patient experience for the little ones, ensuring they leave with a smile.',
    image: '/images/kid.jpg',
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
