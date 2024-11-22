import { headers, cookies } from 'next/headers';
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
  let locale = cookies().get('NEXT_LOCALE')?.value ?? headers().get('Accept-Language');

  if (locale === null) {
    locale = 'en';
  }

  if (locale.split(',')[0].includes('en')) {
    locale = 'en';
  }

  if (locale.split(',')[0].includes('ru')) {
    locale = 'ru';
  }

  return {
    locale,
    messages: (await import(`../../locales/${locale}.json`)).default
  };
});
