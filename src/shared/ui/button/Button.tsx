'use client';

import { FC, PropsWithChildren, HTMLProps, forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import classNames from 'classnames';
import styles from './Button.module.css';

interface Props extends HTMLMotionProps<'button'> {
  text?: string;
  variant: 'light' | 'dark';
}

const Button: FC<Props> = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { text, variant, children, className, ...rest } = props;

  if (text === undefined && children === undefined) {
    return null;
  }

  return (
    <motion.button
      ref={ref}
      whileTap={{ scale: 0.9 }}
      className={classNames(
        styles.wrapper,
        { [styles.light]: variant === 'light', [styles.dark]: variant === 'dark' },
        className
      )}
      {...rest}
    >
      {text ?? children}
    </motion.button>
  );
});

Button.displayName = 'Button';
export default Button;
