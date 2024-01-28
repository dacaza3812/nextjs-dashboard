import { montserrat } from './ui/fonts';
import './ui/global.css'
import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'Dashbpard para prueba de suficiencia',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
          {children}
          <Analytics />
          <footer className='py-10 flex justify-center items-center'>
            Trabajo de Suficiencia para Framekork Web
          </footer>
      </body>
    </html>
  );
}
