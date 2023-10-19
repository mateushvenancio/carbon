import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import TopBar from '@/components/topbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Carbon Dashboard | Mateus Venâncio',
    description: 'An app to manage my finances',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <TopBar />
                <div className="max-w-[--main-w] m-auto">{children}</div>
            </body>
        </html>
    );
}
