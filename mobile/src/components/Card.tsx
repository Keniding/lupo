import React from 'react';
import { type StyleProp, type ViewStyle } from 'react-native';
import { StepShadow } from './StepShadow';
import { colors } from '../theme/colors';

export function Card({
  children,
  style,
  padding = 18,
  radius = 20,
  bg = colors.cardBg,
  shadowColor = 'rgba(10,26,74,.3)',
  shadowHeight = 5,
  border,
}: {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  padding?: number;
  radius?: number;
  bg?: string;
  shadowColor?: string;
  shadowHeight?: number;
  border?: { width: number; color: string };
}) {
  return (
    <StepShadow
      bg={bg}
      shadowColor={shadowColor}
      shadowHeight={shadowHeight}
      radius={radius}
      style={style}
      innerStyle={[
        { padding },
        border && { borderWidth: border.width, borderColor: border.color },
      ]}
    >
      {children}
    </StepShadow>
  );
}
