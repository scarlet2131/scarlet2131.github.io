import Link from 'next/link';
import React from 'react';
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}><Link href="#home">Home</Link></li>
        <li className={styles.navItem}><Link href="#home">About</Link></li>
        <li className={styles.navItem}><Link href="#education">Education</Link></li>
        <li className={styles.navItem}><Link href="#experience">Experience</Link></li>
        <li className={styles.navItem}><Link href="#coding-profiles">Coding Profiles</Link></li>
        <li className={styles.navItem}><Link href="#projects">Projects</Link></li>
        <li className={styles.navItem}><Link href="#skills">Skills</Link></li>
        <li className={styles.navItem}><Link href="#contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
