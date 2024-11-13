'use client';

import { FC } from 'react';
import parse from 'html-react-parser';
import classNames from 'classnames';

import Card from './Card/Card';

import styles from './AboutUs.module.css';

import { type Aboutus } from '../../model';

const AboutUs: FC<Aboutus> = ({ title, description, cards }) => {
  return (
    <div className={styles.wrapper}>
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
