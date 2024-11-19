'use client';

import { FC, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import { Button } from '@/shared/ui';
import { useGlobalStore } from '@/shared/store';

import styles from './Header.module.css';

const Header: FC = () => {
  const router = useRouter();
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
        <Link className={styles.navigationLink} href='/#about-us'>
          О нас
        </Link>
        <Link className={styles.navigationLink} href='/projects'>
          Портфолио
        </Link>
        <Link className={styles.navigationLink} href='/#bitrix'>
          Битрикс
        </Link>
        <Link className={styles.navigationLink} href='/services'>
          Услуги
        </Link>
        <Link className={styles.navigationLink} href='/contact'>
          Контакты
        </Link>
      </div>
      <Button
        className={styles.contactsButton}
        text='Связаться'
        variant='light'
        onClick={() => router.push('/contact')}
      />
      <style global jsx>{`
        :root {
          --header-height: ${headerHeight};
        }
      `}</style>
    </header>
  );
};

export default Header;
