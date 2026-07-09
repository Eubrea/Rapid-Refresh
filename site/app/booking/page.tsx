import type { Metadata } from 'next';
import { BookingScreen } from '../../components/screens/BookingScreen';

export const metadata: Metadata = {
  title: 'Book an Appointment | Concierge IV Therapy',
  description:
    'Book RapidRefresh mobile IV therapy in Houston. Reserve instantly on JaneApp or request an appointment through our HIPAA-conscious intake form. Same-day when available.',
  alternates: { canonical: '/booking' },
};

export default function Page() {
  return <BookingScreen />;
}
