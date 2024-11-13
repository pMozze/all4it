'use client';

import { FC } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import styles from './Footer.module.css';

import { useGlobalStore } from '@/shared/store';

import MailIcon from '@/shared/assets/icons/mail.svg';
import TelegramIcon from '@/shared/assets/icons/telegram.svg';

interface Props {
  className?: string;
}

const Footer: FC<Props> = ({ className }) => {
  const { logotype, footer, contacts } = useGlobalStore();

  return (
    <div className={classNames(styles.wrapper, className)}>
      <div className={classNames(styles.container, 'container')}>
        <Link className={styles.logotype} href='/'>
          <img className={styles.logotypeIcon} src={logotype} alt='' />
          <span>{footer.title}</span>
        </Link>
        <div className={styles.socials}>
          <a className={styles.socialsItem} href={contacts.telegram} target='_blank' rel='noopener noreferrer'>
            <TelegramIcon />
          </a>
          <a className={styles.socialsItem} href={contacts.email}>
            <MailIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
