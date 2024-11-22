'use client';

import { FC, useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

import { Button } from '@/shared/ui';
import { useGlobalStore } from '@/shared/store';
import { LanguageSwitcher } from '@/features/language-switcher';
import { FeedbackFormModal } from '@/widgets/feedback-form-modal';

import styles from './Header.module.css';
import classNames from 'classnames';

const Header: FC = () => {
  const t = useTranslations('header');
  const { logotype, contacts } = useGlobalStore();

  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState('0px');

  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

  useEffect(() => {
    const headerStyles = getComputedStyle(headerRef.current!);
    setHeaderHeight(`calc(${headerStyles.height} + ${headerStyles.top} * 2)`);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isHamburgerOpen ? 'hidden' : '';
  }, [isHamburgerOpen]);

  return (
    <>
      <header ref={headerRef} className={styles.wrapper}>
        <div className='container'>
          <div className={styles.inner}>
            <div className={styles.topRow}>
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
              <button
                className={classNames(styles.hamburgerButton, isHamburgerOpen && styles.hamburgerButton_active)}
                type='button'
                onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
              >
                <div></div>
                <div></div>
              </button>
            </div>
            <div className={classNames(styles.hamburger, isHamburgerOpen && styles.hamburger_active)}>
              <div className={styles.hamburgerNavigation}>
                <Link className={styles.navigationLink} href='/#about-us' onClick={() => setIsHamburgerOpen(false)}>
                  {t('about_us')}
                </Link>
                <Link className={styles.navigationLink} href='/projects' onClick={() => setIsHamburgerOpen(false)}>
                  {t('projects')}
                </Link>
                <Link className={styles.navigationLink} href='/#bitrix' onClick={() => setIsHamburgerOpen(false)}>
                  {t('bitrix')}
                </Link>
                <Link className={styles.navigationLink} href='/#services' onClick={() => setIsHamburgerOpen(false)}>
                  {t('services')}
                </Link>
                <Link className={styles.navigationLink} href='/contact' onClick={() => setIsHamburgerOpen(false)}>
                  {t('contacts')}
                </Link>
              </div>
              <div className={styles.hamburgerFooter}>
                <Button
                  className={styles.contactsButton}
                  text={t('contactButton')}
                  variant='light'
                  onClick={() => setIsFeedbackModalOpen(true)}
                />
                <LanguageSwitcher />
              </div>
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
