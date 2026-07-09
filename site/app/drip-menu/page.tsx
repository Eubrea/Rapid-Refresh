import type { Metadata } from 'next';
import { DripMenuScreen } from '../../components/screens/DripMenuScreen';

export const metadata: Metadata = {
  title: 'Drip Menu & IV Therapy Options',
  description:
    'Explore RapidRefresh signature IV drips, wellness injections, and vitamin boosters. Standard and Premium pricing for hydration, energy, immunity, recovery, and beauty.',
  alternates: { canonical: '/drip-menu' },
};

export default function Page() {
  return <DripMenuScreen />;
}
