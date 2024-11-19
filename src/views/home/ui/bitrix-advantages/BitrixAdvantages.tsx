'use client';

import { FC } from 'react';
import Typewriter from 'typewriter-effect';
import classNames from 'classnames';

import { MarqueeCarousel } from '@/shared';

import styles from './BitrixAdvantages.module.css';

import { type Advantages } from '../../model';

const BitrixAdvantages: FC<Advantages> = ({ title, descriptionList, marqueeCarouseles }) => {
  return (
    <div className={classNames(styles.wrapper, 'container')}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.description}>
        <Typewriter
          component='p'
          options={{
            cursor: '',
            delay: 75,
            deleteSpeed: 0,
            strings: descriptionList,
            autoStart: true,
            loop: true
          }}
        />
      </div>
      <div className={styles.advantages}>
        {marqueeCarouseles.map((marqueeCarousele, marqueeCarouseleIndex) => (
          <MarqueeCarousel key={marqueeCarouseleIndex} reverse={!!(marqueeCarouseleIndex % 2)}>
            {marqueeCarousele.map((item, itemIndex) => (
              <div key={itemIndex} className={styles.advantagesItem}>
                {item}
              </div>
            ))}
          </MarqueeCarousel>
        ))}
      </div>
    </div>
  );
};

export default BitrixAdvantages;
