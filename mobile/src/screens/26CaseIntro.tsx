import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { Screen } from '../components/Screen';
import { Button } from '../components/Button';
import { colors, gradients } from '../theme/colors';
import { fonts } from '../theme/typography';
import { useT } from '../i18n';

type Props = NativeStackScreenProps<RootStackParamList, 'CaseIntro'>;

export default function CaseIntroScreen({ navigation }: Props) {
  const t = useT();
  const intro = t.intro;

  return (
    <Screen colors={gradients.noLives} align="center" style={{ justifyContent: 'center' }}>
      <View style={styles.card}>
        <View style={styles.thumb}>
          <Text style={styles.thumbNumber}>#14</Text>
        </View>
        <Text style={styles.kicker}>{intro.kicker}</Text>
        <Text style={styles.title}>{intro.title}</Text>
        <Text style={styles.body}>{intro.body}</Text>
        <View style={styles.tagsRow}>
          <View style={styles.tag}>
            <Text style={styles.tagText}>
              {intro.diff}: <Text style={styles.tagTextBold}>{intro.diffLabel}</Text>
            </Text>
          </View>
          <View style={styles.rewardTag}>
            <Text style={styles.rewardText}>{intro.reward}</Text>
          </View>
        </View>
        <Button label={intro.cta} variant="primary" style={{ width: '100%', marginTop: 6 }} onPress={() => navigation.navigate('Swipe')} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: { width: '100%', maxWidth: 340, backgroundColor: colors.white, borderRadius: 26, padding: 24, alignItems: 'center', gap: 12 },
  thumb: { width: 120, height: 90, borderRadius: 14, backgroundColor: colors.cardBgAlt, alignItems: 'center', justifyContent: 'center', marginBottom: 4 },
  thumbNumber: { fontFamily: fonts.display, fontSize: 15, color: colors.navyMid },
  kicker: { fontFamily: fonts.display, fontSize: 11, letterSpacing: 1.6, textTransform: 'uppercase', color: colors.blue },
  title: { fontFamily: fonts.display, fontSize: 22, lineHeight: 28, color: colors.ink, textAlign: 'center' },
  body: { fontFamily: fonts.body, fontSize: 15, lineHeight: 22, color: colors.inkMuted, textAlign: 'center' },
  tagsRow: { flexDirection: 'row', gap: 8, flexWrap: 'wrap', justifyContent: 'center' },
  tag: { backgroundColor: colors.cardBgAlt, borderRadius: 999, paddingVertical: 8, paddingHorizontal: 13 },
  tagText: { fontFamily: fonts.bodySemibold, fontSize: 13, color: colors.inkMuted },
  tagTextBold: { fontFamily: fonts.bodyBold, color: colors.ink },
  rewardTag: { backgroundColor: 'rgba(255,201,60,.22)', borderRadius: 999, paddingVertical: 8, paddingHorizontal: 13 },
  rewardText: { fontFamily: fonts.display, fontSize: 13, color: colors.goldShadow },
});
