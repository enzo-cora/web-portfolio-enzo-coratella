import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import {ThemeProvider} from '@/app/theme/ThemeProvider';
import Script from 'next/script';
import openGraphImage from '@/public/open-graph-img.png';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});


export const metadata: Metadata = {
    metadataBase: process.env.NEXT_PUBLIC_SITE_ORIGIN ? new URL(process.env.NEXT_PUBLIC_SITE_ORIGIN) : undefined,
    title: 'Enzo CORATELLA - Senior Software Engineer (NodeJs)',
    description:
        "Senior Software Engineer (NodeJs) orienté Backend / Architecture / Fullstack  — j’aide entreprises & startups à concevoir des systèmes robustes, scalables et maintainables : architecture (Clean Architecture, DDD, CQRS), APIs, performance, sécurité, testing & CI/CD.",
    keywords: [
        'Senior Software Engineer',
        'Backend',
        'Architecture',
        'Fullstack',
        'NodeJs',
        'TypeScript',
        'Clean Architecture',
        'DDD',
        'Domain-Driven Design',
        'CQRS',
        'API Development',
        'Microservices',
        'DevOps',
        'CI/CD',
        'Cloud',
        'Testing',
        'TDD',
        'Observability',
        'Performance',
        'Security',
        'Web Development',
        'CORATELLA Enzo',
    ],
    authors: [{name: 'Enzo CORATELLA'}],
    creator: 'Enzo CORATELLA',
    openGraph: {
        title: 'Enzo CORATELLA - Senior Software Engineer (NodeJs)',
        description:
            "Senior Software Engineer orienté backend / fullstack (Node.js). Architecture logicielle (Clean Architecture, DDD, CQRS), APIs, performance & sécurité, testing, CI/CD & Cloud.",
        siteName: 'Enzo CORATELLA - Software Engineer',
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_BASE_PATH}/open-graph-img.png`,
                width: openGraphImage.width,
                height: openGraphImage.height,
                alt: 'Enzo CORATELLA - Senior Software Engineer (NodeJs)',
            },
        ],
        locale: 'en_US',
        type: 'website',
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
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
            <div>
                {children}
            </div>
        </ThemeProvider>

        <Script
            src="https://static.cloudflareinsights.com/beacon.min.js"
            strategy="afterInteractive"
            data-cf-beacon='{"token": "c448d8387ec2499595ffd961ca60e62e"}'
        />
        <Script
            src="https://web3forms.com/client/script.js"
            strategy="afterInteractive"
        />
        </body>
        </html>
    );
}
