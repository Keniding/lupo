import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View, Text, Pressable, StyleSheet, useWindowDimensions } from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';
import { useEventListener } from 'expo';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { Icon } from '../components/Icon';
import { colors } from '../theme/colors';
import { fonts } from '../theme/typography';
import { useT } from '../i18n';
import { useGameStore } from '../state/store';

type Props = NativeStackScreenProps<RootStackParamList, 'Intro'>;

const CLIPS = [
  require('../../assets/videos/intro-1.mp4'),
  require('../../assets/videos/intro-2.mp4'),
];

// The clips were cropped to their real content box (see assets/videos):
// portrait 540x954, no baked-in letterboxing.
const VIDEO_W = 540;
const VIDEO_H = 954;

export default function IntroScreen({ navigation }: Props) {
  const t = useT();
  const markIntroSeen = useGameStore((s) => s.markIntroSeen);
  const [index, setIndex] = useState(0);
  const leaving = useRef(false);
  const { width, height } = useWindowDimensions();

  // Scale the clip to the largest size that fits the viewport whole, rather
  // than cropping to fill it. On a phone this is near full-bleed; on a wide
  // desktop window it centres instead of zooming in and cutting off half the
  // frame. The surround is the app's own navy, which is within a few shades
  // of the clip's background, so the fit reads as deliberate, not letterboxed.
  const scale = Math.min(width / VIDEO_W, height / VIDEO_H);
  const videoStyle = { width: Math.round(VIDEO_W * scale), height: Math.round(VIDEO_H * scale) };

  // Created once from the first clip and kept for both; the effect below is
  // the single place that loads and starts a clip. Passing CLIPS[index] here
  // as well would race that effect with a second source load.
  // Always silent: the clips carry no needed audio, and staying muted also
  // sidesteps the browser autoplay-with-sound block on web.
  const player = useVideoPlayer(CLIPS[0], (p) => {
    p.muted = true;
  });

  const finish = useCallback(() => {
    if (leaving.current) return;
    leaving.current = true;
    markIntroSeen();
    // On first launch Intro is the initial route, so there is nothing to go
    // back to and the app continues into the splash. When replayed from the
    // profile there is, and the player returns where they came from.
    if (navigation.canGoBack()) navigation.goBack();
    else navigation.replace('Splash');
  }, [markIntroSeen, navigation]);

  const advance = useCallback(() => {
    if (index < CLIPS.length - 1) {
      setIndex((i) => i + 1);
    } else {
      finish();
    }
  }, [index, finish]);

  // `playToEnd` is the only reliable end-of-clip signal; polling currentTime
  // races with buffering on slower devices.
  useEventListener(player, 'playToEnd', advance);

  // Swapping the source keeps one player instance alive across both clips
  // instead of mounting a second <VideoView>, which would flash black.
  //
  // `currentTime` is reset explicitly: replacing the source does not reliably
  // rewind, so without this the second clip inherits the playhead from the
  // end of the first and starts most of the way through it.
  useEffect(() => {
    player.replace(CLIPS[index]);
    player.currentTime = 0;
    player.muted = true;
    player.play();
  }, [index, player]);

  return (
    <View style={styles.root}>
      <VideoView
        player={player}
        style={videoStyle}
        contentFit="contain"
        nativeControls={false}
      />

      <SafeAreaView style={styles.overlay} edges={['top', 'bottom']} pointerEvents="box-none">
        <View style={styles.bottomRow}>
          <View style={styles.dots}>
            {CLIPS.map((_, i) => (
              <View key={i} style={[styles.dot, i === index && styles.dotActive]} />
            ))}
          </View>
          <Pressable style={styles.skipBtn} onPress={finish} hitSlop={10}>
            <Text style={styles.skipText}>{t.cm.skipIntro}</Text>
            <Icon name="chevronRight" size={18} color={colors.ink} />
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.bgDeep, alignItems: 'center', justifyContent: 'center' },
  overlay: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'flex-end', paddingHorizontal: 18 },
  bottomRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 10, gap: 12 },
  dots: { flexDirection: 'row', gap: 7 },
  dot: { width: 26, height: 6, borderRadius: 999, backgroundColor: 'rgba(255,255,255,.45)' },
  dotActive: { backgroundColor: colors.gold },
  skipBtn: {
    flexDirection: 'row', alignItems: 'center', gap: 6,
    backgroundColor: colors.white, borderRadius: 999,
    paddingVertical: 13, paddingHorizontal: 20, minHeight: 48,
    borderBottomWidth: 4, borderBottomColor: colors.border,
  },
  skipText: { fontFamily: fonts.display, fontSize: 15, color: colors.ink },
});
