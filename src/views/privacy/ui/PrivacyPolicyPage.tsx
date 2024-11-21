import { FC } from 'react';
import { getTranslations } from 'next-intl/server';
import parse from 'html-react-parser';

import { fetchPrivacyPolicy } from '../api';

import styles from './PrivacyPolicyPage.module.css';

const PrivacyPolicyPage: FC = async () => {
  const t = await getTranslations('privacyPolicy');
  const content = await fetchPrivacyPolicy();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{t('title')}</h1>
      <div className={styles.content}>{parse(content)}</div>
    </div>
  );
};

export default PrivacyPolicyPage;
