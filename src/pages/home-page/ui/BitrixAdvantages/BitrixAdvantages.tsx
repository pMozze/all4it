'use client';

import { FC } from 'react';
import Typewriter from 'typewriter-effect';
import classNames from 'classnames';

import { MarqueeCarousel } from '@/entities/marquee-carousel';

import styles from './BitrixAdvantages.module.css';

const BitrixAdvantages: FC = () => {
  return (
    <div className={classNames(styles.wrapper, 'container')}>
      <h2 className={styles.title}>Почему выбирают создание сайта на Битрикс?</h2>
      <div className={styles.description}>
        <Typewriter
          component='p'
          options={{
            cursor: '',
            delay: 75,
            deleteSpeed: 0,
            strings: [
              'С Битрикс работают многие разработчики — всегда есть возможность выбора',
              'В CMS Bitrix уже есть много готовых модулей, которые покрывают большинство стандартных задач',
              'Специалисты техподдержки готовы оперативно прийти на помощь в случае возникновения проблем',
              'Разработчики Битрикс серьезно относятся с системе защиты, поддерживают ее в актуальном состоянии',
              'Управлять сайтом на Битрикс сможет даже неподготовленный пользователь — функционал очевиден и прост',
              'При достаточном объеме финансового и временного ресурса'
            ],
            autoStart: true,
            loop: true
          }}
        />
      </div>
      <div className={styles.advantages}>
        <MarqueeCarousel>
          <div className={styles.advantagesItem}>Распространенность</div>
          <div className={styles.advantagesItem}>Широкий функционал</div>
          <div className={styles.advantagesItem}>Быстрая поддержка</div>
        </MarqueeCarousel>
        <MarqueeCarousel reverse>
          <div className={styles.advantagesItem}>Безопасность</div>
          <div className={styles.advantagesItem}>Легка в управлении</div>
          <div className={styles.advantagesItem}>Интеграция с 1С</div>
        </MarqueeCarousel>
      </div>
    </div>
  );
};

export default BitrixAdvantages;
