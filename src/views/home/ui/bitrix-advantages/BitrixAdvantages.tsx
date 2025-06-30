'use client';

import { FC, useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import classNames from 'classnames';

import useLocationHash from '@/shared/hooks/useLocationHash';
import { MarqueeCarousel } from '@/shared/ui';

import styles from './BitrixAdvantages.module.css';

import { type Advantages } from '../../model';

const BitrixAdvantages: FC<Advantages> = ({ title, descriptionList, marqueeCarouseles }) => {
  const hash = useLocationHash();
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hash === '#bitrix') {
      wrapperRef.current!.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
  }, [hash]);

  return (
    <div ref={wrapperRef} className={classNames(styles.wrapper, 'container')}>
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
