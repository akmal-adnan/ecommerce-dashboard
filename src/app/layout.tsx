import '@/app/globals.scss';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import ClientProviders from './ClientProviders';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Corebolt',
  description: 'Ecommerce Dashboard UI using NextJs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Emotion insertion point for client-side cache to align style order */}
        <meta name="emotion-insertion-point" content="" />
      </head>
      {/*
        Place font class on <body> rather than <html> to avoid potential
        server/client className mismatches during hydration.
      */}
      <body className={plusJakarta.className}>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
