import { FC } from 'react';
import { getTranslations } from 'next-intl/server';
import classNames from 'classnames';

import { FeedbackForm } from '@/widgets/feedback-form';

import styles from './FormWrapper.module.css';

interface Props {
  className?: string;
}

const FormWrapper: FC<Props> = async ({ className }) => {
  const t = await getTranslations('contacts');

  return (
    <div className={classNames(styles.wrapper, className)}>
      <div className={styles.header}>{t('title')}</div>
      <div className={styles.body}>
        <FeedbackForm />
      </div>
    </div>
  );
};

export default FormWrapper;
