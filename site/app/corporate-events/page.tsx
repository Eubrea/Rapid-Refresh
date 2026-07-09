import type { Metadata } from 'next';
import { CorporateEventsScreen } from '../../components/screens/CorporateEventsScreen';

export const metadata: Metadata = {
  title: 'Corporate & Events | On-Site IV Therapy',
  description:
    'On-site mobile IV therapy for corporate wellness days, conferences, bridal parties, and private events across Greater Houston. Custom group pricing, RN-led and set up on-site.',
  alternates: { canonical: '/corporate-events' },
};

export default function Page() {
  return <CorporateEventsScreen />;
}
