import { ReactNode } from 'react';
import { Metadata, Viewport } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { AmbientLight } from '@/shared/ui';
import GlobalStore from './GlobalStore';
import YandexMetrika from './YandexMetrika';

import api from '@/shared/api';
import { fetchGlobals } from '@/shared/api/fetchGlobals';

import { inter, berkleyMono } from '@/shared/utils/fonts';
import classNames from 'classnames';

import './globals.css';
import styles from './layout.module.css';

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
};

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
      <body className={classNames(inter.variable, berkleyMono.variable)}>
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
