import { FC } from 'react';
import * as motion from 'framer-motion/client';
import styles from './Hero.module.css';

const Hero: FC = () => {
  const images = ['/hero/1.png'];

  return (
    <div className={styles.wrapper}>
      <div className='container'>
        <motion.h1
          initial={{
            translateY: '100px',
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
          Разработка
          <br />
          сайтов на 1C-Битрикс
        </motion.h1>
        <motion.h2
          initial={{
            translateY: '100px',
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
          Найдем решение, даже если кажется, что все зашло в тупик.
          <br />
          Знаем миллион способов, как хорошее сделать лучше без
          <br />
          каких-либо потерь.
        </motion.h2>
      </div>
      <div className={styles.imagesContainer}>
        {images.map((image, imageIndex) => (
          <motion.img
            initial={{
              scale: 1.5,
              opacity: 0
            }}
            animate={{
              scale: 1,
              opacity: 1
            }}
            transition={{ ease: 'circOut', delay: 2 + imageIndex * 0.5 + imageIndex - 1, duration: 1 }}
            key={imageIndex}
            className={styles.image}
            src={image}
            alt=''
            style={{ '--index': `${imageIndex + 1}` }}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
