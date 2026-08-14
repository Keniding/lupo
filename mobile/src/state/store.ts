import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { LangCode } from '../i18n/dict';

export type DecisionKey = 'a' | 'b' | 'c';
export type VoteKey = 'laura' | 'mateo' | 'diego' | 'valentina' | 'alex';
export type VerdictM2 = 'ai' | 'real' | 'doubt';
export type VerdictM3 = 'share' | 'edit' | 'no';
export type VerdictM4 = 'trust' | 'check' | 'false';

// Justification card order as laid out in the v4 mockup (screen 13): the
// on-screen label and the points it awards don't follow j1..j4 order —
// j3 shows the sig4 label, j4 shows the sig3 label. Kept explicit here
// instead of derived, to match the source exactly.
export const JUSTIFICATION_ITEMS: { key: 'j1' | 'j2' | 'j3' | 'j4'; sigKey: 'sig1' | 'sig2' | 'sig3' | 'sig4'; points: number }[] = [
  { key: 'j1', sigKey: 'sig1', points: 40 },
  { key: 'j2', sigKey: 'sig2', points: 30 },
  { key: 'j3', sigKey: 'sig4', points: 20 },
  { key: 'j4', sigKey: 'sig3', points: 30 },
];

export const BOARD_SIGNAL_KEYS = ['s1', 's2', 's3', 's4', 's5', 's6', 's7'] as const;
export const VOTE_KEYS: VoteKey[] = ['laura', 'mateo', 'diego', 'valentina', 'alex'];
// z4 ("background faces") is a deliberate decoy in the mission 2 mockup — it is
// tappable and gets its own gold highlight, but only z1-z3 are real AI tells and
// count toward the 3-signal goal.
export const ZONE_KEYS = ['z1', 'z2', 'z3', 'z4'] as const;
export const ZONE_SCORING_KEYS = ['z1', 'z2', 'z3'] as const;
export const REDACT_KEYS = ['r1', 'r2', 'r3', 'r4', 'r5'] as const;
export const CHECK_KEYS = ['c1', 'c2', 'c3', 'c4', 'c5'] as const;

const MAX_HEARTS = 5;

interface GameState {
  lang: LangCode;
  setLang: (l: LangCode) => void;

  hearts: number;
  pp: number;
  streak: number;
  loseHeart: () => void;
  addPP: (n: number) => void;
  refillHearts: () => void;

  decision: DecisionKey | null;
  pickDecision: (k: DecisionKey) => void;

  board: Partial<Record<(typeof BOARD_SIGNAL_KEYS)[number], boolean>>;
  toggleBoardSignal: (k: (typeof BOARD_SIGNAL_KEYS)[number]) => void;

  vote: VoteKey | null;
  pickVote: (k: VoteKey) => void;

  just: Partial<Record<'j1' | 'j2' | 'j3' | 'j4', boolean>>;
  toggleJust: (k: 'j1' | 'j2' | 'j3' | 'j4') => void;
  justScore: () => number;

  zones: Partial<Record<(typeof ZONE_KEYS)[number], boolean>>;
  toggleZone: (k: (typeof ZONE_KEYS)[number]) => void;
  zoneScore: () => number;
  m2Verdict: VerdictM2 | null;
  pickM2Verdict: (k: VerdictM2) => void;

  redact: Partial<Record<(typeof REDACT_KEYS)[number], boolean>>;
  toggleRedact: (k: (typeof REDACT_KEYS)[number]) => void;
  m3Verdict: VerdictM3 | null;
  pickM3Verdict: (k: VerdictM3) => void;

  checks: Partial<Record<(typeof CHECK_KEYS)[number], boolean>>;
  toggleCheck: (k: (typeof CHECK_KEYS)[number]) => void;
  m4Verdict: VerdictM4 | null;
  pickM4Verdict: (k: VerdictM4) => void;

  resetPartyGame: () => void;
  resetMission2: () => void;
  resetMission3: () => void;
  resetMission4: () => void;

  mission1Stars: number;
  mission2Stars: number;
  mission3Stars: number;
  mission4Stars: number;
  completeMission1: (stars: number) => void;
  completeMission2: (stars: number) => void;
  completeMission3: (stars: number) => void;
  completeMission4: (stars: number) => void;

  // Individual daily-case progress (map path / Mission 1 solo flow).
  casesSolved: number;
  casesAttempted: number;
  recordCaseAttempt: (correct: boolean) => void;

  seniorMode: boolean;
  highContrast: boolean;
  reminders: boolean;
  toggleSeniorMode: () => void;
  toggleHighContrast: () => void;
  toggleReminders: () => void;

  // First-launch intro videos. Persisted, so the clips play once and every
  // later launch goes straight to the splash.
  hasSeenIntro: boolean;
  markIntroSeen: () => void;

  // HU-05: play as a guest by default — an account is only needed to enter
  // leagues or the tournament. No backend exists yet, so this is a local
  // "is there a named profile" flag, not real authentication.
  isAuthenticated: boolean;
  userName: string | null;
  userEmail: string | null;
  login: (email: string) => void;
  register: (name: string, email: string) => void;
  logout: () => void;
}

export const useGameStore = create<GameState>()(
  persist(
    (set, get) => ({
      lang: 'es',
      setLang: (l) => set({ lang: l }),

      hearts: MAX_HEARTS,
      pp: 505,
      streak: 7,
      loseHeart: () => set((s) => ({ hearts: Math.max(0, s.hearts - 1) })),
      addPP: (n) => set((s) => ({ pp: s.pp + n })),
      refillHearts: () => set({ hearts: MAX_HEARTS }),

      decision: null,
      pickDecision: (k) => set({ decision: k }),

      board: {},
      toggleBoardSignal: (k) => set((s) => ({ board: { ...s.board, [k]: !s.board[k] } })),

      vote: null,
      pickVote: (k) => set({ vote: k }),

      just: {},
      toggleJust: (k) => set((s) => ({ just: { ...s.just, [k]: !s.just[k] } })),
      justScore: () =>
        JUSTIFICATION_ITEMS.reduce((sum, item) => (get().just[item.key] ? sum + item.points : sum), 0),

      zones: {},
      toggleZone: (k) => set((s) => ({ zones: { ...s.zones, [k]: !s.zones[k] } })),
      zoneScore: () => ZONE_SCORING_KEYS.filter((k) => get().zones[k]).length,
      m2Verdict: null,
      pickM2Verdict: (k) => set({ m2Verdict: k }),

      redact: {},
      toggleRedact: (k) => set((s) => ({ redact: { ...s.redact, [k]: !s.redact[k] } })),
      m3Verdict: null,
      pickM3Verdict: (k) => set({ m3Verdict: k }),

      checks: {},
      toggleCheck: (k) => set((s) => ({ checks: { ...s.checks, [k]: !s.checks[k] } })),
      m4Verdict: null,
      pickM4Verdict: (k) => set({ m4Verdict: k }),

      resetPartyGame: () => set({ decision: null, board: {}, vote: null, just: {} }),
      resetMission2: () => set({ zones: {}, m2Verdict: null }),
      resetMission3: () => set({ redact: {}, m3Verdict: null }),
      resetMission4: () => set({ checks: {}, m4Verdict: null }),

      mission1Stars: 3,
      mission2Stars: 2,
      mission3Stars: 0,
      mission4Stars: 0,
      completeMission1: (stars) => set((s) => ({ mission1Stars: Math.max(s.mission1Stars, stars) })),
      completeMission2: (stars) => set((s) => ({ mission2Stars: Math.max(s.mission2Stars, stars) })),
      completeMission3: (stars) => set((s) => ({ mission3Stars: Math.max(s.mission3Stars, stars) })),
      completeMission4: (stars) => set((s) => ({ mission4Stars: Math.max(s.mission4Stars, stars) })),

      casesSolved: 0,
      casesAttempted: 0,
      recordCaseAttempt: (correct) =>
        set((s) => ({
          casesAttempted: s.casesAttempted + 1,
          casesSolved: correct ? s.casesSolved + 1 : s.casesSolved,
        })),

      seniorMode: false,
      highContrast: false,
      reminders: true,
      toggleSeniorMode: () => set((s) => ({ seniorMode: !s.seniorMode })),
      toggleHighContrast: () => set((s) => ({ highContrast: !s.highContrast })),
      toggleReminders: () => set((s) => ({ reminders: !s.reminders })),

      hasSeenIntro: false,
      markIntroSeen: () => set({ hasSeenIntro: true }),

      isAuthenticated: false,
      userName: null,
      userEmail: null,
      login: (email) => set((s) => ({ isAuthenticated: true, userEmail: email, userName: s.userName ?? email.split('@')[0] })),
      register: (name, email) => set({ isAuthenticated: true, userName: name, userEmail: email }),
      logout: () => set({ isAuthenticated: false }),
    }),
    {
      name: 'lupo-game-store',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (s) => ({
        lang: s.lang,
        hearts: s.hearts,
        pp: s.pp,
        streak: s.streak,
        mission1Stars: s.mission1Stars,
        mission2Stars: s.mission2Stars,
        mission3Stars: s.mission3Stars,
        mission4Stars: s.mission4Stars,
        casesSolved: s.casesSolved,
        casesAttempted: s.casesAttempted,
        seniorMode: s.seniorMode,
        highContrast: s.highContrast,
        reminders: s.reminders,
        hasSeenIntro: s.hasSeenIntro,
        isAuthenticated: s.isAuthenticated,
        userName: s.userName,
        userEmail: s.userEmail,
      }),
    }
  )
);
