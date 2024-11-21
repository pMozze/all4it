import { FC } from 'react';
import * as motion from 'framer-motion/client';
import styles from './Hero.module.css';

import { type Hero } from '../../model';

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
      <div className={styles.imagesContainer}>
        {images.map((image, imageIndex) => (
          <motion.img
            initial={{
              translate: '0 24px',
              opacity: 0
            }}
            animate={{
              translate: '0 0px',
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
