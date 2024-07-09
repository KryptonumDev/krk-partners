'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';
import Button from '@/components/ui/Button';

export default function Navigation({ KrkPartnersLogo }: { KrkPartnersLogo: React.ReactNode }) {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <header aria-expanded={opened}>
        <div className="max-width">
          <Link
            className={styles.logo}
            href='.'
            aria-label='Strona główna'
          >
            {KrkPartnersLogo}
          </Link>
          <nav>
            <ul>
              <li><Link href='#o-nas' onClick={() => setOpened(false)}>O nas</Link></li>
              <li><Link href='#oferta' onClick={() => setOpened(false)}>Oferta</Link></li>
              <li><Link href='#opinie' onClick={() => setOpened(false)}>Opinie</Link></li>
              <li><Link href='#branze' onClick={() => setOpened(false)}>Branże</Link></li>
              <li><Link href='#faq' onClick={() => setOpened(false)}>FAQ</Link></li>
            </ul>
          </nav>
          <Button href='#wniosek' className={styles.cta} onClick={() => setOpened(false)}>
            Kalkulator pożyczki
          </Button>
          <button className={styles['toggle-btn']} onClick={() => setOpened(prev => !prev)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
      <div className={styles.overlay} onClick={() => setOpened(false)}></div>
    </>
  );
}
