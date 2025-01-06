'use client';

import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import * as motion from 'framer-motion/client';
import { type Hero } from '../../model';
import styles from './Hero.module.css';

const Hero: FC<Hero> = ({ title, images, description }) => {
  return (
    <div className={styles.wrapper}>
      <div className='container'>
        <motion.h1
          initial={{
            translateY: '25px',
            opacity: 0,
            filter: 'blur(10px)'
          }}
          animate={{
            translateY: '0',
            opacity: 1,
            filter: 'blur(0px)'
          }}
          transition={{ ease: 'easeOut', duration: 1 }}
          className={styles.title}
        >
          {title}
        </motion.h1>
        <motion.h2
          initial={{
            translateY: '12.5px',
            opacity: 0,
            filter: 'blur(10px)'
          }}
          animate={{
            translateY: '0',
            opacity: 1,
            filter: 'blur(0px)'
          }}
          transition={{ ease: 'easeOut', duration: 0.5, delay: 0.5 }}
          className={styles.subtitle}
        >
          {description}
        </motion.h2>
      </div>
      <Swiper
        className={styles.imagesContainer}
        wrapperClass={styles.imagesCarouselWrapper}
        loop
        spaceBetween={6}
        centeredSlides
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        allowTouchMove={false}
        breakpoints={{
          0: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 'auto'
          }
        }}
      >
        {images.map((image, imageIndex) => (
          <SwiperSlide key={imageIndex} className={styles.imagesCarouselSlide}>
            <img key={imageIndex} className={styles.image} src={image} alt='' />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
