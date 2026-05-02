'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.navContainer}>

          <Link href="/" className={styles.logo}>
            STAR CUTS
          </Link>

          <button className={styles.hamburger} onClick={toggleMenu}>
            ☰
          </button>

          <ul className={`${styles.navLinks} ${open ? styles.active : ''}`}>
            <li><Link href="/" onClick={() => setOpen(false)}>Home</Link></li>
            <li><Link href="/about" onClick={() => setOpen(false)}>About</Link></li>
            <li><Link href="/services" onClick={() => setOpen(false)}>Services</Link></li>
            <li><Link href="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
            <li><Link href="/faq" onClick={() => setOpen(false)}>FAQ</Link></li>

            {/* Desktop CTA */}
            <li className={styles.desktopOnly}>
              <Link href="/contact" className={styles.navCta}>
                Book Now
              </Link>
            </li>

            {/* Mobile CTA */}
            <li className={styles.mobileOnly}>
              <a href="tel:+61312345678" className={styles.navCta}>
                Call Now
              </a>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;