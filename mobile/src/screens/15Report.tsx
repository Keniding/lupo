import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { Screen } from '../components/Screen';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Icon } from '../components/Icon';
import { colors, gradients } from '../theme/colors';
import { fonts } from '../theme/typography';
import { useT } from '../i18n';
import { useGameStore } from '../state/store';

type Props = NativeStackScreenProps<RootStackParamList, 'Report'>;

export default function ReportScreen({ navigation }: Props) {
  const t = useT();
  const v = t.v2;
  const pp = useGameStore((s) => s.pp);
  const resetPartyGame = useGameStore((s) => s.resetPartyGame);

  const next = () => {
    resetPartyGame();
    navigation.navigate('Missions');
  };

  return (
    <Screen colors={gradients.report} scroll>
      <Text style={styles.title}>{v.rep.title}</Text>

      <View style={styles.scoreRow}>
        <Text style={styles.score}>{pp}</Text>
        <Text style={styles.scoreLabel}>{v.rep.score}</Text>
        <View style={{ marginLeft: 'auto', flexDirection: 'row', gap: 4 }}>
          <Icon name="star" size={26} color={colors.gold} />
          <Icon name="star" size={26} color={colors.gold} />
          <Icon name="star" size={26} color="rgba(255,255,255,.3)" />
        </View>
      </View>

      <Card style={{ marginTop: 18 }}>
        <View style={styles.rowHeader}>
          <Icon name="shieldCheck" size={19} color={colors.greenShadow} />
          <Text style={[styles.rowHeaderText, { color: colors.greenShadow }]}>{v.rep.strong}</Text>
        </View>
        <Text style={styles.bodyText}>{v.rep.st1}</Text>
        <Text style={styles.bodyText}>{v.rep.st2}</Text>
      </Card>

      <Card style={{ marginTop: 12 }}>
        <View style={styles.rowHeader}>
          <Icon name="alert" size={19} color={colors.orangeShadow} />
          <Text style={[styles.rowHeaderText, { color: colors.orangeShadow }]}>{v.rep.improve}</Text>
        </View>
        <Text style={styles.bodyText}>{v.rep.im1}</Text>
      </Card>

      <View style={styles.ruleBox}>
        <Text style={styles.ruleLabel}>{v.rep.rule}</Text>
        <Text style={styles.ruleText}>{v.rep.ruleText}</Text>
      </View>

      <View style={{ flex: 1 }} />
      <Button label={v.rep.next} variant="primary" onPress={next} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: { fontFamily: fonts.display, fontSize: 26, lineHeight: 34, color: colors.white, textShadowColor: 'rgba(10,26,74,.6)', textShadowOffset: { width: 0, height: 3 }, textShadowRadius: 0 },
  scoreRow: { flexDirection: 'row', alignItems: 'center', gap: 12, marginTop: 14 },
  score: { fontFamily: fonts.display, fontSize: 46, color: colors.gold, textShadowColor: colors.goldShadow, textShadowOffset: { width: 0, height: 4 }, textShadowRadius: 0 },
  scoreLabel: { fontFamily: fonts.displayBold, fontSize: 14, color: 'rgba(255,255,255,.75)' },
  rowHeader: { flexDirection: 'row', alignItems: 'center', gap: 9, marginBottom: 6 },
  rowHeaderText: { fontFamily: fonts.display, fontSize: 15 },
  bodyText: { fontFamily: fonts.body, fontSize: 15, lineHeight: 22, color: colors.ink, marginTop: 4 },
  ruleBox: { backgroundColor: 'rgba(10,26,74,.45)', borderWidth: 3, borderColor: colors.gold, borderRadius: 20, padding: 18, marginTop: 12, gap: 6 },
  ruleLabel: { fontFamily: fonts.display, fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', color: colors.gold },
  ruleText: { fontFamily: fonts.displayBold, fontSize: 17, lineHeight: 25, color: colors.white },
});
