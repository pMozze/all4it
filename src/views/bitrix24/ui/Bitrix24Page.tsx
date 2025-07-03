import { FC } from 'react';

import Hero from './hero/Hero';
import Functions from './functions/Functions';
import Help from './help/Help';
import Sync from './sync/Sync';

import styles from './Bitrix24Page.module.css';

const Bitrix24Page: FC = () => {
  return (
    <>
      <Hero />
      <Functions className={styles.functions} />
      <Help className={styles.help} />
      <Sync className={styles.sync} />
    </>
  );
};

export default Bitrix24Page;
