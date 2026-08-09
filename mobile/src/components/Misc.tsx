import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import { fonts } from '../theme/typography';
import { Icon, type IconName } from './Icon';
import { LANGS, type LangCode } from '../i18n/dict';

export function ProgressBar({ pct, color = colors.gold, track = 'rgba(10,26,74,.5)', height = 12 }: { pct: number; color?: string; track?: string; height?: number }) {
  return (
    <View style={{ height, borderRadius: 999, backgroundColor: track, overflow: 'hidden' }}>
      <View style={{ width: `${Math.max(0, Math.min(100, pct))}%`, height: '100%', backgroundColor: color, borderRadius: 999 }} />
    </View>
  );
}

export function StatChip({ icon, value, tint = colors.gold }: { icon?: IconName; value: string; tint?: string }) {
  return (
    <View style={styles.chip}>
      {icon ? <Icon name={icon} size={17} color={tint} /> : null}
      <Text style={styles.chipText}>{value}</Text>
    </View>
  );
}

export function LangSwitcher({ lang, onPick, size = 'sm' }: { lang: LangCode; onPick: (c: LangCode) => void; size?: 'sm' | 'lg' }) {
  return (
    <View style={styles.langRow}>
      {LANGS.map((l) => {
        const active = l.code === lang;
        return (
          <Pressable key={l.code} onPress={() => onPick(l.code)}>
            <View
              style={[
                size === 'lg' ? styles.langPillLg : styles.langPill,
                active && { backgroundColor: colors.gold },
              ]}
            >
              <Text style={[styles.langLabel, size === 'lg' && styles.langLabelLg, active && { color: colors.ink }]}>{l.label}</Text>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
}

export function IconBubble({ icon, size = 46, bg, iconColor = colors.white, iconSize, radius = 14, shadowColor }: { icon: IconName; size?: number; bg: string; iconColor?: string; iconSize?: number; radius?: number; shadowColor?: string }) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        backgroundColor: bg,
        alignItems: 'center',
        justifyContent: 'center',
        ...(shadowColor ? boxStep(shadowColor) : null),
      }}
    >
      <Icon name={icon} size={iconSize ?? size * 0.48} color={iconColor} />
    </View>
  );
}

function boxStep(shadowColor: string) {
  return {
    borderBottomWidth: 3,
    borderBottomColor: shadowColor,
  };
}

const styles = StyleSheet.create({
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(10,26,74,.55)',
    borderWidth: 2,
    borderColor: colors.gold,
    borderRadius: 999,
    paddingVertical: 7,
    paddingHorizontal: 12,
  },
  chipText: { fontFamily: fonts.display, fontSize: 15, color: colors.white },
  langRow: { flexDirection: 'row', gap: 8, justifyContent: 'center' },
  langPill: { borderRadius: 999, paddingVertical: 8, paddingHorizontal: 12, backgroundColor: 'rgba(255,255,255,.12)' },
  langPillLg: { borderRadius: 999, paddingVertical: 11, paddingHorizontal: 14, backgroundColor: 'rgba(255,255,255,.14)', minWidth: 44, alignItems: 'center' },
  langLabel: { fontFamily: fonts.display, fontSize: 11, letterSpacing: 0.5, color: colors.white },
  langLabelLg: { fontSize: 13 },
});
