import NavBar from '@/src/components/NavBar';
import './globals.css';
import { Inter, Noto_Sans } from 'next/font/google';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });
const notoSans = Noto_Sans({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fashion Point',
  description: 'Beauty Salon | Hair | Nails | Cosmetology',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={notoSans.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
