import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { Screen } from '../components/Screen';
import { DotRow } from '../components/SelectableRow';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { colors, gradients } from '../theme/colors';
import { fonts } from '../theme/typography';
import { useT } from '../i18n';
import { useGameStore, REDACT_KEYS, type VerdictM3 } from '../state/store';

type Props = NativeStackScreenProps<RootStackParamList, 'Mission3Verdict'>;

export default function Mission3VerdictScreen({ navigation }: Props) {
  const t = useT();
  const m3 = t.m3;
  const m3Verdict = useGameStore((s) => s.m3Verdict);
  const pickM3Verdict = useGameStore((s) => s.pickM3Verdict);
  const redact = useGameStore((s) => s.redact);
  const addPP = useGameStore((s) => s.addPP);
  const resetMission3 = useGameStore((s) => s.resetMission3);
  const applied = useRef(false);

  useEffect(() => {
    if (m3Verdict && !applied.current) {
      applied.current = true;
      const rCount = REDACT_KEYS.filter((k) => redact[k]).length;
      addPP(rCount * 10);
    }
  }, [m3Verdict, addPP, redact]);

  const pick = (k: VerdictM3) => pickM3Verdict(k);

  const next = () => {
    resetMission3();
    navigation.navigate('Missions');
  };

  return (
    <Screen colors={gradients.m3verdict} scroll>
      <Text style={styles.title}>{m3.verdict}</Text>

      <View style={{ gap: 10, marginTop: 14 }}>
        <DotRow label={m3.vShare} dotColor={colors.red} selected={m3Verdict === 'share'} onPress={() => pick('share')} />
        <DotRow label={m3.vEdit} dotColor={colors.green} selected={m3Verdict === 'edit'} onPress={() => pick('edit')} />
        <DotRow label={m3.vNo} dotColor={colors.gold} selected={m3Verdict === 'no'} onPress={() => pick('no')} />
      </View>

      {m3Verdict && (
        <>
          <View style={styles.stamp}>
            <Text style={styles.stampText}>{m3.stamp}</Text>
          </View>
          <Text style={styles.resultTitle}>{m3.title}</Text>
          <Card style={{ marginTop: 14 }}>
            <Text style={styles.why}>{m3.why}</Text>
          </Card>
          <View style={styles.ruleBox}>
            <Text style={styles.ruleLabel}>{m3.rule}</Text>
            <Text style={styles.ruleText}>{m3.ruleTxt}</Text>
          </View>
        </>
      )}

      <View style={{ flex: 1, minHeight: 14 }} />
      {m3Verdict && <Button label={m3.next} variant="primary" onPress={next} />}
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: { fontFamily: fonts.display, fontSize: 23, lineHeight: 30, color: colors.white, textShadowColor: 'rgba(10,26,74,.6)', textShadowOffset: { width: 0, height: 3 }, textShadowRadius: 0 },
  stamp: { alignSelf: 'center', marginTop: 24, backgroundColor: colors.white, borderWidth: 5, borderColor: colors.green, borderRadius: 14, paddingVertical: 11, paddingHorizontal: 22 },
  stampText: { fontFamily: fonts.display, fontSize: 26, letterSpacing: 2, color: colors.greenShadow },
  resultTitle: { fontFamily: fonts.display, fontSize: 24, lineHeight: 31, color: colors.white, textAlign: 'center', marginTop: 20 },
  why: { fontFamily: fonts.body, fontSize: 15, lineHeight: 23, color: colors.ink },
  ruleBox: { backgroundColor: 'rgba(10,26,74,.5)', borderWidth: 3, borderColor: colors.gold, borderRadius: 20, padding: 17, marginTop: 12, gap: 8 },
  ruleLabel: { fontFamily: fonts.display, fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', color: colors.gold },
  ruleText: { fontFamily: fonts.displayBold, fontSize: 17, lineHeight: 25, color: colors.white },
});
