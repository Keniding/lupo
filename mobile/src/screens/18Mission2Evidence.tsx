import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { Screen } from '../components/Screen';
import { goBackOrHome } from '../navigation/goBack';
import { PillOption } from '../components/SelectableRow';
import { Icon } from '../components/Icon';
import { Button } from '../components/Button';
import { colors, gradients } from '../theme/colors';
import { fonts } from '../theme/typography';
import { useT } from '../i18n';
import { useGameStore, ZONE_KEYS, type VerdictM2 } from '../state/store';

type Props = NativeStackScreenProps<RootStackParamList, 'Mission2Evidence'>;

const ZONE_LAYOUT: Record<(typeof ZONE_KEYS)[number], { top?: number; bottom?: number; left?: number; right?: number; w: number; h: number; on: string; onText: string }> = {
  z1: { left: 20, top: 28, w: 110, h: 92, on: 'rgba(76,201,59,.2)', onText: colors.green },
  z2: { right: 22, top: 24, w: 114, h: 70, on: 'rgba(76,201,59,.2)', onText: colors.green },
  z3: { left: 32, bottom: 24, w: 126, h: 78, on: 'rgba(76,201,59,.2)', onText: colors.green },
  z4: { right: 26, bottom: 32, w: 100, h: 74, on: 'rgba(255,201,60,.25)', onText: colors.gold },
};

export default function Mission2EvidenceScreen({ navigation }: Props) {
  const t = useT();
  const m2 = t.m2;
  const zones = useGameStore((s) => s.zones);
  const toggleZone = useGameStore((s) => s.toggleZone);
  const zoneScore = useGameStore((s) => s.zoneScore());
  const m2Verdict = useGameStore((s) => s.m2Verdict);
  const pickM2Verdict = useGameStore((s) => s.pickM2Verdict);

  const zoneLabels: Record<(typeof ZONE_KEYS)[number], string> = { z1: m2.z1, z2: m2.z2, z3: m2.z3, z4: m2.z4 };

  const pick = (k: VerdictM2) => pickM2Verdict(k);

  return (
    <Screen onBack={() => goBackOrHome(navigation)} colors={gradients.m2evidence} scroll>
      <View style={styles.tag}>
        <Text style={styles.tagText}>{m2.tag}</Text>
      </View>
      <Text style={styles.prompt}>{m2.prompt}</Text>

      <View style={styles.imageBox}>
        <Text style={styles.imagePlaceholder}>{m2.img}</Text>
        {ZONE_KEYS.map((k) => {
          const layout = ZONE_LAYOUT[k];
          const on = !!zones[k];
          return (
            <Pressable
              key={k}
              onPress={() => toggleZone(k)}
              style={[styles.zone, { top: layout.top, bottom: layout.bottom, left: layout.left, right: layout.right, width: layout.w, height: layout.h }]}
            >
              {on && (
                <View style={[StyleSheet.absoluteFill, styles.zoneOn, { backgroundColor: layout.on, borderColor: layout.onText }]} />
              )}
              {on && (
                <View style={[styles.zoneLabel, { backgroundColor: layout.onText }]}>
                  <Text style={styles.zoneLabelText}>{zoneLabels[k]}</Text>
                </View>
              )}
            </Pressable>
          );
        })}
      </View>

      <View style={styles.foundRow}>
        <Icon name="target" size={19} color={colors.gold} />
        <Text style={styles.foundLabel}>{m2.found}</Text>
        <Text style={styles.foundValue}>{zoneScore}/3</Text>
      </View>

      <Text style={styles.verdictTitle}>{m2.verdict}</Text>
      <View style={{ gap: 10, marginTop: 11 }}>
        <PillOption label={m2.vAi} selected={m2Verdict === 'ai'} borderColor={colors.red} onPress={() => pick('ai')} />
        <PillOption label={m2.vReal} selected={m2Verdict === 'real'} borderColor={colors.green} onPress={() => pick('real')} />
        <PillOption label={m2.vDoubt} selected={m2Verdict === 'doubt'} borderColor={colors.gold} muted onPress={() => pick('doubt')} />
      </View>

      {m2Verdict === 'doubt' && (
        <View style={styles.doubtBanner}>
          <Text style={styles.doubtText}>{m2.doubtOk}</Text>
        </View>
      )}

      {m2Verdict && (
        <Button label={t.cm.continueLabel} variant="primary" style={{ marginTop: 16 }} onPress={() => navigation.navigate('Mission2Result')} />
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  tag: { alignSelf: 'flex-start', backgroundColor: colors.gold, borderRadius: 999, paddingVertical: 10, paddingHorizontal: 15, borderBottomWidth: 4, borderBottomColor: colors.goldShadow },
  tagText: { fontFamily: fonts.display, fontSize: 12, letterSpacing: 1.3, color: colors.ink },
  prompt: { fontFamily: fonts.display, fontSize: 22, lineHeight: 29, color: colors.white, marginTop: 14, textShadowColor: 'rgba(10,26,74,.6)', textShadowOffset: { width: 0, height: 3 }, textShadowRadius: 0 },
  imageBox: { height: 280, borderRadius: 20, backgroundColor: colors.cardBg, borderWidth: 4, borderColor: colors.white, overflow: 'hidden', marginTop: 14, alignItems: 'center', justifyContent: 'center' },
  imagePlaceholder: { fontFamily: fonts.bodySemibold, fontSize: 12, lineHeight: 17, color: colors.slate, textAlign: 'center', paddingHorizontal: 40 },
  zone: { position: 'absolute', borderRadius: 14, borderWidth: 3, borderColor: 'rgba(27,46,107,.25)', borderStyle: 'dashed' },
  zoneOn: { borderRadius: 14, borderWidth: 4 },
  zoneLabel: { position: 'absolute', left: 6, bottom: 6, borderRadius: 999, paddingVertical: 6, paddingHorizontal: 9 },
  zoneLabelText: { fontFamily: fonts.display, fontSize: 10, color: colors.white },
  foundRow: { flexDirection: 'row', alignItems: 'center', gap: 11, backgroundColor: 'rgba(10,26,74,.45)', borderWidth: 3, borderColor: colors.gold, borderRadius: 999, padding: 12, paddingHorizontal: 18, marginTop: 14 },
  foundLabel: { flex: 1, fontFamily: fonts.displayBold, fontSize: 14, color: 'rgba(255,255,255,.8)' },
  foundValue: { fontFamily: fonts.display, fontSize: 18, color: colors.gold },
  verdictTitle: { fontFamily: fonts.display, fontSize: 17, color: colors.white, marginTop: 16 },
  doubtBanner: { backgroundColor: 'rgba(255,201,60,.2)', borderWidth: 2, borderColor: 'rgba(255,201,60,.6)', borderRadius: 16, padding: 14, marginTop: 12 },
  doubtText: { fontFamily: fonts.body, fontSize: 14, lineHeight: 21, color: colors.white },
});
