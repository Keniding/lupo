import React from 'react';
import { View, Text, Pressable, ScrollView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { Icon } from '../components/Icon';
import { BottomNav } from '../components/BottomNav';
import { BackButton } from '../components/BackButton';
import { goBackOrHome } from '../navigation/goBack';
import { openGatedScreen } from '../navigation/gates';
import { Button } from '../components/Button';
import { colors } from '../theme/colors';
import { fonts } from '../theme/typography';
import { useT } from '../i18n';
import { useGameStore } from '../state/store';

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

function Toggle({ on, onPress }: { on: boolean; onPress: () => void }) {
  return (
    <Pressable onPress={onPress} style={[styles.toggle, on && styles.toggleOn]} hitSlop={8}>
      <View style={[styles.toggleKnob, on && styles.toggleKnobOn]} />
    </Pressable>
  );
}

export default function ProfileScreen({ navigation }: Props) {
  const t = useT();
  const p = t.profile;
  const casesSolved = useGameStore((s) => s.casesSolved);
  const casesAttempted = useGameStore((s) => s.casesAttempted);
  const streak = useGameStore((s) => s.streak);
  const mission1Stars = useGameStore((s) => s.mission1Stars);
  const mission2Stars = useGameStore((s) => s.mission2Stars);
  const mission3Stars = useGameStore((s) => s.mission3Stars);
  const mission4Stars = useGameStore((s) => s.mission4Stars);
  const seniorMode = useGameStore((s) => s.seniorMode);
  const highContrast = useGameStore((s) => s.highContrast);
  const reminders = useGameStore((s) => s.reminders);
  const toggleSeniorMode = useGameStore((s) => s.toggleSeniorMode);
  const toggleHighContrast = useGameStore((s) => s.toggleHighContrast);
  const toggleReminders = useGameStore((s) => s.toggleReminders);
  const isAuthenticated = useGameStore((s) => s.isAuthenticated);
  const userName = useGameStore((s) => s.userName);
  const userEmail = useGameStore((s) => s.userEmail);
  const logout = useGameStore((s) => s.logout);

  const accuracy = casesAttempted > 0 ? `${Math.round((casesSolved / casesAttempted) * 100)}%` : '—';

  const badgesUnlocked = [
    casesAttempted > 0,
    streak >= 7,
    casesSolved >= 1,
    mission1Stars >= 3,
    casesAttempted > 0 && casesSolved === casesAttempted,
    mission2Stars >= 1,
    mission3Stars >= 1,
    mission4Stars >= 1,
  ];

  const goToTab = (tab: 'map' | 'leagues' | 'practice' | 'profile') => {
    if (tab === 'map') navigation.navigate('Map');
    else if (tab === 'leagues') openGatedScreen(navigation, isAuthenticated, 'Leagues');
    else if (tab === 'practice') navigation.navigate('Missions');
  };

  return (
    <LinearGradient colors={[colors.navy, colors.bgDeep]} style={styles.flex}>
      <SafeAreaView style={styles.flex} edges={['top', 'bottom']}>
        <View style={styles.header}>
          <View style={styles.backRow}>
            <BackButton onPress={() => goBackOrHome(navigation)} />
          </View>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{(userName ?? p.guest).charAt(0).toUpperCase()}</Text>
            <View style={styles.avatarBadge}>
              <Icon name="search" size={14} color="#7A5B00" />
            </View>
          </View>
          <Text style={styles.name}>{userName ?? p.guest}</Text>
          {isAuthenticated ? (
            <View style={styles.levelPill}>
              <Text style={styles.levelText}>{p.level}</Text>
            </View>
          ) : (
            <Button label={p.loginCta} variant="ghost" size="md" onPress={() => navigation.navigate('Login')} />
          )}
        </View>

        <ScrollView contentContainerStyle={styles.body} showsVerticalScrollIndicator={false}>
          <View style={styles.statsRow}>
            <View style={styles.statCard}>
              <Text style={[styles.statValue, { color: colors.blue }]}>{casesSolved}</Text>
              <Text style={styles.statLabel}>{p.solved}</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={[styles.statValue, { color: colors.green }]}>{accuracy}</Text>
              <Text style={styles.statLabel}>{p.accuracy}</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={[styles.statValue, { color: colors.orange }]}>{streak}</Text>
              <Text style={styles.statLabel}>{p.best}</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>{p.badges}</Text>
          <View style={styles.badgeGrid}>
            {p.badgeNames.map((label, i) => {
              const unlocked = badgesUnlocked[i];
              return (
                <View key={label} style={styles.badge}>
                  <View style={[styles.badgeDot, { backgroundColor: unlocked ? colors.gold : colors.border }]} />
                  <Text style={[styles.badgeLabel, !unlocked && { color: colors.slate }]}>{label}</Text>
                </View>
              );
            })}
          </View>

          <Text style={styles.sectionTitle}>{p.settings}</Text>
          <View style={styles.settingsCard}>
            <View style={styles.settingRow}>
              <Text style={styles.settingLabel}>{p.senior}</Text>
              <Toggle on={seniorMode} onPress={toggleSeniorMode} />
            </View>
            <View style={styles.settingRow}>
              <Text style={styles.settingLabel}>{p.contrast}</Text>
              <Toggle on={highContrast} onPress={toggleHighContrast} />
            </View>
            <View style={isAuthenticated ? styles.settingRow : [styles.settingRow, { borderBottomWidth: 0 }]}>
              <Text style={styles.settingLabel}>{p.reminders}</Text>
              <Toggle on={reminders} onPress={toggleReminders} />
            </View>
            {isAuthenticated && (
              <Pressable style={[styles.settingRow, { borderBottomWidth: 0 }]} onPress={logout}>
                <Text style={[styles.settingLabel, { color: colors.red }]}>{p.logoutCta}</Text>
              </Pressable>
            )}
          </View>
        </ScrollView>

        <BottomNav active="profile" labels={t.nav} onNavigate={goToTab} />
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  header: { alignItems: 'center', gap: 9, paddingTop: 18, paddingBottom: 18, paddingHorizontal: 20 },
  backRow: { alignSelf: 'stretch' },
  avatar: { width: 84, height: 84, borderRadius: 999, backgroundColor: 'rgba(255,255,255,.1)', borderWidth: 3, borderColor: colors.blue, alignItems: 'center', justifyContent: 'center' },
  avatarText: { fontFamily: fonts.display, fontSize: 28, color: colors.blue },
  avatarBadge: { position: 'absolute', right: -2, bottom: -2, width: 28, height: 28, borderRadius: 999, backgroundColor: colors.gold, borderWidth: 3, borderColor: colors.navy, alignItems: 'center', justifyContent: 'center' },
  name: { fontFamily: fonts.display, fontSize: 20, color: colors.white },
  levelPill: { backgroundColor: 'rgba(74,127,214,.25)', borderRadius: 999, paddingVertical: 6, paddingHorizontal: 13 },
  levelText: { fontFamily: fonts.bodySemibold, fontSize: 12, color: colors.skyBlue },
  body: { paddingHorizontal: 16, paddingBottom: 12, gap: 16 },
  statsRow: { flexDirection: 'row', gap: 10 },
  statCard: { flex: 1, backgroundColor: 'rgba(255,255,255,.08)', borderRadius: 16, paddingVertical: 13, alignItems: 'center' },
  statValue: { fontFamily: fonts.display, fontSize: 20 },
  statLabel: { fontFamily: fonts.bodyMedium, fontSize: 11, color: 'rgba(255,255,255,.7)', marginTop: 4, textAlign: 'center' },
  sectionTitle: { fontFamily: fonts.displayBold, fontSize: 16, color: colors.white, marginBottom: -6 },
  badgeGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  badge: { width: '22.5%', backgroundColor: 'rgba(255,255,255,.08)', borderRadius: 14, paddingVertical: 11, paddingHorizontal: 5, alignItems: 'center', gap: 6 },
  badgeDot: { width: 22, height: 22, borderRadius: 999 },
  badgeLabel: { fontFamily: fonts.bodySemibold, fontSize: 9.5, color: 'rgba(255,255,255,.85)', textAlign: 'center' },
  settingsCard: { backgroundColor: 'rgba(255,255,255,.08)', borderRadius: 18, overflow: 'hidden' },
  settingRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 15, paddingHorizontal: 16, borderBottomWidth: 1, borderBottomColor: 'rgba(255,255,255,.1)' },
  settingLabel: { flex: 1, fontFamily: fonts.bodyMedium, fontSize: 15, color: colors.white },
  toggle: { width: 50, height: 30, borderRadius: 999, backgroundColor: 'rgba(255,255,255,.2)', justifyContent: 'center' },
  toggleOn: { backgroundColor: colors.blue },
  toggleKnob: { width: 24, height: 24, borderRadius: 999, backgroundColor: colors.white, marginLeft: 3 },
  toggleKnobOn: { marginLeft: 23 },
});
