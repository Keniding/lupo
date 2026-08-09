import React from 'react';
import { Pressable, Text, StyleSheet, type StyleProp, type ViewStyle } from 'react-native';
import { StepShadow } from './StepShadow';
import { colors } from '../theme/colors';
import { fonts } from '../theme/typography';

type Variant = 'primary' | 'gold' | 'secondary' | 'ghost';

const VARIANTS: Record<Variant, { bg: string; shadow?: string; text: string; textShadow?: boolean }> = {
  primary: { bg: colors.green, shadow: colors.greenShadow, text: colors.white, textShadow: true },
  gold: { bg: colors.gold, shadow: colors.goldShadow, text: colors.ink },
  secondary: { bg: colors.skyBlue, shadow: colors.skyBlueShadow, text: colors.white, textShadow: true },
  ghost: { bg: 'rgba(255,255,255,.14)', text: colors.white },
};

export function Button({
  label,
  onPress,
  variant = 'primary',
  size = 'lg',
  disabled,
  style,
}: {
  label: string;
  onPress?: () => void;
  variant?: Variant;
  size?: 'lg' | 'md';
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}) {
  const v = VARIANTS[variant];
  const padV = size === 'lg' ? 20 : 16;
  const fontSize = size === 'lg' ? 19 : 16;

  const content = (
    <Text
      style={[
        styles.label,
        { color: v.text, fontSize },
        v.textShadow && styles.textShadow,
      ]}
    >
      {label}
    </Text>
  );

  if (!v.shadow) {
    return (
      <Pressable
        onPress={onPress}
        disabled={disabled}
        style={[{ backgroundColor: v.bg, borderRadius: 999, paddingVertical: padV, alignItems: 'center', minHeight: 48, justifyContent: 'center' }, disabled && styles.disabled, style]}
      >
        {content}
      </Pressable>
    );
  }

  return (
    <Pressable onPress={onPress} disabled={disabled} style={[disabled && styles.disabled, style]}>
      <StepShadow
        bg={v.bg}
        shadowColor={v.shadow}
        shadowHeight={6}
        innerStyle={{ paddingVertical: padV, alignItems: 'center', minHeight: 48, justifyContent: 'center' }}
      >
        {content}
      </StepShadow>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  label: { fontFamily: fonts.display, textAlign: 'center' },
  textShadow: { textShadowColor: 'rgba(0,0,0,.22)', textShadowOffset: { width: 0, height: 2 }, textShadowRadius: 0 },
  disabled: { opacity: 0.5 },
});
