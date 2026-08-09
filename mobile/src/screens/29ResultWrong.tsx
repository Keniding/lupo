import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { Screen } from '../components/Screen';
import { goBackOrHome } from '../navigation/goBack';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Icon } from '../components/Icon';
import { colors, gradients } from '../theme/colors';
import { fonts } from '../theme/typography';
import { useT } from '../i18n';
import { useGameStore } from '../state/store';

type Props = NativeStackScreenProps<RootStackParamList, 'ResultWrong'>;

export default function ResultWrongScreen({ navigation }: Props) {
  const t = useT();
  const bad = t.bad;
  const hearts = useGameStore((s) => s.hearts);

  const next = () => {
    if (hearts <= 0) navigation.navigate('NoLives');
    else navigation.navigate('FindSignals');
  };

  return (
    <Screen onBack={() => goBackOrHome(navigation)} colors={gradients.consequenceBad} align="center" scroll style={{ paddingTop: 46, paddingBottom: 26 }}>
      <View style={styles.mascot}>
        <Icon name="search" size={36} color="rgba(255,255,255,.85)" />
      </View>

      <Text style={styles.title}>{bad.title}</Text>

      <View style={styles.lostPill}>
        <Icon name="heart" size={19} color={colors.white} />
        <Text style={styles.lostText}>{bad.lost}</Text>
      </View>

      <Card style={{ width: '100%', marginTop: 22 }}>
        <View style={styles.whyRow}>
          <Icon name="alert" size={22} color={colors.orangeShadow} />
          <Text style={styles.whyText}>{bad.why}</Text>
        </View>
      </Card>

      <View style={{ flex: 1, minHeight: 20 }} />
      <Button label={bad.next} variant="secondary" style={{ width: '100%' }} onPress={next} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  mascot: { width: 100, height: 100, borderRadius: 999, borderWidth: 2, borderColor: 'rgba(255,255,255,.4)', borderStyle: 'dashed', alignItems: 'center', justifyContent: 'center' },
  title: { fontFamily: fonts.display, fontSize: 23, lineHeight: 30, color: colors.white, textAlign: 'center', marginTop: 18, textShadowColor: 'rgba(10,26,74,.5)', textShadowOffset: { width: 0, height: 2 }, textShadowRadius: 0 },
  lostPill: { flexDirection: 'row', alignItems: 'center', gap: 9, backgroundColor: 'rgba(10,26,74,.4)', borderRadius: 999, paddingVertical: 10, paddingHorizontal: 18, marginTop: 14 },
  lostText: { fontFamily: fonts.display, fontSize: 14, color: colors.white },
  whyRow: { flexDirection: 'row', gap: 12, alignItems: 'flex-start' },
  whyText: { flex: 1, fontFamily: fonts.body, fontSize: 15, lineHeight: 22, color: colors.ink },
});
