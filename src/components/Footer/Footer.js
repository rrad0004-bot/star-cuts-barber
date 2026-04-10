import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.info}>
            <h3 className={styles.title}>STAR CUTS</h3>
            <p>Shop 3A/2-14 Calder Park Dr,<br />Taylors Hill VIC 3037</p>
            <p>Phone: (03) 1234 5678</p>
          </div>
          <div className={styles.hours}>
            <h4>Trading Hours</h4>
            <ul>
              <li>Mon - Fri: 9am - 6pm</li>
              <li>Sat: 9am - 4pm</li>
              <li>Sun: Closed</li>
            </ul>
          </div>
          <div className={styles.links}>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Our Services</a></li>
              <li><a href="/contact">Book Now</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Star Cuts Barber Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
