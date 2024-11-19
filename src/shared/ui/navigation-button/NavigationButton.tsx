'use client';

import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';

import ChevronRightIcon from '@/shared/assets/icons/chevron-right.svg';
import ChevronLeftIcon from '@/shared/assets/icons/chevron-left.svg';

import styles from './NavigationButton.module.css';

interface Props {
  size: 'small' | 'medium';
  type: 'previous' | 'next';
  id?: string;
  className?: string;
}

const NavigationButton = forwardRef<HTMLButtonElement, Props>((props, forwardedRef) => {
  const { size, type, id, className } = props;
  const [isDisabled, setIsDisabled] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current!;

    const observer = new MutationObserver(mutations => {
      for (const mutation of mutations) {
        if (mutation.type !== 'attributes') {
          continue;
        }

        setIsDisabled(!!button.disabled);
      }
    });

    observer.observe(button, { attributes: true });
    return () => observer.disconnect();
  }, []);

  useImperativeHandle(forwardedRef, () => buttonRef.current!, []);

  return (
    <motion.button
      ref={buttonRef}
      id={id}
      className={classNames(
        styles.wrapper,
        {
          [styles.small]: size === 'small',
          [styles.medium]: size === 'medium'
        },
        className
      )}
      type='button'
      whileTap={{ scale: isDisabled ? 1 : 0.9 }}
      disabled={isDisabled}
    >
      {type === 'previous' && <ChevronLeftIcon />}
      {type === 'next' && <ChevronRightIcon />}
    </motion.button>
  );
});

NavigationButton.displayName = 'NavigationButton';
export default NavigationButton;
