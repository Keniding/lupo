# Inventario de pantallas — mockup (v1/v2/v3) vs. app React Native

> Cruce entre las 35 pantallas de mockup de `project/Lupo - Cazadores de
> Fakes.dc.html` (v1 + v2 + misiones v3) y las 24 pantallas ya implementadas
> en `mobile/src/screens/`. Objetivo: que quede explícito qué flujos del
> diseño **todavía no existen en el app**, en vez de descubrirlo pantalla a
> pantalla cada vez.
>
> Estado: **Implementado** (la pantalla existe y navega) · **Parcial** (existe
> pero el flujo real que describe la HU no está completo) · **Pendiente**
> (no existe ninguna pantalla ni mockup, o el mockup existe pero no se
> construyó en el app).

## v1 · Flujo individual (12 pantallas del mockup `1a`)

| # | Mockup | Pantalla del app | Estado | Nota |
|---|---|---|---|---|
| 01 | Bienvenida | `01Splash.tsx` | Implementado | Selector de idioma + CTA. Cubre HU-01. |
| 02 | Diagnóstico de nivel | — | **Pendiente** | HU-02. No hay pantalla ni navegación hacia ella. |
| 03 | Mapa de casos (sendero) | `02Map.tsx` | Implementado | Camino rediseñado en este pase (ver `IMPROVEMENT-BACKLOG.md`). |
| 04 | Introducción al caso | — | **Pendiente** | Tarjeta previa a un caso individual. |
| 05 | Reto swipe | — | **Pendiente** | HU-15 (mitad). El nodo "14" del mapa navega directo a `Lobby` (partida v2), no a un caso individual — ese flujo no tiene destino real todavía. |
| 06 | Encuentra las señales (toca la evidencia) | — | **Pendiente** | HU-15 (mitad). |
| 07 | Resultado: acierto | — | **Pendiente** | |
| 08 | Resultado: error (sin castigo) | — | **Pendiente** | |
| 09 | Sin lupas / modo práctica | `03NoLives.tsx` | Parcial | Existe la hoja de "sin lupas", pero el CTA "revisar consejos" (HU-23) solo rellena un corazón y vuelve al mapa — no hay pantalla real de consejos ni modo práctica. |
| 10 | Ligas de detectives | — | **Pendiente** | HU-22. Sin esto no hay bucle de enganche semanal (dopamina) más allá de la racha. |
| 11 | Perfil e insignias | — | **Pendiente** | HU-04. El botón de perfil en `02Map.tsx` (icono `user`) no navega a ningún lado. |
| 12 | Modo texto grande (accesible) | — | **Pendiente** | HU-03. Sin esto el modo sénior mencionado en el diagnóstico original de producto no existe. |

## v2 · Partida «¿Quién está detrás?» (14 pantallas del mockup `2a`)

| # | Mockup | Pantalla del app | Estado |
|---|---|---|---|
| 01 | Sala de partida | `04Lobby.tsx` | Implementado |
| 02 | Tu rol: detective | `05RoleDetective.tsx` | Implementado |
| 03 | Perfil oculto | `06RoleHidden.tsx` | Implementado |
| 04 | Sala de conversación | `07Chat.tsx` | Implementado |
| 05 | Decisión | `08Decision.tsx` | Implementado |
| 06 | Consecuencia + explicación | `09Consequence.tsx` | Implementado |
| 07 | Tablero del detective | `10Board.tsx` | Implementado |
| 08 | Asamblea | `11Assembly.tsx` | Implementado |
| 09 | Votación | `12Vote.tsx` | Implementado |
| 10 | Justificación puntuada | `13Justification.tsx` | Implementado |
| 11 | Revelación y aprendizaje | `14Reveal.tsx` | Implementado |
| 12 | Reporte personalizado (IA) | `15Report.tsx` | Parcial — layout fijo, no hay Game Master IA real detrás (HU-24/25 son de sistema, no de UI). |
| 13 | Misiones y Game Master IA | `16Missions.tsx` | Implementado (como selector de misiones; sin adaptación de dificultad real). |
| 14 | Torneo escolar y medición | `17Tournament.tsx` | Parcial — UI existe, HU-26 (medición antes/después) necesita datos reales de dos sesiones. |

Todas las 14 pantallas están construidas, pero el **flujo de entrada** solo
se alcanza tocando el nodo del mapa (que en teoría debería abrir un caso
individual de Misión 1, no la partida completa) — ver nota en v1·05 arriba.
Es la integración de flujos que falta, no las pantallas sueltas.

## v3 · Misiones de contenido (mockups `3a`/`3b`/`3c`)

| Misión | Mockup | Pantalla del app | Estado |
|---|---|---|---|
| M2 · ¿Real o generado? | 01 Briefing | — | Fusionado con la 02 en `18Mission2Evidence.tsx` |
| M2 | 02 Análisis por zonas | `18Mission2Evidence.tsx` | Implementado |
| M2 | 03 Resultado | `19Mission2Result.tsx` | Implementado |
| M3 · ¿Compartirías esto? | 01 Briefing | — | Fusionado con la 02 en `20Mission3Redact.tsx` |
| M3 | 02 Oculta los datos | `20Mission3Redact.tsx` | Implementado |
| M3 | 03 Veredicto y resultado | `21Mission3Verdict.tsx` | Implementado |
| M4 · ¿Confías en esta noticia? | 01 Briefing y evidencia | `22Mission4Evidence.tsx` | Implementado |
| M4 | 02 Verificación 5 puntos | `23Mission4Verification.tsx` | Implementado |
| M4 | 03 Resultado y contraste | `24Mission4Result.tsx` | Implementado |

Las tres misiones de contenido están completas de punta a punta y son el
tramo mejor cubierto del app.

## Resumen ejecutivo

- **Completo:** v2 (partida multijugador, 14/14) y las misiones 2/3/4 (9/9 lógicas, fusionando briefings).
- **Roto por integración, no por pantallas:** el mapa (`02Map.tsx`) debería llevar a Misión 1 (casos individuales swipe/tap) y actualmente lleva a la partida v2 completa — son juegos distintos con distinta duración (un caso individual = 1–2 min; una partida v2 = una sesión larga con 3–10 jugadores). Esto es probablemente la causa raíz de por qué "faltan integrar flujos": **la pieza que falta no es una pantalla nueva, es decidir qué juego abre cada nodo del mapa** y construir las 8 pantallas de v1 que hacen falta para que Misión 1 exista de verdad.
- **Ausente por completo:** diagnóstico inicial (HU-02), Misión 1 individual (HU-15, 4 pantallas), ligas (HU-22), perfil e insignias (HU-04), modo texto grande / sénior (HU-03). Estas cinco piezas son las que más impactan el enganche diario (dopamina) descrito en el brief original del producto, y ninguna tiene aún ni mockup construido más allá del que ya existía en v1.
