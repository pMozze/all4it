'use client';

import { FC } from 'react';
import { useLocale } from 'next-intl';
import { changeLanguage } from '@/app/actions/changeLanguage';
import styles from './LanguageSwitcher.module.css';

const LanguageSwitcher: FC = () => {
  const locale = useLocale();

  return (
    <button
      className={styles.wrapper}
      type='button'
      onClick={() => {
        changeLanguage(locale === 'ru' ? 'en' : 'ru').then(() => {
          location.reload();
        });
      }}
    >
      {locale}
    </button>
  );
};

export default LanguageSwitcher;
