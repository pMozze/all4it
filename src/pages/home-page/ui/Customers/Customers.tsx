import { FC } from 'react';
import classNames from 'classnames';

import { MarqueeCarousel } from '@/entities/marquee-carousel';
import styles from './Customers.module.css';

interface Props {
  className?: string;
}

const Customers: FC<Props> = ({ className }) => {
  return (
    <div className={classNames(className, 'container')}>
      <div className={styles.title}>От стартапов нового поколения до хорошо зарекомендовавших себя предприятий</div>
      <MarqueeCarousel className={styles.carousel}>
        <a className={styles.customer} href='https://studentleague.pro/' target='_blank' rel='noopener noreferrer'>
          <img src='/customers/1.svg' alt='' />
        </a>
        <a className={styles.customer} href='https://wh-collection.ru/' target='_blank' rel='noopener noreferrer'>
          <img src='/customers/2.png' alt='' />
        </a>
        <a className={styles.customer} href='https://ushkova-team.ru/' target='_blank' rel='noopener noreferrer'>
          <img src='/customers/3.svg' alt='' />
        </a>
        <a className={styles.customer} href='https://siu.store/' target='_blank' rel='noopener noreferrer'>
          <img src='/customers/4.svg' alt='' />
        </a>
        <a className={styles.customer} href='http://bivium.ru/' target='_blank' rel='noopener noreferrer'>
          <img src='/customers/5.svg' alt='' />
        </a>
        <a className={styles.customer} href='https://www.westcomp.ru/' target='_blank' rel='noopener noreferrer'>
          <img src='/customers/6.png' alt='' />
        </a>
      </MarqueeCarousel>
    </div>
  );
};

export default Customers;
