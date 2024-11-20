'use client';

import { FC, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import classNames from 'classnames';

import { type Pricelist } from '../../model';

import { formatPrice } from '@/shared/utils';
import { Button } from '@/shared/ui';
import { FeedbackFormModal } from '@/widgets/feedback-form-modal';

import ChevronLeftIcon from '@/shared/assets/icons/chevron-left.svg';
import ChevronRightIcon from '@/shared/assets/icons/chevron-right.svg';

import styles from './Pricing.module.css';

const Pricing: FC<Pricelist> = ({ title, description, items }) => {
  const router = useRouter();
  const swiperRef = useRef<SwiperClass>();
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

  return (
    <div id='services'>
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
        {items.map((item, itemIndex) => (
          <SwiperSlide key={itemIndex} className={styles.carouselSlide}>
            <div className={classNames(styles.card, item.isHighlighted && styles.active)}>
              <div className={styles.cardTitle}>{item.title}</div>
              <div className={styles.cardPrice}>от {formatPrice(item.priceFrom)}</div>
              <div className={styles.cardTime}>{item.time}</div>
              <div className={styles.cardDivider}></div>
              <div className={styles.cardDescription}>{item.description}</div>
              <div className={styles.cardFooter}>
                <Button
                  className={styles.cardButton}
                  variant={item.isHighlighted ? 'light' : 'dark'}
                  text='Подробнее'
                  onClick={() => router.push(`/services/${itemIndex}`)}
                />
                {item.isHighlighted && (
                  <button className={styles.cardModalButton} type='button' onClick={() => setIsFeedbackModalOpen(true)}>
                    сделать заказ
                  </button>
                )}
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
      <FeedbackFormModal isOpen={isFeedbackModalOpen} onClose={() => setIsFeedbackModalOpen(false)} />
    </div>
  );
};

export default Pricing;
