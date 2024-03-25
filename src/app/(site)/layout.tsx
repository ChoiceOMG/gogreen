import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Avenir, openSans } from '@/styles/fonts/fonts';
import '@/styles/globals.scss';
import { _siteUrl } from '@/utils/constants';
import type { Metadata } from 'next';
import { Suspense } from 'react';
import Loading from './loading';

import { FixButton } from '@/components/UI/FixButton';
import { GoogleTagManager } from '@next/third-parties/google';
import Cursor from './Cursor';


const title = 'GoGreen';
const description =
	'GoGreen is a cleaning company in Edmonton, Alberta. We provide commercial cleaning services for businesses in Edmonton and surrounding areas. We offer a wide range of cleaning services, including janitorial services, office cleaning, carpet cleaning, and more. We are committed to providing the highest quality cleaning services to our clients. Our team of professional cleaners is dedicated to delivering exceptional results. We are proud to be a leading cleaning company in Edmonton, Alberta. Contact us today to learn more about our cleaning services.';

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
			<body>
				<Cursor />
				<Header />
				<Suspense fallback={<Loading />}>
					{' '}
					<main className="relative min-h-screen">{children} </main>
				</Suspense>
				<FixButton />
				<Footer />
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
