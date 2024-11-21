'use client';

import { FC } from 'react';
import { useTranslations } from 'next-intl';
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
  const t = useTranslations('footer');
  const { logotype, footer, contacts } = useGlobalStore();

  return (
    <footer className={classNames(styles.wrapper, className)}>
      <div className={classNames(styles.container, 'container')}>
        <div className={styles.row}>
          <Link className={styles.logotype} href='/'>
            <img className={styles.logotypeIcon} src={logotype} alt='' />
            <span>{footer.title}</span>
          </Link>
          <div className={styles.socials}>
            <a className={styles.socialsItem} href={contacts.telegram} target='_blank' rel='noopener noreferrer'>
              <TelegramIcon />
            </a>
            <a className={styles.socialsItem} href={`mailto:${contacts.email}`}>
              <MailIcon />
            </a>
          </div>
        </div>
        <div className={styles.row}>
          <Link className={styles.link} href='/privacy'>
            {t('privacyPolicy')}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
