import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { Screen } from '../components/Screen';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { colors, gradients } from '../theme/colors';
import { fonts } from '../theme/typography';
import { useT } from '../i18n';
import { useGameStore, CHECK_KEYS } from '../state/store';

type Props = NativeStackScreenProps<RootStackParamList, 'Mission4Result'>;

export default function Mission4ResultScreen({ navigation }: Props) {
  const t = useT();
  const m4 = t.m4;
  const m4Verdict = useGameStore((s) => s.m4Verdict);
  const checks = useGameStore((s) => s.checks);
  const addPP = useGameStore((s) => s.addPP);
  const completeMission4 = useGameStore((s) => s.completeMission4);
  const resetMission4 = useGameStore((s) => s.resetMission4);
  const applied = useRef(false);

  useEffect(() => {
    if (!applied.current) {
      applied.current = true;
      // The story's news case is deliberately unverifiable: recognising that
      // ("check" or "false") is the media-literate call, blind "trust" isn't.
      const cCount = CHECK_KEYS.filter((k) => checks[k]).length;
      const correct = m4Verdict === 'check' || m4Verdict === 'false';
      if (correct) addPP(30);
      completeMission4(correct ? (cCount >= 4 ? 3 : cCount >= 2 ? 2 : 1) : 0);
    }
  }, [addPP, completeMission4, m4Verdict, checks]);

  const next = () => {
    resetMission4();
    navigation.navigate('Missions');
  };

  return (
    <Screen colors={gradients.m4result} align="center" scroll style={{ paddingTop: 46, paddingBottom: 26 }}>
      <View style={styles.stamp}>
        <Text style={styles.stampText}>{m4.stamp}</Text>
      </View>
      <Text style={styles.title}>{m4.title}</Text>

      <Card style={{ width: '100%', marginTop: 16 }}>
        <Text style={styles.why}>{m4.why}</Text>
      </Card>

      <View style={{ width: '100%', marginTop: 16, gap: 9 }}>
        <Text style={styles.othersTitle}>{m4.others}</Text>
        {[m4.o1, m4.o2, m4.o3].map((o) => (
          <View key={o} style={styles.otherRow}>
            <View style={styles.dot} />
            <Text style={styles.otherText}>{o}</Text>
          </View>
        ))}
      </View>

      <View style={styles.ruleBox}>
        <Text style={styles.ruleLabel}>{m4.rule}</Text>
        <Text style={styles.ruleText}>{m4.ruleTxt}</Text>
      </View>

      <View style={{ flex: 1 }} />
      <Button label={m4.next} variant="primary" style={{ width: '100%' }} onPress={next} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  stamp: { backgroundColor: colors.white, borderWidth: 5, borderColor: colors.orange, borderRadius: 14, paddingVertical: 11, paddingHorizontal: 20 },
  stampText: { fontFamily: fonts.display, fontSize: 22, letterSpacing: 1.8, color: colors.orange, textAlign: 'center' },
  title: { fontFamily: fonts.display, fontSize: 26, lineHeight: 33, color: colors.white, textAlign: 'center', marginTop: 20, textShadowColor: 'rgba(10,26,74,.5)', textShadowOffset: { width: 0, height: 3 }, textShadowRadius: 0 },
  why: { fontFamily: fonts.body, fontSize: 15, lineHeight: 23, color: colors.ink },
  othersTitle: { fontFamily: fonts.display, fontSize: 16, color: colors.white },
  otherRow: { flexDirection: 'row', alignItems: 'center', gap: 11, backgroundColor: 'rgba(232,72,58,.22)', borderWidth: 2, borderColor: 'rgba(232,72,58,.5)', borderRadius: 14, paddingVertical: 13, paddingHorizontal: 15 },
  dot: { width: 11, height: 11, borderRadius: 999, backgroundColor: colors.red },
  otherText: { flex: 1, fontFamily: fonts.body, fontSize: 14, lineHeight: 20, color: colors.white },
  ruleBox: { width: '100%', backgroundColor: 'rgba(10,26,74,.5)', borderWidth: 3, borderColor: colors.gold, borderRadius: 20, padding: 17, marginTop: 14, gap: 8 },
  ruleLabel: { fontFamily: fonts.display, fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', color: colors.gold },
  ruleText: { fontFamily: fonts.displayBold, fontSize: 17, lineHeight: 25, color: colors.white },
});
