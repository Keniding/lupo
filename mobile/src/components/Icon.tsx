import React from 'react';
import {
  Search,
  Heart,
  Flame,
  Check,
  Star,
  Trophy,
  Map as MapIcon,
  Dumbbell,
  User,
  Clock,
  Lock,
  Fingerprint,
  Shield,
  ShieldCheck,
  AlertTriangle,
  Eye,
  Target,
  X,
  ArrowLeft,
  Mail,
  type LucideIcon,
} from 'lucide-react-native';

const ICONS: Record<string, LucideIcon> = {
  search: Search,
  heart: Heart,
  flame: Flame,
  check: Check,
  star: Star,
  trophy: Trophy,
  map: MapIcon,
  dumbbell: Dumbbell,
  user: User,
  clock: Clock,
  lock: Lock,
  fingerprint: Fingerprint,
  shield: Shield,
  shieldCheck: ShieldCheck,
  alert: AlertTriangle,
  eye: Eye,
  target: Target,
  x: X,
  back: ArrowLeft,
  mail: Mail,
};

export type IconName = keyof typeof ICONS;

export function Icon({
  name,
  size = 20,
  color = '#1B2E6B',
  strokeWidth = 2.4,
}: {
  name: IconName;
  size?: number;
  color?: string;
  strokeWidth?: number;
}) {
  const Cmp = ICONS[name];
  if (!Cmp) return null;
  return <Cmp size={size} color={color} strokeWidth={strokeWidth} />;
}
