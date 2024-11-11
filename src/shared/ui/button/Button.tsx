import { FC, PropsWithChildren, ComponentPropsWithoutRef, forwardRef } from 'react';
import classNames from 'classnames';
import styles from './Button.module.css';

interface Props extends PropsWithChildren, ComponentPropsWithoutRef<'button'> {
  text?: string;
}

const Button: FC<Props> = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { text, children, className, ...rest } = props;

  if (text === undefined && children === undefined) {
    return null;
  }

  return (
    <button ref={ref} className={classNames(styles.wrapper, className)} {...rest}>
      {text ?? children}
    </button>
  );
});

Button.displayName = 'Button';
export default Button;
