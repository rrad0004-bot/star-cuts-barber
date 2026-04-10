import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={`${styles.content} container`}>
        <h1 className={styles.title}>STAR CUTS BARBER SHOP</h1>
        <p className={styles.subtitle}>Premium Grooming for Men & Kids in Taylors Hill</p>
        <div className={styles.actions}>
          <Link href="/contact" className="btn">Book an Appointment</Link>
          <Link href="/services" className={`${styles.secondaryBtn}`}>View Services</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
