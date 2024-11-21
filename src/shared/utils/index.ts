export const formatPrice = (value: number, locale: string = 'ru') => {
  return Intl.NumberFormat(locale === 'ru' ? 'ru-RU' : 'en', {
    style: 'currency',
    currency: locale === 'ru' ? 'RUB' : 'USD',
    maximumFractionDigits: 0
  }).format(value);
};
