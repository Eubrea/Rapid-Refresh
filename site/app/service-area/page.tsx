import type { Metadata } from 'next';
import { ServiceAreaScreen } from '../../components/screens/ServiceAreaScreen';

export const metadata: Metadata = {
  title: 'Service Area | Mobile IV Therapy Across Greater Houston',
  description:
    'RapidRefresh brings mobile IV therapy to Houston, Sugar Land, Katy, The Woodlands, Pearland, Missouri City, Alvin, Manvel, and Fresno. Concierge travel included in our core area.',
  alternates: { canonical: '/service-area' },
};

export default function Page() {
  return <ServiceAreaScreen />;
}
