import React, { useEffect, useRef } from 'react';
import { Animated, Easing, type StyleProp, type ViewStyle } from 'react-native';
import { MascotSvg, MASCOT_ASPECT, type MascotCharacter, type MascotEmotion } from './mascot/MascotSvg';

export type { MascotCharacter, MascotEmotion };
export type MascotAnimation = 'float' | 'pop' | 'shake' | 'none';

/**
 * Lupo (bird) is the primary mascot; the dog is the secondary sidekick.
 *
 * The art is vector (see mascot/mascotData.ts, generated from the source
 * SVGs), so this renders in two layers: `MascotSvg` animates the individual
 * parts — wings, tail, ears, head tilt, crest, blink — while this wrapper
 * animates the figure as a whole.
 */
export function Mascot({
  emotion = 'neutral',
  character = 'lupo',
  animation = 'none',
  size = 180,
  style,
}: {
  emotion?: MascotEmotion;
  character?: MascotCharacter;
  animation?: MascotAnimation;
  /** Rendered height in px; width follows the art's own aspect ratio. */
  size?: number;
  style?: StyleProp<ViewStyle>;
}) {
  const bob = useRef(new Animated.Value(0)).current;
  const sway = useRef(new Animated.Value(0)).current;
  const breathe = useRef(new Animated.Value(0)).current;
  const entrance = useRef(new Animated.Value(animation === 'pop' ? 0 : 1)).current;
  const jolt = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (animation === 'none') return undefined;

    const running: Animated.CompositeAnimation[] = [];

    // Deliberately mismatched durations: the bob, sway and breath drift out
    // of phase with each other instead of pulsing in lockstep, which is what
    // separates "alive" from "mechanical".
    const idle = [
      Animated.loop(
        Animated.sequence([
          Animated.timing(bob, { toValue: 1, duration: 1500, easing: Easing.inOut(Easing.quad), useNativeDriver: true }),
          Animated.timing(bob, { toValue: 0, duration: 1500, easing: Easing.inOut(Easing.quad), useNativeDriver: true }),
        ])
      ),
      Animated.loop(
        Animated.sequence([
          Animated.timing(sway, { toValue: 1, duration: 2100, easing: Easing.inOut(Easing.sin), useNativeDriver: true }),
          Animated.timing(sway, { toValue: -1, duration: 2100, easing: Easing.inOut(Easing.sin), useNativeDriver: true }),
        ])
      ),
      Animated.loop(
        Animated.sequence([
          Animated.timing(breathe, { toValue: 1, duration: 1250, easing: Easing.inOut(Easing.quad), useNativeDriver: true }),
          Animated.timing(breathe, { toValue: 0, duration: 1250, easing: Easing.inOut(Easing.quad), useNativeDriver: true }),
        ])
      ),
    ];

    if (animation === 'pop') {
      running.push(
        Animated.parallel([
          Animated.spring(entrance, { toValue: 1, friction: 3.4, tension: 88, useNativeDriver: true }),
          Animated.sequence([
            Animated.timing(jolt, { toValue: 1, duration: 150, easing: Easing.out(Easing.quad), useNativeDriver: true }),
            Animated.timing(jolt, { toValue: -0.7, duration: 190, useNativeDriver: true }),
            Animated.timing(jolt, { toValue: 0.4, duration: 170, useNativeDriver: true }),
            Animated.timing(jolt, { toValue: 0, duration: 150, useNativeDriver: true }),
          ]),
        ])
      );
    }

    if (animation === 'shake') {
      // A firmer "no, mira otra vez" head-shake — correction, never scolding.
      running.push(
        Animated.sequence([
          Animated.timing(jolt, { toValue: 1, duration: 90, useNativeDriver: true }),
          Animated.timing(jolt, { toValue: -1, duration: 150, useNativeDriver: true }),
          Animated.timing(jolt, { toValue: 0.85, duration: 140, useNativeDriver: true }),
          Animated.timing(jolt, { toValue: -0.6, duration: 130, useNativeDriver: true }),
          Animated.timing(jolt, { toValue: 0, duration: 120, easing: Easing.out(Easing.quad), useNativeDriver: true }),
        ])
      );
    }

    running.push(...idle);
    running.forEach((a) => a.start());
    return () => running.forEach((a) => a.stop());
  }, [animation, bob, sway, breathe, entrance, jolt]);

  const width = Math.round(size * MASCOT_ASPECT[character]);
  // Motion scales with the art so a 270px splash mascot moves further than a
  // 120px inline one, instead of every size sharing the same tiny offset.
  const amplitude = size / 100;

  const translateY = bob.interpolate({ inputRange: [0, 1], outputRange: [0, -7 * amplitude] });
  const swayDeg = sway.interpolate({ inputRange: [-1, 1], outputRange: ['-2.5deg', '2.5deg'] });
  const joltDeg = jolt.interpolate({ inputRange: [-1, 1], outputRange: ['-9deg', '9deg'] });
  const breatheScale = breathe.interpolate({ inputRange: [0, 1], outputRange: [1, 1.035] });

  return (
    <Animated.View
      style={[
        {
          width,
          height: size,
          transform: [
            { translateY },
            { rotate: swayDeg },
            { rotate: joltDeg },
            { scale: entrance },
            { scale: breatheScale },
          ],
        },
        style,
      ]}
    >
      <MascotSvg
        character={character}
        emotion={emotion}
        width={width}
        height={size}
        animated={animation !== 'none'}
      />
    </Animated.View>
  );
}
