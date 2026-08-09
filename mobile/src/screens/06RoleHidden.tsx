import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { Screen } from '../components/Screen';
import { Button } from '../components/Button';
import { Icon } from '../components/Icon';
import { colors, gradients } from '../theme/colors';
import { fonts } from '../theme/typography';
import { useT } from '../i18n';

type Props = NativeStackScreenProps<RootStackParamList, 'RoleHidden'>;

export default function RoleHiddenScreen({ navigation }: Props) {
  const t = useT();
  const v = t.v2;

  return (
    <Screen colors={gradients.roleHidden} scroll style={{ paddingTop: 32, paddingBottom: 28 }}>
      <Text style={styles.kicker}>{v.role.kicker}</Text>

      <View style={styles.headerRow}>
        <View style={styles.fingerprintBubble}>
          <Icon name="fingerprint" size={30} color={colors.gold} />
        </View>
        <Text style={styles.imp}>{v.role.imp}</Text>
      </View>

      <Text style={styles.desc}>{v.role.impDesc}</Text>

      <View style={styles.optionsBox}>
        <Text style={styles.optionsLabel}>{v.chat.ask}</Text>
        <View style={styles.optionLight}>
          <Text style={styles.optionTextLight}>A. Cambiar de tema</Text>
        </View>
        <View style={styles.optionLight}>
          <Text style={styles.optionTextLight}>B. Hacer una pregunta normal</Text>
        </View>
        <View style={styles.optionGold}>
          <Text style={styles.optionTextGold}>C. Conducta de riesgo diseñada por el juego</Text>
        </View>
      </View>

      <View style={styles.infoBanner}>
        <Icon name="shield" size={21} color={colors.green} />
        <Text style={styles.infoText}>
          Nadie escribe sus propias mentiras: el juego controla qué situaciones educativas aparecen.
        </Text>
      </View>

      <View style={{ flex: 1 }} />
      <Button label={v.role.got} variant="gold" style={{ width: '100%' }} onPress={() => navigation.goBack()} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  kicker: { fontFamily: fonts.display, fontSize: 12, letterSpacing: 2.2, textTransform: 'uppercase', color: colors.gold },
  headerRow: { flexDirection: 'row', alignItems: 'center', gap: 14, marginTop: 16 },
  fingerprintBubble: { width: 66, height: 66, borderRadius: 999, backgroundColor: 'rgba(255,255,255,.14)', borderWidth: 3, borderColor: 'rgba(255,255,255,.4)', borderStyle: 'dashed', alignItems: 'center', justifyContent: 'center' },
  imp: { fontFamily: fonts.display, fontSize: 26, letterSpacing: 1.5, color: colors.gold, textShadowColor: 'rgba(10,26,74,.6)', textShadowOffset: { width: 0, height: 3 }, textShadowRadius: 0 },
  desc: { fontFamily: fonts.body, fontSize: 16, lineHeight: 25, color: 'rgba(255,255,255,.78)', marginTop: 14 },
  optionsBox: { backgroundColor: 'rgba(10,26,74,.4)', borderRadius: 20, padding: 18, marginTop: 16, gap: 11 },
  optionsLabel: { fontFamily: fonts.display, fontSize: 11, letterSpacing: 1.6, textTransform: 'uppercase', color: 'rgba(255,255,255,.55)' },
  optionLight: { backgroundColor: colors.cardBg, borderRadius: 14, padding: 14 },
  optionTextLight: { fontFamily: fonts.bodySemibold, fontSize: 15, lineHeight: 22, color: colors.ink },
  optionGold: { backgroundColor: colors.gold, borderRadius: 14, padding: 14, borderBottomWidth: 4, borderBottomColor: colors.goldShadow },
  optionTextGold: { fontFamily: fonts.bodyBold, fontSize: 15, lineHeight: 22, color: colors.ink },
  infoBanner: { flexDirection: 'row', gap: 12, alignItems: 'flex-start', backgroundColor: 'rgba(76,201,59,.18)', borderWidth: 2, borderColor: 'rgba(76,201,59,.5)', borderRadius: 18, padding: 15, marginTop: 14 },
  infoText: { flex: 1, fontFamily: fonts.body, fontSize: 14, lineHeight: 21, color: 'rgba(255,255,255,.8)' },
});
