import { FC } from 'react';
import { getTranslations } from 'next-intl/server';

import { FeedbackForm } from '@/widgets/feedback-form';

import styles from './FormWrapper.module.css';

const FormWrapper: FC = async () => {
  const t = await getTranslations('contacts');

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>{t('title')}</div>
      <div className={styles.body}>
        <FeedbackForm />
      </div>
    </div>
  );
};

export default FormWrapper;
