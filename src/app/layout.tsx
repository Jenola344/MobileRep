import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { RegionProvider } from '@/contexts/region-context';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });


export const metadata: Metadata = {
  title: 'AfriRep Mobile',
  description: "Africa's digital trust layer, transforming social reputation into economic opportunity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>MobileRep — Reputation that travels with you</title>
      </head>
      <body className={cn('font-body antialiased', inter.variable)}>
        <div className="grain-bg"></div>
        <main className="page">
          <RegionProvider>
            {children}
          </RegionProvider>
        </main>
      </body>
    </html>
  );
}


