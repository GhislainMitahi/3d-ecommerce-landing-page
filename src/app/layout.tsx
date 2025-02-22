import localFont from 'next/font/local';

import { repositoryName } from "@/prismicio";
import { PrismicPreview } from "@prismicio/next";

import Header from '@/components/Header';
import ViewCanvas from '@/components/ViewCanvas';
import "./app.css";

const alpino = localFont({
  src: '../../public/fonts/Alpino-variable.woff2',
  display: 'swap',
  weight: "100 900",
  variable: "--font-alpino"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={alpino.variable}>
      <body className='overflow-x-hidden bg-yellow-300'>
        <Header />
        <main>
        {children}
        <ViewCanvas />
        </main>
        </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
