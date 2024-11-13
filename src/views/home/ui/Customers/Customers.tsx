import { FC } from 'react';
import classNames from 'classnames';

import { MarqueeCarousel } from '@/entities/marquee-carousel';
import styles from './Customers.module.css';

import { type Customers } from '../../model';

interface Props extends Customers {
  className?: string;
}

const Customers: FC<Props> = ({ description, items, className }) => {
  return (
    <div className={classNames(className, 'container')}>
      <div className={styles.title}>{description}</div>
      <MarqueeCarousel className={styles.carousel}>
        {items.map((item, itemIndex) => (
          <a key={itemIndex} className={styles.customer} href={item.url} target='_blank' rel='noopener noreferrer'>
            <img src={item.image} alt='' />
          </a>
        ))}
      </MarqueeCarousel>
    </div>
  );
};

export default Customers;
