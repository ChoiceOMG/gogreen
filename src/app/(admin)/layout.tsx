import '@/styles/globals.scss';
import type { Metadata } from 'next';
import { _siteUrl } from '@/utils/constants';
import { Suspense } from 'react';
import Loading from './loading';
import { Header } from '@/components/HeaderAdmin';
import { Avenir, openSans } from '@/styles/fonts/fonts';

import { GoogleTagManager } from '@next/third-parties/google';

import { LogoAnimation } from '@/components/Animations/LogoAnimation';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';
import { Providers } from './providers';

const title = 'GoGreen Admin';
const description = '';

export const metadata: Metadata = {
  metadataBase: new URL(_siteUrl),
  title: {
    template: `%s | ${title}`,
    default: title
  },
  description: title,
  openGraph: {
    title: title,
    description: description,
    url: _siteUrl,
    siteName: title,
    locale: 'en_CA',
    type: 'website',
    images: [{ url: `${_siteUrl}/images/logo.svg` }]
  },
  icons: {
    shortcut: [{ url: `${_siteUrl}/images/logo.svg` }]
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={` ${openSans.className} ${Avenir.variable} text-goGreen-black`}
    >
      <body
        className={`overflow-x-hidden min-h-screen antialiased cursor-default`}
      >
        <Providers>
          <Suspense fallback={<Loading />}>
            <Header />

            <main className="relative min-h-screen">{children}</main>
            <ToastContainer />
            <LogoAnimation />
          </Suspense>
        </Providers>
      </body>
      {process.env.NODE_ENV === 'production' &&
        process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID && (
          // Google Tag Manager
          <GoogleTagManager
            gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}
          />
        )}
    </html>
  );
}
