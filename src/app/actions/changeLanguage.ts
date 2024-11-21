'use server';

import { cookies } from 'next/headers';

export const changeLanguage = async (language: 'ru' | 'en') => {
  cookies().set('NEXT_LOCALE', language);
};
