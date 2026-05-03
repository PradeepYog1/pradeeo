import type {Metadata} from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant' 
});

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Yogashalarishikesh | Authentic Yoga School in Rishikesh',
  description: 'Join Yogashalarishikesh for 100, 200, and 300 Hour Yoga Teacher Training & Retreats near the Ganges in Rishikesh, India.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="flex min-h-screen flex-col font-sans text-stone-900 bg-stone-50">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}

