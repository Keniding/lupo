import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { Screen } from '../components/Screen';
import { goBackOrHome } from '../navigation/goBack';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { colors, gradients } from '../theme/colors';
import { fonts } from '../theme/typography';
import { useT } from '../i18n';
import { useGameStore, JUSTIFICATION_ITEMS } from '../state/store';

type Props = NativeStackScreenProps<RootStackParamList, 'Justification'>;

export default function JustificationScreen({ navigation }: Props) {
  const t = useT();
  const v = t.v2;
  const just = useGameStore((s) => s.just);
  const toggleJust = useGameStore((s) => s.toggleJust);
  const justScore = useGameStore((s) => s.justScore());
  const addPP = useGameStore((s) => s.addPP);

  const pointsLabels: Record<string, string> = { j1: v.just.p1, j2: v.just.p2, j3: v.just.p3, j4: v.just.p4 };

  const submit = () => {
    addPP(justScore);
    navigation.navigate('Reveal');
  };

  return (
    <Screen onBack={() => goBackOrHome(navigation)} colors={gradients.justification} scroll>
      <Text style={styles.title}>{v.just.title}</Text>
      <Text style={styles.sub}>{v.just.sub}</Text>

      <View style={{ gap: 11, marginTop: 18 }}>
        {JUSTIFICATION_ITEMS.map((item) => {
          const checked = !!just[item.key];
          return (
            <Pressable key={item.key} onPress={() => toggleJust(item.key)}>
              <Card
                padding={16}
                radius={18}
                bg={checked ? colors.cardBgGreenTint : undefined}
                border={checked ? { width: 4, color: colors.green } : undefined}
              >
                <View style={styles.row}>
                  <Text style={styles.label}>{v.board[item.sigKey]}</Text>
                  <Text style={styles.points}>{pointsLabels[item.key]}</Text>
                </View>
              </Card>
            </Pressable>
          );
        })}
      </View>

      <View style={{ flex: 1 }} />
      <View style={styles.scoreBox}>
        <Text style={styles.scoreLabel}>{v.rep.score}</Text>
        <Text style={styles.scoreValue}>{justScore} PP</Text>
      </View>
      <Button label={v.just.submit} variant="primary" onPress={submit} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: { fontFamily: fonts.display, fontSize: 27, lineHeight: 34, color: colors.white, textShadowColor: 'rgba(10,26,74,.6)', textShadowOffset: { width: 0, height: 3 }, textShadowRadius: 0 },
  sub: { fontFamily: fonts.body, fontSize: 15, lineHeight: 23, color: 'rgba(255,255,255,.7)', marginTop: 8 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  label: { flex: 1, fontFamily: fonts.bodySemibold, fontSize: 15, lineHeight: 22, color: colors.ink },
  points: { fontFamily: fonts.display, fontSize: 15, color: colors.orange },
  scoreBox: { backgroundColor: 'rgba(10,26,74,.45)', borderWidth: 3, borderColor: colors.gold, borderRadius: 20, padding: 17, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 },
  scoreLabel: { fontFamily: fonts.displayBold, fontSize: 14, color: 'rgba(255,255,255,.75)' },
  scoreValue: { fontFamily: fonts.display, fontSize: 28, color: colors.gold },
});
