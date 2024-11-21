import { FC } from 'react';
import parse from 'html-react-parser';

import { fetchPrivacyPolicy } from '../api';

import styles from './PrivacyPolicyPage.module.css';

const PrivacyPolicyPage: FC = async () => {
  const content = await fetchPrivacyPolicy();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Политика конфиденциальности</h1>
      <div className={styles.content}>{parse(content)}</div>
    </div>
  );
};

export default PrivacyPolicyPage;
