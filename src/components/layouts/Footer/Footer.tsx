import { FC } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import styles from './Footer.module.css';

import LogotypeIcon from '@/icons/logotype.svg';
import MailIcon from '@/icons/mail.svg';
import TelegramIcon from '@/icons/telegram.svg';

interface Props {
  className?: string;
}

const Footer: FC<Props> = ({ className }) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <div className={classNames(styles.container, 'container')}>
        <Link className={styles.logotype} href='/'>
          <LogotypeIcon />
          <span>All4it - Разработка сайтов на 1С-Битрикс</span>
        </Link>
        <div className={styles.socials}>
          <a className={styles.socialsItem} href='https://t.me/All4_IT' target='_blank' rel='noopener noreferrer'>
            <TelegramIcon />
          </a>
          <a className={styles.socialsItem} href='mailto:info@all4it.org'>
            <MailIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
