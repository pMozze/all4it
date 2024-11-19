import { FC } from 'react';
import styles from './HomePage.module.css';

import Hero from './hero/Hero';
import BitrixAdvantages from './bitrix-advantages/BitrixAdvantages';
import AboutUs from './about-us/AboutUs';
import Pricing from './pricing/Pricing';
import Customers from './customers/Customers';

import { fetchHomePage } from '../api';

const HomePage: FC = async () => {
  const homepage = await fetchHomePage();

  return (
    <div className={styles.wrapper}>
      <Hero {...homepage.hero} />
      <BitrixAdvantages {...homepage.advantages} />
      <AboutUs {...homepage.aboutus} />
      <Pricing {...homepage.pricelist} />
      <Customers {...homepage.customers} />
    </div>
  );
};

export default HomePage;
