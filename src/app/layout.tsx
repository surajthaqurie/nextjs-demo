import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import '@/assets/styles/globals.css';
import { APP_NAME, SERVER_URL } from '@/lib/constants';

// Google font
const roboto = Roboto({ subsets: ['latin'], weight: ['300', '700'] });

//Metadata configure
export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME as string}`,
    default: `${APP_NAME}`,
  },
  description: `${APP_NAME}`,
  metadataBase: new URL(SERVER_URL as string),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>{children}</body>
    </html>
  );
}
