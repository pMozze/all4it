'use client';

import { FC, useId } from 'react';
import classNames from 'classnames';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import NavigationButton from '../navigation-button/NavigationButton';

import styles from './GalleryCarousel.module.css';

interface Props {
  className?: string;
  images: string[];
  slidesPerView?: number;
}

import Fancybox from '../fancybox/Fancybox';

const GalleryCarousel: FC<Props> = ({ className, images, slidesPerView = 1 }) => {
  const previousNavigationButtonId = useId();
  const nextNavigationButtonId = useId();

  return (
    <Fancybox className={classNames(styles.wrapper, className)}>
      <Swiper
        className={styles.carousel}
        wrapperClass={styles.carouselWrapper}
        slidesPerView={slidesPerView}
        spaceBetween={15}
        onBeforeInit={swiper => {
          swiper.params.navigation = {
            prevEl: document.getElementById(previousNavigationButtonId)!,
            nextEl: document.getElementById(nextNavigationButtonId)!,
            lockClass: styles.navigationButton_disabled,
            disabledClass: 'swiper-button-disabled',
            hiddenClass: 'swiper-button-hidden',
            navigationDisabledClass: 'swiper-navigation-disabled'
          };

          swiper.navigation.init();
        }}
        modules={[Navigation]}
      >
        {images.map((image, imageIndex) => (
          <SwiperSlide key={imageIndex} className={styles.carouselSlide}>
            <img src={image} alt='' data-fancybox />
          </SwiperSlide>
        ))}
      </Swiper>
      <NavigationButton
        id={previousNavigationButtonId}
        className={classNames(styles.navigationButton, styles.navigationButton_previous)}
        size='small'
        type='previous'
      />
      <NavigationButton
        id={nextNavigationButtonId}
        className={classNames(styles.navigationButton, styles.navigationButton_next)}
        size='small'
        type='next'
      />
    </Fancybox>
  );
};

export default GalleryCarousel;
