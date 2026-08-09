import React from 'react';
import { View, type StyleProp, type ViewStyle } from 'react-native';

/**
 * Recreates the mockup's flat "box-shadow: 0 Npx 0 <color>" bottom-step effect
 * (a Duolingo/Candy-Crush style gummy 3D edge) using two stacked Views, since
 * RN shadow props can't express a hard offset with no blur.
 */
export function StepShadow({
  bg,
  shadowColor,
  shadowHeight = 6,
  radius = 999,
  style,
  innerStyle,
  children,
}: {
  bg: string;
  shadowColor: string;
  shadowHeight?: number;
  radius?: number;
  style?: StyleProp<ViewStyle>;
  innerStyle?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}) {
  return (
    <View style={[{ borderRadius: radius, backgroundColor: shadowColor, paddingBottom: shadowHeight }, style]}>
      <View style={[{ borderRadius: radius, backgroundColor: bg }, innerStyle]}>{children}</View>
    </View>
  );
}
