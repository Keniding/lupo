import React, { useEffect, useMemo, useRef } from 'react';
import { Animated, Easing } from 'react-native';
import Svg, { G, Path, Circle, Ellipse } from 'react-native-svg';
import { MASCOT_ART, type MascotNode } from './mascotData';

const AnimatedG = Animated.createAnimatedComponent(G);
const AnimatedEllipse = Animated.createAnimatedComponent(Ellipse);

export type MascotEmotion = 'neutral' | 'acierto' | 'error' | 'parcial';
export type MascotCharacter = 'lupo' | 'perro';

/**
 * Parts driven by a looping rotation, on top of whatever base angle the
 * emotion already bakes in. `amp` is the swing in degrees and `driver` picks
 * which loop feeds it — separate drivers running at different periods is what
 * keeps the motion from looking like one rigid puppet.
 */
const SWING: Record<string, { amp: number; driver: 'limb' | 'tail' | 'head' | 'crest' }> = {
  // Ave
  ala_izq: { amp: -8, driver: 'limb' },
  ala_der: { amp: 8, driver: 'limb' },
  cola: { amp: 7, driver: 'tail' },
  cabeza: { amp: 2.5, driver: 'head' },
  petalo_izq: { amp: -4, driver: 'crest' },
  petalo_centro: { amp: 2, driver: 'crest' },
  petalo_der: { amp: 5, driver: 'crest' },
  // Perro
  oreja_izq: { amp: -6, driver: 'limb' },
  oreja_der: { amp: 6, driver: 'limb' },
  brazo_izq: { amp: -7, driver: 'limb' },
  brazo_der: { amp: 7, driver: 'limb' },
};

// Only round eye shapes blink. The bird's `acierto` eyes are already-closed
// arcs drawn as paths, so keying on the shape kind skips them for free.
const EYE_IDS = new Set(['blanco_izq', 'blanco_der', 'pupila_izq', 'pupila_der', 'ojo_izq', 'ojo_der']);
const isBlinkable = (n: MascotNode) => !!n.id && EYE_IDS.has(n.id) && (n.kind === 'circle' || n.kind === 'ellipse');

function useLoop(period: number, delay = 0) {
  const value = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(value, { toValue: 1, duration: period, easing: Easing.inOut(Easing.sin), useNativeDriver: false }),
        Animated.timing(value, { toValue: -1, duration: period, easing: Easing.inOut(Easing.sin), useNativeDriver: false }),
      ])
    );
    const t = setTimeout(() => loop.start(), delay);
    return () => {
      clearTimeout(t);
      loop.stop();
    };
  }, [value, period, delay]);
  return value;
}

export function MascotSvg({
  character,
  emotion,
  width,
  height,
  animated,
}: {
  character: MascotCharacter;
  emotion: MascotEmotion;
  width: number;
  height: number;
  animated: boolean;
}) {
  const art = MASCOT_ART[character][emotion];

  // Co-prime-ish periods so the layers drift out of phase instead of pulsing
  // together, same principle as the outer bob/sway/breathe.
  const limb = useLoop(1450);
  const tail = useLoop(1100, 120);
  const head = useLoop(2300, 40);
  const crest = useLoop(1750, 220);
  const drivers = useMemo(() => ({ limb, tail, head, crest }), [limb, tail, head, crest]);

  // Blink: a long hold open, then a fast close/open. Driving `ry` directly
  // keeps it a plain numeric prop, which animates reliably on native and web.
  const blink = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    if (!animated) return undefined;
    const loop = Animated.loop(
      Animated.sequence([
        Animated.delay(2600),
        Animated.timing(blink, { toValue: 0.08, duration: 70, useNativeDriver: false }),
        Animated.timing(blink, { toValue: 1, duration: 90, useNativeDriver: false }),
        Animated.delay(400),
        Animated.timing(blink, { toValue: 0.08, duration: 70, useNativeDriver: false }),
        Animated.timing(blink, { toValue: 1, duration: 90, useNativeDriver: false }),
      ])
    );
    loop.start();
    return () => loop.stop();
  }, [animated, blink]);

  const renderNode = (node: MascotNode, key: string): React.ReactNode => {
    const base = node.rotate?.deg ?? 0;
    const swing = node.id ? SWING[node.id] : undefined;

    const children = node.children?.map((c, i) => renderNode(c, `${key}-${i}`));

    // Inner element, without any rotation — rotation is applied by the
    // wrapper below so the animated and static paths stay identical.
    let element: React.ReactNode;
    if (node.kind === 'g') {
      element = (
        <G key={key} fill={node.fill}>
          {children}
        </G>
      );
    } else if (node.kind === 'path') {
      element = <Path key={key} d={node.d} fill={node.fill} />;
    } else if (isBlinkable(node) && animated) {
      const rx = node.rx ?? node.r ?? 0;
      const ry = node.ry ?? node.r ?? 0;
      element = (
        <AnimatedEllipse
          key={key}
          cx={node.cx}
          cy={node.cy}
          rx={rx}
          ry={Animated.multiply(blink, ry)}
          fill={node.fill}
        />
      );
    } else if (node.kind === 'circle') {
      element = <Circle key={key} cx={node.cx} cy={node.cy} r={node.r} fill={node.fill} />;
    } else {
      element = <Ellipse key={key} cx={node.cx} cy={node.cy} rx={node.rx} ry={node.ry} fill={node.fill} />;
    }

    if (swing && animated && node.rotate) {
      const rotation = Animated.add(drivers[swing.driver].interpolate({
        inputRange: [-1, 1],
        outputRange: [-swing.amp, swing.amp],
      }), base);
      return (
        <AnimatedG key={`${key}-sw`} rotation={rotation} origin={`${node.rotate.x}, ${node.rotate.y}`}>
          {element}
        </AnimatedG>
      );
    }

    // Parts that swing but whose current emotion has no baked rotation still
    // need an origin to spin around; fall back to the art's own centre.
    if (swing && animated) {
      const ox = art.viewBox.w / 2;
      const oy = art.viewBox.h / 2;
      const rotation = drivers[swing.driver].interpolate({
        inputRange: [-1, 1],
        outputRange: [-swing.amp, swing.amp],
      });
      return (
        <AnimatedG key={`${key}-sw`} rotation={rotation} origin={`${ox}, ${oy}`}>
          {element}
        </AnimatedG>
      );
    }

    if (node.rotate) {
      return (
        <G key={`${key}-r`} rotation={base} origin={`${node.rotate.x}, ${node.rotate.y}`}>
          {element}
        </G>
      );
    }

    return element;
  };

  return (
    <Svg width={width} height={height} viewBox={`0 0 ${art.viewBox.w} ${art.viewBox.h}`}>
      {art.children.map((n, i) => renderNode(n as MascotNode, `n${i}`))}
    </Svg>
  );
}

export const MASCOT_ASPECT: Record<MascotCharacter, number> = {
  lupo: MASCOT_ART.lupo.neutral.viewBox.w / MASCOT_ART.lupo.neutral.viewBox.h,
  perro: MASCOT_ART.perro.neutral.viewBox.w / MASCOT_ART.perro.neutral.viewBox.h,
};
