import { FC } from 'react';
import classNames from 'classnames';

import styles from './Sync.module.css';

interface Props {
  className?: string;
}

const Sync: FC<Props> = ({ className }) => {
  return (
    <div className={classNames(className, styles.wrapper, 'container')}>
      <div className={styles.item}>
        <div className={styles.itemTitle}>📊 1С Бухгалтерия предприятия</div>
        <div className={styles.itemDescription}>
          Автоматический обмен данными для учета финансов, налогов и отчетности.
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.itemTitle}>🛒 1С Управление торговлей</div>
        <div className={styles.itemDescription}>Интеграция продаж, складских операций и управления ассортиментом.</div>
      </div>
      <div className={styles.item}>
        <div className={styles.itemTitle}>🏢 1С Управление нашей фирмой</div>
        <div className={styles.itemDescription}>
          Обмен данными по CRM, финансам и документообороту для малого бизнеса.
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.itemTitle}>🌐 ERP</div>
        <div className={styles.itemDescription}>
          Связь с корпоративной системой для управления ресурсами и бизнес-процессами.
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.itemTitle}>👥 1С ЗУП</div>
        <div className={styles.itemDescription}>
          Автоматизация кадрового учета, расчета зарплаты и кадровой отчетности.
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.itemTitle}>⚙️ Комплексная автоматизация</div>
        <div className={styles.itemDescription}>Полная интеграция всех бизнес-процессов: от учета до планирования.</div>
      </div>
    </div>
  );
};

export default Sync;
