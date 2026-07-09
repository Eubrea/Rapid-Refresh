import type { CSSProperties } from 'react';
import {
  Activity, ArrowRight, ArrowUpRight, AtSign, Atom, Award, Briefcase,
  CalendarCheck, CalendarClock, CalendarX, CarFront, Check, ClipboardCheck,
  ClipboardList, Clock, CreditCard, Droplet, Droplets, FileCheck, FlaskConical,
  Gem, Gift, Lock, Mail, MapPin, Menu, Minus, Navigation, Phone, Plus, Shield,
  ShieldCheck, SlidersHorizontal, Smartphone, Sparkles, Star, Stethoscope,
  Sunrise, Syringe, User, UserRoundCheck, Users, X, Zap,
  type LucideIcon,
} from 'lucide-react';

/**
 * Icon — thin wrapper over lucide-react so glyph usage stays on-brand
 * (1.75 stroke, currentColor by default). Keeps the kit's kebab-case `name`
 * API. Static registry = SSR-safe and tree-shakeable.
 */
const REGISTRY: Record<string, LucideIcon> = {
  activity: Activity,
  'arrow-right': ArrowRight,
  'arrow-up-right': ArrowUpRight,
  'at-sign': AtSign,
  atom: Atom,
  award: Award,
  briefcase: Briefcase,
  'calendar-check': CalendarCheck,
  'calendar-clock': CalendarClock,
  'calendar-x': CalendarX,
  'car-front': CarFront,
  check: Check,
  'clipboard-check': ClipboardCheck,
  'clipboard-list': ClipboardList,
  clock: Clock,
  'credit-card': CreditCard,
  droplet: Droplet,
  droplets: Droplets,
  'file-check': FileCheck,
  'flask-conical': FlaskConical,
  gem: Gem,
  gift: Gift,
  lock: Lock,
  mail: Mail,
  'map-pin': MapPin,
  menu: Menu,
  minus: Minus,
  navigation: Navigation,
  phone: Phone,
  plus: Plus,
  shield: Shield,
  'shield-check': ShieldCheck,
  'sliders-horizontal': SlidersHorizontal,
  smartphone: Smartphone,
  sparkles: Sparkles,
  star: Star,
  stethoscope: Stethoscope,
  sunrise: Sunrise,
  syringe: Syringe,
  user: User,
  'user-round-check': UserRoundCheck,
  users: Users,
  x: X,
  zap: Zap,
};

export type IconName = keyof typeof REGISTRY | string;

export interface IconProps {
  name: IconName;
  size?: number;
  strokeWidth?: number;
  color?: string;
  className?: string;
  style?: CSSProperties;
}

export function Icon({
  name,
  size = 22,
  strokeWidth = 1.75,
  color = 'currentColor',
  className,
  style,
}: IconProps) {
  const Glyph = REGISTRY[name];
  if (!Glyph) {
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.warn(`[Icon] unknown lucide name: "${name}"`);
    }
    return null;
  }
  return (
    <Glyph
      size={size}
      strokeWidth={strokeWidth}
      color={color}
      className={className}
      style={{ flex: '0 0 auto', ...style }}
      aria-hidden="true"
    />
  );
}
