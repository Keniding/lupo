import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { Screen } from '../components/Screen';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { colors, gradients } from '../theme/colors';
import { fonts } from '../theme/typography';
import { useT } from '../i18n';

type Props = NativeStackScreenProps<RootStackParamList, 'Reveal'>;

const STAMPS = [
  { label: 'st1', bg: colors.red, shadow: colors.redShadow },
  { label: 'st2', bg: colors.purple, shadow: colors.purpleShadow },
  { label: 'st3', bg: colors.orange, shadow: colors.orangeShadow },
  { label: 'st4', bg: colors.green, shadow: colors.greenShadow },
] as const;

export default function RevealScreen({ navigation }: Props) {
  const t = useT();
  const v = t.v2;

  return (
    <Screen colors={gradients.reveal} align="center" scroll style={{ paddingTop: 28, paddingBottom: 26 }}>
      <Text style={styles.kicker}>{v.reveal.kicker}</Text>
      <Text style={styles.was}>{v.reveal.was}</Text>

      <View style={styles.ring}>
        <View style={styles.avatar}>
          <Text style={styles.avatarLabel}>A</Text>
        </View>
        <View style={styles.nameTag}>
          <Text style={styles.nameTagText}>{v.reveal.name}</Text>
        </View>
      </View>

      <Card style={{ width: '100%', marginTop: 26 }}>
        <Text style={styles.missedTitle}>{v.reveal.missed}</Text>
        {[v.reveal.s1, v.reveal.s2, v.reveal.s3].map((s) => (
          <View key={s} style={styles.bullet}>
            <View style={styles.bulletDot} />
            <Text style={styles.bulletText}>{s}</Text>
          </View>
        ))}
      </Card>

      <View style={{ width: '100%', marginTop: 16, gap: 9 }}>
        <Text style={styles.what}>{v.reveal.what}</Text>
        <View style={styles.stampsRow}>
          {STAMPS.map((s) => (
            <View key={s.label} style={[styles.stamp, { backgroundColor: s.bg, borderBottomColor: s.shadow }]}>
              <Text style={styles.stampText}>{v.reveal[s.label]}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={{ flex: 1 }} />
      <Button label={v.reveal.next} variant="gold" style={{ width: '100%' }} onPress={() => navigation.navigate('Report')} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  kicker: { fontFamily: fonts.display, fontSize: 12, letterSpacing: 2.2, textTransform: 'uppercase', color: colors.gold },
  was: { fontFamily: fonts.bodySemibold, fontSize: 15, color: 'rgba(255,255,255,.75)', marginTop: 10 },
  ring: { marginTop: 14, width: 150, height: 150, borderRadius: 999, backgroundColor: colors.cardBg, borderWidth: 6, borderColor: colors.white, alignItems: 'center', justifyContent: 'center', borderBottomWidth: 7 },
  avatar: { width: 82, height: 82, borderRadius: 999, backgroundColor: colors.teal, alignItems: 'center', justifyContent: 'center' },
  avatarLabel: { fontFamily: fonts.display, fontSize: 34, color: colors.white },
  nameTag: { position: 'absolute', bottom: -14, backgroundColor: colors.red, borderRadius: 999, paddingVertical: 9, paddingHorizontal: 18, borderBottomWidth: 4, borderBottomColor: colors.redShadow },
  nameTagText: { fontFamily: fonts.display, fontSize: 15, letterSpacing: 1.5, color: colors.white },
  missedTitle: { fontFamily: fonts.display, fontSize: 15, lineHeight: 20, color: colors.ink, marginBottom: 11 },
  bullet: { flexDirection: 'row', gap: 10, alignItems: 'flex-start', marginBottom: 8 },
  bulletDot: { width: 10, height: 10, borderRadius: 999, backgroundColor: colors.red, marginTop: 6 },
  bulletText: { flex: 1, fontFamily: fonts.body, fontSize: 15, lineHeight: 22, color: colors.ink },
  what: { fontFamily: fonts.display, fontSize: 16, color: colors.white },
  stampsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  stamp: { borderRadius: 999, paddingVertical: 12, paddingHorizontal: 16, borderBottomWidth: 4 },
  stampText: { fontFamily: fonts.display, fontSize: 13, letterSpacing: 1, color: colors.white },
});
