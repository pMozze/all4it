'use client';

import { FC } from 'react';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

import { motion } from 'framer-motion';
import classNames from 'classnames';

import ChevronRight from '@/shared/assets/icons/chevron-right.svg';

import styles from './ServiceCard.module.css';

interface Props {
  id: number;
  title: string;
  className?: string;
}

const MotionLink = motion.create(Link);

const ServiceCard: FC<Props> = ({ id, title, className }) => {
  const t = useTranslations('services');

  return (
    <MotionLink
      whileHover={{ scale: 1.025, backgroundColor: '#010102' }}
      whileTap={{ scale: 0.925 }}
      href={`/services/${id}`}
      className={classNames(styles.wrapper, className)}
    >
      <p className={styles.title}>{title}</p>
      <div className={styles.button}>
        {t('gotoServiceButton')}
        <ChevronRight />
      </div>
    </MotionLink>
  );
};

export default ServiceCard;
