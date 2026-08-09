import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Icon } from './Icon';

export function BackButton({ onPress, light = true }: { onPress: () => void; light?: boolean }) {
  return (
    <Pressable onPress={onPress} style={styles.btn} hitSlop={10}>
      <Icon name="back" size={20} color={light ? '#fff' : '#1B2E6B'} strokeWidth={2.6} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    alignSelf: 'flex-start',
    width: 40,
    height: 40,
    borderRadius: 999,
    backgroundColor: 'rgba(10,26,74,.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
