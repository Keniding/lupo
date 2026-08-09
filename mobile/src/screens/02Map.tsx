import React from 'react';
import { View, Text, Pressable, ScrollView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { Button } from '../components/Button';
import { StatChip, IconBubble } from '../components/Misc';
import { BottomNav } from '../components/BottomNav';
import { Icon } from '../components/Icon';
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

export default function MapScreen({ navigation }: Props) {
  const t = useT();
  const hearts = useGameStore((s) => s.hearts);
  const pp = useGameStore((s) => s.pp);
  const streak = useGameStore((s) => s.streak);
  const mission1Stars = useGameStore((s) => s.mission1Stars);

  const openLevel = () => {
    if (hearts <= 0) {
      navigation.navigate('NoLives');
    } else {
      navigation.navigate('Lobby');
    }
  };

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
          <Pressable style={styles.profileBtn}>
            <Icon name="user" size={19} color={colors.white} />
          </Pressable>
        </View>

        <ScrollView contentContainerStyle={styles.path} showsVerticalScrollIndicator={false}>
          <View style={styles.tip}>
            <IconBubble icon="search" size={40} bg={colors.teal} />
            <Text style={styles.tipText}>{t.map.tip}</Text>
          </View>

          <Pressable style={[styles.node, { transform: [{ translateX: -72 }] }]}>
            <View style={[styles.nodeCircle, styles.nodeDone]}>
              <Icon name="check" size={34} color={colors.white} />
            </View>
            <Stars filled={3} />
          </Pressable>

          <View style={[styles.connector, { transform: [{ translateX: -40 }] }]} />

          <Pressable style={[styles.node, { transform: [{ translateX: 8 }] }]}>
            <View style={[styles.nodeCircle, styles.nodeDone]}>
              <Icon name="check" size={34} color={colors.white} />
            </View>
            <Stars filled={mission1Stars} />
          </Pressable>

          <View style={[styles.connector, { transform: [{ translateX: 46 }] }]} />

          <Pressable style={[styles.node, styles.nodeCurrentWrap, { transform: [{ translateX: 66 }] }]} onPress={openLevel}>
            <View style={[styles.nodeCircle, styles.nodeCurrent]}>
              <Text style={styles.nodeNumber}>14</Text>
            </View>
            <View style={styles.tooltip}>
              <Text style={styles.tooltipText}>{t.map.investigate}</Text>
            </View>
          </Pressable>

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

        <BottomNav active="map" labels={t.nav} />
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
  node: { alignItems: 'center' },
  nodeCurrentWrap: { marginBottom: 26 },
  nodeCircle: { width: 78, height: 78, borderRadius: 999, alignItems: 'center', justifyContent: 'center' },
  nodeDone: { backgroundColor: colors.green, borderBottomWidth: 6, borderBottomColor: colors.greenShadow },
  starsRow: { flexDirection: 'row', gap: 3, justifyContent: 'center', marginTop: 6 },
  nodeCurrent: { width: 96, height: 96, backgroundColor: colors.gold, borderBottomWidth: 7, borderBottomColor: colors.goldShadow },
  nodeNumber: { fontFamily: fonts.display, fontSize: 34, color: colors.ink },
  tooltip: { position: 'absolute', top: -34, backgroundColor: colors.white, borderRadius: 999, paddingVertical: 8, paddingHorizontal: 13 },
  tooltipText: { fontFamily: fonts.display, fontSize: 12, color: colors.ink },
  connector: { width: 5, height: 34, borderRadius: 999, backgroundColor: 'rgba(255,255,255,.28)', marginVertical: 2 },
  progressRow: { width: '100%', maxWidth: 358, flexDirection: 'row', alignItems: 'center', gap: 10, marginVertical: 6 },
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
