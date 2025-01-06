import { FC } from 'react';
import { getTranslations } from 'next-intl/server';

import { fetchServices } from '../api';

import ServiceCard from './service-card/ServiceCard';

import styles from './ServicesPage.module.css';

const ServicesPage: FC = async () => {
  const t = await getTranslations('services');
  const services = await fetchServices();

  return (
    <div className={styles.wrapper}>
      <div className='container'>
        <div className={styles.hero}>
          <div className={styles.subtitle}>{t('subtitle')}</div>
          <hgroup>
            <h1 className={styles.title}>{t('title')}</h1>
            <p className={styles.description}>{t('description')}</p>
          </hgroup>
        </div>
        <div className={styles.services}>
          {services.map(service => (
            <ServiceCard key={service.id} id={service.id} title={service.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
