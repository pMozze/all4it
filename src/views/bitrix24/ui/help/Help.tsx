'use client';

import { FC, useState } from 'react';
import classNames from 'classnames';

import BuyIcon from '@/shared/assets/icons/buy.svg';
import HardDriveIcon from '@/shared/assets/icons/hard-drive.svg';
import TimeLapsIcon from '@/shared/assets/icons/time-laps.svg';

import styles from './Help.module.css';

interface Props {
  className?: string;
}

const Help: FC<Props> = ({ className }) => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className={classNames(className, styles.wrapper, 'container')}>
      <div className={styles.navigation}>
        <h2 className={styles.navigationTitle}>Чем мы сможем Вам помочь</h2>
        <div className={styles.navigationItems}>
          <button
            className={classNames(styles.navigationItem, activeTab === 1 && styles.navigationItem_active)}
            type='button'
            onClick={() => setActiveTab(1)}
          >
            Покупка
          </button>
          <button
            className={classNames(styles.navigationItem, activeTab === 2 && styles.navigationItem_active)}
            type='button'
            onClick={() => setActiveTab(2)}
          >
            Внедрение
          </button>
          <button
            className={classNames(styles.navigationItem, activeTab === 3 && styles.navigationItem_active)}
            type='button'
            onClick={() => setActiveTab(3)}
          >
            Интеграция и доработка
          </button>
        </div>
      </div>
      {activeTab === 1 && (
        <div className={styles.tab}>
          <div className={styles.tabIcon}>
            <BuyIcon />
          </div>
          <div className={styles.tabContent}>
            У нас Вы можете Купить лицензионную программу или попробовать бесплатно. Мы являемся официальным партнером
            фирмы Битрикс
          </div>
        </div>
      )}
      {activeTab === 2 && (
        <div className={styles.tab}>
          <div className={styles.tabIcon}>
            <HardDriveIcon />
          </div>
          <div className={styles.tabContent}>
            Внедряем и настраиваем Битрикс24. Подбор оптимального решения: Облачная или коробочная версия. Базовая
            настройка и консультации
          </div>
        </div>
      )}
      {activeTab === 3 && (
        <div className={styles.tab}>
          <div className={styles.tabIcon}>
            <TimeLapsIcon />
          </div>
          <div className={styles.tabContent}>
            Выполнение доработок CRM Битрикс24. -настройка телефонии -интеграция с соц. сетями -индивидуальные доработки
            -синхронизация с 1С
          </div>
        </div>
      )}
    </div>
  );
};

export default Help;
