import { FC } from 'react';
import styles from './page.module.css';

import Hero from './Hero';
import BitrixAdvantages from './BitrixAdvantages';
import AboutUs from './AboutUs';
import Pricing from './Pricing';

const Page: FC = () => {
  return (
    <main className={styles.wrapper}>
      <Hero />
      <BitrixAdvantages />
      <AboutUs />
      <Pricing />
    </main>
  );
};

export default Page;
