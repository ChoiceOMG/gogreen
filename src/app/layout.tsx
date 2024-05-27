import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Avenir, openSans } from '@/styles/fonts/fonts';
import '@/styles/globals.scss';
import { _siteUrl } from '@/utils/constants';
import type { Metadata } from 'next';
import { Providers } from './providers';

import { FixButton } from '@/components/UI/FixButton';
import { GoogleTagManager } from '@next/third-parties/google';
import { getSession } from 'next-auth/react';
//import Cursor from './Cursor';

const title = 'GoGreen';
const description =
  'GoGreen is a cleaning company in Edmonton, Alberta. We provide commercial cleaning services for businesses in Edmonton and surrounding areas. We offer janitorial services, office cleaning, carpet cleaning, and more. We are committed to providing the highest quality cleaning services to our clients. Our team of professional cleaners is dedicated to delivering exceptional results. We are proud to be a leading cleaning company in Edmonton, Alberta. Contact us today to learn more about our cleaning services.';

export const metadata: Metadata = {
  metadataBase: new URL(_siteUrl),
  title: {
    template: `%s | ${title}`,
    default: title
  },
  description: description,
  openGraph: {
    title: title,
    description: description,
    url: _siteUrl,
    siteName: title,
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: `${_siteUrl}/apple-touch-icon.png`
      },
      {
        url: `${_siteUrl}/favicon-32x32.png`,
        type: 'image/png'
      },
      {
        url: `${_siteUrl}/favicon-16x16.png`,
        type: 'image/png'
      },
      {
        url: `${_siteUrl}/safari-pinned-tab.svg`
      }
    ]
  },
  icons: {
    shortcut: [
      {
        url: `${_siteUrl}/apple-touch-icon.png`,
        sizes: '180x180',
        rel: 'apple-touch-icon'
      },
      {
        url: `${_siteUrl}/favicon-32x32.png`,
        sizes: '32x32',
        rel: 'icon',
        type: 'image/png'
      },
      {
        url: `${_siteUrl}/favicon-16x16.png`,
        sizes: '16x16',
        rel: 'icon',
        type: 'image/png'
      },
      {
        url: `${_siteUrl}/safari-pinned-tab.svg`,
        color: '#5bbad5',
        rel: 'mask-icon'
      }
    ]
  }
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  return (
    <html
      lang="en"
      className={` ${openSans.className} ${Avenir.variable} text-goGreen-black`}
    >
      <GoogleTagManager gtmId="GTM-MJN5R2QV" />

      <body>
        <Providers session={session}>
        {/* <Cursor /> */}
        <Header />

          <main className="relative min-h-screen">{children} </main>

        <FixButton />
        <Footer />
        </Providers>
      </body>
    </html>
  );
}
