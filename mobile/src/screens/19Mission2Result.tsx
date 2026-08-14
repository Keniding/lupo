import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { Screen } from '../components/Screen';
import { goBackOrHome } from '../navigation/goBack';
import { Button } from '../components/Button';
import { Icon } from '../components/Icon';
import { Mascot } from '../components/Mascot';
import { colors, gradients } from '../theme/colors';
import { fonts } from '../theme/typography';
import { useT } from '../i18n';
import { useGameStore, ZONE_SCORING_KEYS } from '../state/store';

type Props = NativeStackScreenProps<RootStackParamList, 'Mission2Result'>;

export default function Mission2ResultScreen({ navigation }: Props) {
  const t = useT();
  const m2 = t.m2;
  const zones = useGameStore((s) => s.zones);
  const zoneScore = useGameStore((s) => s.zoneScore());
  const addPP = useGameStore((s) => s.addPP);
  const completeMission2 = useGameStore((s) => s.completeMission2);
  const resetMission2 = useGameStore((s) => s.resetMission2);
  const applied = useRef(false);

  useEffect(() => {
    if (!applied.current) {
      applied.current = true;
      addPP(zoneScore * 20);
      completeMission2(zoneScore);
    }
  }, [addPP, completeMission2, zoneScore]);

  const items: { key: (typeof ZONE_SCORING_KEYS)[number]; label: string }[] = [
    { key: 'z1', label: m2.z1 },
    { key: 'z2', label: m2.z2 },
    { key: 'z3', label: m2.z3 },
  ];

  const next = () => {
    resetMission2();
    navigation.navigate('Missions');
  };

  return (
    <Screen onBack={() => goBackOrHome(navigation)} colors={gradients.m2result} align="center" scroll style={{ paddingTop: 54, paddingBottom: 26 }}>
      <View style={styles.stamp}>
        <Text style={styles.stampText}>{m2.stamp}</Text>
      </View>
      <Mascot
        emotion={zoneScore >= 3 ? 'acierto' : zoneScore > 0 ? 'parcial' : 'error'}
        animation="pop"
        size={158}
        style={{ marginTop: 18 }}
      />

      <Text style={styles.title}>{m2.title}</Text>
      <View style={styles.starsRow}>
        {[0, 1, 2].map((i) => (
          <Icon key={i} name="star" size={38} color={i < zoneScore ? colors.white : 'rgba(255,255,255,.4)'} />
        ))}
      </View>

      <View style={styles.whyBox}>
        <Text style={styles.whyText}>{m2.why}</Text>
      </View>

      <View style={{ width: '100%', gap: 9, marginTop: 14 }}>
        {items.map((item) => {
          const found = !!zones[item.key];
          return (
            <View key={item.key} style={styles.foundRow}>
              <View style={[styles.dot, { backgroundColor: found ? colors.green : colors.border }]} />
              <Text style={styles.foundLabel}>{item.label}</Text>
              {found ? <Text style={styles.points}>+20</Text> : null}
            </View>
          );
        })}
      </View>

      <View style={styles.ruleBox}>
        <Text style={styles.ruleLabel}>{m2.rule}</Text>
        <Text style={styles.ruleText}>{m2.ruleTxt}</Text>
      </View>

      <View style={{ flex: 1 }} />
      <Button label={m2.next} variant="primary" style={{ width: '100%' }} onPress={next} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  stamp: { backgroundColor: colors.white, borderWidth: 5, borderColor: colors.ink, borderRadius: 16, paddingVertical: 13, paddingHorizontal: 24 },
  stampText: { fontFamily: fonts.display, fontSize: 30, letterSpacing: 2.5, color: colors.ink },
  title: { fontFamily: fonts.display, fontSize: 27, lineHeight: 34, color: colors.ink, textAlign: 'center', marginTop: 22 },
  starsRow: { flexDirection: 'row', gap: 6, marginTop: 12 },
  whyBox: { width: '100%', backgroundColor: colors.white, borderRadius: 20, padding: 18, marginTop: 20 },
  whyText: { fontFamily: fonts.body, fontSize: 15, lineHeight: 23, color: colors.ink },
  foundRow: { flexDirection: 'row', alignItems: 'center', gap: 11, backgroundColor: 'rgba(255,255,255,.75)', borderRadius: 14, paddingVertical: 13, paddingHorizontal: 15 },
  dot: { width: 11, height: 11, borderRadius: 999 },
  foundLabel: { flex: 1, fontFamily: fonts.bodySemibold, fontSize: 14, color: colors.ink },
  points: { fontFamily: fonts.display, fontSize: 14, color: colors.greenShadow },
  ruleBox: { width: '100%', backgroundColor: colors.ink, borderRadius: 20, padding: 17, marginTop: 14, gap: 8 },
  ruleLabel: { fontFamily: fonts.display, fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', color: colors.gold },
  ruleText: { fontFamily: fonts.displayBold, fontSize: 16, lineHeight: 24, color: colors.white },
});
