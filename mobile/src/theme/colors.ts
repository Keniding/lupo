// Lupo v4 — "Rebranding infantil" palette, extracted from Lupo v4 - Rebranding.dc.html
export const colors = {
  bgDeep: '#0E1B44',
  navy: '#1B2E6B',
  navyMid: '#2B4FA0',
  blue: '#4A7FD6',
  skyBlue: '#3FA9F5',
  skyBlueShadow: '#2379B8',

  gold: '#FFC93C',
  goldShadow: '#E8952A',

  green: '#4CC93B',
  greenShadow: '#2E9E20',

  red: '#E8483A',
  redShadow: '#A82C22',

  purple: '#7B3FE4',
  purpleShadow: '#4E22A0',

  magenta: '#E0399B',

  teal: '#2FC6B0',

  orange: '#E8952A',
  orangeShadow: '#A8631A',

  slate: '#8A93A8',
  cardBg: '#F5F8FF',
  cardBgAlt: '#E6ECFA',
  cardBgGreenTint: '#E1F5DC',
  ink: '#1B2E6B',
  inkMuted: '#5B6480',
  border: '#C9CFE0',

  white: '#FFFFFF',
  overlay: 'rgba(10,26,74,.5)',

  errorBg: '#FFE0DE',
  errorText: '#C0392B',
} as const;

export const gradients: Record<string, [string, string]> = {
  splash: [colors.blue, colors.navy],
  map: [colors.blue, colors.navyMid],
  noLives: [colors.blue, colors.navy],
  lobby: [colors.navyMid, colors.navy],
  roleDetective: [colors.skyBlue, colors.navy],
  roleHidden: [colors.purple, colors.navy],
  decision: [colors.navyMid, colors.navy],
  consequenceBad: [colors.red, colors.navy],
  board: [colors.navyMid, colors.navy],
  assembly: [colors.purple, colors.navy],
  vote: [colors.navyMid, colors.navy],
  justification: [colors.skyBlue, colors.navy],
  reveal: [colors.magenta, colors.navy],
  report: [colors.teal, colors.navy],
  missions: [colors.navyMid, colors.navy],
  tournament: [colors.purple, colors.navy],
  m2evidence: [colors.orange, colors.navy],
  m2result: [colors.gold, colors.goldShadow],
  m3redact: [colors.green, colors.navy],
  m3verdict: [colors.teal, colors.navy],
  m4evidence: [colors.red, colors.navy],
  m4verification: [colors.navyMid, colors.navy],
  m4result: [colors.skyBlue, colors.navy],
};

export type ColorKey = keyof typeof colors;
