import { FC } from 'react';
import styles from './HomePage.module.css';

import Hero from './Hero/Hero';
import BitrixAdvantages from './BitrixAdvantages/BitrixAdvantages';
import AboutUs from './AboutUs/AboutUs';
import Pricing from './Pricing/Pricing';
import Customers from './Customers/Customers';

import { fetchHomePage } from '../api';

const HomePage: FC = async () => {
  const homepage = await fetchHomePage();

  return (
    <main className={styles.wrapper}>
      <Hero {...homepage.hero} />
      <BitrixAdvantages {...homepage.advantages} />
      <AboutUs {...homepage.aboutus} />
      <Pricing {...homepage.pricelist} />
      <Customers {...homepage.customers} />
    </main>
  );
};

export default HomePage;
