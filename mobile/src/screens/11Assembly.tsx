import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { Screen } from '../components/Screen';
import { Card } from '../components/Card';
import { ProgressBar } from '../components/Misc';
import { Icon } from '../components/Icon';
import { colors, gradients } from '../theme/colors';
import { fonts } from '../theme/typography';
import { useT } from '../i18n';
import { PLAYERS, LOBBY_ORDER } from '../data/players';

type Props = NativeStackScreenProps<RootStackParamList, 'Assembly'>;

export default function AssemblyScreen({ navigation }: Props) {
  const t = useT();
  const v = t.v2;

  const goVote = () => navigation.navigate('Vote');

  return (
    <Screen colors={gradients.assembly} scroll style={{ paddingTop: 28, paddingBottom: 26 }}>
      <View style={styles.topRow}>
        <Text style={styles.kicker}>{v.asm.kicker}</Text>
        <View style={styles.timer}>
          <Text style={styles.timerText}>{v.asm.timer}</Text>
        </View>
      </View>

      <Text style={styles.title}>{v.asm.title}</Text>

      <ProgressBar pct={48} />
      <Text style={styles.turn}>{v.asm.turn}</Text>

      <Card style={{ marginTop: 16 }}>
        <View style={styles.speakerRow}>
          <View style={styles.avatar}>
            <Text style={styles.avatarLabel}>V</Text>
          </View>
          <Text style={styles.speaking}>{v.asm.speaking}</Text>
        </View>
        <Text style={styles.quote}>{v.asm.quote}</Text>
      </Card>

      <View style={styles.actionsRow}>
        <Pressable style={styles.supportBtn} onPress={goVote}>
          <Text style={styles.actionText}>{v.asm.support}</Text>
        </Pressable>
        <Pressable style={styles.questionBtn} onPress={goVote}>
          <Text style={styles.actionText}>{v.asm.question}</Text>
        </Pressable>
      </View>

      <Pressable style={styles.clueBtn}>
        <Icon name="search" size={18} color={colors.white} />
        <Text style={styles.clueText}>{v.asm.clue}</Text>
      </Pressable>

      <View style={{ flex: 1 }} />
      <View style={styles.avatarStrip}>
        {LOBBY_ORDER.map((key) => {
          const p = PLAYERS[key];
          return (
            <View key={key} style={[styles.stripAvatar, { backgroundColor: p.color }, key === 'valentina' && styles.stripAvatarActive]}>
              <Text style={styles.stripLabel}>{p.letter}</Text>
            </View>
          );
        })}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  topRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  kicker: { fontFamily: fonts.display, fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', color: colors.gold },
  timer: { backgroundColor: colors.red, borderRadius: 999, paddingVertical: 9, paddingHorizontal: 15, borderBottomWidth: 4, borderBottomColor: 'rgba(10,26,74,.5)' },
  timerText: { fontFamily: fonts.display, fontSize: 18, color: colors.white },
  title: { fontFamily: fonts.display, fontSize: 27, lineHeight: 35, color: colors.white, marginTop: 14, marginBottom: 14, textShadowColor: 'rgba(10,26,74,.6)', textShadowOffset: { width: 0, height: 3 }, textShadowRadius: 0 },
  turn: { fontFamily: fonts.bodySemibold, fontSize: 13, color: 'rgba(255,255,255,.6)', marginTop: 8 },
  speakerRow: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 13 },
  avatar: { width: 48, height: 48, borderRadius: 999, backgroundColor: colors.magenta, alignItems: 'center', justifyContent: 'center' },
  avatarLabel: { fontFamily: fonts.display, fontSize: 19, color: colors.white },
  speaking: { fontFamily: fonts.display, fontSize: 16, color: colors.ink },
  quote: { fontFamily: fonts.body, fontSize: 17, lineHeight: 26, color: colors.ink },
  actionsRow: { flexDirection: 'row', gap: 11, marginTop: 16 },
  supportBtn: { flex: 1, backgroundColor: colors.green, borderRadius: 999, padding: 16, alignItems: 'center', justifyContent: 'center', minHeight: 48, borderBottomWidth: 5, borderBottomColor: colors.greenShadow },
  questionBtn: { flex: 1, backgroundColor: colors.red, borderRadius: 999, padding: 16, alignItems: 'center', justifyContent: 'center', minHeight: 48, borderBottomWidth: 5, borderBottomColor: colors.redShadow },
  actionText: { fontFamily: fonts.display, fontSize: 15, color: colors.white },
  clueBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 9, backgroundColor: 'rgba(255,255,255,.14)', borderRadius: 999, padding: 16, marginTop: 11, minHeight: 48 },
  clueText: { fontFamily: fonts.displayBold, fontSize: 15, color: colors.white },
  avatarStrip: { flexDirection: 'row', gap: 9, justifyContent: 'center', flexWrap: 'wrap' },
  stripAvatar: { width: 36, height: 36, borderRadius: 999, alignItems: 'center', justifyContent: 'center' },
  stripAvatarActive: { borderWidth: 3, borderColor: colors.gold },
  stripLabel: { fontFamily: fonts.display, fontSize: 13, color: colors.white },
});
