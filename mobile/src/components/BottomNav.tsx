import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Icon, type IconName } from './Icon';
import { colors } from '../theme/colors';
import { fonts } from '../theme/typography';

export function BottomNav({ active, labels }: { active: 'map' | 'leagues' | 'practice' | 'profile'; labels: { map: string; leagues: string; practice: string; profile: string } }) {
  const tabs: { key: typeof active; icon: IconName; label: string }[] = [
    { key: 'map', icon: 'map', label: labels.map },
    { key: 'leagues', icon: 'trophy', label: labels.leagues },
    { key: 'practice', icon: 'dumbbell', label: labels.practice },
    { key: 'profile', icon: 'user', label: labels.profile },
  ];
  return (
    <View style={styles.bar}>
      {tabs.map((t) => {
        const isActive = t.key === active;
        return (
          <Pressable key={t.key} style={[styles.tab, isActive && styles.tabActive]}>
            <Icon name={t.icon} size={23} color={isActive ? colors.gold : 'rgba(255,255,255,.65)'} />
            <Text style={[styles.label, { color: isActive ? colors.gold : 'rgba(255,255,255,.65)', fontFamily: isActive ? fonts.displayBold : fonts.displaySemibold }]}>{t.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: { flexDirection: 'row', paddingHorizontal: 10, paddingTop: 9, paddingBottom: 18, backgroundColor: 'rgba(10,26,74,.55)', gap: 5 },
  tab: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 4, paddingVertical: 9, minHeight: 48, borderRadius: 14 },
  tabActive: { backgroundColor: 'rgba(255,201,60,.22)' },
  label: { fontSize: 11 },
});
