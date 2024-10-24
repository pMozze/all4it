import { ReactNode } from 'react';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Header from '@/components/layouts/Header/Header';
import Footer from '@/components/layouts/Footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  icons: '/favicon.svg',
  title: 'All4it – Разработка сайтов на 1С-Битрикс',
  description:
    'Найдем решение, даже если кажется, что все зашло в тупик. Знаем миллион способов, как хорошее сделать лучше без каких-либо потерь.'
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang='ru'>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
