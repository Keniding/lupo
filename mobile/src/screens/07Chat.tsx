import React from 'react';
import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { colors } from '../theme/colors';
import { fonts } from '../theme/typography';
import { useT } from '../i18n';

type Props = NativeStackScreenProps<RootStackParamList, 'Chat'>;

function Bubble({ from, text }: { from: string; text: string }) {
  return (
    <View style={styles.bubbleWrap}>
      <Text style={styles.from}>{from}</Text>
      <View style={styles.bubbleIn}>
        <Text style={styles.bubbleText}>{text}</Text>
      </View>
    </View>
  );
}

export default function ChatScreen({ navigation }: Props) {
  const t = useT();
  const v = t.v2;

  return (
    <LinearGradient colors={['#E6ECFA', '#E6ECFA']} style={styles.flex}>
      <SafeAreaView style={styles.flex} edges={['top', 'bottom']}>
        <LinearGradient colors={[colors.skyBlue, colors.navyMid]} style={styles.header}>
          <View style={styles.avatar}>
            <Text style={styles.avatarLabel}>6</Text>
          </View>
          <View style={{ flex: 1, gap: 3 }}>
            <Text style={styles.roomName}>{v.chat.room}</Text>
            <Text style={styles.members}>{v.chat.members}</Text>
          </View>
          <View style={styles.phasePill}>
            <Text style={styles.phaseText}>{v.chat.phase}</Text>
          </View>
        </LinearGradient>

        <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.messages}>
          <Bubble from="Mateo" text="¡Hola! A mí también me gustan los videojuegos 🎮" />
          <Bubble from="Alex" text="Yo tengo 10 años. Cuando estaba en la universidad jugaba mucho a eso." />
          <View style={styles.myBubble}>
            <Text style={styles.myBubbleText}>¿Qué juego te gusta más?</Text>
          </View>
          <Bubble from="Alex" text="Dime primero dónde estudias tú 😊" />
          <Bubble from="Alex" text="No le digas a los demás que hablamos." />
          <Text style={styles.typing}>{v.chat.typing}</Text>
        </ScrollView>

        <View style={styles.footer}>
          <Text style={styles.footerLabel}>{v.chat.ask}</Text>
          <View style={styles.chips}>
            {[v.chat.q1, v.chat.q2, v.chat.q3].map((q) => (
              <Pressable key={q} style={styles.chip} onPress={() => navigation.navigate('Decision')}>
                <Text style={styles.chipText}>{q}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  header: { flexDirection: 'row', alignItems: 'center', gap: 12, padding: 16 },
  avatar: { width: 42, height: 42, borderRadius: 999, backgroundColor: 'rgba(255,255,255,.2)', borderWidth: 2, borderColor: 'rgba(255,255,255,.5)', alignItems: 'center', justifyContent: 'center' },
  avatarLabel: { fontFamily: fonts.display, fontSize: 15, color: colors.white },
  roomName: { fontFamily: fonts.display, fontSize: 17, color: colors.white },
  members: { fontFamily: fonts.body, fontSize: 12, color: 'rgba(255,255,255,.8)' },
  phasePill: { backgroundColor: colors.gold, borderRadius: 999, paddingVertical: 8, paddingHorizontal: 11 },
  phaseText: { fontFamily: fonts.display, fontSize: 11, color: colors.ink },
  messages: { padding: 16, gap: 12 },
  bubbleWrap: { alignSelf: 'flex-start', maxWidth: '82%', gap: 4 },
  from: { fontFamily: fonts.display, fontSize: 11, color: colors.slate, paddingLeft: 4 },
  bubbleIn: { backgroundColor: colors.white, borderRadius: 18, borderTopLeftRadius: 6, padding: 13 },
  bubbleText: { fontFamily: fonts.body, fontSize: 15, lineHeight: 22, color: colors.ink },
  myBubble: { alignSelf: 'flex-end', maxWidth: '78%', backgroundColor: colors.green, borderRadius: 18, borderTopRightRadius: 6, padding: 13 },
  myBubbleText: { fontFamily: fonts.body, fontSize: 15, lineHeight: 22, color: colors.white },
  typing: { alignSelf: 'flex-start', fontFamily: fonts.bodyMedium, fontSize: 13, color: colors.slate, paddingLeft: 6 },
  footer: { backgroundColor: colors.white, paddingHorizontal: 16, paddingTop: 14, paddingBottom: 22, gap: 10 },
  footerLabel: { fontFamily: fonts.display, fontSize: 11, letterSpacing: 1.4, textTransform: 'uppercase', color: colors.slate },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  chip: { backgroundColor: colors.cardBgAlt, borderRadius: 999, paddingVertical: 12, paddingHorizontal: 16, minHeight: 44, alignItems: 'center', justifyContent: 'center' },
  chipText: { fontFamily: fonts.bodySemibold, fontSize: 13, color: colors.ink },
});
