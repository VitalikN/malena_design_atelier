import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import { cormorantGaramond } from '@/fonts';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Locale, routing } from '@/i18n/routing';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.malena-design-atelier.com'),
  title: {
    default: 'Malena Design Atelier - Wedding, Evening, and Casual Dresses',
    template: `%s | Malena Design Atelier`,
  },
  description:
    'Malena Design Atelier specializes in the sale, rental, and tailoring of wedding, evening, and casual dresses. High-quality service, personalized approach, and competitive prices.',
  generator: 'Next.js',
  applicationName: 'Malena Design Atelier - Dress Rental and Tailoring',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'wedding dresses',
    'evening dresses',
    'dress rental',
    'dress tailoring',
    'Malena Design Atelier',
    'Dmitriy Ushkvarok',
    'Nozhenko Vitalii',
    'atelier dresses',
  ],
  authors: [
    {
      name: 'Dmitriy Ushkvarok | Nozhenko Vitalii',
      url: 'https://www.linkedin.com/in/dmitriy-ushkvarok/',
    },
  ],
  creator: 'Dmitriy Ushkvarok | Nozhenko Vitalii',
  publisher: 'Malena Design Atelier',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Malena Design Atelier - Dresses for Every Occasion',
    description:
      'Discover high-quality wedding, evening, and casual dresses. Services include sales, rentals, and tailoring to suit your needs.',
    images: [
      {
        url: '/openGraph.JPG',
        width: 400,
        height: 300,
      },
    ],
    type: 'website',
    siteName: 'Malena Design Atelier',
  },
  verification: {
    google: 'ZqDh3lTOtUl7xlcyu8Dy90bb0Bs24U38GFbhz5V3Z3A',
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <link rel="apple-touch-icon" href="/apple-icon.png"></link>
      <link rel="manifest" href="/manifest.json"></link>
      <body
        className={`${geistSans.variable} ${cormorantGaramond.className}  antialiased bg-mainBg text-colorText`}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
