import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { Screen } from '../components/Screen';
import { Button } from '../components/Button';
import { LangSwitcher } from '../components/Misc';
import { Icon } from '../components/Icon';
import { colors, gradients } from '../theme/colors';
import { fonts } from '../theme/typography';
import { useT, useLang } from '../i18n';

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

export default function SplashScreen({ navigation }: Props) {
  const t = useT();
  const { lang, setLang } = useLang();
  const float = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(float, { toValue: -7, duration: 2500, useNativeDriver: true }),
        Animated.timing(float, { toValue: 0, duration: 2500, useNativeDriver: true }),
      ])
    );
    loop.start();
    return () => loop.stop();
  }, [float]);

  return (
    <Screen colors={gradients.splash} align="center" style={styles.container}>
      <View style={[styles.blob, styles.blobTop]} />
      <View style={[styles.blob, styles.blobBottom]} />

      <Text style={styles.title}>LUPO</Text>
      <Text style={styles.tagline}>{t.tagline}</Text>

      <View style={styles.mascotWrap}>
        <Animated.View style={[styles.mascot, { transform: [{ translateY: float }] }]}>
          <Icon name="search" size={54} color={colors.gold} />
          <Text style={styles.mascotCaption}>Mascota Lupo (arte pendiente)</Text>
        </Animated.View>
      </View>

      <View style={styles.actions}>
        <Button label={t.ob.cta} variant="primary" onPress={() => navigation.navigate('Diagnostic')} />
        <Button label={t.ob.login} variant="ghost" onPress={() => navigation.navigate('Map')} />
        <LangSwitcher lang={lang} onPick={setLang} size="lg" />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { paddingTop: 60, paddingBottom: 34 },
  blob: { position: 'absolute', borderRadius: 999 },
  blobTop: { top: -60, left: -40, width: 230, height: 230, backgroundColor: 'rgba(127,179,240,.28)' },
  blobBottom: { bottom: 170, right: -60, width: 190, height: 190, backgroundColor: 'rgba(224,57,155,.18)' },
  title: {
    fontFamily: fonts.display,
    fontSize: 54,
    color: colors.gold,
    letterSpacing: 1,
    transform: [{ rotate: '-3deg' }],
    textShadowColor: colors.goldShadow,
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 0,
  },
  tagline: {
    marginTop: 14,
    fontFamily: fonts.displayBold,
    fontSize: 15,
    letterSpacing: 2.5,
    textTransform: 'uppercase',
    color: colors.white,
    textShadowColor: 'rgba(10,26,74,.8)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 0,
  },
  mascotWrap: { flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%' },
  mascot: {
    width: 220,
    height: 220,
    borderRadius: 999,
    backgroundColor: 'rgba(255,255,255,.12)',
    borderWidth: 4,
    borderColor: 'rgba(255,255,255,.35)',
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  mascotCaption: { fontFamily: fonts.bodySemibold, fontSize: 12, color: 'rgba(255,255,255,.7)', textAlign: 'center', paddingHorizontal: 26 },
  actions: { width: '100%', gap: 14 },
});
