'use client';

import { FC } from 'react';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

import { motion } from 'framer-motion';
import classNames from 'classnames';

import ChevronRight from '@/shared/assets/icons/chevron-right.svg';

import styles from './ProjectCard.module.css';

interface Props {
  id: number;
  logotype: string;
  shortDescription: string;
  className?: string;
}

const MotionLink = motion.create(Link);

const ProjectCard: FC<Props> = ({ id, logotype, shortDescription, className }) => {
  const t = useTranslations('projects');

  return (
    <MotionLink
      whileHover={{ scale: 1.025, backgroundColor: '#010102' }}
      whileTap={{ scale: 0.925 }}
      href={`/projects/${id}`}
      className={classNames(styles.wrapper, className)}
    >
      <img className={styles.logotype} src={logotype} alt='' />
      <p className={styles.shortDescription}>{shortDescription}</p>
      <div className={styles.button}>
        {t('gotoProjectButton')}
        <ChevronRight />
      </div>
    </MotionLink>
  );
};

export default ProjectCard;
