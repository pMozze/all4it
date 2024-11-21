'use client';

import { FC } from 'react';
import classNames from 'classnames';

import { useGlobalStore } from '@/shared/store';
import styles from './Preloader.module.css';

interface Props {
  className?: string;
}

const Preloader: FC<Props> = ({ className }) => {
  const { logotype } = useGlobalStore();
  return <img className={classNames(styles.image, className)} src={logotype} alt='' />;
};

export default Preloader;
