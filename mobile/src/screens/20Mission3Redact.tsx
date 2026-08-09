import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { Screen } from '../components/Screen';
import { goBackOrHome } from '../navigation/goBack';
import { CheckRow } from '../components/SelectableRow';
import { Button } from '../components/Button';
import { Icon } from '../components/Icon';
import { colors, gradients } from '../theme/colors';
import { fonts } from '../theme/typography';
import { useT } from '../i18n';
import { useGameStore, REDACT_KEYS } from '../state/store';

type Props = NativeStackScreenProps<RootStackParamList, 'Mission3Redact'>;

export default function Mission3RedactScreen({ navigation }: Props) {
  const t = useT();
  const m3 = t.m3;
  const redact = useGameStore((s) => s.redact);
  const toggleRedact = useGameStore((s) => s.toggleRedact);
  const rCount = REDACT_KEYS.filter((k) => redact[k]).length;

  const labels: Record<(typeof REDACT_KEYS)[number], string> = {
    r1: m3.r1,
    r2: m3.r2,
    r3: m3.r3,
    r4: m3.r4,
    r5: m3.r5,
  };

  return (
    <Screen onBack={() => goBackOrHome(navigation)} colors={gradients.m3redact} scroll>
      <View style={styles.tag}>
        <Text style={styles.tagText}>{m3.tag}</Text>
      </View>
      <Text style={styles.prompt}>{m3.prompt}</Text>

      <View style={styles.photoCard}>
        <View style={styles.photoPlaceholder}>
          <Text style={styles.photoPlaceholderText}>Foto del caso (la aporta el equipo)</Text>
        </View>
        <View style={{ padding: 14, gap: 7 }}>
          <Text style={styles.captionLabel}>{m3.caption}</Text>
          <Text style={styles.captionText}>{m3.capTxt}</Text>
        </View>
      </View>

      <View style={{ gap: 9, marginTop: 14 }}>
        {REDACT_KEYS.map((k) => (
          <CheckRow key={k} label={labels[k]} icon={k === 'r5' ? 'map' : 'lock'} checked={!!redact[k]} onPress={() => toggleRedact(k)} />
        ))}
      </View>

      <View style={styles.hiddenRow}>
        <Icon name="shield" size={19} color={colors.gold} />
        <Text style={styles.hiddenLabel}>{m3.hidden}</Text>
        <Text style={styles.hiddenValue}>{rCount}/5</Text>
      </View>

      {rCount > 0 && (
        <Button label={t.cm.continueLabel} variant="primary" style={{ marginTop: 16 }} onPress={() => navigation.navigate('Mission3Verdict')} />
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  tag: { alignSelf: 'flex-start', backgroundColor: colors.gold, borderRadius: 999, paddingVertical: 10, paddingHorizontal: 15, borderBottomWidth: 4, borderBottomColor: colors.goldShadow },
  tagText: { fontFamily: fonts.display, fontSize: 12, letterSpacing: 1.3, color: colors.ink },
  prompt: { fontFamily: fonts.display, fontSize: 22, lineHeight: 29, color: colors.white, marginTop: 14, textShadowColor: 'rgba(10,26,74,.6)', textShadowOffset: { width: 0, height: 3 }, textShadowRadius: 0 },
  photoCard: { backgroundColor: colors.white, borderRadius: 20, overflow: 'hidden', marginTop: 14 },
  photoPlaceholder: { height: 140, backgroundColor: colors.cardBgAlt, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 30 },
  photoPlaceholderText: { fontFamily: fonts.bodySemibold, fontSize: 12, lineHeight: 17, color: colors.slate, textAlign: 'center' },
  captionLabel: { fontFamily: fonts.display, fontSize: 11, letterSpacing: 1.4, textTransform: 'uppercase', color: colors.slate },
  captionText: { fontFamily: fonts.body, fontSize: 15, lineHeight: 22, color: colors.ink },
  hiddenRow: { flexDirection: 'row', alignItems: 'center', gap: 11, backgroundColor: 'rgba(10,26,74,.45)', borderWidth: 3, borderColor: colors.gold, borderRadius: 999, padding: 12, paddingHorizontal: 18, marginTop: 14 },
  hiddenLabel: { flex: 1, fontFamily: fonts.displayBold, fontSize: 14, color: 'rgba(255,255,255,.8)' },
  hiddenValue: { fontFamily: fonts.display, fontSize: 18, color: colors.gold },
});
