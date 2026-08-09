# Lupo · Cazadores de Fakes — v4 "Rebranding infantil"

React Native (Expo) implementation of the Lupo v4 rebranding mockup: a gamified,
multiplayer "hidden profile" party game that teaches kids to recognise grooming,
AI-generated media, oversharing, and unreliable news. Ported pixel-for-pixel from
the Claude Design handoff (`../Lupo v4 - Rebranding.dc.html`) with real navigation,
state, scoring and multilingual copy (ES · EN · PT · FR) wired up.

## Run it

```bash
npm install
npx expo start          # scan the QR code with Expo Go, or...
npx expo start --web    # ...open it straight in a browser
```

## What's implemented

All 24 screens from the v4 mockup, with full interactive logic (not just static
visuals):

- **01–03** — splash, level map, out-of-lives modal (hearts/PP/streak persisted
  locally via `zustand` + `AsyncStorage`).
- **04–17** — the "¿Quién está detrás?" party game: lobby, detective/hidden-profile
  role cards, chat, an A/B/C decision that actually costs a heart or awards PP,
  the grooming-pattern explainer, a 7-signal detective board, assembly, voting,
  a scored justification step (points match the design's `+40/+30/+20/+30`), the
  reveal, an AI-style report, the missions hub, and the school tournament stats.
- **18–24** — missions 2–4: tap-to-analyse AI-image zones, tap-to-redact a photo
  caption, and a 5-point news-verification checklist, each with its own verdict
  and result screen.

## Structure

```
src/
  components/   shared UI kit (Button, Card, Screen, SelectableRow, Icon, ...)
  theme/        colors + typography tokens extracted from the design system
  i18n/         ES/EN/PT/FR dictionary, ported from i18n.js / i18n-v2.js / i18n-missions.js
  state/        zustand store — the single source of truth for game state
  navigation/   React Navigation stack, one route per screen
  screens/      one file per numbered screen (01Splash.tsx … 24Mission4Result.tsx)
```

## Notes on deliberate deviations from the mockup

- The mockup is a static design-tool canvas (all 24 screens laid out side by
  side with a shared logic block); here they're wired into a real navigable
  stack instead.
- The Lupo owl mascot is still a placeholder (dashed-circle icon) — no
  illustration was provided in the design handoff.
- A few screens had no explicit "continue" button in the mockup (it's a canvas,
  not a flow); a `Continuar` action was added once the player has made a
  choice, using the `cm.continueLabel` string introduced for this purpose.
- Mission 2's zone `z4` is a deliberate decoy in the source design (gold
  highlight instead of green) — it's tappable but doesn't count toward the
  3-signal goal, matching the mockup's own visual distinction.
