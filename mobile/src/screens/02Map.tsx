import React from 'react';
import { View, Text, Pressable, ScrollView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { StatChip, IconBubble } from '../components/Misc';
import { BottomNav } from '../components/BottomNav';
import { Icon } from '../components/Icon';
import { MapPath, type MapPathSegment } from '../components/MapPath';
import { openGatedScreen } from '../navigation/gates';
import { colors, gradients } from '../theme/colors';
import { fonts } from '../theme/typography';
import { useT } from '../i18n';
import { useGameStore } from '../state/store';

type Props = NativeStackScreenProps<RootStackParamList, 'Map'>;

function Stars({ filled }: { filled: number }) {
  return (
    <View style={styles.starsRow}>
      {[0, 1, 2].map((i) => (
        <Icon key={i} name="star" size={15} color={i < filled ? colors.gold : colors.border} />
      ))}
    </View>
  );
}

// Track geometry for the winding path — one entry per node, in visit order.
// `x` is an offset from the track's horizontal center; `size` is the node's
// diameter. Positions are computed once so the SVG trail underneath and the
// node buttons on top always line up exactly, instead of the old mismatched
// translateX guesses.
const TRACK_W = 320;
const ROW_GAP = 128;
const NODE_DONE = 78;
const NODE_CURRENT = 96;

export default function MapScreen({ navigation }: Props) {
  const t = useT();
  const hearts = useGameStore((s) => s.hearts);
  const pp = useGameStore((s) => s.pp);
  const streak = useGameStore((s) => s.streak);
  const mission1Stars = useGameStore((s) => s.mission1Stars);
  const isAuthenticated = useGameStore((s) => s.isAuthenticated);

  const openLevel = () => {
    if (hearts <= 0) {
      navigation.navigate('NoLives');
    } else {
      navigation.navigate('CaseIntro');
    }
  };

  const goToTab = (tab: 'map' | 'leagues' | 'practice' | 'profile') => {
    if (tab === 'leagues') openGatedScreen(navigation, isAuthenticated, 'Leagues');
    else if (tab === 'practice') navigation.navigate('Missions');
    else if (tab === 'profile') navigation.navigate('Profile');
  };

  const nodeCenters = [
    { x: TRACK_W / 2 - 72, y: NODE_DONE / 2 + 6, size: NODE_DONE },
    { x: TRACK_W / 2 + 66, y: NODE_DONE / 2 + 6 + ROW_GAP, size: NODE_DONE },
    { x: TRACK_W / 2 - 46, y: NODE_DONE / 2 + 6 + ROW_GAP * 2 + (NODE_CURRENT - NODE_DONE) / 2, size: NODE_CURRENT },
  ];
  const trackHeight = nodeCenters[2].y + NODE_CURRENT / 2 + 8;

  const segments: MapPathSegment[] = [
    { from: nodeCenters[0], to: nodeCenters[1], color: 'rgba(120,255,150,.55)' },
    { from: nodeCenters[1], to: nodeCenters[2], color: 'rgba(255,201,60,.65)' },
  ];

  return (
    <LinearGradient colors={gradients.map} style={styles.flex}>
      <SafeAreaView style={styles.flex} edges={['top', 'bottom']}>
        <View style={styles.header}>
          <StatChip icon="heart" value={String(hearts)} tint={colors.red} />
          <View style={styles.ppChip}>
            <View style={styles.ppDot} />
            <Text style={styles.chipText}>{pp}</Text>
          </View>
          <StatChip icon="flame" value={String(streak)} tint={colors.orange} />
          <Pressable style={styles.profileBtn} onPress={() => navigation.navigate('Profile')}>
            <Icon name="user" size={19} color={colors.white} />
          </Pressable>
        </View>

        <ScrollView contentContainerStyle={styles.path} showsVerticalScrollIndicator={false}>
          <View style={styles.tip}>
            <IconBubble icon="search" size={40} bg={colors.teal} />
            <Text style={styles.tipText}>{t.map.tip}</Text>
          </View>

          <View style={{ width: TRACK_W, height: trackHeight }}>
            <MapPath width={TRACK_W} height={trackHeight} segments={segments} strokeWidth={12} />

            <View
              style={[
                styles.node,
                { left: nodeCenters[0].x - NODE_DONE / 2, top: nodeCenters[0].y - NODE_DONE / 2 },
              ]}
            >
              <Pressable style={[styles.nodeCircle, styles.nodeDone]}>
                <Icon name="check" size={34} color={colors.white} />
              </Pressable>
              <Stars filled={3} />
            </View>

            <View
              style={[
                styles.node,
                { left: nodeCenters[1].x - NODE_DONE / 2, top: nodeCenters[1].y - NODE_DONE / 2 },
              ]}
            >
              <Pressable style={[styles.nodeCircle, styles.nodeDone]}>
                <Icon name="check" size={34} color={colors.white} />
              </Pressable>
              <Stars filled={mission1Stars} />
            </View>

            <View
              style={[
                styles.node,
                { left: nodeCenters[2].x - NODE_CURRENT / 2, top: nodeCenters[2].y - NODE_CURRENT / 2 },
              ]}
            >
              <Pressable style={[styles.nodeCircle, styles.nodeCurrent]} onPress={openLevel}>
                <Text style={styles.nodeNumber}>14</Text>
              </Pressable>
              <View style={styles.tooltip}>
                <Text style={styles.tooltipText}>{t.map.investigate}</Text>
              </View>
            </View>
          </View>

          <View style={styles.progressRow}>
            <View style={styles.progressLine} />
            <View style={styles.progressPill}>
              <Text style={styles.progressPillText}>{t.map.unitNext}</Text>
            </View>
            <View style={styles.progressLine} />
          </View>

          <View style={styles.bottomRow}>
            <View style={styles.lockedNode}>
              <Icon name="lock" size={28} color="rgba(255,255,255,.85)" />
              <View style={styles.lockedTag}>
                <Text style={styles.lockedTagText}>Nivel 16</Text>
              </View>
            </View>
            <View style={styles.chest}>
              <Icon name="trophy" size={26} color="#7A4A00" />
              <Text style={styles.chestText}>{t.map.chest}</Text>
            </View>
          </View>
        </ScrollView>

        <BottomNav active="map" labels={t.nav} onNavigate={goToTab} />
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  header: { flexDirection: 'row', alignItems: 'center', gap: 10, paddingHorizontal: 16, paddingTop: 16, paddingBottom: 12, backgroundColor: 'rgba(10,26,74,.35)' },
  ppChip: { flexDirection: 'row', alignItems: 'center', gap: 6, backgroundColor: 'rgba(10,26,74,.55)', borderWidth: 2, borderColor: colors.gold, borderRadius: 999, paddingVertical: 7, paddingHorizontal: 12 },
  ppDot: { width: 16, height: 16, borderRadius: 999, backgroundColor: colors.gold, borderBottomWidth: 2, borderBottomColor: colors.goldShadow },
  chipText: { fontFamily: fonts.display, fontSize: 15, color: colors.white },
  profileBtn: { marginLeft: 'auto', width: 38, height: 38, borderRadius: 999, backgroundColor: colors.red, alignItems: 'center', justifyContent: 'center', borderBottomWidth: 3, borderBottomColor: 'rgba(10,26,74,.5)' },
  path: { paddingVertical: 18, alignItems: 'center' },
  tip: { width: '100%', maxWidth: 358, backgroundColor: 'rgba(10,26,74,.4)', borderWidth: 3, borderColor: 'rgba(255,255,255,.25)', borderRadius: 18, padding: 14, flexDirection: 'row', gap: 12, alignItems: 'center', marginBottom: 14 },
  tipText: { flex: 1, fontFamily: fonts.bodySemibold, fontSize: 13, lineHeight: 19, color: colors.white },
  node: { position: 'absolute', alignItems: 'center' },
  nodeCircle: { width: 78, height: 78, borderRadius: 999, alignItems: 'center', justifyContent: 'center' },
  nodeDone: { backgroundColor: colors.green, borderBottomWidth: 6, borderBottomColor: colors.greenShadow },
  starsRow: { flexDirection: 'row', gap: 3, justifyContent: 'center', marginTop: 6 },
  nodeCurrent: { width: 96, height: 96, backgroundColor: colors.gold, borderBottomWidth: 7, borderBottomColor: colors.goldShadow },
  nodeNumber: { fontFamily: fonts.display, fontSize: 34, color: colors.ink },
  tooltip: { position: 'absolute', top: -34, backgroundColor: colors.white, borderRadius: 999, paddingVertical: 8, paddingHorizontal: 13 },
  tooltipText: { fontFamily: fonts.display, fontSize: 12, color: colors.ink },
  progressRow: { width: '100%', maxWidth: 358, flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 10, marginBottom: 6 },
  progressLine: { flex: 1, height: 4, borderRadius: 999, backgroundColor: 'rgba(255,255,255,.25)' },
  progressPill: { backgroundColor: colors.purple, borderRadius: 999, paddingVertical: 9, paddingHorizontal: 15, borderBottomWidth: 3, borderBottomColor: 'rgba(10,26,74,.4)' },
  progressPillText: { fontFamily: fonts.display, fontSize: 12, color: colors.white },
  bottomRow: { flexDirection: 'row', gap: 30, alignItems: 'center', marginTop: 6 },
  lockedNode: { width: 74, height: 74, borderRadius: 999, backgroundColor: colors.slate, alignItems: 'center', justifyContent: 'center', borderBottomWidth: 5, borderBottomColor: 'rgba(10,26,74,.45)' },
  lockedTag: { position: 'absolute', bottom: -9, backgroundColor: 'rgba(10,26,74,.85)', borderRadius: 999, paddingVertical: 5, paddingHorizontal: 9 },
  lockedTagText: { fontFamily: fonts.display, fontSize: 10, color: colors.white },
  chest: { width: 82, height: 82, borderRadius: 20, backgroundColor: colors.gold, alignItems: 'center', justifyContent: 'center', gap: 3, transform: [{ rotate: '5deg' }], borderBottomWidth: 6, borderBottomColor: colors.goldShadow },
  chestText: { fontFamily: fonts.display, fontSize: 9.5, color: '#7A4A00', textAlign: 'center', paddingHorizontal: 6 },
});
