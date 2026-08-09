import React from 'react';
import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { Screen } from '../components/Screen';
import { Card } from '../components/Card';
import { Avatar } from '../components/Avatar';
import { Button } from '../components/Button';
import { Icon } from '../components/Icon';
import { colors, gradients } from '../theme/colors';
import { fonts } from '../theme/typography';
import { useT } from '../i18n';
import { PLAYERS, LOBBY_ORDER } from '../data/players';

type Props = NativeStackScreenProps<RootStackParamList, 'Lobby'>;

const WAITING: (keyof typeof PLAYERS)[] = ['diego'];

export default function LobbyScreen({ navigation }: Props) {
  const t = useT();
  const v = t.v2;

  return (
    <Screen colors={gradients.lobby}>
      <Text style={styles.kicker}>{v.lobby.kicker}</Text>
      <Text style={styles.name}>{v.name}</Text>
      <Text style={styles.sub}>{v.sub}</Text>
      <View style={styles.codePill}>
        <Text style={styles.codeText}>{v.lobby.code}</Text>
      </View>

      <View style={styles.playersHeader}>
        <Text style={styles.playersTitle}>{v.lobby.players}</Text>
        <Text style={styles.playersCount}>{LOBBY_ORDER.length} / 10</Text>
      </View>

      <ScrollView style={styles.list} contentContainerStyle={{ gap: 9 }} showsVerticalScrollIndicator={false}>
        {LOBBY_ORDER.map((key) => {
          const p = PLAYERS[key];
          const waiting = WAITING.includes(key);
          return (
            <Card key={key} padding={11} radius={16} border={{ width: 3, color: colors.white }}>
              <View style={styles.playerRow}>
                <Avatar letter={p.letter} bg={p.color} size={38} />
                <Text style={styles.playerName}>{p.name}</Text>
                <Text style={[styles.playerStatus, { color: waiting ? colors.slate : colors.greenShadow }]}>
                  {waiting ? v.lobby.waiting : v.lobby.ready}
                </Text>
              </View>
            </Card>
          );
        })}
        <View style={styles.levelRow}>
          <Icon name="target" size={19} color={colors.gold} />
          <Text style={styles.levelLabel}>{v.lobby.level}</Text>
          <Text style={styles.levelValue}>{v.lobby.lv}</Text>
        </View>
      </ScrollView>

      <View style={{ marginTop: 14, gap: 10 }}>
        <Button label={v.lobby.start} variant="primary" onPress={() => navigation.navigate('RoleDetective')} />
        <Pressable onPress={() => navigation.navigate('RoleHidden')}>
          <Text style={styles.previewLink}>{v.lobby.rolesInfo} →</Text>
        </Pressable>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  kicker: { fontFamily: fonts.display, fontSize: 12, letterSpacing: 2.2, textTransform: 'uppercase', color: colors.gold },
  name: { fontFamily: fonts.display, fontSize: 30, lineHeight: 37, color: colors.white, marginTop: 8 },
  sub: { fontFamily: fonts.body, fontSize: 14, lineHeight: 21, color: 'rgba(255,255,255,.72)', marginTop: 6 },
  codePill: { alignSelf: 'flex-start', marginTop: 12, backgroundColor: colors.gold, borderRadius: 999, paddingVertical: 11, paddingHorizontal: 17, borderBottomWidth: 4, borderBottomColor: colors.goldShadow },
  codeText: { fontFamily: fonts.display, fontSize: 14, color: colors.ink },
  playersHeader: { flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between', marginTop: 18, marginBottom: 10 },
  playersTitle: { fontFamily: fonts.display, fontSize: 17, color: colors.white },
  playersCount: { fontFamily: fonts.displayBold, fontSize: 14, color: 'rgba(255,255,255,.6)' },
  list: { flex: 1 },
  playerRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  playerName: { flex: 1, fontFamily: fonts.displayBold, fontSize: 15, color: colors.ink },
  playerStatus: { fontFamily: fonts.display, fontSize: 12 },
  levelRow: { flexDirection: 'row', alignItems: 'center', gap: 11, backgroundColor: 'rgba(255,201,60,.16)', borderWidth: 2, borderColor: 'rgba(255,201,60,.5)', borderRadius: 18, padding: 13, marginTop: 4 },
  levelLabel: { flex: 1, fontFamily: fonts.bodySemibold, fontSize: 13, color: 'rgba(255,255,255,.8)' },
  levelValue: { fontFamily: fonts.display, fontSize: 14, color: colors.gold },
  previewLink: { textAlign: 'center', fontFamily: fonts.bodySemibold, fontSize: 12, color: 'rgba(255,255,255,.55)' },
});
