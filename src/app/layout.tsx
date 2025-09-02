import type { Metadata } from 'next';
import { Oswald, Source_Sans_3 } from 'next/font/google';
import './globals.css';
import { metadataCompany } from './constants/constants';
import { ScrollToTopProvider } from '../components/ScrollToTopProvider';

const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' });

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans-3',
});

export const metadata: Metadata = {
  metadataBase: new URL(metadataCompany.metadataBase),
  title: metadataCompany.title,
  description: metadataCompany.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='es'>
      <body
        className={`${oswald.variable} ${sourceSans3.variable} varible-oswald font-sourceSans3 bg-color-bg-primary text-color-text text-lg antialiased`}
      >
        <ScrollToTopProvider />
        {children}
      </body>
    </html>
  );
}
