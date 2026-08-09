import React, { useRef, useState } from 'react';
import { View, Text, Pressable, ScrollView, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { Screen } from '../components/Screen';
import { goBackOrHome } from '../navigation/goBack';
import { Button } from '../components/Button';
import { Icon } from '../components/Icon';
import { colors, gradients } from '../theme/colors';
import { fonts } from '../theme/typography';
import { useT } from '../i18n';
import { useGameStore } from '../state/store';

type Props = NativeStackScreenProps<RootStackParamList, 'FindSignals'>;
type SpanKey = 'sender' | 'link' | 'urgency' | 'signature';
const SPAN_KEYS: SpanKey[] = ['sender', 'link', 'urgency', 'signature'];

function Span({ text, found, onPress, style }: { text: string; found: boolean; onPress: () => void; style?: object }) {
  return (
    <Pressable
      onPress={onPress}
      hitSlop={{ top: 14, bottom: 14, left: 6, right: 6 }}
      style={[styles.span, found && styles.spanFound, style]}
    >
      <Text style={[styles.spanText, found && styles.spanTextFound]}>{text}</Text>
    </Pressable>
  );
}

export default function FindSignalsScreen({ navigation }: Props) {
  const t = useT();
  const fl = t.flags;
  const [found, setFound] = useState<Record<SpanKey, boolean>>({ sender: false, link: false, urgency: false, signature: false });
  const [revealed, setRevealed] = useState(false);
  const addPP = useGameStore((s) => s.addPP);
  const recordCaseAttempt = useGameStore((s) => s.recordCaseAttempt);
  const applied = useRef(false);

  const count = SPAN_KEYS.filter((k) => found[k]).length;

  const toggle = (k: SpanKey) => setFound((s) => ({ ...s, [k]: !s[k] }));

  const confirm = () => {
    setRevealed(true);
    if (!applied.current) {
      applied.current = true;
      addPP(count * 10);
      recordCaseAttempt(count === SPAN_KEYS.length);
    }
  };

  return (
    <Screen onBack={() => goBackOrHome(navigation)} colors={gradients.decision} scroll>
      <Text style={styles.kicker}>{fl.kicker}</Text>
      <Text style={styles.prompt}>{fl.prompt}</Text>

      <View style={styles.email}>
        <View style={styles.emailHeader}>
          <Text style={styles.emailTitle}>{fl.title}</Text>
          <View style={styles.row}>
            <Text style={styles.emailFrom}>de: </Text>
            <Span text={fl.sender} found={found.sender} onPress={() => toggle('sender')} />
          </View>
        </View>
        <View style={styles.emailBody}>
          <Text style={styles.subject}>{fl.subject}</Text>
          <Text style={styles.body}>{fl.body}</Text>
          <Span text={fl.link} found={found.link} onPress={() => toggle('link')} style={styles.linkSpan} />
          <Span text={fl.urgency} found={found.urgency} onPress={() => toggle('urgency')} style={styles.urgencySpan} />
          <View style={styles.row}>
            <Text style={styles.body}>Atentamente, </Text>
            <Span text={fl.signature} found={found.signature} onPress={() => toggle('signature')} />
          </View>
        </View>
      </View>

      <View style={styles.counter}>
        <Icon name="target" size={20} color={colors.blue} />
        <Text style={styles.counterLabel}>{fl.counter}</Text>
        <Text style={styles.counterValue}>{count}/4</Text>
      </View>

      {revealed && (
        <View style={styles.whyBox}>
          <Text style={styles.whyText}>{fl.why}</Text>
        </View>
      )}

      <View style={{ flex: 1, minHeight: 14 }} />
      {revealed ? (
        <Button label={fl.next} variant="primary" onPress={() => navigation.navigate('Map')} />
      ) : (
        <Button label={fl.confirm} variant="primary" disabled={count < SPAN_KEYS.length} onPress={confirm} />
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  kicker: { fontFamily: fonts.display, fontSize: 11, letterSpacing: 1.6, textTransform: 'uppercase', color: 'rgba(255,255,255,.65)' },
  prompt: { fontFamily: fonts.display, fontSize: 20, lineHeight: 27, color: colors.white, marginTop: 8 },
  email: { backgroundColor: colors.white, borderRadius: 20, overflow: 'hidden', marginTop: 16, borderWidth: 1, borderColor: colors.border },
  emailHeader: { backgroundColor: colors.cardBg, padding: 13, gap: 4 },
  emailTitle: { fontFamily: fonts.bodySemibold, fontSize: 14, color: colors.ink },
  emailFrom: { fontFamily: fonts.evidenceRegular, fontSize: 12, color: colors.inkMuted },
  emailBody: { padding: 14, gap: 12 },
  subject: { fontFamily: fonts.displayBold, fontSize: 16, lineHeight: 22, color: colors.ink },
  body: { fontFamily: fonts.body, fontSize: 15, lineHeight: 22, color: colors.ink },
  row: { flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' },
  linkSpan: { alignSelf: 'flex-start' },
  urgencySpan: { alignSelf: 'flex-start' },
  span: { borderRadius: 6, paddingHorizontal: 4, paddingVertical: 2, backgroundColor: 'rgba(26,26,46,.05)' },
  spanFound: { backgroundColor: 'rgba(76,201,59,.2)', borderWidth: 2, borderColor: colors.green },
  spanText: { fontFamily: fonts.evidenceRegular, fontSize: 13, color: colors.blue },
  spanTextFound: { color: colors.greenShadow },
  counter: { flexDirection: 'row', alignItems: 'center', gap: 10, backgroundColor: colors.white, borderRadius: 999, paddingVertical: 12, paddingHorizontal: 18, marginTop: 16 },
  counterLabel: { flex: 1, fontFamily: fonts.bodySemibold, fontSize: 14, color: colors.inkMuted },
  counterValue: { fontFamily: fonts.display, fontSize: 16, color: colors.blue },
  whyBox: { backgroundColor: 'rgba(10,26,74,.5)', borderWidth: 3, borderColor: colors.gold, borderRadius: 20, padding: 17, marginTop: 14 },
  whyText: { fontFamily: fonts.body, fontSize: 14, lineHeight: 21, color: colors.white },
});
