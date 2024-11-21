import { FC } from 'react';
import styles from './AmbientLight.module.css';

const AmbientLight: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.item}></div>
      <div className={styles.item}></div>
      <div className={styles.item}></div>
    </div>
  );
};

export default AmbientLight;
