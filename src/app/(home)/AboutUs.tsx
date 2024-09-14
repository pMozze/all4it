'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';
import styles from './AboutUs.module.css';

const AboutUs: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={classNames(styles.inner, 'container')}>
        <div className={styles.hero}>
          <h2 className={styles.heroTitle}>
            Наша миссия — предоставлять услуги высокого уровня, ориентированные на результат и долгосрочное
            сотрудничество.
          </h2>
          <p className={styles.heroDescription}>
            Мы — команда профессионалов, стремящихся к созданию качественных решений для наших клиентов.
            <br />
            <br />
            Молодая и амбициозная веб-студия, специализирующаяся на разработке и интеграции решений на платформах Bitrix
            и Bitrix24.
            <br />
            <br />
            Наша команда состоит из опытных разработчиков и целеустремленных специалистов, готовых решать сложные задачи
            и воплощать креативные идеи в реальность.
            <br />
            <br />
            Наши услуги включают полный цикл разработки: от первичного анализа и проектирования до внедрения и
            последующей поддержки, что позволяет нашим клиентам быть уверенными в надежности и долговечности созданных
            решений. Мы всегда открыты к диалогу и готовы предложить оптимальные варианты для достижения поставленных
            целей.
          </p>
        </div>
        <div className={styles.card}>
          <h4 className={styles.cardSmallTitle}>Чем мы занимаемся</h4>
          <div>
            <h2 className={styles.cardTitle}>
              Мы разрабатываем современные веб-проекты на основе Bitrix CMS и Bitrix Framework.
            </h2>
            <p className={styles.cardDescription}>
              Наша специализация включает: <br />
              • Создание и доработка корпоративных сайтов, интернет-магазинов и порталов на платформе Bitrix CMS. <br />
              • Интеграция и настройка Bitrix24 для автоматизации бизнес-процессов, управления CRM, задачами и
              проектами. <br />• Разработка пользовательских приложений и модулей для расширения функциональности Bitrix
              и Bitrix24. <br />• Техническая поддержка, консультации по оптимизации процессов работы с системами Bitrix
              и Bitrix24. <br />
            </p>
          </div>
          <motion.div
            className={styles.cardNumber}
            initial={{ translateX: '10%', opacity: 0 }}
            whileInView={{ translateX: '0%', opacity: 1 }}
            transition={{ ease: 'circOut', duration: 1 }}
            viewport={{ once: true }}
          >
            1
          </motion.div>
        </div>
        <div className={styles.card}>
          <h4 className={styles.cardSmallTitle}>Наши преимущества</h4>
          <div>
            <h2 className={styles.cardTitle}>
              Мы гордимся своими достижениями и способностью предложить клиентам индивидуальные и эффективные решения:
            </h2>
            <p className={styles.cardDescription}>
              • Глубокое понимание возможностей и специфики платформ Bitrix и Bitrix24. <br />
              • Подход к каждому проекту с учетом уникальных потребностей и бизнес-целей клиента. <br />
              • Высокий уровень профессионализма и ответственного отношения к выполнению задач. <br />
              • Гибкий подход к сотрудничеству, ориентированный на достижение результатов и удовлетворение потребностей
              заказчика. <br />
            </p>
          </div>
          <motion.div
            className={styles.cardNumber}
            initial={{ translateX: '10%', opacity: 0 }}
            whileInView={{ translateX: '0%', opacity: 1 }}
            transition={{ ease: 'circOut', duration: 1 }}
            viewport={{ once: true }}
          >
            2
          </motion.div>
        </div>
        <div className={styles.card}>
          <h4 className={styles.cardSmallTitle}>Почему выбирают нас</h4>
          <div>
            <h2 className={styles.cardTitle}>
              Долгосрочное партнерство и передовые цифровые решения для роста вашего бизнеса
            </h2>
            <p className={styles.cardDescription}>
              Мы предлагаем клиентам не только технологические решения, но и партнерство на долгосрочной основе. Наша
              цель — помогать бизнесам расти и развиваться, используя передовые цифровые технологии и стратегии.
            </p>
          </div>
          <motion.div
            className={styles.cardNumber}
            initial={{ translateX: '10%', opacity: 0 }}
            whileInView={{ translateX: '0%', opacity: 1 }}
            transition={{ ease: 'circOut', duration: 1 }}
            viewport={{ once: true }}
          >
            3
          </motion.div>
        </div>
        <div className={styles.card}>
          <h4 className={styles.cardSmallTitle}>Свяжитесь с нами</h4>
          <div>
            <h2 className={styles.cardTitle}>
              Узнайте, как мы можем помочь вашему бизнесу с Bitrix и Bitrix24 – свяжитесь с нами сегодня!
            </h2>
            <p className={styles.cardDescription}>
              Хотите узнать больше о том, как мы можем помочь вашему бизнесу на платформах Bitrix и Bitrix24? Свяжитесь
              с нами прямо сейчас, и мы с удовольствием обсудим ваш проект и предложим наилучшие решения для его
              реализации.
            </p>
          </div>
          <motion.div
            className={styles.cardNumber}
            initial={{ translateX: '10%', opacity: 0 }}
            whileInView={{ translateX: '0%', opacity: 1 }}
            transition={{ ease: 'circOut', duration: 1 }}
            viewport={{ once: true }}
          >
            4
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
