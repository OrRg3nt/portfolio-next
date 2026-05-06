import { notFound } from 'next/navigation';

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import { type Locale, routing } from '@/i18n/routing';

import '@/app/globals.css';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!(routing.locales as readonly Locale[]).includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <div>{children}</div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
