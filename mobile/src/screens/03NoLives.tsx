import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { Button } from '../components/Button';
import { Icon } from '../components/Icon';
import { colors, gradients } from '../theme/colors';
import { fonts } from '../theme/typography';
import { useT } from '../i18n';
import { useGameStore } from '../state/store';

type Props = NativeStackScreenProps<RootStackParamList, 'NoLives'>;

export default function NoLivesScreen({ navigation }: Props) {
  const t = useT();

  const reviewTips = () => {
    useGameStore.setState((s) => ({ hearts: Math.min(5, s.hearts + 1) }));
    navigation.navigate('Map');
  };

  return (
    <LinearGradient colors={gradients.noLives} style={styles.flex}>
      <SafeAreaView style={styles.flex} edges={['top', 'bottom']}>
        <View style={styles.overlay} />
        <View style={styles.sheet}>
          <View style={styles.handle} />
          <View style={styles.hearts}>
            {[0, 1, 2, 3, 4].map((i) => (
              <Icon key={i} name="heart" size={34} color={colors.border} />
            ))}
          </View>
          <Text style={styles.title}>{t.nolives.title}</Text>
          <Text style={styles.body}>{t.nolives.body}</Text>
          <View style={styles.regen}>
            <Icon name="clock" size={17} color={colors.ink} />
            <Text style={styles.regenText}>{t.nolives.regen}</Text>
          </View>
          <Button label={t.nolives.cta1} variant="primary" onPress={reviewTips} />
          <Button label={t.nolives.cta2} variant="secondary" onPress={() => navigation.navigate('Map')} />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, justifyContent: 'flex-end' },
  overlay: { ...StyleSheet.absoluteFill, backgroundColor: 'rgba(10,26,74,.5)' },
  sheet: {
    backgroundColor: colors.cardBg,
    borderTopWidth: 5,
    borderTopColor: colors.white,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 24,
    paddingTop: 18,
    paddingBottom: 30,
    alignItems: 'center',
    gap: 14,
  },
  handle: { width: 46, height: 5, borderRadius: 999, backgroundColor: colors.border },
  hearts: { flexDirection: 'row', gap: 8, marginTop: 8 },
  title: { fontFamily: fonts.display, fontSize: 26, lineHeight: 33, textAlign: 'center', color: colors.ink },
  body: { fontFamily: fonts.body, fontSize: 15, lineHeight: 23, textAlign: 'center', color: colors.inkMuted },
  regen: { flexDirection: 'row', alignItems: 'center', gap: 8, backgroundColor: colors.cardBgAlt, borderRadius: 999, paddingVertical: 11, paddingHorizontal: 18 },
  regenText: { fontFamily: fonts.displayBold, fontSize: 13, color: '#3C4766' },
});
