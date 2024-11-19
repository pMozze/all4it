import { ReactNode } from 'react';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import GlobalStore from './GlobalStore';

import { fetchGlobals } from '@/shared/api/fetchGlobals';

const inter = Inter({ subsets: ['latin'] });

import './globals.css';
import styles from './layout.module.css';

export const generateMetadata = async (): Promise<Metadata> => {
  const globals = await fetchGlobals();

  return {
    title: globals.page.title,
    description: globals.page.description,
    icons: globals.logotype
  };
};

const RootLayout = async ({ children }: Readonly<{ children: ReactNode }>) => {
  const globals = await fetchGlobals();

  return (
    <html lang='ru'>
      <body className={inter.className}>
        <Header />
        <main className={styles.container}>{children}</main>
        <Footer />
        <GlobalStore {...globals} />
      </body>
    </html>
  );
};

export default RootLayout;
