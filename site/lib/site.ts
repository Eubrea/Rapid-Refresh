/* ==========================================================================
   RapidRefresh — site-wide constants & integrations.
   Single source of truth for external links, contact, and route map.
   ========================================================================== */

export const JANEAPP = 'https://rapidrefreshivtherapy.janeapp.com/';
export const INSTAGRAM = 'https://www.instagram.com/rapidrefreshivtherapy/';
export const INSTAGRAM_HANDLE = '@rapidrefreshivtherapy';

export const PHONE_DISPLAY = '(713) 851-7590';
export const PHONE_TEL = '+17138517590';

/* Single general inbox carried over from the design source. The three
   dedicated business addresses are pending client confirmation. */
export const EMAIL = 'hello@rapidrefreshiv.com';

export const BUSINESS_NAME = 'RapidRefresh Mobile IV & Wellness';
export const CITY = 'Houston, TX';

/* Google Maps embed for the Service Area page. */
export const MAPS_EMBED = 'https://www.google.com/maps?q=Houston,+Texas&output=embed';

/* ---- Routes ------------------------------------------------------------- */
export const ROUTES = {
  home: '/',
  menu: '/drip-menu',
  memberships: '/memberships',
  pricing: '/pricing',
  service: '/service-area',
  corporate: '/corporate-events',
  about: '/about',
  booking: '/booking',
  giftcards: '/gift-cards',
  faq: '/faq',
} as const;

export type RouteKey = keyof typeof ROUTES;

/* Primary nav — the "Infusion Line" ports, in order. */
export const NAV_LINKS: { key: RouteKey; label: string }[] = [
  { key: 'menu', label: 'Drip Menu' },
  { key: 'memberships', label: 'Memberships' },
  { key: 'pricing', label: 'Pricing' },
  { key: 'service', label: 'Service Area' },
  { key: 'corporate', label: 'Event & Group' },
  { key: 'about', label: 'About' },
];

/* Footer content. */
export const SEO_KEYWORDS = [
  'Mobile IV Therapy Houston',
  'Houston IV Hydration',
  'IV Drip Near Me',
  'Mobile IV Nurse Houston',
  'Hangover IV Houston',
  'Myers Cocktail Houston',
  'Vitamin IV Therapy Houston',
];

export const SERVICE_AREAS = [
  'Houston',
  'Sugar Land',
  'Katy',
  'The Woodlands',
  'Pearland',
  'Missouri City',
  'Alvin',
  'Manvel',
  'Fresno',
];
