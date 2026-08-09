import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { Icon } from '../components/Icon';
import { BackButton } from '../components/BackButton';
import { goBackOrHome } from '../navigation/goBack';
import { colors, gradients } from '../theme/colors';
import { fonts } from '../theme/typography';
import { useT } from '../i18n';

type Props = NativeStackScreenProps<RootStackParamList, 'Tournament'>;

function MetricBar({ label, after, before }: { label: string; after: number; before: number }) {
  return (
    <View style={{ gap: 7 }}>
      <Text style={styles.metricLabel}>{label}</Text>
      <View style={styles.metricTrack}>
        <View style={[styles.metricAfter, { width: `${after}%` }]} />
        <View style={[styles.metricBefore, { width: `${before}%` }]} />
      </View>
    </View>
  );
}

export default function TournamentScreen({ navigation }: Props) {
  const t = useT();
  const v = t.v2;

  const teams = [
    { name: 'Los Verificadores', score: '2 410', rank: 1 },
    { name: 'Ojo Crítico', score: '2 180', rank: 2 },
    { name: 'Hilo Rojo', score: '1 905', rank: 3 },
  ];

  return (
    <LinearGradient colors={gradients.tournament} style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }} edges={['top', 'bottom']}>
        <View style={styles.header}>
          <BackButton onPress={() => goBackOrHome(navigation)} />
          <Text style={styles.title}>{v.tour.title}</Text>
          <Text style={styles.sub}>{v.tour.sub}</Text>
        </View>

        <ScrollView contentContainerStyle={styles.body}>
          <View style={styles.legendRow}>
            <View style={[styles.legendDot, { backgroundColor: 'rgba(255,255,255,.35)' }]} />
            <Text style={styles.legendText}>{v.tour.pre}</Text>
            <View style={[styles.legendDot, { backgroundColor: colors.green, marginLeft: 12 }]} />
            <Text style={styles.legendText}>{v.tour.post}</Text>
          </View>

          <MetricBar label={v.tour.m1} after={81} before={34} />
          <MetricBar label={v.tour.m2} after={88} before={41} />
          <MetricBar label={v.tour.m3} after={69} before={22} />
          <MetricBar label={v.tour.m4} after={74} before={28} />

          <View style={styles.deltaBox}>
            <Text style={styles.deltaValue}>+47%</Text>
            <Text style={styles.deltaText}>{v.tour.delta}</Text>
          </View>

          <Text style={styles.teamsTitle}>{v.tour.teams}</Text>
          {teams.map((team) => (
            <View key={team.name} style={[styles.teamRow, team.rank === 1 && styles.teamRowFirst]}>
              {team.rank === 1 ? (
                <Icon name="trophy" size={20} color="#7A4A00" />
              ) : (
                <Text style={styles.teamRank}>{team.rank}</Text>
              )}
              <Text style={[styles.teamName, team.rank === 1 && { color: colors.ink }]}>{team.name}</Text>
              <Text style={[styles.teamScore, team.rank === 1 && { color: colors.ink }]}>{team.score}</Text>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  header: { paddingHorizontal: 22, paddingTop: 26, paddingBottom: 20, gap: 7 },
  title: { fontFamily: fonts.display, fontSize: 24, lineHeight: 31, color: colors.white, textShadowColor: 'rgba(10,26,74,.6)', textShadowOffset: { width: 0, height: 3 }, textShadowRadius: 0 },
  sub: { fontFamily: fonts.body, fontSize: 14, color: 'rgba(255,255,255,.72)' },
  body: { paddingHorizontal: 20, paddingBottom: 20, gap: 14 },
  legendRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  legendDot: { width: 12, height: 12, borderRadius: 999 },
  legendText: { fontFamily: fonts.displayBold, fontSize: 14, color: colors.white },
  metricLabel: { fontFamily: fonts.bodySemibold, fontSize: 14, lineHeight: 20, color: colors.white },
  metricTrack: { height: 18, borderRadius: 999, backgroundColor: 'rgba(10,26,74,.5)', overflow: 'hidden' },
  metricAfter: { position: 'absolute', left: 0, top: 0, bottom: 0, backgroundColor: colors.green },
  metricBefore: { position: 'absolute', left: 0, top: 0, bottom: 0, backgroundColor: 'rgba(255,255,255,.4)' },
  deltaBox: { backgroundColor: colors.green, borderRadius: 20, padding: 18, flexDirection: 'row', alignItems: 'center', gap: 14, borderBottomWidth: 5, borderBottomColor: colors.greenShadow },
  deltaValue: { fontFamily: fonts.display, fontSize: 34, color: colors.white },
  deltaText: { flex: 1, fontFamily: fonts.bodySemibold, fontSize: 14, lineHeight: 20, color: colors.white },
  teamsTitle: { fontFamily: fonts.display, fontSize: 18, color: colors.white },
  teamRow: { flexDirection: 'row', alignItems: 'center', gap: 12, backgroundColor: 'rgba(255,255,255,.14)', borderRadius: 16, paddingVertical: 13, paddingHorizontal: 15 },
  teamRowFirst: { backgroundColor: colors.gold, borderBottomWidth: 4, borderBottomColor: colors.goldShadow },
  teamRank: { width: 20, fontFamily: fonts.display, fontSize: 15, color: 'rgba(255,255,255,.7)' },
  teamName: { flex: 1, fontFamily: fonts.displayBold, fontSize: 15, color: colors.white },
  teamScore: { fontFamily: fonts.display, fontSize: 15, color: 'rgba(255,255,255,.8)' },
});
