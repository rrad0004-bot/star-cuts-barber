import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>

      <div className={`${styles.content} container`}>
        <h1 className={styles.title}>STAR CUTS BARBER SHOP</h1>

        <p className={styles.subtitle}>
          Fresh fades. Clean cuts. Beard grooming for men & kids in Taylors Hill.
        </p>

        <div className={styles.trust}>
          <span>✂ Walk-ins Welcome</span>
          <span>⭐ Local Trusted Barber</span>
          <span>👨‍👩‍👦 Men & Kids</span>
        </div>

        <div className={styles.actions}>
          <Link href="/contact" className={styles.primaryBtn}>
            Book Appointment
          </Link>

          <Link href="/contact" className={styles.secondaryBtn}>
            Call Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;