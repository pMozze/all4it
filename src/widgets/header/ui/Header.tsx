'use client';

import { FC, useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

import { Button } from '@/shared/ui';
import { useGlobalStore } from '@/shared/store';
import { LanguageSwitcher } from '@/features/language-switcher';
import { FeedbackFormModal } from '@/widgets/feedback-form-modal';

import styles from './Header.module.css';

const Header: FC = () => {
  const t = useTranslations('header');
  const { logotype } = useGlobalStore();

  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState('0px');

  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

  useEffect(() => {
    const headerStyles = getComputedStyle(headerRef.current!);
    setHeaderHeight(`calc(${headerStyles.height} + ${headerStyles.top} * 2)`);
  }, []);

  return (
    <>
      <header ref={headerRef} className={styles.wrapper}>
        <div className='container'>
          <div className={styles.inner}>
            <Link className={styles.logotype} href='/'>
              <img className={styles.logotypeIcon} src={logotype} alt='' />
              All4it
            </Link>
            <div className={styles.navigation}>
              <Link className={styles.navigationLink} href='/#about-us'>
                {t('about_us')}
              </Link>
              <Link className={styles.navigationLink} href='/projects'>
                {t('projects')}
              </Link>
              <Link className={styles.navigationLink} href='/#bitrix'>
                {t('bitrix')}
              </Link>
              <Link className={styles.navigationLink} href='/#services'>
                {t('services')}
              </Link>
              <Link className={styles.navigationLink} href='/contact'>
                {t('contacts')}
              </Link>
            </div>
            <div className={styles.actions}>
              <Button
                className={styles.contactsButton}
                text={t('contactButton')}
                variant='light'
                onClick={() => setIsFeedbackModalOpen(true)}
              />
              <LanguageSwitcher />
            </div>
            <style global jsx>{`
              :root {
                --header-height: ${headerHeight};
              }
            `}</style>
          </div>
        </div>
      </header>
      <FeedbackFormModal isOpen={isFeedbackModalOpen} onClose={() => setIsFeedbackModalOpen(false)} />
    </>
  );
};

export default Header;
