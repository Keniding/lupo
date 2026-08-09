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
| 01 | Bienvenida | `01Splash.tsx` | Implementado | Selector de idioma + CTA, ahora entra por el diagnóstico (HU-01). |
| 02 | Diagnóstico de nivel | `25Diagnostic.tsx` | Implementado | 3 preguntas con progreso, saltable, sin puntos ni vidas (HU-02). |
| 03 | Mapa de casos (sendero) | `02Map.tsx` | Implementado | Camino rediseñado con `MapPath` (SVG); el nodo activo ahora abre el caso individual, no la partida v2. |
| 04 | Introducción al caso | `26CaseIntro.tsx` | Implementado | |
| 05 | Reto swipe | `27Swipe.tsx` | Implementado | Botones NO/SÍ + animación de despido de tarjeta (sin PanResponder, ver nota en el archivo). |
| 06 | Encuentra las señales (toca la evidencia) | `32FindSignals.tsx` | Implementado | Encadenada como segundo caso del día, después del resultado del swipe (acierto o error), antes de volver al mapa. |
| 07 | Resultado: acierto | `28ResultCorrect.tsx` | Implementado | |
| 08 | Resultado: error (sin castigo) | `29ResultWrong.tsx` | Implementado | Resta una lupa y explica el porqué; nunca corta el aprendizaje. |
| 09 | Sin lupas / modo práctica | `03NoLives.tsx` | Implementado | "Revisar consejos" muestra 3 consejos reales antes de otorgar la lupa; "modo práctica libre" navega a `Missions` (destino real, sin lupas de por medio). |
| 10 | Ligas de detectives | `30Leagues.tsx` | Implementado | Tabla estática (zona de ascenso/descenso + fila propia); sin backend de ligas reales. |
| 11 | Perfil e insignias | `31Profile.tsx` | Implementado | Estadísticas y 8 insignias derivadas de datos reales del store (rachas, misiones, precisión), ajustes de texto grande/alto contraste/recordatorios persistidos. |
| 12 | Modo texto grande (accesible) | — | Implementado como **modo**, no pantalla aparte | HU-03 se resolvió como un ajuste (`seniorMode` en el store + `useFontScale()`) aplicado a las pantallas de lectura de evidencia, en vez de duplicar cada pantalla en una versión grande. |

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

Las 14 pantallas están construidas y ahora el mapa ya **no** las abre por
error: el nodo activo lleva al caso individual (`26CaseIntro.tsx`), y la
partida v2 se alcanza desde el hub de Misiones (`16Missions.tsx`, tarjeta
"¿Quién está detrás?"), que es su entrada real.

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

## Resumen ejecutivo (actualizado tras la integración incremental)

- **Completo:** v2 (partida multijugador, 14/14), las misiones 2/3/4 (9/9 lógicas), y ahora también el flujo individual v1 (diagnóstico, intro de caso, swipe, resultado acierto/error, ligas, perfil).
- **Resuelto:** el mapa ya no abre la partida v2 por error — el nodo activo abre un caso individual real, y la partida multijugador tiene su propia entrada desde Misiones. La Misión 4 (antes con candado permanente sin ningún camino para desbloquearla) ahora se abre al completar la Misión 3, y sus estrellas (`mission3Stars`/`mission4Stars`) se persisten igual que las de 1 y 2.
- **Pendiente para la próxima iteración:** las ligas son una tabla estática (sin backend de puntuación real entre jugadores). HU-05 (jugar sin cuenta), HU-06 (rol docente), HU-19 (editor de contenidos) y HU-20 (modo práctica que no gasta lupas) siguen sin pantalla propia.
