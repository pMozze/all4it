import { ReactNode } from 'react';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { AmbientLight } from '@/shared/ui';
import GlobalStore from './GlobalStore';
import YandexMetrika from './YandexMetrika';

import api from '@/shared/api';
import { fetchGlobals } from '@/shared/api/fetchGlobals';

const inter = Inter({ subsets: ['latin'] });

import './globals.css';
import styles from './layout.module.css';

export const generateMetadata = async (): Promise<Metadata> => {
  const locale = await getLocale();

  api.interceptors.request.use(config => {
    config.headers['Accept-Language'] = locale;
    return config;
  });

  const globals = await fetchGlobals(locale);

  return {
    title: globals.page.title,
    description: globals.page.description,
    icons: globals.logotype
  };
};

const RootLayout = async ({ children }: Readonly<{ children: ReactNode }>) => {
  const locale = await getLocale();
  const messages = await getMessages();

  api.interceptors.request.use(config => {
    config.headers['Accept-Language'] = locale;
    return config;
  });

  const globals = await fetchGlobals(locale);

  return (
    <html lang={locale}>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1' />
      </head>
      <body className={inter.className}>
        <YandexMetrika />
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className={styles.container}>{children}</main>
          <Footer />
          <AmbientLight />
          <GlobalStore {...globals} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
