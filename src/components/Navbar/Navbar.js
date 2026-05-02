'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.navContainer}>

          {/* LOGO */}
          <Link href="/" className={styles.logo}>
            STAR CUTS
          </Link>

          {/* HAMBURGER (MOBILE ONLY) */}
          <button className={styles.hamburger} onClick={toggleMenu}>
            ☰
          </button>

          {/* NAV LINKS */}
          <ul className={`${styles.navLinks} ${open ? styles.active : ''}`}>
            <li><Link href="/" onClick={() => setOpen(false)}>Home</Link></li>
            <li><Link href="/about" onClick={() => setOpen(false)}>About</Link></li>
            <li><Link href="/services" onClick={() => setOpen(false)}>Services</Link></li>
            <li><Link href="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
            <li><Link href="/faq" onClick={() => setOpen(false)}>FAQ</Link></li>

            {/* DESKTOP CTA */}
            <li className={styles.desktopOnly}>
              <Link href="/contact" className={styles.navCta}>
                Book Now
              </Link>
            </li>

            {/* MOBILE CTA */}
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