import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { Screen } from '../components/Screen';
import { Card } from '../components/Card';
import { Icon } from '../components/Icon';
import { Mascot } from '../components/Mascot';
import { colors, gradients } from '../theme/colors';
import { fonts } from '../theme/typography';
import { useT } from '../i18n';
import { useFontScale } from '../theme/useFontScale';

type Props = NativeStackScreenProps<RootStackParamList, 'Diagnostic'>;

export default function DiagnosticScreen({ navigation }: Props) {
  const t = useT();
  const q = t.quiz;
  const [step, setStep] = useState(0);
  const fontScale = useFontScale();

  const questions = [
    { sender: q.q1Sender, handle: q.q1Handle, body: q.q1Body },
    { sender: q.q2Sender, handle: q.q2Handle, body: q.q2Body },
    { sender: q.q3Sender, handle: q.q3Handle, body: q.q3Body },
  ];
  const current = questions[step];

  const advance = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      navigation.navigate('Map');
    }
  };

  return (
    <Screen colors={gradients.splash} style={{ paddingTop: 16 }}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate('Map')} hitSlop={10}>
          <Icon name="x" size={24} color="rgba(255,255,255,.8)" />
        </Pressable>
        <View style={styles.dots}>
          {questions.map((_, i) => (
            <View key={i} style={[styles.dot, i <= step && styles.dotActive]} />
          ))}
        </View>
        <View style={{ width: 24 }} />
      </View>

      <Text style={styles.kicker}>{q.kicker}</Text>
      <Text style={styles.question}>{q.q}</Text>

      <Card style={{ marginTop: 18 }}>
        <View style={styles.evHeader}>
          <Text style={styles.evSender}>{current.sender}</Text>
          <Text style={styles.evHandle}>{current.handle}</Text>
        </View>
        <Text style={[styles.evBody, { fontSize: 15 * fontScale, lineHeight: 22 * fontScale }]}>{current.body}</Text>
      </Card>

      <View style={styles.thinkWrap}>
        <Mascot emotion="parcial" animation="float" size={132} />
      </View>

      <Text style={styles.note}>{q.note}</Text>
      <Pressable style={styles.option} onPress={advance}>
        <Text style={styles.optionText}>{q.real}</Text>
      </Pressable>
      <Pressable style={styles.option} onPress={advance}>
        <Text style={styles.optionText}>{q.phish}</Text>
      </Pressable>
      <Pressable style={styles.skip} onPress={() => navigation.navigate('Map')}>
        <Text style={styles.skipText}>{q.skip}</Text>
      </Pressable>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  dots: { flex: 1, flexDirection: 'row', gap: 7, justifyContent: 'center' },
  dot: { width: 30, height: 8, borderRadius: 999, backgroundColor: 'rgba(255,255,255,.25)' },
  dotActive: { backgroundColor: colors.gold },
  kicker: { fontFamily: fonts.display, fontSize: 12, letterSpacing: 1.6, textTransform: 'uppercase', color: 'rgba(255,255,255,.65)', marginTop: 20 },
  question: { fontFamily: fonts.display, fontSize: 22, lineHeight: 29, color: colors.white, marginTop: 8 },
  evHeader: { gap: 3, marginBottom: 10 },
  evSender: { fontFamily: fonts.bodyBold, fontSize: 14, color: colors.ink },
  evHandle: { fontFamily: fonts.evidenceRegular, fontSize: 12, color: colors.inkMuted },
  evBody: { fontFamily: fonts.body, fontSize: 15, lineHeight: 22, color: colors.ink },
  // Takes over the old flex spacer between the evidence card and the answers,
  // so the mascot absorbs the slack instead of leaving a dead gap.
  thinkWrap: { flex: 1, alignItems: 'center', justifyContent: 'center', minHeight: 132, paddingVertical: 8 },
  note: { fontFamily: fonts.body, fontSize: 13, lineHeight: 19, color: 'rgba(255,255,255,.65)', textAlign: 'center', marginBottom: 10 },
  option: { backgroundColor: 'rgba(255,255,255,.08)', borderWidth: 2, borderColor: 'rgba(255,255,255,.35)', borderBottomWidth: 4, borderRadius: 16, paddingVertical: 17, alignItems: 'center', marginBottom: 12, minHeight: 48, justifyContent: 'center' },
  optionText: { fontFamily: fonts.display, fontSize: 17, color: colors.white },
  skip: { alignItems: 'center', paddingVertical: 10 },
  skipText: { fontFamily: fonts.bodySemibold, fontSize: 14, color: 'rgba(255,255,255,.6)' },
});
