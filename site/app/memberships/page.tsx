import type { Metadata } from 'next';
import { MembershipsScreen } from '../../components/screens/MembershipsScreen';

export const metadata: Metadata = {
  title: 'Memberships | The Wellness Club',
  description:
    'Join the RapidRefresh Wellness Club for monthly IV therapy, member pricing, priority scheduling, and concierge perks. Tiers from $179 per month across Greater Houston.',
  alternates: { canonical: '/memberships' },
};

export default function Page() {
  return <MembershipsScreen />;
}
