import type { Metadata } from 'next';
import { PricingScreen } from '../../components/screens/PricingScreen';

export const metadata: Metadata = {
  title: 'Pricing | IV Drips, Injections & Boosters',
  description:
    'Transparent RapidRefresh pricing: every IV drip in Standard and Premium tiers, plus wellness injections, vitamin boosters, and membership rates. No hidden fees in Greater Houston.',
  alternates: { canonical: '/pricing' },
};

export default function Page() {
  return <PricingScreen />;
}
