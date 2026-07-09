import type { Metadata } from 'next';
import { HomeScreen } from '../components/screens/HomeScreen';

export const metadata: Metadata = {
  title: { absolute: 'Premium Mobile IV Hydration in Houston | RapidRefresh Mobile IV & Wellness' },
  description:
    'Expert RN-led IV therapy delivered to your home, office, gym, or hotel across Greater Houston. Book a concierge drip designed for comfort, safety, and results.',
  alternates: { canonical: '/' },
};

export default function Page() {
  return <HomeScreen />;
}
