'use client';

import { FC } from 'react';
import { useGlobalStore } from '@/shared/store';
import styles from './Preloader.module.css';

interface Props {
  className?: string;
}

const Preloader: FC<Props> = ({ className }) => {
  const { logotype } = useGlobalStore();

  return (
    <div className={className}>
      <img className={styles.image} src={logotype} alt='' />
    </div>
  );
};

export default Preloader;
