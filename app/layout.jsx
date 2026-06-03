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
  metadataBase: new URL('https://yamlai.in'),
  title: {
    default: 'YAML AI - AI Agents & Automation for Real Estate',
    template: '%s | YAML AI'
  },
  description:
    'Automate your real estate business with YAML AI. AI-powered agents for lead generation, property listing, follow-ups and client management, built for Indian real estate.',
  keywords: [
    'AI automation real estate',
    'AI agent real estate India',
    'real estate AI tools',
    'property automation AI',
    'AI chatbot real estate leads',
    'real estate CRM automation',
    'WhatsApp AI agents India',
    'AI voice calling real estate'
  ],
  authors: [{ name: 'YAML AI' }],
  creator: 'YAML AI',
  publisher: 'YAML AI',
  alternates: {
    canonical: '/'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1
    }
  },
  openGraph: {
    type: 'website',
    url: 'https://yamlai.in/',
    siteName: 'YAML AI',
    title: 'YAML AI - AI Agents & Automation for Real Estate',
    description:
      'Automate your real estate business with YAML AI. AI-powered agents for lead generation, property listing, follow-ups and client management.',
    images: [
      {
        url: '/hero-background.png',
        width: 1200,
        height: 630,
        alt: 'YAML AI real estate automation platform'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YAML AI - AI Agents & Automation for Real Estate',
    description:
      'Automate your real estate business with YAML AI. AI agents for lead generation, listings, follow-ups and client management.',
    images: ['/hero-background.png']
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://yamlai.in/#organization',
      name: 'YAML AI',
      url: 'https://yamlai.in',
      logo: {
        '@type': 'ImageObject',
        url: 'https://yamlai.in/icon.svg'
      },
      description: 'AI agents and automation systems built for real estate professionals and Indian SMBs.',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'IN'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: 'hello@yamlai.in',
        areaServed: 'IN'
      }
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://yamlai.in/#software',
      name: 'YAML AI',
      url: 'https://yamlai.in',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description:
        'AI-powered automation systems for real estate agents and growing businesses. Automate lead response, follow-ups, CRM updates, appointment booking and customer communication.',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'INR'
      },
      provider: {
        '@id': 'https://yamlai.in/#organization'
      },
      keywords:
        'AI automation real estate, AI agent real estate India, property automation, real estate CRM automation'
    },
    {
      '@type': 'WebSite',
      '@id': 'https://yamlai.in/#website',
      url: 'https://yamlai.in',
      name: 'YAML AI',
      description: 'AI agents and automation for real estate and modern Indian businesses',
      publisher: {
        '@id': 'https://yamlai.in/#organization'
      }
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://yamlai.in/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is YAML AI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'YAML AI is an AI automation company that helps real estate professionals and businesses automate lead response, follow-ups, CRM updates, appointment booking and customer communication.'
          }
        },
        {
          '@type': 'Question',
          name: 'How does AI automation help real estate agents in India?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI automation helps real estate agents respond to leads instantly, send follow-up messages, qualify buyers, schedule site visits and keep CRM data updated without manual work.'
          }
        },
        {
          '@type': 'Question',
          name: 'Does YAML AI work for Indian real estate teams?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. YAML AI is designed for Indian businesses and can support workflows around WhatsApp, voice calls, lead forms, property inquiries, CRM tools and appointment booking.'
          }
        },
        {
          '@type': 'Question',
          name: 'How does YAML AI build an automation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'YAML AI starts with a discovery call, maps the workflow, designs the automation logic, connects the required tools, tests the handoffs and launches the first working version with your team.'
          }
        },
        {
          '@type': 'Question',
          name: 'How much time is required to launch?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most focused automations can go live in 2 to 4 weeks, depending on the workflow, integrations and testing needed.'
          }
        }
      ]
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable} ${editorial.variable}`}>
      <body className="font-sans antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
