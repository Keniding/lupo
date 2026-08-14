import React, { useRef, useState } from 'react';
import { View, Text, Animated, Pressable, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { Screen } from '../components/Screen';
import { goBackOrHome } from '../navigation/goBack';
import { Icon } from '../components/Icon';
import { Mascot } from '../components/Mascot';
import { colors, gradients } from '../theme/colors';
import { fonts } from '../theme/typography';
import { useT } from '../i18n';
import { useGameStore } from '../state/store';
import { useFontScale } from '../theme/useFontScale';

type Props = NativeStackScreenProps<RootStackParamList, 'Swipe'>;

// The mockup pairs a drag gesture with two always-available buttons (NO /
// SÍ) as the accessible, non-gesture-dependent way to answer — this screen
// implements that button path plus a lightweight fling animation, rather
// than a full PanResponder drag, to keep the interaction reliable without a
// device to feel-test the gesture on.
export default function SwipeScreen({ navigation }: Props) {
  const t = useT();
  const swipe = t.swipe;
  const recordCaseAttempt = useGameStore((s) => s.recordCaseAttempt);
  const loseHeart = useGameStore((s) => s.loseHeart);
  const addPP = useGameStore((s) => s.addPP);
  const [answered, setAnswered] = useState<'no' | 'yes' | null>(null);
  const fling = useRef(new Animated.Value(0)).current;
  const fade = useRef(new Animated.Value(1)).current;
  const fontScale = useFontScale();

  const answer = (choice: 'no' | 'yes') => {
    if (answered) return;
    setAnswered(choice);
    const correct = choice === 'no'; // this case is an impersonation attempt
    recordCaseAttempt(correct);
    if (correct) addPP(30);
    else loseHeart();

    Animated.parallel([
      Animated.timing(fling, { toValue: choice === 'no' ? -420 : 420, duration: 260, useNativeDriver: true }),
      Animated.timing(fade, { toValue: 0, duration: 220, useNativeDriver: true }),
    ]).start(() => {
      navigation.replace(correct ? 'ResultCorrect' : 'ResultWrong');
    });
  };

  return (
    <Screen onBack={() => goBackOrHome(navigation)} colors={gradients.decision} style={{ paddingTop: 10 }}>
      <View style={styles.header}>
        <Text style={styles.kicker}>{swipe.kicker}</Text>
        <View style={styles.timer}>
          <Icon name="clock" size={16} color={colors.gold} />
          <Text style={styles.timerText}>{swipe.timer}</Text>
        </View>
      </View>

      <View style={styles.stage}>
        <Animated.View
          style={[
            styles.card,
            {
              opacity: fade,
              transform: [
                { translateX: fling },
                { rotate: fling.interpolate({ inputRange: [-420, 0, 420], outputRange: ['-14deg', '0deg', '14deg'] }) },
              ],
            },
          ]}
        >
          <View style={styles.evHeader}>
            <Text style={[styles.evSender, { fontSize: 16 * fontScale }]}>{swipe.sender}</Text>
            <Text style={styles.evHandle}>{swipe.handle}</Text>
            <Text style={styles.evTime}>{swipe.time}</Text>
          </View>
          <Text style={[styles.evBody, { fontSize: 16 * fontScale, lineHeight: 24 * fontScale }]}>{swipe.body}</Text>
        </Animated.View>

        {/* Lupo weighs the evidence alongside the player: the skeptical face
            is the "thinking" beat, and it stays put when the card flings. */}
        <Mascot emotion="parcial" animation="float" size={156} style={{ marginTop: 24 }} />
      </View>

      <Text style={styles.prompt}>{swipe.prompt}</Text>
      <View style={styles.actions}>
        <Pressable style={styles.noBtn} onPress={() => answer('no')} disabled={!!answered}>
          <Icon name="alert" size={22} color={colors.red} />
          <Text style={[styles.actionText, { color: colors.red }]}>{swipe.no}</Text>
        </Pressable>
        <Pressable style={styles.yesBtn} onPress={() => answer('yes')} disabled={!!answered}>
          <Icon name="check" size={22} color={colors.green} />
          <Text style={[styles.actionText, { color: colors.green }]}>{swipe.yes}</Text>
        </Pressable>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  kicker: { fontFamily: fonts.display, fontSize: 11, letterSpacing: 1.6, textTransform: 'uppercase', color: 'rgba(255,255,255,.65)' },
  timer: { flexDirection: 'row', alignItems: 'center', gap: 5 },
  timerText: { fontFamily: fonts.displayBold, fontSize: 13, color: colors.gold },
  stage: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  card: { width: '100%', maxWidth: 320, backgroundColor: colors.white, borderRadius: 22, padding: 20, gap: 12 },
  evHeader: { flexDirection: 'row', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' },
  evSender: { fontFamily: fonts.bodyBold, fontSize: 16, color: colors.ink },
  evHandle: { fontFamily: fonts.evidenceRegular, fontSize: 12, color: colors.inkMuted },
  evTime: { fontFamily: fonts.evidenceRegular, fontSize: 12, color: colors.inkMuted, marginLeft: 'auto' },
  evBody: { fontFamily: fonts.body, fontSize: 16, lineHeight: 24, color: colors.ink },
  prompt: { fontFamily: fonts.bodySemibold, fontSize: 14, color: 'rgba(255,255,255,.75)', textAlign: 'center', marginBottom: 10 },
  actions: { flexDirection: 'row', gap: 12, paddingBottom: 6 },
  noBtn: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, backgroundColor: colors.white, borderWidth: 3, borderColor: colors.red, borderRadius: 16, paddingVertical: 17, minHeight: 48 },
  yesBtn: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, backgroundColor: colors.white, borderWidth: 3, borderColor: colors.green, borderRadius: 16, paddingVertical: 17, minHeight: 48 },
  actionText: { fontFamily: fonts.display, fontSize: 15, letterSpacing: 0.5 },
});
