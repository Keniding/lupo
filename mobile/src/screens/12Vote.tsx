import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { Screen } from '../components/Screen';
import { DotRow } from '../components/SelectableRow';
import { Avatar } from '../components/Avatar';
import { Button } from '../components/Button';
import { colors, gradients } from '../theme/colors';
import { fonts } from '../theme/typography';
import { useT } from '../i18n';
import { useGameStore, VOTE_KEYS } from '../state/store';
import { PLAYERS } from '../data/players';

type Props = NativeStackScreenProps<RootStackParamList, 'Vote'>;

export default function VoteScreen({ navigation }: Props) {
  const t = useT();
  const v = t.v2;
  const vote = useGameStore((s) => s.vote);
  const pickVote = useGameStore((s) => s.pickVote);

  return (
    <Screen colors={gradients.vote} scroll>
      <Text style={styles.title}>{v.vote.title}</Text>
      <Text style={styles.sub}>{v.vote.sub}</Text>

      <View style={{ gap: 11, marginTop: 18 }}>
        {VOTE_KEYS.map((key) => {
          const p = PLAYERS[key];
          return (
            <DotRow
              key={key}
              label={p.name}
              selected={vote === key}
              onPress={() => pickVote(key)}
              avatar={<Avatar letter={p.letter} bg={p.color} size={44} />}
            />
          );
        })}
      </View>

      <View style={{ flex: 1 }} />
      <View style={styles.dotsRow}>
        <View style={styles.dots}>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <View key={i} style={[styles.dot, { backgroundColor: i < 3 ? colors.gold : 'rgba(255,255,255,.25)' }]} />
          ))}
        </View>
        <Text style={styles.dotsLabel}>3 / 6 {v.vote.voted}</Text>
      </View>
      <Button label={v.vote.confirm} variant="primary" disabled={!vote} onPress={() => navigation.navigate('Justification')} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: { fontFamily: fonts.display, fontSize: 28, lineHeight: 35, color: colors.white, textShadowColor: 'rgba(10,26,74,.6)', textShadowOffset: { width: 0, height: 3 }, textShadowRadius: 0 },
  sub: { fontFamily: fonts.body, fontSize: 15, lineHeight: 22, color: 'rgba(255,255,255,.65)', marginTop: 6 },
  dotsRow: { alignItems: 'center', gap: 9, paddingBottom: 14 },
  dots: { flexDirection: 'row', gap: 5 },
  dot: { width: 11, height: 11, borderRadius: 999 },
  dotsLabel: { fontFamily: fonts.display, fontSize: 13, color: 'rgba(255,255,255,.7)' },
});
