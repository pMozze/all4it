'use client';

import { FC, useRef, useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';

import { motion } from 'framer-motion';
import classNames from 'classnames';

import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import { type Pricelist } from '../../model';

import useLocationHash from '@/shared/hooks/useLocationHash';
import { formatPrice } from '@/shared/utils';
import { Button } from '@/shared/ui';

import { ServiceModal } from '@/widgets/service-modal';
import { FeedbackFormModal } from '@/widgets/feedback-form-modal';

import ChevronLeftIcon from '@/shared/assets/icons/chevron-left.svg';
import ChevronRightIcon from '@/shared/assets/icons/chevron-right.svg';

import styles from './Pricing.module.css';

const Pricing: FC<Pricelist> = ({ title, description, items }) => {
  const hash = useLocationHash();

  const locale = useLocale();
  const t = useTranslations('homepage.services');

  const swiperRef = useRef<SwiperClass>();
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState<{ serviceId: number | null; isOpen: boolean }>({
    serviceId: null,
    isOpen: false
  });

  useEffect(() => {
    if (hash === '#services') {
      wrapperRef.current!.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
  }, [hash]);

  return (
    <div ref={wrapperRef}>
      <div className='container'>
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.subtitle}>{description}</h3>
      </div>
      <Swiper
        className={styles.carousel}
        wrapperClass={styles.carouselWrapper}
        modules={[Navigation]}
        slidesPerView={'auto'}
        centeredSlides
        initialSlide={2}
        onInit={swiper => (swiperRef.current = swiper)}
      >
        {items?.map((item, itemIndex) => (
          <SwiperSlide key={itemIndex} className={styles.carouselSlide}>
            <div className={classNames(styles.card, item.isHighlighted && styles.active)}>
              <div className={styles.cardTitle}>{item.title}</div>
              <div className={styles.cardPrice}>
                {locale === 'ru' ? 'от' : 'from'} {formatPrice(item.priceFrom, locale)}
              </div>
              <div className={styles.cardTime}>{item.time}</div>
              <div className={styles.cardDivider}></div>
              <div className={styles.cardDescription}>{item.shortDescription}</div>
              <div className={styles.cardFooter}>
                <Button
                  className={styles.cardButton}
                  variant={item.isHighlighted ? 'light' : 'dark'}
                  text={t('orderButton')}
                  onClick={() => setIsFeedbackModalOpen(true)}
                />
                <button
                  className={styles.cardModalButton}
                  type='button'
                  onClick={() => setIsServiceModalOpen({ serviceId: item.id, isOpen: true })}
                >
                  {t('detailsButton')}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className={styles.carouselNavigation}>
          <motion.button
            className={styles.carouselNavigationButton}
            type='button'
            onClick={() => swiperRef.current?.slidePrev()}
            whileTap={{
              scale: 0.9
            }}
          >
            <ChevronLeftIcon width={18} height={18} />
          </motion.button>
          <motion.button
            className={styles.carouselNavigationButton}
            type='button'
            onClick={() => swiperRef.current?.slideNext()}
            whileTap={{
              scale: 0.9
            }}
          >
            <ChevronRightIcon width={18} height={18} />
          </motion.button>
        </div>
      </Swiper>
      <ServiceModal
        serviceId={isServiceModalOpen.serviceId}
        isOpen={isServiceModalOpen.isOpen}
        onClose={() => setIsServiceModalOpen({ serviceId: null, isOpen: false })}
      />
      <FeedbackFormModal isOpen={isFeedbackModalOpen} onClose={() => setIsFeedbackModalOpen(false)} />
    </div>
  );
};

export default Pricing;
