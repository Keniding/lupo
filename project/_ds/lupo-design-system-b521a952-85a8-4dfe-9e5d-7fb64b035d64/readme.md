# Lupo: Cazadores de Fakes — Design System

A gamified mobile-app design system for **Lupo**, a Duolingo-style skill-tree game where players solve real cases of phishing and fake news. The visual world is a **detective's corkboard**: clues, evidence, a magnifying glass (lupa), and red thread connecting proof. The mascot is **Lupo**, a detective owl (vigilance + wisdom).

**Audience:** all ages — children (~8+) through older adults. Large type, high contrast, simple tap/swipe mechanics, no reliance on fast reading.

**Signature element:** the *sendero de pistas* (clue trail) — the progress map is not a row of circles but a corkboard strung with red thread, each case a pinned **polaroid** photo.

## Source
Built from a single written brand/product spec (JSON) supplied in-project — no external codebase, Figma file, or repository was attached. All colors, type, scale, radii, shadows, gamification mechanics, screen list, and component inventory come from that spec. Language of the product is **Spanish (Latin American)**.

---

## CONTENT FUNDAMENTALS

**Language & voice.** All product copy is in Spanish. The tone is warm, encouraging, and playful-but-serious — a friendly detective mentor, never punitive. Address the player directly as **tú** ("¿Es real o phishing?", "Te quedaste sin lupas"). Lupo the mascot speaks in first person and calls the player *detective*.

**Casing.** Sentence case for body and most headings. Only the rubber-stamp verdicts are ALL-CAPS: **VERIFICADO / FALSO / SOSPECHOSO** — they read as ink stamps. Button labels are Title/sentence case ("Empezar la investigación", "Analizar evidencia").

**Vibe & framing.** Everything is framed as detective work: cases (*casos*), evidence (*evidencia*), clues (*pistas*), findings (*hallazgos*), leagues of detectives. Points are **Puntos de Pista (PP)**, lives are **Lupas**, the streak is the **Racha de Vigilancia**.

**Feedback copy.** On error, never shame — explain the missed signal calmly ("Se te pasó el remitente: un banco real no escribe desde un número personal"). On success, celebrate + teach in one line ("¡Buen ojo! Ese link acortado escondía el dominio real").

**Emoji.** Sparingly, and only in system surfaces like push notifications (e.g. a single 🔍). Not used inside the app UI — icons carry that job.

**Evidence text.** Anything that represents digital evidence — URLs, email senders, phone numbers, message captures — is set in **JetBrains Mono** so it reads as forensic material, with suspicious substrings tinted red.

**Examples.**
- Display: *"Aprende a detectar lo falso, un caso a la vez"*
- Case name: *"Caso #14: 'Ganaste un premio'"*
- Body: *"Casos reales de phishing y fake news, resueltos como un juego"*
- Section banner: *"Unidad 3 · Estafas por WhatsApp"*

---

## VISUAL FOUNDATIONS

**Color.** Brand blue `#3457D5` (detective) is the primary; `#233E9E` is its pressed/darker shelf. Backgrounds are mostly white `#FFFFFF` and a cool sunken `#F4F7FB`, with the signature **corkboard tan `#EFE6D8`** reserved for the case map. Gamification has a dedicated saturated palette: phishing red `#FF5A5F`, verified green `#00C48C`, XP gold `#FFC93C`, streak orange `#FF8C42`, lives pink `#FF4D6D`, suspicious amber `#F5A623`, and the evidence-thread red `#D62839`. Max 1–2 background colors per screen. Text is near-black `#1A1A2E` on light, muted `#6B7280` for secondary.

**Type.** Three families, each with a job: **Baloo 2** (rounded, chunky — display, case names, buttons, XP counters), **Inter** (reading text, descriptions, mascot dialogue), **JetBrains Mono** (digital evidence). Minimum accessible size **16px**. Scale: Display XL 32/40, Display L 24/32, Heading 20/28, Body 16/24, Caption 13/18.

**Spacing.** 8-pt-ish scale: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64. Generous padding; low information density (senior-friendly). Minimum touch target **48px**.

**Backgrounds.** Flat fills, not gradients — except two deliberate uses: the brand-blue league header and the corkboard. The corkboard uses the tan fill with a subtle dot texture (faint radial dots) to suggest cork, plus red-thread SVG and pinned polaroids. No stock photography; evidence "screenshots" are reconstructed UI, not images.

**Corners & cards.** Radii are large and friendly: buttons 20px, cards 16px, modals 24px, polaroid photos 8px, pills 999px. Cards sit on a soft resting shadow `0 2px 6px rgba(26,26,46,.08)`; pressed state drops to `0 1px 2px`. The floating mascot gets a blue glow `0 8px 20px rgba(52,87,213,.25)`. Borders are hairline (`rgba(26,26,46,.10)`) or a subtle `#E6E9F0`.

**Buttons.** Primary is a chunky brand-blue pill with a 4px darker "shelf" underneath (`0 4px 0 #233E9E`); pressing translates it down 2px and removes the shelf — a tactile, game-y press. Secondary is an outlined brand-blue pill. Disabled is flat grey `#D1D5DB`.

**Hover / press.** This is a touch product, so **press** matters more than hover: primary buttons shrink into their shadow; secondary buttons fill with the sunken grey. Where hover exists (web previews), it darkens toward `--brand-primary-dark`.

**Motion.** Motion is a *reward*, not decoration — big animations are reserved for achievement moments. Key moments: the **stamp** (VERIFICADO/FALSO punches the screen, ~200ms, overshoot easing), the **streak flame** growing with particles, the **loading lupa** spinning over a map, and **newspaper-clipping confetti** on completing a league. Everything has a reduced-motion fallback (fade + static check, no stamp/confetti). Easing favors a slight bounce (`cubic-bezier(.2,1.4,.4,1)`).

**Transparency & blur.** Used lightly: the sticky app header is white at ~82% with an 8px backdrop blur; stamp badges sit on a translucent white so the evidence shows through.

**Accessibility.** Contrast ≥ 4.5:1 text, ≥ 3:1 icons. Verified/false states **never rely on color alone** — always icon + text (check / alert triangle). Text scaling supported; a senior-friendly mode enlarges type and reduces density.

---

## ICONOGRAPHY

**Style:** rounded 2px outline, soft corners — magnifying glass, fingerprint, thread/link, lock, alert triangle, checkmark. The **magnifying glass (lupa)** is the hero icon and doubles as the lives token.

**Source:** the `Icon` component ships a curated subset of **[Lucide](https://lucide.dev)** (ISC license), whose rounded-2px outline style matches the brand spec exactly. Paths are inlined into `components/core/Icon.jsx` (no runtime dependency). If you need a glyph outside the subset, add its Lucide path to the `PATHS` map rather than hand-drawing SVG. *Substitution flag: Lucide stands in for the brand's described icon set, which had no shipped source files.*

**Emoji / unicode:** avoided inside the app; a single emoji is permitted in push-notification copy only.

**No shipped brand mark or mascot art.** The spec provided no logo or Lupo illustration files. Wherever a logo would go, the brand name is set in Baloo 2. `MascotBubble` renders an emotion-tinted **placeholder avatar** (a lupa/eye glyph) until real Lupo artwork is supplied via `mascotSrc`. **Do not** draw or reconstruct a Lupo owl from memory.

---

## Index / Manifest

**Root**
- `styles.css` — the one entry point consumers link (@import list only).
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `shadows.css`.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Foundations).
- `thumbnail.html` — homepage tile.
- `SKILL.md` — Agent-Skill wrapper.

**Components** (`window.LupoDesignSystem_b521a9`)
- `components/core/` — **Icon**, **ButtonPrimary**, **ButtonSecondary**
- `components/game/` — **PolaroidNode**, **ProgressPathThread**, **StampBadge**, **StreakFlame**, **LupasCounter**
- `components/content/` — **EvidenceCard**, **MascotBubble**

**UI kit**
- `ui_kits/lupo_app/` — interactive mobile app: Onboarding, Home Map (corkboard trail), Challenge Swipe, Feedback, Leagues, Profile. See its `README.md`.

## Caveats
- No logo or mascot artwork was provided — brand name set in type; Lupo is a placeholder avatar.
- Icons are Lucide (closest match to the described set), not the brand's own icon files.
- Fonts (Baloo 2, Inter, JetBrains Mono) load from Google Fonts — all three are exactly as specified, so no substitution.
