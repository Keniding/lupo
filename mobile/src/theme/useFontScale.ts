import { useGameStore } from '../state/store';

// HU-03: senior/large-text mode scales up the evidence-reading text on the
// case screens (diagnostic, case intro, swipe) without needing a separate
// duplicate screen per size.
export function useFontScale(): number {
  return useGameStore((s) => s.seniorMode) ? 1.3 : 1;
}
