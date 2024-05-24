import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './provider';
import { fonts } from './font';

import { ViewTransitions } from 'next-view-transitions';
import cn from 'classnames';
import { FloatingNavbar } from '@/components/ui/Navabar';
import { ModalProvider } from './ModalProvider';
import { FloatingBtn } from '@/components/ui/floatingBtn';
import { ScrollIndicator } from '@/components/ui/scrollIndicator';
import ProviderTanstack from '@/components/ProviderTanstack';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '247Lab',
  description: `This is 247lab's website which connects patients to professional laboratory from the comfort of their home`,
  generator: 'Next.js',
  applicationName: '247lab',
  referrer: 'origin-when-cross-origin',
  keywords: ['247lab', 'laboratory', 'tests'],
  authors: [
    {
      name: 'Diego Eke Freeman',
      url: 'https://my-portfolio-sooty-nine.vercel.app',
    },
  ],
  creator: 'Diego',
  publisher: 'Diego Eke Freeman',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={cn('bg-white overflow-x-hidden', fonts.rubik.variable)}
        >
          <Providers>
            <ProviderTanstack>
              <ModalProvider />
              <ScrollIndicator />

              <FloatingNavbar />
              {children}

              <FloatingBtn />
            </ProviderTanstack>
          </Providers>
        </body>
      </html>
    </ViewTransitions>
  );
}
