import { colors } from '../theme/colors';

export const PLAYERS = {
  laura: { name: 'Laura', letter: 'L', color: colors.skyBlue },
  mateo: { name: 'Mateo', letter: 'M', color: colors.purple },
  sofia: { name: 'Sofía', letter: 'S', color: colors.green },
  diego: { name: 'Diego', letter: 'D', color: colors.orange },
  valentina: { name: 'Valentina', letter: 'V', color: colors.magenta },
  alex: { name: 'Alex', letter: 'A', color: colors.teal },
} as const;

export const LOBBY_ORDER = ['laura', 'mateo', 'sofia', 'diego', 'valentina', 'alex'] as const;
