'use client';

import { FC, useRef } from 'react';
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import classNames from 'classnames';
import styles from './Pricing.module.css';

import ChevronLeftIcon from '@/shared/assets/icons/chevron-left.svg';
import ChevronRightIcon from '@/shared/assets/icons/chevron-right.svg';

const Pricing: FC = () => {
  const swiperRef = useRef<SwiperClass>();

  return (
    <div>
      <div className='container'>
        <h2 className={styles.title}>Прейскурант</h2>
        <h3 className={styles.subtitle}>Широкий спектр профессиональных услуг для достижения ваших целей</h3>
      </div>
      <Swiper
        className={styles.carousel}
        wrapperClass={styles.carouselWrapper}
        modules={[Navigation]}
        centeredSlides
        slidesPerView={'auto'}
        onInit={swiper => (swiperRef.current = swiper)}
        allowTouchMove={false}
      >
        <SwiperSlide className={styles.carouselSlide}>
          <div className={styles.card}>
            <div className={styles.cardTitle}>Сайт-визитка</div>
            <div className={styles.cardPrice}>от 70 000 ₽</div>
            <div className={styles.cardTime}>от 3 недель</div>
            <div className={styles.cardDivider}></div>
            <div className={styles.cardDescription}>
              Создаем простой и стильный сайт для презентации вашего бизнеса, услуг или портфолио. Быстрое решение для
              присутствия в интернете.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.carouselSlide}>
          <div className={styles.card}>
            <div className={styles.cardTitle}>Промо-сайт</div>
            <div className={styles.cardPrice}>от 70 000 ₽</div>
            <div className={styles.cardTime}>от 3 недель</div>
            <div className={styles.cardDivider}></div>
            <div className={styles.cardDescription}>
              Эффективный инструмент для продвижения акции, продукта или мероприятия. Привлекает внимание и мотивирует к
              действию.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.carouselSlide}>
          <div className={styles.card}>
            <div className={styles.cardTitle}>Лендинг</div>
            <div className={styles.cardPrice}>от 70 000 ₽</div>
            <div className={styles.cardTime}>от 3 недель</div>
            <div className={styles.cardDivider}></div>
            <div className={styles.cardDescription}>
              Одностраничный сайт, сфокусированный на конверсии. Идеально подходит для запуска продукта, сбора заявок
              или регистрации на мероприятие.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.carouselSlide}>
          <div className={classNames(styles.card, styles.active)}>
            <div className={styles.cardTitle}>Интернет-магазин</div>
            <div className={styles.cardPrice}>от 70 000 ₽</div>
            <div className={styles.cardTime}>от 3 недель</div>
            <div className={styles.cardDivider}></div>
            <div className={styles.cardDescription}>
              Разрабатываем интернет-магазины с удобной системой управления товарами, оплатой и доставкой. Адаптивный
              дизайн, интеграция с CRM и аналитикой. Дополнительно — скидки, программы лояльности, каталогизация.
              Интуитивный интерфейс для удобства администраторов и покупателей, готовность к масштабированию бизнеса.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.carouselSlide}>
          <div className={styles.card}>
            <div className={styles.cardTitle}>Корпоративный</div>
            <div className={styles.cardPrice}>от 70 000 ₽</div>
            <div className={styles.cardTime}>от 3 недель</div>
            <div className={styles.cardDivider}></div>
            <div className={styles.cardDescription}>
              Разрабатываем сайты для компаний с множеством разделов, чтобы эффективно представить бизнес, его миссию и
              услуги клиентам.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.carouselSlide}>
          <div className={styles.card}>
            <div className={styles.cardTitle}>Веб-приложение</div>
            <div className={styles.cardPrice}>от 70 000 ₽</div>
            <div className={styles.cardTime}>от 3 недель</div>
            <div className={styles.cardDivider}></div>
            <div className={styles.cardDescription}>
              Разработка интерактивных веб-приложений для решения уникальных бизнес-задач и автоматизации процессов.
            </div>
          </div>
        </SwiperSlide>
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
    </div>
  );
};

export default Pricing;
