import { FC } from 'react';
import { getTranslations, getLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import parse from 'html-react-parser';
import classNames from 'classnames';

import { fetchService } from '../api';
import { BackButton } from '@/shared/ui';
import { formatPrice } from '@/shared/utils';

import OrderButton from './OrderButton';
import styles from './ServicePage.module.css';

interface Props {
  id: number;
}

const ServicePage: FC<Props> = async ({ id }) => {
  const locale = await getLocale();
  const t = await getTranslations('service');
  const service = await fetchService(id);

  if (!service) {
    return notFound();
  }

  return (
    <div className={classNames(styles.wrapper, 'container')}>
      <BackButton className={styles.backButton} href='/services' />
      <article className={styles.service}>
        <h1 className={styles.title}>{service.title}</h1>
        <div className={styles.divider}></div>
        <div className={styles.description}>{parse(service.description)}</div>
      </article>
      <aside className={styles.sidebar}>
        <div className={styles.serviceName}>{service.title}</div>
        <div className={styles.sidebarDivider}></div>
        <div className={styles.sidebarBlock}>
          <div className={styles.sidebarBlockTitle}>{t('price')}</div>
          <div className={styles.sidebarBlockDescription}>
            {locale === 'ru' ? 'от' : 'from'} {formatPrice(service.priceFrom, locale)}
          </div>
        </div>
        <div className={styles.sidebarBlock}>
          <div className={styles.sidebarBlockTitle}>{t('time')}</div>
          <div className={styles.sidebarBlockDescription}>{service.time}</div>
        </div>
        <div className={styles.sidebarDivider}></div>
        <OrderButton />
      </aside>
    </div>
  );
};

export default ServicePage;
