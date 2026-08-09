import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { Screen } from '../components/Screen';
import { goBackOrHome } from '../navigation/goBack';
import { Button } from '../components/Button';
import { Icon } from '../components/Icon';
import { colors, gradients } from '../theme/colors';
import { fonts } from '../theme/typography';
import { useT } from '../i18n';

type Props = NativeStackScreenProps<RootStackParamList, 'Consequence'>;

const STAGES = [
  { n: 1, label: 'Confianza', bg: colors.green, text: colors.white },
  { n: 2, label: 'Recopilación de información', bg: colors.gold, text: colors.ink },
  { n: 3, label: 'Secreto', bg: colors.orange, text: colors.white },
  { n: 4, label: 'Presión', bg: colors.magenta, text: colors.white },
  { n: 5, label: 'Riesgo', bg: colors.red, text: colors.white },
];

export default function ConsequenceScreen({ navigation }: Props) {
  const t = useT();
  const v = t.v2;

  return (
    <Screen onBack={() => goBackOrHome(navigation)} colors={gradients.consequenceBad} scroll style={{ paddingTop: 32, paddingBottom: 28 }}>
      <View style={styles.badge}>
        <Icon name="alert" size={20} color={colors.gold} />
        <Text style={styles.badgeText}>{v.cons.badTitle}</Text>
      </View>

      <Text style={styles.headline}>{v.cons.bad}</Text>

      <View style={styles.patternCard}>
        <Text style={styles.patternTitle}>Patrón del catfishing</Text>
        {STAGES.map((s) => (
          <View key={s.n} style={styles.stageRow}>
            <View style={[styles.stageNum, { backgroundColor: s.bg }]}>
              <Text style={[styles.stageNumText, { color: s.text }]}>{s.n}</Text>
            </View>
            <Text style={[styles.stageLabel, s.n === 3 && styles.stageLabelBold]}>{s.label}</Text>
          </View>
        ))}
      </View>

      <View style={styles.footNote}>
        <Text style={styles.footNoteText}>
          Ahora vas por la fase <Text style={{ fontFamily: fonts.displayBold }}>3</Text>. Observa si alguien intenta aislar la conversación.
        </Text>
      </View>

      <View style={{ flex: 1 }} />
      <Button label={v.cons.next} variant="gold" onPress={() => navigation.navigate('Board')} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  badge: { alignSelf: 'flex-start', flexDirection: 'row', alignItems: 'center', gap: 10, backgroundColor: 'rgba(10,26,74,.5)', borderWidth: 2, borderColor: 'rgba(255,255,255,.35)', paddingVertical: 12, paddingHorizontal: 18, borderRadius: 999 },
  badgeText: { fontFamily: fonts.display, fontSize: 15, color: colors.white },
  headline: { fontFamily: fonts.display, fontSize: 25, lineHeight: 33, color: colors.white, marginTop: 16, textShadowColor: 'rgba(10,26,74,.6)', textShadowOffset: { width: 0, height: 3 }, textShadowRadius: 0 },
  patternCard: { backgroundColor: colors.cardBg, borderRadius: 20, padding: 18, marginTop: 18, gap: 12 },
  patternTitle: { fontFamily: fonts.display, fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', color: colors.slate },
  stageRow: { flexDirection: 'row', alignItems: 'center', gap: 11 },
  stageNum: { width: 28, height: 28, borderRadius: 999, alignItems: 'center', justifyContent: 'center' },
  stageNumText: { fontFamily: fonts.display, fontSize: 13 },
  stageLabel: { fontFamily: fonts.bodySemibold, fontSize: 15, color: colors.ink },
  stageLabelBold: { fontFamily: fonts.bodyBold },
  footNote: { backgroundColor: 'rgba(10,26,74,.4)', borderRadius: 18, padding: 16, marginTop: 14 },
  footNoteText: { fontFamily: fonts.body, fontSize: 15, lineHeight: 23, color: colors.white },
});
