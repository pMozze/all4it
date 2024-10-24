'use client';

import { FC, useState, useEffect } from 'react';
import classNames from 'classnames';

import MarqueeCarousel from '@/components/MarqueeCarousel/MarqueeCarousel';

import styles from './BitrixAdvantages.module.css';

const BitrixAdvantages: FC = () => {
  const [descriptionList, setDescriptionList] = useState<{
    stepIndex: number;
    items: string[];
  }>({
    stepIndex: 0,
    items: [
      'С Битрикс работают многие разработчики — всегда есть возможность выбора',
      'В CMS Bitrix уже есть много готовых модулей, которые покрывают большинство стандартных задач',
      'Специалисты техподдержки готовы оперативно прийти на помощь в случае возникновения проблем',
      'Разработчики Битрикс серьезно относятся с системе защиты, поддерживают ее в актуальном состоянии',
      'Управлять сайтом на Битрикс сможет даже неподготовленный пользователь — функционал очевиден и прост',
      'При достаточном объеме финансового и временного ресурса'
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setDescriptionList(descriptionList => {
        if (descriptionList.stepIndex > descriptionList.items.length - 1) {
          return { ...descriptionList, stepIndex: 0 };
        }

        return { ...descriptionList, stepIndex: descriptionList.stepIndex + 1 };
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classNames(styles.wrapper, 'container')}>
      <h2 className={styles.title}>Почему выбирают создание сайта на Битрикс?</h2>
      <p className={styles.description}>{descriptionList.items[descriptionList.stepIndex]}</p>
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
