import React from 'react';
import Link from 'next/link';

import styles from './NavBar.module.css';

export default function NavBar() {
  const navItems = [
    "Miracle AG",
    "About",
    "Ministries",
    "Resources",
    "Media",
    "Contact Us",
    "Secret of God's creation"
  ];

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {navItems.map(item => (
          <li className={styles.li} key={item}>
            <Link href="/">
              <a className={styles.link}>{item}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}