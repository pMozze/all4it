'use client';

import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { Modal } from '@/shared/ui';
import { FeedbackForm } from '@/widgets/feedback-form';

interface Props {
  isOpen?: boolean;
  onClose?: () => void;
}

const FeedbackFormModal: FC<Props> = ({ isOpen, onClose }) => {
  const t = useTranslations('contacts');

  return (
    <Modal title={t('title')} isOpen={isOpen} onClose={onClose}>
      <FeedbackForm />
    </Modal>
  );
};

export default FeedbackFormModal;
