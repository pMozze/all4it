'use client';

import { FC, ReactElement, Children } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import classNames from 'classnames';
import styles from './MarqueeCarousel.module.css';

interface Props {
  className?: string;
  reverse?: boolean;
  children: ReactElement[];
}

const MarqueeCarousel: FC<Props> = ({ className, reverse, children }) => {
  return (
    <Swiper
      className={classNames(styles.carousel, className)}
      wrapperClass={styles.carouselWrapper}
      modules={[Autoplay]}
      autoplay={{
        delay: 1,
        reverseDirection: reverse
      }}
      loop
      spaceBetween={150}
      speed={9000}
      slidesPerView={3}
      centeredSlides
      allowTouchMove={false}
    >
      {Children.map(children, (child, childIndex) => (
        <SwiperSlide key={childIndex} className={styles.carouselSlide}>
          {child}
        </SwiperSlide>
      ))}
      {Children.map(children, (child, childIndex) => (
        <SwiperSlide key={childIndex} className={styles.carouselSlide}>
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MarqueeCarousel;
