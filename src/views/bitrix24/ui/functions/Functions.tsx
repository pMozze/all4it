import { FC } from 'react';
import classNames from 'classnames';

import styles from './Functions.module.css';

interface Props {
  className?: string;
}

const Functions: FC<Props> = ({ className }) => {
  return (
    <div className={classNames(className, 'container')}>
      <h2 className={styles.title}>Какие функции выполняет Bitrix24</h2>
      <p className={styles.description}>
        Bitrix24 - CRM сервис для управления бизнесом, заказами и продажами с возможностью двухсторонней связи
        (интеграции) с 1С:Предприятием.
      </p>
      <div className={styles.list}>
        <div className={styles.listItem}>
          <div className={styles.listItemNumber}>01</div>
          <div className={styles.listItemTitle}>CRM</div>
          <div className={styles.listItemDescription}>
            Система взаимодействия с клиентами, повышения уровня продаж, качества обслуживания и оптимизация
            маркетинговых проектов.
          </div>
        </div>
        <div className={styles.listItem}>
          <div className={styles.listItemNumber}>02</div>
          <div className={styles.listItemTitle}>Менеджер задач</div>
          <div className={styles.listItemDescription}>Инструмент для постановки и контроля задач.</div>
        </div>
        <div className={styles.listItem}>
          <div className={styles.listItemNumber}>03</div>
          <div className={styles.listItemTitle}>Корпоративная социальная сеть</div>
          <div className={styles.listItemDescription}>Инструмент для повышения уровня корпоративной культуры.</div>
        </div>
        <div className={styles.listItem}>
          <div className={styles.listItemNumber}>04</div>
          <div className={styles.listItemTitle}>Чат</div>
          <div className={styles.listItemDescription}>Удобный единый мессенджер для всех сотрудников.</div>
        </div>
        <div className={styles.listItem}>
          <div className={styles.listItemNumber}>05</div>
          <div className={styles.listItemTitle}>Облачное хранилище</div>
          <div className={styles.listItemDescription}>Доступ к корпоративным документам 24/7 из офиса или дома.</div>
        </div>
        <div className={styles.listItem}>
          <div className={styles.listItemNumber}>06</div>
          <div className={styles.listItemTitle}>Корпоративный календарь</div>
          <div className={styles.listItemDescription}>
            Планируйте встречи события и звонки в одной &quot;экосистеме&quot;.
          </div>
        </div>
        <div className={styles.listItem}>
          <div className={styles.listItemNumber}>07</div>
          <div className={styles.listItemTitle}>Бизнес-процессы</div>
          <div className={styles.listItemDescription}>
            Инструмент по автоматизации бизнес-процессов средствами Битрикс24.
          </div>
        </div>
        <div className={styles.listItem}>
          <div className={styles.listItemNumber}>08</div>
          <div className={styles.listItemTitle}>Учёт рабочего времени</div>
          <div className={styles.listItemDescription}>
            Учёт рабочего времени сотрудников, перерывов, начало и конец рабочего дня. С подробной статистикой для
            руководителя.
          </div>
        </div>
        <div className={styles.listItem}>
          <div className={styles.listItemNumber}>09</div>
          <div className={styles.listItemTitle}>Мобильное приложение</div>
          <div className={styles.listItemDescription}>
            Позволит оптимизировать работу &quot;полевых&quot; сотрудников и получать все уведомления на смартфон по
            аналогии с популярными мессенджерами.
          </div>
        </div>
        <div className={styles.listItem}>
          <div className={styles.listItemNumber}>10</div>
          <div className={styles.listItemTitle}>Аудио и видеозвонки</div>
          <div className={styles.listItemDescription}>
            Пользуйтесь полноценной телефонией с аналитикой от Битрикс24.
          </div>
        </div>
        <div className={styles.listItem}>
          <div className={styles.listItemNumber}>11</div>
          <div className={styles.listItemTitle}>Структура компании</div>
          <div className={styles.listItemDescription}>
            Индивидуальная информационная карточка по каждому сотруднику. Отображение корпоративной иерархии.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Functions;
