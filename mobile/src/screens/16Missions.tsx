import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { Screen } from '../components/Screen';
import { goBackOrHome } from '../navigation/goBack';
import { openGatedScreen } from '../navigation/gates';
import { Card } from '../components/Card';
import { IconBubble } from '../components/Misc';
import { Icon } from '../components/Icon';
import { colors, gradients } from '../theme/colors';
import { fonts } from '../theme/typography';
import { useT } from '../i18n';
import { useGameStore } from '../state/store';

type Props = NativeStackScreenProps<RootStackParamList, 'Missions'>;

export default function MissionsScreen({ navigation }: Props) {
  const t = useT();
  const v = t.v2;
  const mission1Stars = useGameStore((s) => s.mission1Stars);
  const mission2Stars = useGameStore((s) => s.mission2Stars);
  const mission3Stars = useGameStore((s) => s.mission3Stars);
  const mission4Stars = useGameStore((s) => s.mission4Stars);
  const isAuthenticated = useGameStore((s) => s.isAuthenticated);

  return (
    <Screen onBack={() => goBackOrHome(navigation)} colors={gradients.missions} scroll>
      <Text style={styles.title}>{v.miss.title}</Text>

      <View style={{ gap: 11, marginTop: 16 }}>
        <Pressable onPress={() => navigation.navigate('Lobby')}>
          <Card padding={15} radius={18}>
            <View style={styles.row}>
              <IconBubble icon="fingerprint" bg={colors.skyBlue} shadowColor={colors.skyBlueShadow} />
              <View style={styles.cardTextCol}>
                <Text style={styles.name}>{v.miss.m1}</Text>
                <Text style={styles.desc}>{v.miss.m1d}</Text>
              </View>
              <View style={styles.starsRight}>
                {[0, 1, 2].map((i) => (
                  <Icon key={i} name="star" size={14} color={i < mission1Stars ? colors.gold : colors.border} />
                ))}
              </View>
            </View>
          </Card>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Mission2Evidence')}>
          <Card padding={15} radius={18}>
            <View style={styles.row}>
              <IconBubble icon="eye" bg={colors.orange} shadowColor={colors.orangeShadow} />
              <View style={styles.cardTextCol}>
                <Text style={styles.name}>{v.miss.m2}</Text>
                <Text style={styles.desc}>{v.miss.m2d}</Text>
              </View>
              <View style={styles.starsRight}>
                {[0, 1, 2].map((i) => (
                  <Icon key={i} name="star" size={14} color={i < mission2Stars ? colors.gold : colors.border} />
                ))}
              </View>
            </View>
          </Card>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Mission3Redact')}>
          <Card padding={15} radius={18}>
            <View style={styles.row}>
              <IconBubble icon="lock" bg={colors.green} shadowColor={colors.greenShadow} />
              <View style={styles.cardTextCol}>
                <Text style={styles.name}>{v.miss.m3}</Text>
                <Text style={styles.desc}>{v.miss.m3d}</Text>
              </View>
              <View style={styles.starsRight}>
                {[0, 1, 2].map((i) => (
                  <Icon key={i} name="star" size={14} color={i < mission3Stars ? colors.gold : colors.border} />
                ))}
              </View>
            </View>
          </Card>
        </Pressable>

        {mission3Stars > 0 ? (
          <Pressable onPress={() => navigation.navigate('Mission4Evidence')}>
            <Card padding={15} radius={18}>
              <View style={styles.row}>
                <IconBubble icon="alert" bg={colors.red} shadowColor={colors.redShadow} />
                <View style={styles.cardTextCol}>
                  <Text style={styles.name}>{v.miss.m4}</Text>
                  <Text style={styles.desc}>{v.miss.m4d}</Text>
                </View>
                <View style={styles.starsRight}>
                  {[0, 1, 2].map((i) => (
                    <Icon key={i} name="star" size={14} color={i < mission4Stars ? colors.gold : colors.border} />
                  ))}
                </View>
              </View>
            </Card>
          </Pressable>
        ) : (
          <Card padding={15} radius={18} bg={colors.slate} shadowColor="rgba(10,26,74,.35)">
            <View style={styles.row}>
              <View style={styles.lockBubble}>
                <Icon name="lock" size={22} color={colors.white} />
              </View>
              <View style={styles.cardTextCol}>
                <Text style={[styles.name, { color: colors.white }]}>{v.miss.m4}</Text>
                <Text style={[styles.desc, { color: 'rgba(255,255,255,.75)' }]}>{v.miss.m4Locked}</Text>
              </View>
            </View>
          </Card>
        )}
      </View>

      <Text style={styles.levelsTitle}>{v.miss.levels}</Text>
      <View style={{ gap: 9, marginTop: 11 }}>
        <View style={styles.levelRow}>
          <View style={[styles.levelDot, { backgroundColor: colors.green }]} />
          <Text style={styles.levelText}>{v.miss.lv1}</Text>
        </View>
        <View style={[styles.levelRow, styles.levelRowActive]}>
          <View style={[styles.levelDot, { backgroundColor: colors.goldShadow }]} />
          <Text style={[styles.levelText, { color: colors.ink, fontFamily: fonts.bodyBold }]}>{v.miss.lv2}</Text>
        </View>
        <View style={styles.levelRow}>
          <View style={[styles.levelDot, { backgroundColor: colors.red }]} />
          <Text style={styles.levelText}>{v.miss.lv3}</Text>
        </View>
      </View>

      <View style={{ flex: 1, minHeight: 14 }} />
      <View style={styles.claimBox}>
        <Text style={styles.claimText}>{v.claim}</Text>
      </View>
      <Pressable onPress={() => openGatedScreen(navigation, isAuthenticated, 'Tournament')}>
        <Text style={styles.tourLink}>{v.tour.title} →</Text>
      </Pressable>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: { fontFamily: fonts.display, fontSize: 27, color: colors.white, textShadowColor: 'rgba(10,26,74,.6)', textShadowOffset: { width: 0, height: 3 }, textShadowRadius: 0 },
  row: { flexDirection: 'row', gap: 13, alignItems: 'center' },
  cardTextCol: { flex: 1, gap: 3 },
  name: { fontFamily: fonts.display, fontSize: 16, color: colors.ink },
  desc: { fontFamily: fonts.body, fontSize: 13, lineHeight: 19, color: colors.inkMuted },
  starsRight: { flexDirection: 'row', gap: 2 },
  lockBubble: { width: 46, height: 46, borderRadius: 14, backgroundColor: 'rgba(10,26,74,.4)', alignItems: 'center', justifyContent: 'center' },
  levelsTitle: { fontFamily: fonts.display, fontSize: 19, color: colors.white, marginTop: 18 },
  levelRow: { flexDirection: 'row', alignItems: 'center', gap: 11, backgroundColor: 'rgba(255,255,255,.12)', borderRadius: 14, paddingVertical: 13, paddingHorizontal: 15 },
  levelRowActive: { backgroundColor: colors.gold, borderBottomWidth: 4, borderBottomColor: colors.goldShadow },
  levelDot: { width: 11, height: 11, borderRadius: 999 },
  levelText: { fontFamily: fonts.bodySemibold, fontSize: 14, color: 'rgba(255,255,255,.9)' },
  claimBox: { backgroundColor: 'rgba(10,26,74,.5)', borderRadius: 18, padding: 17 },
  claimText: { fontFamily: fonts.body, fontSize: 15, lineHeight: 23, color: colors.white },
  tourLink: { textAlign: 'center', fontFamily: fonts.bodySemibold, fontSize: 13, color: 'rgba(255,255,255,.6)', marginTop: 12 },
});
