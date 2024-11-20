import { FC } from 'react';

import { Modal } from '@/shared/ui';
import { FeedbackForm } from '@/widgets/feedback-form';

interface Props {
  isOpen?: boolean;
  onClose?: () => void;
}

const FeedbackFormModal: FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <FeedbackForm />
    </Modal>
  );
};

export default FeedbackFormModal;
