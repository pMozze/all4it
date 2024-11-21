import { FC } from 'react';
import { Preloader } from '@/shared/ui';
import styles from './loading.module.css';

const Loading: FC = () => {
  return <Preloader className={styles.preloader} />;
};

export default Loading;
