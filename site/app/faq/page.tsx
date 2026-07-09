import type { Metadata } from 'next';
import { FaqScreen } from '../../components/screens/FaqScreen';

export const metadata: Metadata = {
  title: 'FAQ | Mobile IV Therapy Questions',
  description:
    'Answers about RapidRefresh mobile IV therapy: who administers it, where we serve, how to book, safety and insurance, HIPAA-conscious intake, cancellations, memberships, and gift cards.',
  alternates: { canonical: '/faq' },
};

export default function Page() {
  return <FaqScreen />;
}
