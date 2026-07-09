import type { Metadata, Viewport } from 'next';
import '../styles/globals.css';
import { Nav } from '../components/chrome/Nav';
import { Footer } from '../components/chrome/Footer';
import { INSTAGRAM, JANEAPP, PHONE_TEL, SERVICE_AREAS } from '../lib/site';

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'RapidRefresh Mobile IV & Wellness',
  description:
    'RN-led mobile IV hydration and wellness delivered to your home, office, gym, or hotel across Greater Houston.',
  url: 'https://rapidrefreshiv.com',
  telephone: PHONE_TEL,
  image: 'https://rapidrefreshiv.com/logo.png',
  logo: 'https://rapidrefreshiv.com/logo.png',
  priceRange: '$$',
  areaServed: SERVICE_AREAS.map((name) => ({ '@type': 'City', name })),
  address: { '@type': 'PostalAddress', addressLocality: 'Houston', addressRegion: 'TX', addressCountry: 'US' },
  medicalSpecialty: 'Hydration & IV Therapy',
  sameAs: [INSTAGRAM],
  potentialAction: {
    '@type': 'ReserveAction',
    target: { '@type': 'EntryPoint', urlTemplate: JANEAPP },
  },
};

export const metadata: Metadata = {
  metadataBase: new URL('https://rapidrefreshiv.com'),
  title: {
    default: 'RapidRefresh Mobile IV & Wellness | Houston, TX',
    template: '%s | RapidRefresh Mobile IV & Wellness',
  },
  description:
    'RN-led mobile IV hydration & wellness delivered to your home, office, gym, or hotel across Greater Houston. Luxury IV therapy, delivered to you.',
  keywords: [
    'Mobile IV Therapy Houston',
    'Houston IV Hydration',
    'IV Drip Near Me',
    'Mobile IV Nurse Houston',
    'Hangover IV Houston',
    'Myers Cocktail Houston',
    'Vitamin IV Therapy Houston',
    'NAD+ Houston',
  ],
  authors: [{ name: 'RapidRefresh Mobile IV & Wellness' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'RapidRefresh Mobile IV & Wellness',
    title: 'RapidRefresh Mobile IV & Wellness | Houston, TX',
    description:
      'RN-led mobile IV hydration & wellness delivered to your home, office, gym, or hotel across Greater Houston.',
    images: [{ url: '/logo.png', width: 1024, height: 1024, alt: 'RapidRefresh Mobile IV & Wellness' }],
  },
  icons: {
    icon: '/logo-512.png',
    apple: '/logo-512.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#071233',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
