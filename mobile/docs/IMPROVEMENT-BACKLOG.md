# Backlog de mejora incremental — pantalla por pantalla

> Complementa `HU-BACKLOG.md` (qué se debe construir) y `SCREEN-STATUS.md`
> (qué existe). Este documento es la lista concreta de mejoras, tomadas
> **incrementalmente** a lo largo de varias sesiones. Cada punto dice qué
> estaba mal, por qué, y qué se cambió (o qué falta cambiar).

## ✅ Hecho — sesión 1 (auditoría + mapa + iconos)

### 1. Mapa (`02Map.tsx`) — el camino de progreso se veía roto

Los nodos se posicionaban con `transform: translateX(...)` en una columna
vertical, y el "conector" entre nodos era una barra recta que no llegaba a
tocar los círculos desplazados en zigzag. Se reemplazó por
`components/MapPath.tsx`, que dibuja el camino con `react-native-svg` (ya
estaba en `package.json`): una curva Bézier de tangente vertical entre el
centro exacto de cada nodo, con sombra 3D y color por tramo (verde en lo
completado, dorado hacia el nodo activo). Los nodos se posicionan con
`position: absolute` sobre las mismas coordenadas que el SVG, así que
camino y nodos siempre coinciden.

### 2. Iconos hardcodeados

`SelectableRow.tsx` dibujaba el check con `<Text>✓</Text>` en vez del
componente `Icon`; corregido en `CheckRow` y `SquareCheckRow`. `dict.ts`
traía un `⚠` incrustado en `cons.badTitle` que duplicaba el `<Icon
name="alert">` que la pantalla ya renderiza aparte; se quitó de las 4
traducciones.

## ✅ Hecho — sesión 2 (integración de flujos faltantes)

### 3. El mapa abría el juego equivocado

El nodo activo navegaba a `Lobby` (partida multijugador v2, 3–10
jugadores) en vez de a un caso individual — dos juegos de duración y
propósito distintos, mal conectados. Se construyó el flujo v1 que faltaba
(`25Diagnostic.tsx`, `26CaseIntro.tsx`, `27Swipe.tsx`,
`28ResultCorrect.tsx`, `29ResultWrong.tsx`) y el mapa ahora abre
`CaseIntro`. La partida v2 mantiene su propia entrada real desde el hub de
Misiones (tarjeta "¿Quién está detrás?").

### 4. Perfil, ligas y navegación inferior muertos

`BottomNav` renderizaba pestañas (`leagues`/`practice`/`profile`) sin
`onPress` en ningún lado del árbol — no navegaban a nada. El botón de
perfil del mapa tampoco navegaba. Se construyeron `30Leagues.tsx` y
`31Profile.tsx`, y `BottomNav` ahora recibe un `onNavigate` obligatorio
que cada pantalla (`Map`, `Leagues`, `Profile`) conecta a rutas reales.
Perfil muestra estadísticas e insignias derivadas de datos reales del
store (nunca decorativas), y expone los ajustes de texto grande, alto
contraste y recordatorios (persistidos).

### 5. Misión 4 tenía candado sin llave

`16Missions.tsx` mostraba la tarjeta de Misión 4 con candado permanente
("se desbloquea en el nivel 16") sin ningún camino en la app para llegar
a ese nivel — las pantallas `22/23/24Mission4*.tsx` existían pero eran
inalcanzables. Ahora se desbloquea al completar la Misión 3
(`mission3Stars > 0`), un criterio real y verificable en vez de una
promesa sin mecanismo.

### 6. Misión 3 y 4 no persistían progreso

El store solo tenía `mission1Stars`/`mission2Stars`. Se agregaron
`mission3Stars`/`mission4Stars` con sus `completeMission3`/
`completeMission4`, llamados desde `21Mission3Verdict.tsx` y
`24Mission4Result.tsx`; `16Missions.tsx` ahora muestra las estrellas de
las 4 misiones de forma consistente.

### 7. Modo texto grande — resuelto como ajuste, no como pantalla duplicada

HU-03 pedía "texto grande para leer la evidencia sin esfuerzo". En vez de
construir una pantalla-12 aparte (que hubiera duplicado cada pantalla de
lectura en dos versiones a mantener), se añadió `seniorMode` al store +
el hook `theme/useFontScale.ts`, aplicado al texto de evidencia en
`25Diagnostic.tsx` y `27Swipe.tsx`. El toggle vive en `31Profile.tsx`.

### 8. Nits de la sesión 1, cerrados

- `04Lobby.tsx`: el contador de jugadores ahora sale de
  `LOBBY_ORDER.length` en vez de estar escrito a mano.
- `04Lobby.tsx`: el enlace que abría `RoleHidden.tsx` sin contexto se
  relabeló como "Ver cómo funcionan los roles" (con traducción en los 4
  idiomas) para que quede claro que es material de referencia, no un
  espionaje del rol real asignado en la partida.

### Verificación de esta sesión

`npx tsc --noEmit` limpio; se comparó la estructura de claves de `DICT`
entre `es`/`en`/`pt`/`fr` (deben coincidir exactamente porque
`Dict = typeof DICT.es` no detecta claves faltantes en los otros
idiomas); se corrió `npx expo export --platform android`, que compiló los
~2830 módulos del árbol sin errores de resolución; y se revisó a mano que
todo `navigation.navigate(...)`/`.replace(...)` del árbol apunte a una
ruta registrada en `RootNavigator.tsx`.

## 🔜 Siguiente

1. **"Encuentra las señales"** (v1·06, mecánica de tap sobre email) sigue
   sin un caso propio asignado ni entrada en la navegación — no se
   construyó a medias para no dejar una pantalla sin conexión real.
   Necesita decidir primero a qué caso del catálogo pertenece.
2. **`03NoLives.tsx` → "revisar consejos"**: sigue siendo un atajo (rellena
   1 lupa y vuelve al mapa) sin contenido de consejos real detrás.
3. **Ligas**: `30Leagues.tsx` es una tabla estática: no hay backend de
   puntuación real entre jugadores, ni distinción entre semanas.
4. **HU pendientes de v3** sin pantalla propia todavía: HU-05 (jugar sin
   cuenta), HU-06 (rol docente), HU-19 (editor de contenidos), HU-20
   (modo práctica que no gasta lupas ni afecta la racha — hoy "práctica"
   solo redirige a Misiones, que sí gasta progreso normal).
