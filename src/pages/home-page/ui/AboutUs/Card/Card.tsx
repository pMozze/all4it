import { FC, ReactNode } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import styles from './Card.module.css';

interface Props {
  subtitle: string;
  title: string;
  children: ReactNode;
  bigNumber: number;
  className?: string;
}

const Card: FC<Props> = ({ subtitle, title, bigNumber, children, className }) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <h4 className={styles.subtitle}>{subtitle}</h4>
      <div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{children}</p>
      </div>
      <motion.div
        className={styles.bigNumber}
        initial={{ translateX: '10%', opacity: 0 }}
        whileInView={{ translateX: '0%', opacity: 1 }}
        transition={{ ease: 'circOut', duration: 1 }}
        viewport={{ once: true, amount: 0.9 }}
      >
        {bigNumber}
      </motion.div>
    </div>
  );
};

export default Card;
