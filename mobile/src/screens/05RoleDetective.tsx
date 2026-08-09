import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { Screen } from '../components/Screen';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { IconBubble } from '../components/Misc';
import { colors, gradients } from '../theme/colors';
import { fonts } from '../theme/typography';
import { useT } from '../i18n';

type Props = NativeStackScreenProps<RootStackParamList, 'RoleDetective'>;

export default function RoleDetectiveScreen({ navigation }: Props) {
  const t = useT();
  const v = t.v2;

  const rows: [string, string][] = [
    [v.role.age, '11'],
    [v.role.hobby, 'Dibujar'],
    [v.role.city, 'Lima'],
    [v.role.game, 'Roblox'],
  ];

  return (
    <Screen colors={gradients.roleDetective} align="center" scroll style={{ paddingTop: 32, paddingBottom: 28 }}>
      <Text style={styles.kicker}>{v.role.kicker}</Text>

      <Card style={{ width: '100%', marginTop: 18 }} radius={22} border={{ width: 4, color: colors.white }} shadowHeight={6}>
        <View style={{ alignItems: 'center', gap: 11 }}>
          <IconBubble icon="search" size={80} bg={colors.skyBlue} iconSize={36} radius={999} shadowColor={colors.skyBlueShadow} />
          <Text style={styles.role}>{v.role.det}</Text>
          <Text style={styles.desc}>{v.role.detDesc}</Text>
        </View>
      </Card>

      <Card style={{ width: '100%', marginTop: 16 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 13 }}>
          <View style={styles.avatar}>
            <Text style={styles.avatarLabel}>S</Text>
          </View>
          <Text style={styles.playerName}>Sofía</Text>
          <Text style={styles.cardLabel}>{v.role.card}</Text>
        </View>
        <View style={styles.grid}>
          {rows.map(([label, value]) => (
            <React.Fragment key={label}>
              <Text style={styles.gridLabel}>{label}</Text>
              <Text style={styles.gridValue}>{value}</Text>
            </React.Fragment>
          ))}
        </View>
      </Card>

      <View style={{ flex: 1 }} />
      <Button label={v.role.got} variant="primary" style={{ width: '100%' }} onPress={() => navigation.navigate('Chat')} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  kicker: { fontFamily: fonts.display, fontSize: 12, letterSpacing: 2.2, textTransform: 'uppercase', color: colors.gold },
  role: { fontFamily: fonts.display, fontSize: 26, letterSpacing: 2, color: colors.skyBlue },
  desc: { fontFamily: fonts.body, fontSize: 15, lineHeight: 23, color: colors.inkMuted, textAlign: 'center' },
  avatar: { width: 48, height: 48, borderRadius: 999, backgroundColor: colors.green, alignItems: 'center', justifyContent: 'center' },
  avatarLabel: { fontFamily: fonts.display, fontSize: 19, color: colors.white },
  playerName: { fontFamily: fonts.display, fontSize: 20, color: colors.ink },
  cardLabel: { marginLeft: 'auto', fontFamily: fonts.bodyBold, fontSize: 11, color: colors.slate, letterSpacing: 1.2, textTransform: 'uppercase' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', rowGap: 9, columnGap: 14 },
  gridLabel: { width: '35%', fontFamily: fonts.body, fontSize: 15, color: colors.slate },
  gridValue: { width: '55%', fontFamily: fonts.bodyBold, fontSize: 15, color: colors.ink },
});
