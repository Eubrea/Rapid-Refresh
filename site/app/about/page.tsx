import type { Metadata } from 'next';
import { AboutScreen } from '../../components/screens/AboutScreen';

export const metadata: Metadata = {
  title: 'About | Meet Your Nurse, Rahab Njuguna, RN',
  description:
    'RapidRefresh is led by Rahab Njuguna, RN, with over 22 years of acute-care nursing experience. Hospital-level expertise delivered with luxury concierge comfort in Houston.',
  alternates: { canonical: '/about' },
};

export default function Page() {
  return <AboutScreen />;
}
