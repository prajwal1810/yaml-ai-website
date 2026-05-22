import { Instrument_Serif, Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap'
});

const editorial = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-editorial',
  display: 'swap',
  weight: '400'
});

export const metadata = {
  title: {
    default: 'YAML AI | AI Automation Company',
    template: '%s | YAML AI'
  },
  description:
    'YAML AI builds AI agents, CRM automations, and lead conversion systems for modern businesses.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable} ${editorial.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
