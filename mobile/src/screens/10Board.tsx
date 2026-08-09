import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { Screen } from '../components/Screen';
import { Card } from '../components/Card';
import { CheckRow } from '../components/SelectableRow';
import { Button } from '../components/Button';
import { colors, gradients } from '../theme/colors';
import { fonts } from '../theme/typography';
import { useT } from '../i18n';
import { useGameStore, BOARD_SIGNAL_KEYS } from '../state/store';

type Props = NativeStackScreenProps<RootStackParamList, 'Board'>;

const DOT_COLORS: Record<(typeof BOARD_SIGNAL_KEYS)[number], string> = {
  s1: colors.red,
  s2: colors.red,
  s3: colors.red,
  s4: colors.red,
  s5: colors.red,
  s6: colors.gold,
  s7: colors.green,
};

export default function BoardScreen({ navigation }: Props) {
  const t = useT();
  const v = t.v2;
  const board = useGameStore((s) => s.board);
  const toggleBoardSignal = useGameStore((s) => s.toggleBoardSignal);

  const sigLabels: Record<(typeof BOARD_SIGNAL_KEYS)[number], string> = {
    s1: v.board.sig1,
    s2: v.board.sig2,
    s3: v.board.sig3,
    s4: v.board.sig4,
    s5: v.board.sig5,
    s6: v.board.sig6,
    s7: v.board.sig7,
  };

  return (
    <Screen colors={gradients.board} scroll>
      <Text style={styles.title}>{v.board.title}</Text>

      <Card style={{ marginTop: 14 }} padding={12} radius={18}>
        <View style={styles.suspectRow}>
          <View style={styles.avatar}>
            <Text style={styles.avatarLabel}>A</Text>
          </View>
          <Text style={styles.suspectName}>Alex</Text>
          <Text style={styles.hint}>{v.board.hint}</Text>
        </View>
      </Card>

      <View style={{ gap: 9, marginTop: 14 }}>
        {BOARD_SIGNAL_KEYS.map((k) => (
          <CheckRow
            key={k}
            label={sigLabels[k]}
            dotColor={DOT_COLORS[k]}
            checked={!!board[k]}
            onPress={() => toggleBoardSignal(k)}
          />
        ))}
      </View>

      <View style={{ flex: 1, minHeight: 14 }} />
      <Button label={v.board.save} variant="primary" style={{ marginTop: 14 }} onPress={() => navigation.navigate('Assembly')} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: { fontFamily: fonts.display, fontSize: 23, color: colors.white, textShadowColor: 'rgba(10,26,74,.6)', textShadowOffset: { width: 0, height: 3 }, textShadowRadius: 0 },
  suspectRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  avatar: { width: 42, height: 42, borderRadius: 999, backgroundColor: colors.teal, alignItems: 'center', justifyContent: 'center' },
  avatarLabel: { fontFamily: fonts.display, fontSize: 17, color: colors.white },
  suspectName: { flex: 1, fontFamily: fonts.display, fontSize: 17, color: colors.ink },
  hint: { fontFamily: fonts.bodySemibold, fontSize: 12, color: colors.slate, maxWidth: 130, textAlign: 'right' },
});
