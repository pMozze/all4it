'use client';

import { FC } from 'react';
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

const MotionLink = motion(Link);

const ProjectCard: FC<Props> = ({ id, logotype, shortDescription, className }) => {
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
        Перейти к проекту
        <ChevronRight />
      </div>
    </MotionLink>
  );
};

export default ProjectCard;
