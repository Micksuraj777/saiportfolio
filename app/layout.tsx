import './globals.css';
import { Fira_Code } from 'next/font/google';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const fira_code = Fira_Code({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Sai portfolio',
  description: 'Portofolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fira_code.className}>
      <body className="bg-black p-10 h-screen w-screen">
        <div className='m-auto max-w-[1500px]'>
          <Navbar />
          <main className="border border-[#607B96] border-y-0 hero-height">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
