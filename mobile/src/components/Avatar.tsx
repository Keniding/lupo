import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import { fonts } from '../theme/typography';

export function Avatar({
  letter,
  bg,
  size = 40,
  ringColor,
}: {
  letter: string;
  bg: string;
  size?: number;
  ringColor?: string;
}) {
  return (
    <View
      style={[
        styles.circle,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: bg,
        },
        ringColor && { borderWidth: 3, borderColor: ringColor },
      ]}
    >
      <Text style={[styles.label, { fontSize: size * 0.42, color: colors.white }]}>{letter}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  circle: { alignItems: 'center', justifyContent: 'center' },
  label: { fontFamily: fonts.display },
});
