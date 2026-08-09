import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export type MapPathNode = {
  x: number;
  y: number;
};

/**
 * Draws a continuous winding trail through a list of node centers (Duolingo/
 * Candy-Crush style path), instead of straight connector bars that don't
 * reach nodes offset left/right. Renders as an SVG underlay so the game
 * nodes can be positioned absolutely on top of it at the same coordinates.
 */
function segmentPath(p0: MapPathNode, p1: MapPathNode): string {
  const midY = (p0.y + p1.y) / 2;
  // Vertical-tangent cubic bezier: control points sit directly above/below
  // each node, so the curve always leaves/enters a node moving straight
  // up/down and bows smoothly toward the next node's x offset.
  return `M ${p0.x} ${p0.y} C ${p0.x} ${midY}, ${p1.x} ${midY}, ${p1.x} ${p1.y}`;
}

export function buildTrailPath(nodes: MapPathNode[]): string {
  if (nodes.length < 2) return '';
  return nodes.slice(1).map((p1, i) => segmentPath(nodes[i], p1)).join(' ');
}

export type MapPathSegment = {
  from: MapPathNode;
  to: MapPathNode;
  color: string;
  dashed?: boolean;
};

/**
 * `segments` lets each leg of the trail carry its own color (e.g. green for
 * an already-cleared leg, gold for the leg leading into the active node) so
 * the path itself communicates progress, not just the node badges.
 */
export function MapPath({
  width,
  height,
  segments,
  shadowColor = 'rgba(10,26,74,.35)',
  strokeWidth = 12,
}: {
  width: number;
  height: number;
  segments: MapPathSegment[];
  shadowColor?: string;
  strokeWidth?: number;
}) {
  if (!segments.length) return null;
  return (
    <View style={{ position: 'absolute', top: 0, left: 0, width, height }} pointerEvents="none">
      <Svg width={width} height={height}>
        {/* Shadow ribbon offset down for a raised, 3D trail like the game nodes. */}
        {segments.map((seg, i) => (
          <Path
            key={`shadow-${i}`}
            d={segmentPath(seg.from, seg.to)}
            stroke={shadowColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            fill="none"
            transform={`translate(0, ${strokeWidth * 0.4})`}
          />
        ))}
        {segments.map((seg, i) => (
          <Path
            key={`line-${i}`}
            d={segmentPath(seg.from, seg.to)}
            stroke={seg.color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={seg.dashed ? `1, ${strokeWidth * 1.8}` : undefined}
            fill="none"
          />
        ))}
      </Svg>
    </View>
  );
}
