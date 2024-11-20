'use client';

import { FC, PropsWithChildren, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

import CrossIcon from '@/shared/assets/icons/cross.svg';

import styles from './Modal.module.css';

interface Props extends PropsWithChildren {
  isOpen?: boolean;
  onClose?: () => void;
}

const Modal: FC<Props> = ({ isOpen, onClose, children }) => {
  const documentBodyRef = useRef<HTMLElement>();

  useEffect(() => {
    documentBodyRef.current = document.body;
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  if (documentBodyRef.current === undefined) {
    return;
  }

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.modalBackdrop}
          onClick={onClose}
          animate={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={styles.modal}
            onClick={event => event.stopPropagation()}
            animate={{ scale: [0, 1], transformOrigin: 'bottom' }}
            exit={{ scale: 0 }}
          >
            <motion.button className={styles.closeButton} type='button' whileTap={{ scale: 0.9 }} onClick={onClose}>
              <CrossIcon />
            </motion.button>
            <div className={styles.content}>{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    documentBodyRef.current
  );
};

export default Modal;
