import type { Metadata } from 'next';
import { Do_Hyeon, Noto_Sans_KR } from 'next/font/google';
import './globals.css';
import { Layout } from '@/src/widgets/layout';

const do_hyeon = Do_Hyeon({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--do-hyeon',
});
const noto_sans = Noto_Sans_KR({
  subsets: ['latin'],
  variable: '--noto-sans',
});

export const metadata: Metadata = {
  title: '얌,얌',
  description: '얌,얌 app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body lang="en" className={`${noto_sans.variable} ${do_hyeon.variable}`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
