import type { Metadata } from 'next';
import { Black_Han_Sans, Gugi, Noto_Sans_KR } from 'next/font/google';
import './globals.css';
import { Layout } from '@/src/widgets/layout';

const han_sans = Black_Han_Sans({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--han-sans',
});
const noto_sans = Noto_Sans_KR({
  subsets: ['latin'],
  variable: '--noto-sans',
});

export const metadata: Metadata = {
  title: 'YumYum',
  description: 'YumYum app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body lang="en" className={`${noto_sans.variable} ${han_sans.variable}`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
