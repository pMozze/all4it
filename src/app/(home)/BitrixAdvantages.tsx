'use client';

import { FC, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import classNames from 'classnames';
import styles from './BitrixAdvantages.module.css';

const BitrixAdvantages: FC = () => {
  const [descriptionList, setDescriptionList] = useState<{
    stepIndex: number;
    items: string[];
  }>({
    stepIndex: 0,
    items: [
      'С Битрикс работают многие разработчики — всегда есть возможность выбора',
      'В CMS Bitrix уже есть много готовых модулей, которые покрывают большинство стандартных задач',
      'Специалисты техподдержки готовы оперативно прийти на помощь в случае возникновения проблем',
      'Разработчики Битрикс серьезно относятся с системе защиты, поддерживают ее в актуальном состоянии',
      'Управлять сайтом на Битрикс сможет даже неподготовленный пользователь — функционал очевиден и прост',
      'При достаточном объеме финансового и временного ресурса'
    ]
  });

  const [advantages, setAdvantages] = useState<string[]>([
    'Распространенность',
    'Широкий функционал',
    'Быстрая поддержка',
    'Безопасность',
    'Легка в управлении',
    'Интеграция с 1С'
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAdvantages(advantages => [...advantages].sort(() => 0.5 - Math.random()));

      setDescriptionList(descriptionList => {
        if (descriptionList.stepIndex > descriptionList.items.length - 1) {
          return { ...descriptionList, stepIndex: 0 };
        }

        return { ...descriptionList, stepIndex: descriptionList.stepIndex + 1 };
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classNames(styles.wrapper, 'container')}>
      <h2 className={styles.title}>Почему выбирают создание сайта на Битрикс?</h2>
      <p className={styles.description}>{descriptionList.items[descriptionList.stepIndex]}</p>
      <div className={styles.advantages}>
        <AnimatePresence initial={false} mode='wait'>
          {advantages.map(item => (
            <motion.div
              initial={{
                scale: 0,
                filter: 'blur(5px)'
              }}
              animate={{
                scale: 1,
                filter: 'blur(0px)'
              }}
              exit={{
                scale: 0,
                filter: 'blur(5px)'
              }}
              transition={{ ease: 'circOut', duration: 0.5 }}
              key={Math.random()}
              className={styles.advantagesItem}
            >
              {item}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BitrixAdvantages;
