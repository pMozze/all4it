'use client';

import { FC, useState } from 'react';
import { useTranslations } from 'next-intl';
import { FeedbackFormModal } from '@/widgets/feedback-form-modal';
import styles from './ServicePage.module.css';

const OrderButton: FC = () => {
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
  const t = useTranslations('service');

  return (
    <>
      <button className={styles.serviceModalButton} type='button' onClick={() => setIsFeedbackModalOpen(true)}>
        {t('orderButton')}
      </button>
      <FeedbackFormModal isOpen={isFeedbackModalOpen} onClose={() => setIsFeedbackModalOpen(false)} />
    </>
  );
};

export default OrderButton;
