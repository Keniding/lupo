import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { Screen } from '../components/Screen';
import { goBackOrHome } from '../navigation/goBack';
import { Button } from '../components/Button';
import { Icon } from '../components/Icon';
import { Mascot } from '../components/Mascot';
import { colors, gradients } from '../theme/colors';
import { fonts } from '../theme/typography';
import { useT } from '../i18n';

type Props = NativeStackScreenProps<RootStackParamList, 'ResultCorrect'>;

export default function ResultCorrectScreen({ navigation }: Props) {
  const t = useT();
  const ok = t.ok;

  return (
    <Screen onBack={() => goBackOrHome(navigation)} colors={[colors.teal, colors.green]} align="center" scroll style={{ paddingTop: 40, paddingBottom: 26 }}>
      <View style={styles.stamp}>
        <Icon name="shieldCheck" size={30} color={colors.greenShadow} />
        <Text style={styles.stampText}>{ok.stamp}</Text>
      </View>

      <Mascot emotion="acierto" animation="pop" size={172} style={{ marginTop: 18 }} />

      <Text style={styles.title}>{ok.title}</Text>

      <View style={styles.xpPill}>
        <View style={styles.xpDot} />
        <Text style={styles.xpValue}>{ok.xp}</Text>
        <Text style={styles.xpLabel}>{ok.xpLabel}</Text>
      </View>

      <View style={styles.comboRow}>
        <Icon name="flame" size={17} color={colors.gold} />
        <Text style={styles.comboText}>{ok.combo}</Text>
      </View>

      <View style={{ flex: 1, minHeight: 20 }} />
      <View style={styles.whyBox}>
        <Icon name="eye" size={22} color={colors.blue} />
        <Text style={styles.whyText}>{ok.why}</Text>
      </View>

      <Button label={ok.next} variant="primary" style={{ width: '100%', marginTop: 16 }} onPress={() => navigation.navigate('FindSignals')} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  stamp: { flexDirection: 'row', alignItems: 'center', gap: 10, backgroundColor: 'rgba(255,255,255,.85)', borderWidth: 4, borderColor: colors.white, borderRadius: 16, paddingVertical: 14, paddingHorizontal: 22 },
  stampText: { fontFamily: fonts.display, fontSize: 26, letterSpacing: 2, color: colors.greenShadow },
  title: { fontFamily: fonts.display, fontSize: 24, lineHeight: 31, color: colors.white, textAlign: 'center', marginTop: 22, textShadowColor: 'rgba(10,26,74,.4)', textShadowOffset: { width: 0, height: 2 }, textShadowRadius: 0 },
  xpPill: { flexDirection: 'row', alignItems: 'center', gap: 9, backgroundColor: colors.gold, borderRadius: 999, paddingVertical: 11, paddingHorizontal: 20, marginTop: 18 },
  xpDot: { width: 18, height: 18, borderRadius: 999, backgroundColor: '#FFF6DC' },
  xpValue: { fontFamily: fonts.display, fontSize: 19, color: '#5E4400' },
  xpLabel: { fontFamily: fonts.bodySemibold, fontSize: 12, color: '#7A5B00' },
  comboRow: { flexDirection: 'row', alignItems: 'center', gap: 7, marginTop: 10 },
  comboText: { fontFamily: fonts.bodySemibold, fontSize: 13, color: colors.gold },
  whyBox: { width: '100%', backgroundColor: colors.white, borderRadius: 20, padding: 17, flexDirection: 'row', gap: 12, alignItems: 'flex-start' },
  whyText: { flex: 1, fontFamily: fonts.body, fontSize: 15, lineHeight: 22, color: colors.ink },
});
