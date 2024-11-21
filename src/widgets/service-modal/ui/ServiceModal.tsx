'use client';

import { FC, useEffect, useState } from 'react';
import parse from 'html-react-parser';

import { Modal } from '@/shared/ui';

import { fetchService } from '../api';
import { type Service } from '../model';

import styles from './ServiceModal.module.css';

interface Props {
  serviceId: number | null;
  isOpen?: boolean;
  onClose?: () => void;
}

const ServiceModal: FC<Props> = ({ serviceId, isOpen, onClose }) => {
  const [service, setService] = useState<Service | null>(null);

  useEffect(() => {
    if (serviceId === null) {
      return;
    }

    fetchService(serviceId)
      .then(setService)
      .catch(() => setService(null));
  }, [serviceId]);

  return (
    <Modal title={service?.title} isOpen={isOpen} onClose={onClose}>
      <div className={styles.service}>{parse(service?.description || '')}</div>
    </Modal>
  );
};

export default ServiceModal;
