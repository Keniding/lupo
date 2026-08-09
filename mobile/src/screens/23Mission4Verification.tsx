import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { Screen } from '../components/Screen';
import { goBackOrHome } from '../navigation/goBack';
import { SquareCheckRow, PillOption } from '../components/SelectableRow';
import { Button } from '../components/Button';
import { colors, gradients } from '../theme/colors';
import { fonts } from '../theme/typography';
import { useT } from '../i18n';
import { useGameStore, CHECK_KEYS, type VerdictM4 } from '../state/store';

type Props = NativeStackScreenProps<RootStackParamList, 'Mission4Verification'>;

export default function Mission4VerificationScreen({ navigation }: Props) {
  const t = useT();
  const m4 = t.m4;
  const checks = useGameStore((s) => s.checks);
  const toggleCheck = useGameStore((s) => s.toggleCheck);
  const cCount = CHECK_KEYS.filter((k) => checks[k]).length;
  const m4Verdict = useGameStore((s) => s.m4Verdict);
  const pickM4Verdict = useGameStore((s) => s.pickM4Verdict);

  const labels: Record<(typeof CHECK_KEYS)[number], string> = {
    c1: m4.c1,
    c2: m4.c2,
    c3: m4.c3,
    c4: m4.c4,
    c5: m4.c5,
  };

  const pick = (k: VerdictM4) => pickM4Verdict(k);

  return (
    <Screen onBack={() => goBackOrHome(navigation)} colors={gradients.m4verification} scroll>
      <Text style={styles.prompt}>{m4.prompt}</Text>

      <View style={{ gap: 9, marginTop: 16 }}>
        {CHECK_KEYS.map((k) => (
          <SquareCheckRow key={k} label={labels[k]} checked={!!checks[k]} onPress={() => toggleCheck(k)} />
        ))}
      </View>

      <View style={styles.checkedRow}>
        <Text style={styles.checkedLabel}>{m4.checked}</Text>
        <Text style={styles.checkedValue}>{cCount}</Text>
      </View>

      <Text style={styles.verdictTitle}>{m4.verdict}</Text>
      <View style={{ gap: 10, marginTop: 11 }}>
        <PillOption label={m4.vTrust} selected={m4Verdict === 'trust'} borderColor={colors.green} onPress={() => pick('trust')} />
        <PillOption label={m4.vCheck} selected={m4Verdict === 'check'} borderColor={colors.gold} onPress={() => pick('check')} />
        <PillOption label={m4.vFalse} selected={m4Verdict === 'false'} borderColor={colors.red} onPress={() => pick('false')} />
      </View>

      {m4Verdict && (
        <Button label={t.cm.continueLabel} variant="primary" style={{ marginTop: 16 }} onPress={() => navigation.navigate('Mission4Result')} />
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  prompt: { fontFamily: fonts.display, fontSize: 22, lineHeight: 29, color: colors.white, textShadowColor: 'rgba(10,26,74,.6)', textShadowOffset: { width: 0, height: 3 }, textShadowRadius: 0 },
  checkedRow: { flexDirection: 'row', alignItems: 'center', gap: 11, backgroundColor: 'rgba(10,26,74,.45)', borderWidth: 3, borderColor: colors.gold, borderRadius: 999, padding: 12, paddingHorizontal: 18, marginTop: 14 },
  checkedLabel: { flex: 1, fontFamily: fonts.displayBold, fontSize: 14, color: 'rgba(255,255,255,.8)' },
  checkedValue: { fontFamily: fonts.display, fontSize: 18, color: colors.gold },
  verdictTitle: { fontFamily: fonts.display, fontSize: 17, color: colors.white, marginTop: 16 },
});
