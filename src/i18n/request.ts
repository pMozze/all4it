import { headers, cookies } from 'next/headers';
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
  let locale = cookies().get('NEXT_LOCALE')?.value ?? headers().get('Accept-Language');

  if (locale === null || locale.split(',')[0] === undefined) {
    locale = 'en';
  } else {
    locale = locale.split(',')[0];

    if (!locale.includes('ru') && !locale.includes('en')) {
      locale = 'en';
    }
  }

  return {
    locale,
    messages: (await import(`../../locales/${locale}.json`)).default
  };
});
