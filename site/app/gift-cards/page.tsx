import type { Metadata } from 'next';
import { GiftCardsScreen } from '../../components/screens/GiftCardsScreen';

export const metadata: Metadata = {
  title: 'Gift Cards | The Gift of Wellness',
  description:
    'Give a RapidRefresh digital gift card, redeemable toward any concierge IV drip, injection, booster, or membership in Greater Houston. Any amount, and they never expire.',
  alternates: { canonical: '/gift-cards' },
};

export default function Page() {
  return <GiftCardsScreen />;
}
