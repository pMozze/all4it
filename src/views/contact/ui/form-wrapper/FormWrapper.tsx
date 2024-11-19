import { FC } from 'react';

import { FeedbackForm } from '@/widgets/feedback-form';

import styles from './FormWrapper.module.css';

const FormWrapper: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>Расскажите чем мы можем Вам помочь</div>
      <div className={styles.body}>
        <FeedbackForm />
      </div>
    </div>
  );
};

export default FormWrapper;
