'use client';

import { FC, PropsWithChildren, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

import CrossIcon from '@/shared/assets/icons/cross.svg';

import styles from './Modal.module.css';

interface Props extends PropsWithChildren {
  title?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

const Modal: FC<Props> = ({ title, isOpen, onClose, children }) => {
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
          key='backdrop'
          className={styles.modalBackdrop}
          onClick={event => console.log(event)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { ease: 'circOut', duration: 0.25 } }}
          exit={{ opacity: 0, transition: { ease: 'circIn', duration: 0.25 } }}
        >
          <motion.div
            key='modal'
            className={styles.modal}
            onClick={event => event.stopPropagation()}
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { ease: 'circOut', duration: 0.25 } }}
            exit={{ scale: 0, transition: { ease: 'circIn', duration: 0.25 } }}
          >
            <div className={styles.header}>
              {title && <div className={styles.title}>{title}</div>}
              <motion.button className={styles.closeButton} type='button' whileTap={{ scale: 0.9 }} onClick={onClose}>
                <CrossIcon />
              </motion.button>
            </div>
            <div className={styles.content}>{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    documentBodyRef.current
  );
};

export default Modal;
