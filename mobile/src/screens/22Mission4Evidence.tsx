import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { Screen } from '../components/Screen';
import { goBackOrHome } from '../navigation/goBack';
import { Button } from '../components/Button';
import { colors, gradients } from '../theme/colors';
import { fonts } from '../theme/typography';
import { useT } from '../i18n';

type Props = NativeStackScreenProps<RootStackParamList, 'Mission4Evidence'>;

export default function Mission4EvidenceScreen({ navigation }: Props) {
  const t = useT();
  const m4 = t.m4;

  return (
    <Screen onBack={() => goBackOrHome(navigation)} colors={gradients.m4evidence} scroll>
      <View style={styles.tag}>
        <Text style={styles.tagText}>{m4.tag}</Text>
      </View>
      <Text style={styles.name}>{m4.name}</Text>
      <Text style={styles.brief}>{m4.brief}</Text>

      <View style={styles.article}>
        <View style={styles.site}>
          <Text style={styles.siteText}>{m4.site}</Text>
        </View>
        <View style={{ padding: 14, gap: 12 }}>
          <Text style={styles.headline}>{m4.headline}</Text>
          <View style={styles.imagePlaceholder}>
            <Text style={styles.imagePlaceholderText}>Imagen del artículo (la aporta el equipo)</Text>
          </View>
          <View style={styles.tagsRow}>
            <View style={styles.pinkTag}>
              <Text style={styles.pinkTagText}>{m4.date}</Text>
            </View>
            <View style={styles.pinkTag}>
              <Text style={styles.pinkTagText}>{m4.author}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.goalRow}>
        <Text style={styles.goalLabel}>{m4.goal}</Text>
        <Text style={styles.goalDiff}>{m4.diff}</Text>
      </View>
      <Text style={styles.goalTxt}>{m4.goalTxt}</Text>

      <View style={{ flex: 1 }} />
      <Button label={m4.cta} variant="primary" onPress={() => navigation.navigate('Mission4Verification')} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  tag: { alignSelf: 'flex-start', backgroundColor: colors.gold, borderRadius: 999, paddingVertical: 10, paddingHorizontal: 15, borderBottomWidth: 4, borderBottomColor: colors.goldShadow },
  tagText: { fontFamily: fonts.display, fontSize: 12, letterSpacing: 1.3, color: colors.ink },
  name: { fontFamily: fonts.display, fontSize: 27, lineHeight: 34, color: colors.white, marginTop: 14, textShadowColor: 'rgba(10,26,74,.6)', textShadowOffset: { width: 0, height: 3 }, textShadowRadius: 0 },
  brief: { fontFamily: fonts.body, fontSize: 15, lineHeight: 23, color: 'rgba(255,255,255,.72)', marginTop: 8 },
  article: { backgroundColor: colors.white, borderRadius: 20, overflow: 'hidden', marginTop: 16 },
  site: { backgroundColor: colors.errorBg, padding: 12, paddingHorizontal: 14 },
  siteText: { fontFamily: fonts.evidenceRegular, fontSize: 12, color: colors.errorText },
  headline: { fontFamily: fonts.display, fontSize: 19, lineHeight: 26, color: colors.ink },
  imagePlaceholder: { height: 104, borderRadius: 12, backgroundColor: colors.cardBgAlt, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 24 },
  imagePlaceholderText: { fontFamily: fonts.bodySemibold, fontSize: 12, lineHeight: 17, color: colors.slate, textAlign: 'center' },
  tagsRow: { flexDirection: 'row', gap: 8, flexWrap: 'wrap' },
  pinkTag: { backgroundColor: colors.errorBg, borderRadius: 999, paddingVertical: 9, paddingHorizontal: 13 },
  pinkTagText: { fontFamily: fonts.displayBold, fontSize: 12, color: colors.errorText },
  goalRow: { flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between', marginTop: 16 },
  goalLabel: { fontFamily: fonts.displayBold, fontSize: 13, color: 'rgba(255,255,255,.7)' },
  goalDiff: { fontFamily: fonts.display, fontSize: 13, color: colors.gold },
  goalTxt: { fontFamily: fonts.displayBold, fontSize: 17, lineHeight: 25, color: colors.white, marginTop: 6 },
});
