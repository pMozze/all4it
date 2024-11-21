'use client';

import { FC } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import type { UrlObject } from 'url';
import classNames from 'classnames';

import ChevronLeftIcon from '@/shared/assets/icons/chevron-left.svg';

import styles from './BackButton.module.css';

interface Props {
  href: string | UrlObject;
  className?: string;
}

const BackButton: FC<Props> = ({ href, className }) => {
  const t = useTranslations('');
  return (
    <Link href={href} className={classNames(styles.wrapper, className)}>
      <ChevronLeftIcon />
      {t('backButton')}
    </Link>
  );
};

export default BackButton;
