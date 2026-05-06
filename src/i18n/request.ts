import { getRequestConfig } from 'next-intl/server';

import { type Locale, routing } from '@/i18n/routing';

const messageImports: Record<Locale, () => Promise<{ default: object }>> = {
  fr: () => import('@/messages/fr.json'),
  en: () => import('@/messages/en.json'),
};

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !(routing.locales as readonly string[]).includes(locale)) {
    locale = routing.defaultLocale;
  }

  const validLocale = locale as Locale;
  const messages = (await messageImports[validLocale]()).default;

  return {
    locale: validLocale,
    messages,
  };
});
