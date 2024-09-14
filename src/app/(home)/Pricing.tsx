'use client';

import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Pricing.module.css';

const Pricing: FC = () => {
  return (
    <div>
      <div className='container'>
        <h2 className={styles.title}>Прейскурант</h2>
        <h3 className={styles.subtitle}>Широкий спектр профессиональных услуг для достижения ваших целей</h3>
      </div>
      <div className={styles.card}>
        <div className={styles.cardTitle}>Сайт-визитка</div>
        <div className={styles.cardPrice}>от 70 000 ₽</div>
        <div className={styles.cardTime}>от 3 недель</div>
        <div className={styles.cardDevider}></div>
        <div className={styles.cardDescription}></div>
      </div>
    </div>
  );
};

export default Pricing;
