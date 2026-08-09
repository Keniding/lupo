import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Icon, type IconName } from './Icon';
import { colors } from '../theme/colors';
import { fonts } from '../theme/typography';

export function FormInput({
  icon,
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  autoCapitalize = 'none',
  keyboardType = 'default',
}: {
  icon: IconName;
  label: string;
  value: string;
  onChangeText: (v: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
  autoCapitalize?: 'none' | 'words';
  keyboardType?: 'default' | 'email-address';
}) {
  return (
    <View style={{ gap: 6, width: '100%' }}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.row}>
        <Icon name={icon} size={18} color={colors.slate} />
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.slate}
          secureTextEntry={secureTextEntry}
          autoCapitalize={autoCapitalize}
          keyboardType={keyboardType}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: { fontFamily: fonts.bodySemibold, fontSize: 13, color: 'rgba(255,255,255,.75)' },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: colors.white,
    borderRadius: 14,
    paddingHorizontal: 14,
    minHeight: 48,
  },
  input: { flex: 1, fontFamily: fonts.body, fontSize: 15, color: colors.ink, paddingVertical: 12 },
});
