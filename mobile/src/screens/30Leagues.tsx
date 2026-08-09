import React from 'react';
import { View, Text, Pressable, ScrollView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { Icon } from '../components/Icon';
import { BottomNav } from '../components/BottomNav';
import { colors, gradients } from '../theme/colors';
import { fonts } from '../theme/typography';
import { useT } from '../i18n';

type Props = NativeStackScreenProps<RootStackParamList, 'Leagues'>;

const PROMOTION = [
  { rank: 1, letter: 'A', name: 'Andrea R.', pts: '1 240', bg: '#FFE6A8', text: '#7A5B00' },
  { rank: 2, letter: 'J', name: 'Jorge M.', pts: '1 118' },
  { rank: 3, letter: 'L', name: 'Lucía P.', pts: '1 002' },
  { rank: 4, letter: 'D', name: 'Diego S.', pts: '870' },
];
const RELEGATION = [{ rank: 18, letter: 'T', name: 'Tomás V.', pts: '120' }];

export default function LeaguesScreen({ navigation }: Props) {
  const t = useT();
  const lg = t.leagues;

  const goToTab = (tab: 'map' | 'leagues' | 'practice' | 'profile') => {
    if (tab === 'map') navigation.navigate('Map');
    else if (tab === 'practice') navigation.navigate('Missions');
    else if (tab === 'profile') navigation.navigate('Profile');
  };

  return (
    <LinearGradient colors={[colors.navyMid, colors.navy]} style={styles.flex}>
      <SafeAreaView style={styles.flex} edges={['top', 'bottom']}>
        <View style={styles.header}>
          <View style={styles.trophyBubble}>
            <Icon name="trophy" size={32} color="#5A6377" />
          </View>
          <Text style={styles.title}>{lg.title}</Text>
          <Text style={styles.sub}>{lg.sub}</Text>
        </View>

        <ScrollView style={styles.flex} contentContainerStyle={styles.list} showsVerticalScrollIndicator={false}>
          <Text style={styles.sectionLabel}>{lg.promo}</Text>
          {PROMOTION.map((p) => (
            <View key={p.rank} style={styles.row}>
              <Text style={styles.rank}>{p.rank}</Text>
              <View style={[styles.avatar, { backgroundColor: p.bg ?? colors.cardBgAlt }]}>
                <Text style={[styles.avatarText, { color: p.text ?? colors.inkMuted }]}>{p.letter}</Text>
              </View>
              <Text style={styles.name}>{p.name}</Text>
              <Text style={styles.pts}>{p.pts}</Text>
            </View>
          ))}

          <Text style={[styles.sectionLabel, { color: colors.red, marginTop: 10 }]}>{lg.demo}</Text>
          {RELEGATION.map((p) => (
            <View key={p.rank} style={[styles.row, styles.rowDanger]}>
              <Text style={[styles.rank, { color: colors.red }]}>{p.rank}</Text>
              <View style={[styles.avatar, { backgroundColor: '#FFE3E4' }]}>
                <Text style={[styles.avatarText, { color: colors.red }]}>{p.letter}</Text>
              </View>
              <Text style={styles.name}>{p.name}</Text>
              <Text style={[styles.pts, { color: colors.red }]}>{p.pts}</Text>
            </View>
          ))}
        </ScrollView>

        <View style={styles.youRow}>
          <Text style={styles.youRank}>5</Text>
          <View style={[styles.avatar, { backgroundColor: colors.blue }]}>
            <Text style={[styles.avatarText, { color: colors.white }]}>M</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.youName}>{lg.you}</Text>
            <Text style={styles.youWeek}>{lg.week}</Text>
          </View>
          <Text style={styles.youPts}>720</Text>
        </View>

        <View style={styles.inviteWrap}>
          <Pressable style={styles.inviteBtn}>
            <Icon name="user" size={19} color={colors.blue} />
            <Text style={styles.inviteText}>{lg.invite}</Text>
          </Pressable>
        </View>

        <BottomNav active="leagues" labels={t.nav} onNavigate={goToTab} />
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  header: { alignItems: 'center', gap: 8, paddingTop: 14, paddingBottom: 18, paddingHorizontal: 20 },
  trophyBubble: { width: 68, height: 68, borderRadius: 999, backgroundColor: '#E9EDF5', alignItems: 'center', justifyContent: 'center', borderWidth: 3, borderColor: colors.white },
  title: { fontFamily: fonts.display, fontSize: 22, color: colors.white },
  sub: { fontFamily: fonts.bodyMedium, fontSize: 13, color: 'rgba(255,255,255,.8)' },
  list: { paddingHorizontal: 16, paddingBottom: 10, gap: 6 },
  sectionLabel: { fontFamily: fonts.display, fontSize: 11, letterSpacing: 1.3, textTransform: 'uppercase', color: colors.gold, paddingHorizontal: 6, paddingTop: 6 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 11, paddingHorizontal: 14, borderRadius: 14, backgroundColor: 'rgba(255,201,60,.10)' },
  rowDanger: { backgroundColor: 'rgba(255,90,95,.12)' },
  rank: { fontFamily: fonts.display, fontSize: 15, color: colors.gold, width: 22 },
  avatar: { width: 36, height: 36, borderRadius: 999, alignItems: 'center', justifyContent: 'center' },
  avatarText: { fontFamily: fonts.display, fontSize: 14 },
  name: { flex: 1, fontFamily: fonts.bodySemibold, fontSize: 15, color: colors.white },
  pts: { fontFamily: fonts.display, fontSize: 14, color: 'rgba(255,255,255,.8)' },
  youRow: { flexDirection: 'row', alignItems: 'center', gap: 12, marginHorizontal: 16, marginTop: 8, padding: 13, borderRadius: 16, backgroundColor: 'rgba(255,255,255,.12)', borderWidth: 2, borderColor: colors.blue },
  youRank: { fontFamily: fonts.display, fontSize: 15, color: colors.white, width: 22 },
  youName: { fontFamily: fonts.bodyBold, fontSize: 15, color: colors.white },
  youWeek: { fontFamily: fonts.body, fontSize: 12, color: 'rgba(255,255,255,.7)' },
  youPts: { fontFamily: fonts.display, fontSize: 16, color: colors.white },
  inviteWrap: { paddingHorizontal: 16, paddingTop: 12, paddingBottom: 4 },
  inviteBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 9, backgroundColor: colors.white, borderRadius: 999, paddingVertical: 14, minHeight: 48 },
  inviteText: { fontFamily: fonts.display, fontSize: 15, color: colors.blue },
});
