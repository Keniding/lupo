import React from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import { Card } from './Card';
import { Icon } from './Icon';
import { colors } from '../theme/colors';
import { fonts } from '../theme/typography';

/** Radio-style row with a leading colour dot (decision / vote screens). */
export function DotRow({
  label,
  dotColor,
  selected,
  onPress,
  avatar,
}: {
  label: string;
  dotColor?: string;
  selected?: boolean;
  onPress?: () => void;
  avatar?: React.ReactNode;
}) {
  return (
    <Pressable onPress={onPress}>
      <Card
        padding={14}
        radius={18}
        border={selected ? { width: 4, color: dotColor ?? colors.gold } : undefined}
      >
        <View style={styles.row}>
          {avatar}
          {dotColor && !avatar ? <View style={[styles.dot, { backgroundColor: dotColor }]} /> : null}
          <Text style={styles.label}>{label}</Text>
        </View>
      </Card>
    </Pressable>
  );
}

/** Checkbox-style row with a trailing check pill (board signals / redactions). */
export function CheckRow({
  label,
  dotColor,
  checked,
  onPress,
  icon,
}: {
  label: string;
  dotColor?: string;
  checked?: boolean;
  onPress?: () => void;
  icon?: React.ComponentProps<typeof Icon>['name'];
}) {
  return (
    <Pressable onPress={onPress}>
      <Card
        padding={14}
        radius={14}
        border={checked ? { width: 4, color: colors.green } : undefined}
        bg={checked ? colors.cardBgGreenTint : colors.cardBg}
      >
        <View style={styles.row}>
          {icon ? <Icon name={icon} size={17} color={colors.slate} /> : dotColor ? <View style={[styles.dot, { backgroundColor: dotColor }]} /> : null}
          <Text style={[styles.label, { flex: 1 }]}>{label}</Text>
          {checked ? (
            <View style={styles.checkBadge}>
              <Icon name="check" size={15} color={colors.white} strokeWidth={3.2} />
            </View>
          ) : null}
        </View>
      </Card>
    </Pressable>
  );
}

/** Square checkbox row (mission 4 verification list). */
export function SquareCheckRow({ label, checked, onPress }: { label: string; checked?: boolean; onPress?: () => void }) {
  return (
    <Pressable onPress={onPress}>
      <Card padding={15} radius={14}>
        <View style={styles.row}>
          <View style={[styles.square, checked && styles.squareChecked]}>
            {checked ? <Icon name="check" size={14} color={colors.white} strokeWidth={3.4} /> : null}
          </View>
          <Text style={[styles.label, { flex: 1, fontFamily: fonts.body, fontWeight: '600' as const }]}>{label}</Text>
        </View>
      </Card>
    </Pressable>
  );
}

/** Pill-shaped verdict option (mission 2/3/4 verdict pickers). */
export function PillOption({ label, selected, borderColor, onPress, muted }: { label: string; selected?: boolean; borderColor?: string; onPress?: () => void; muted?: boolean }) {
  return (
    <Pressable onPress={onPress}>
      <Card
        padding={17}
        radius={999}
        bg={muted ? 'rgba(255,255,255,.14)' : colors.cardBg}
        border={selected ? { width: 4, color: borderColor ?? colors.gold } : undefined}
      >
        <Text style={[styles.pillLabel, muted && { color: colors.white }]}>{label}</Text>
      </Card>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  dot: { width: 14, height: 14, borderRadius: 999 },
  label: { fontFamily: fonts.bodySemibold, fontSize: 15, color: colors.ink },
  checkBadge: { width: 26, height: 26, borderRadius: 999, backgroundColor: colors.green, alignItems: 'center', justifyContent: 'center' },
  square: { width: 24, height: 24, borderRadius: 8, borderWidth: 3, borderColor: colors.border, alignItems: 'center', justifyContent: 'center' },
  squareChecked: { backgroundColor: colors.green, borderColor: colors.green },
  pillLabel: { fontFamily: fonts.display, fontSize: 16, textAlign: 'center', color: colors.ink },
});
