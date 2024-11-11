import { FC } from 'react';
import Link from 'next/link';

import { Button } from '@/shared';

import styles from './Header.module.css';

import LogotypeIcon from '@/shared/assets/icons/logotype.svg';

const Header: FC = () => {
  return (
    <header className={styles.wrapper}>
      <Link className={styles.logotype} href='/'>
        <LogotypeIcon width='1.5em' height='1.5em' />
        All4it
      </Link>
      <div className={styles.navigation}>
        <Link className={styles.navigationLink} href='/'>
          О нас
        </Link>
        <Link className={styles.navigationLink} href='/'>
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
    </header>
  );
};

export default Header;
