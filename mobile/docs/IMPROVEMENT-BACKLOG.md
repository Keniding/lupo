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

## ✅ Hecho — sesión 3 ("encuentra las señales" ya no queda huérfana)

### 9. Mecánica de tap-en-evidencia (v1·06) conectada de punta a punta

Se había documentado como pendiente explícitamente para no construirla a
medias sin destino. Se resolvió encadenándola como el segundo caso del día:
`27Swipe.tsx` → `28ResultCorrect.tsx`/`29ResultWrong.tsx` → nueva
`32FindSignals.tsx` (email de "aduana" con 4 zonas tocables: remitente,
enlace, urgencia, firma mal escrita) → vuelta al mapa. La explicación se
revela en la misma pantalla al confirmar (mismo patrón que
`21Mission3Verdict.tsx`), sin necesitar una pantalla de resultado aparte.
Suma a `casesSolved`/`casesAttempted`, así que también alimenta las
estadísticas de `31Profile.tsx`. Si el jugador se queda sin lupas en el
swipe, sigue yendo a `NoLives` en vez de forzar el segundo caso.

## ✅ Hecho — sesión 4 (consejos reales antes de devolver la lupa)

### 10. `03NoLives.tsx` — "revisar consejos" ya no era más que un botón

Tocar el CTA rellenaba una lupa y volvía al mapa sin mostrar ningún
consejo, pese a llamarse "revisar consejos". Ahora revela 3 consejos
reales (redactados a partir de las señales que ya usan los casos: remitente
desconocido + pedir secreto, plazos de presión, y "ninguna entidad real
pide la clave completa") antes de otorgar la lupa con un botón explícito
("Listo, +1 lupa"). El modo práctica sigue yendo directo a Misiones.

## ✅ Hecho — sesión 5 (navegación sin salida + login/registro)

### 11. Ninguna pantalla tenía un botón de retorno visible

Con `headerShown: false` en todo el stack y sin toolbar en la mayoría de
las pantallas de flujo, la única forma de "volver" era el gesto nativo del
sistema (o el botón físico en Android) — sin ninguna señal visual de que
existiera, y ausente del todo en las pantallas presentadas como
`transparentModal`. Se agregó:

- `components/BackButton.tsx` + `navigation/goBack.ts` (`goBackOrHome`,
  que usa `goBack()` si hay historial y cae a `Map` si no).
- `Screen.tsx` ahora acepta `onBack` y renderiza el botón antes del resto
  del contenido; se aplicó a las 24 pantallas que usan `Screen` (todo el
  flujo v2, las misiones 2/3/4, y el flujo v1 nuevo), excepto `01Splash`
  (pantalla de entrada, no tiene "atrás" real) y `25Diagnostic` (ya tenía
  su propio botón "X" de cierre, para no duplicar).
- Pantallas de layout propio sin `Screen` (`03NoLives.tsx` como modal con
  botón de cierre en vez de flecha, `07Chat.tsx`, `17Tournament.tsx` —
  esta última ni siquiera recibía `navigation` en sus props—,
  `30Leagues.tsx`, `31Profile.tsx`) recibieron el mismo botón a mano.
  `02Map.tsx` queda sin botón de retorno a propósito: es la pantalla
  "home" del loop diario, igual que la pestaña de inicio en cualquier app
  con navegación por pestañas.

### 12. Pantallas de login y registro

No existían. Se agregaron `33Login.tsx` y `34Register.tsx` (sin backend:
guardan `isAuthenticated`/`userName`/`userEmail` local en el store,
persistido) siguiendo HU-05 ("jugar sin cuenta… la cuenta solo se pide al
entrar a ligas o torneos"):

- `01Splash.tsx` → "Ya tengo cuenta" ahora navega a `Login` (antes iba
  directo al mapa, sin pasar por ninguna pantalla de sesión).
- Entrar a Ligas (desde el mapa, perfil o el propio hub de ligas) o al
  Torneo (desde Misiones) redirige a `Login` si no hay sesión —
  `navigation/gates.ts` centraliza esa regla en vez de repetirla suelta.
  El progreso de casos nunca se bloquea: solo ligas/torneo piden cuenta.
- `31Profile.tsx` muestra el nombre real (o "Invitado" + botón de inicio
  de sesión) y un "Cerrar sesión" cuando hay cuenta activa, en vez del
  nombre "Marina Q." fijo que traía el mockup.

### Verificación de esta sesión

`npx tsc --noEmit` limpio, diff estructural de las 4 traducciones
(incluye el nuevo namespace `auth` y las claves nuevas de `nolives`/
`profile`), `expo export --platform android` compiló sin errores, y se
volvió a listar cada `navigation.navigate/replace` del árbol contra las
rutas registradas en `RootNavigator.tsx` (ninguna apunta a una ruta
inexistente).

## 🔜 Siguiente

1. **Ligas**: `30Leagues.tsx` es una tabla estática: no hay backend de
   puntuación real entre jugadores, ni distinción entre semanas, ni
   autenticación real (el login acepta cualquier correo/contraseña no
   vacíos — es un flag local, no una cuenta verificada).
2. **HU pendientes de v3** sin pantalla propia todavía: HU-06 (rol
   docente), HU-19 (editor de contenidos), HU-20 (modo práctica que no
   gasta lupas ni afecta la racha — hoy "práctica" solo redirige a
   Misiones, que sí gasta progreso normal).
