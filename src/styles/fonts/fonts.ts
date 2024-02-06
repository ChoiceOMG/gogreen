import localFont from 'next/font/local';
import { Inter, Open_Sans } from 'next/font/google';

export const Avenir = localFont({
  src: [
    {
      path: './Avenir-65-Medium.ttf',
      weight: '550',
      style: 'normal'
    },
    {
      path: './Avenir-95-Black.ttf',
      weight: '900',
      style: 'normal'
    }
  ],
  variable: '--font-Avenir'
});

/* export const AvenirLTStdHeavy = localFont({
  src: './AvenirLTStd-Heavy.otf',
  weight: 'heavy',
  display: 'swap',
  variable: '--font-Avenir'
});

export const AvenirLTStdMedium = localFont({
  src: './AvenirLTStd-Medium.otf',
  weight: 'medium',
  display: 'swap',
  variable: '--font-Avenir'
}); */
export const inter = Inter({ subsets: ['latin'] });

// Add Open Sans for paragraph
export const openSans = Open_Sans({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-open-sans'
});
