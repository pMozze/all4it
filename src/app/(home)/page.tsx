import { FC } from 'react';
import styles from './page.module.css';

import Hero from './Hero/Hero';
import BitrixAdvantages from './BitrixAdvantages/BitrixAdvantages';
import AboutUs from './AboutUs/AboutUs';
import Pricing from './Pricing/Pricing';
import Customers from './Customers/Customers';

const Page: FC = () => {
  return (
    <main className={styles.wrapper}>
      <Hero />
      <BitrixAdvantages />
      <AboutUs />
      <Pricing />
      <Customers />
    </main>
  );
};

export default Page;
