'use client';

import { FC, useEffect, useRef, useState } from 'react';
import Link from 'next/link';

import { Button } from '@/shared';
import { useGlobalStore } from '@/shared/store';

import styles from './Header.module.css';

const Header: FC = () => {
  const { logotype } = useGlobalStore();
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState('0px');

  useEffect(() => {
    const headerStyles = getComputedStyle(headerRef.current!);
    setHeaderHeight(`calc(${headerStyles.height} + ${headerStyles.top} * 2)`);
  }, []);

  return (
    <header ref={headerRef} className={styles.wrapper}>
      <Link className={styles.logotype} href='/'>
        <img className={styles.logotypeIcon} src={logotype} alt='' />
        All4it
      </Link>
      <div className={styles.navigation}>
        <Link className={styles.navigationLink} href='/'>
          О нас
        </Link>
        <Link className={styles.navigationLink} href='/projects'>
          Портфолио
        </Link>
        <Link className={styles.navigationLink} href='/'>
          Битрикс
        </Link>
        <Link className={styles.navigationLink} href='/'>
          Услуги
        </Link>
        <Link className={styles.navigationLink} href='/'>
          Контакты
        </Link>
      </div>
      <Button className={styles.contactsButton} text='Связаться' />
      <style global jsx>{`
        :root {
          --header-height: ${headerHeight};
        }
      `}</style>
    </header>
  );
};

export default Header;
