'use client';

import { FC } from 'react';
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';

import { FeedbackForm } from '@/widgets/feedback-form';

interface Props {
  isOpen?: boolean;
  onClose?: () => void;
}

const Modal = dynamic(() => import('@/shared/ui').then(mod => mod.Modal), { ssr: false });

const FeedbackFormModal: FC<Props> = ({ isOpen, onClose }) => {
  const t = useTranslations('contacts');

  return (
    <Modal title={t('title')} isOpen={isOpen} onClose={onClose}>
      <FeedbackForm />
    </Modal>
  );
};

export default FeedbackFormModal;
