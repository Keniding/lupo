// Lupo — typography tokens (mirrors _ds tokens/typography.css)
import {
  Baloo2_400Regular,
  Baloo2_500Medium,
  Baloo2_600SemiBold,
  Baloo2_700Bold,
  Baloo2_800ExtraBold,
} from '@expo-google-fonts/baloo-2';
import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import { JetBrainsMono_400Regular, JetBrainsMono_600SemiBold } from '@expo-google-fonts/jetbrains-mono';

export const fonts = {
  display: 'Baloo2_800ExtraBold',
  displayBold: 'Baloo2_700Bold',
  displaySemibold: 'Baloo2_600SemiBold',
  displayMedium: 'Baloo2_500Medium',
  body: 'Inter_400Regular',
  bodyMedium: 'Inter_500Medium',
  bodySemibold: 'Inter_600SemiBold',
  bodyBold: 'Inter_700Bold',
  evidence: 'JetBrainsMono_600SemiBold',
  evidenceRegular: 'JetBrainsMono_400Regular',
};

export const fontMap = {
  Baloo2_400Regular,
  Baloo2_500Medium,
  Baloo2_600SemiBold,
  Baloo2_700Bold,
  Baloo2_800ExtraBold,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  JetBrainsMono_400Regular,
  JetBrainsMono_600SemiBold,
};

export const textStyles = {
  displayXl: { fontFamily: fonts.display, fontSize: 32, lineHeight: 40 },
  displayL: { fontFamily: fonts.display, fontSize: 24, lineHeight: 32 },
  heading: { fontFamily: fonts.display, fontSize: 20, lineHeight: 28 },
  body: { fontFamily: fonts.body, fontSize: 16, lineHeight: 24 },
  caption: { fontFamily: fonts.bodySemibold, fontSize: 13, lineHeight: 18 },
};
