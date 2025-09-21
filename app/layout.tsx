import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: '</> Lam Dinh Trinh - Marketing Specialist & AI Engineer </>',
	description:
		"Hi! I'm a Marketing Specialist & AI Engineer. I bridge the gap between IT innovation and business operations, applying AI-driven strategies to marketing campaigns, customer engagement, and data analytics.",
	keywords: [
		'Marketing Specialist',
		'AI Engineer',
		'Digital Marketing',
		'Artificial Intelligence',
		'Machine Learning',
		'Data Analytics',
		'Business Automation',
		'Customer Engagement',
		'Growth Marketing',
		'Brand Strategy',
		'Lam Dinh Trinh',
	],
	authors: [{ name: 'Lam Dinh Trinh' }],
	creator: 'Lam Dinh Trinh',
	openGraph: {
		title: 'Lam Dinh Trinh - Marketing Specialist & AI Engineer Portfolio',
		description:
			"Explore my portfolio as a Marketing Specialist & AI Engineer. I create data-driven marketing solutions and intelligent automation for business growth.",
		url: 'https://your-domain.com',
		siteName: 'Lam Dinh Trinh - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Lam Dinh Trinh - Marketing Specialist & AI Engineer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Lam Dinh Trinh - Marketing Specialist & AI Engineer',
		description:
			"Explore my portfolio as a Marketing Specialist & AI Engineer. I create data-driven marketing solutions and intelligent automation for business growth.",
		creator: '@yourusername',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
