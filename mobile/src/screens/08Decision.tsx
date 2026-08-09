import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { Screen } from '../components/Screen';
import { goBackOrHome } from '../navigation/goBack';
import { DotRow } from '../components/SelectableRow';
import { Button } from '../components/Button';
import { colors, gradients } from '../theme/colors';
import { fonts } from '../theme/typography';
import { useT } from '../i18n';
import { useGameStore, type DecisionKey } from '../state/store';

type Props = NativeStackScreenProps<RootStackParamList, 'Decision'>;

export default function DecisionScreen({ navigation }: Props) {
  const t = useT();
  const v = t.v2;
  const decision = useGameStore((s) => s.decision);
  const pickDecision = useGameStore((s) => s.pickDecision);
  const loseHeart = useGameStore((s) => s.loseHeart);
  const addPP = useGameStore((s) => s.addPP);

  // Only the first choice counts for scoring — re-tapping just changes which
  // option is highlighted, it doesn't let the player farm hearts/PP.
  const pick = (k: DecisionKey) => {
    if (decision === null) {
      if (k === 'a') loseHeart();
      if (k === 'c') addPP(30);
    }
    pickDecision(k);
  };

  return (
    <Screen onBack={() => goBackOrHome(navigation)} colors={gradients.decision} scroll>
      <Text style={styles.kicker}>{v.dec.kicker}</Text>
      <Text style={styles.prompt}>{v.dec.prompt}</Text>
      <Text style={styles.tag}>{v.dec.tag}</Text>

      <View style={{ gap: 12, marginTop: 18 }}>
        <DotRow label={v.dec.a} dotColor={colors.red} selected={decision === 'a'} onPress={() => pick('a')} />
        <DotRow label={v.dec.b} dotColor={colors.gold} selected={decision === 'b'} onPress={() => pick('b')} />
        <DotRow label={v.dec.c} dotColor={colors.green} selected={decision === 'c'} onPress={() => pick('c')} />
      </View>

      {decision === 'a' && (
        <View style={[styles.banner, styles.bannerBad]}>
          <Text style={styles.bannerTitleBad}>{v.cons.badTitle}</Text>
          <Text style={styles.bannerText}>{v.cons.bad}</Text>
        </View>
      )}
      {decision === 'c' && (
        <View style={[styles.banner, styles.bannerGood]}>
          <Text style={styles.bannerTitleGood}>{v.cons.goodTitle}</Text>
          <Text style={styles.bannerText}>{v.cons.good}</Text>
          <Text style={styles.bannerPts}>{v.cons.pts}</Text>
        </View>
      )}

      <View style={{ flex: 1 }} />
      <Button
        label={v.cons.next}
        variant="primary"
        disabled={decision === null}
        onPress={() => navigation.navigate('Consequence')}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  kicker: { fontFamily: fonts.display, fontSize: 12, letterSpacing: 1.8, textTransform: 'uppercase', color: colors.gold },
  prompt: { fontFamily: fonts.display, fontSize: 25, lineHeight: 33, color: colors.white, marginTop: 10, textShadowColor: 'rgba(10,26,74,.6)', textShadowOffset: { width: 0, height: 3 }, textShadowRadius: 0 },
  tag: { fontFamily: fonts.body, fontSize: 14, lineHeight: 21, color: 'rgba(255,255,255,.65)', marginTop: 8 },
  banner: { borderRadius: 18, padding: 17, marginTop: 16, gap: 8 },
  bannerBad: { backgroundColor: 'rgba(232,72,58,.2)', borderWidth: 2, borderColor: 'rgba(232,72,58,.6)' },
  bannerGood: { backgroundColor: 'rgba(76,201,59,.2)', borderWidth: 2, borderColor: 'rgba(76,201,59,.6)' },
  bannerTitleBad: { fontFamily: fonts.display, fontSize: 15, color: '#FF9E96' },
  bannerTitleGood: { fontFamily: fonts.display, fontSize: 15, color: '#9BE88E' },
  bannerText: { fontFamily: fonts.body, fontSize: 15, lineHeight: 23, color: colors.white },
  bannerPts: { fontFamily: fonts.display, fontSize: 14, color: colors.gold },
});
