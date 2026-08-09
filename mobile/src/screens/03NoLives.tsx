import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { Button } from '../components/Button';
import { Icon } from '../components/Icon';
import { goBackOrHome } from '../navigation/goBack';
import { colors, gradients } from '../theme/colors';
import { fonts } from '../theme/typography';
import { useT } from '../i18n';
import { useGameStore } from '../state/store';

type Props = NativeStackScreenProps<RootStackParamList, 'NoLives'>;

export default function NoLivesScreen({ navigation }: Props) {
  const t = useT();
  const [showTips, setShowTips] = useState(false);

  const grantHeart = () => {
    useGameStore.setState((s) => ({ hearts: Math.min(5, s.hearts + 1) }));
    navigation.navigate('Map');
  };

  return (
    <LinearGradient colors={gradients.noLives} style={styles.flex}>
      <SafeAreaView style={styles.flex} edges={['top', 'bottom']}>
        <View style={styles.overlay} />
        <View style={styles.sheet}>
          <Pressable style={styles.closeBtn} onPress={() => goBackOrHome(navigation)} hitSlop={10}>
            <Icon name="x" size={20} color={colors.slate} />
          </Pressable>
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

          {showTips ? (
            <>
              <View style={styles.tipsBox}>
                <Text style={styles.tipsTitle}>{t.nolives.tipsTitle}</Text>
                {[t.nolives.tip1, t.nolives.tip2, t.nolives.tip3].map((tip) => (
                  <View key={tip} style={styles.tipRow}>
                    <Icon name="eye" size={16} color={colors.blue} />
                    <Text style={styles.tipText}>{tip}</Text>
                  </View>
                ))}
              </View>
              <Button label={t.nolives.tipsCta} variant="primary" onPress={grantHeart} />
            </>
          ) : (
            <>
              <Button label={t.nolives.cta1} variant="primary" onPress={() => setShowTips(true)} />
              <Button label={t.nolives.cta2} variant="secondary" onPress={() => navigation.navigate('Missions')} />
            </>
          )}
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
  closeBtn: { position: 'absolute', top: 16, right: 16, width: 32, height: 32, borderRadius: 999, backgroundColor: colors.cardBgAlt, alignItems: 'center', justifyContent: 'center', zIndex: 1 },
  handle: { width: 46, height: 5, borderRadius: 999, backgroundColor: colors.border },
  hearts: { flexDirection: 'row', gap: 8, marginTop: 8 },
  title: { fontFamily: fonts.display, fontSize: 26, lineHeight: 33, textAlign: 'center', color: colors.ink },
  body: { fontFamily: fonts.body, fontSize: 15, lineHeight: 23, textAlign: 'center', color: colors.inkMuted },
  regen: { flexDirection: 'row', alignItems: 'center', gap: 8, backgroundColor: colors.cardBgAlt, borderRadius: 999, paddingVertical: 11, paddingHorizontal: 18 },
  regenText: { fontFamily: fonts.displayBold, fontSize: 13, color: '#3C4766' },
  tipsBox: { width: '100%', backgroundColor: colors.white, borderRadius: 18, padding: 16, gap: 11 },
  tipsTitle: { fontFamily: fonts.displayBold, fontSize: 14, color: colors.ink },
  tipRow: { flexDirection: 'row', gap: 10, alignItems: 'flex-start' },
  tipText: { flex: 1, fontFamily: fonts.body, fontSize: 13, lineHeight: 19, color: colors.inkMuted },
});
