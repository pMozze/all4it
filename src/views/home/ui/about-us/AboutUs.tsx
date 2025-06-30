'use client';

import { FC, useEffect, useRef } from 'react';
import parse from 'html-react-parser';
import classNames from 'classnames';

import Card from './card/Card';

import styles from './AboutUs.module.css';

import { type Aboutus } from '../../model';

import useLocationHash from '@/shared/hooks/useLocationHash';

const AboutUs: FC<Aboutus> = ({ title, description, cards }) => {
  const hash = useLocationHash();
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hash === '#about-us') {
      wrapperRef.current!.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  }, [hash]);

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <div className={classNames(styles.inner, 'container')}>
        <div className={styles.hero}>
          <h2 className={styles.heroTitle}>{title}</h2>
          <p className={styles.heroDescription}>{parse(description)}</p>
        </div>
        {cards.map((card, cardIndex) => (
          <Card key={cardIndex} subtitle={card.subtitle} title={card.title} bigNumber={cardIndex + 1}>
            {parse(card.description)}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
