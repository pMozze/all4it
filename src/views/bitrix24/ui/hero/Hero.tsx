import { FC } from 'react';
import classNames from 'classnames';

import styles from './Hero.module.css';

const Hero: FC = () => {
  return (
    <div className={classNames(styles.wrapper, 'container')}>
      <h2 className={styles.subtitle}>Интеграция позволит вам эффективно управлять бизнес-процессами компании.</h2>
      <h1 className={styles.title}>Быстрый запуск и настройка Битрикс 24 для Вашего предприятия</h1>
      <p className={styles.description}>
        Сириус - Официальный партнер фирмы Битрикс. Компания с 10 летним опытом разработки и внедрения программных
        продуктов, с офисом в Москве.
      </p>
    </div>
  );
};

export default Hero;
