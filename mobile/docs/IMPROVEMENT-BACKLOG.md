# Backlog de mejora incremental — pantalla por pantalla

> Complementa `HU-BACKLOG.md` (qué se debe construir) y `SCREEN-STATUS.md`
> (qué existe). Este documento es la lista concreta de mejoras, pensada para
> tomarse **de a una por sesión** — no es un rediseño completo de una vez.
> Cada punto dice qué está mal, por qué, y qué cambiar.

## ✅ Hecho en este pase

### 1. Mapa (`02Map.tsx`) — el camino de progreso se veía roto

**Problema real:** los nodos se posicionaban con `transform: translateX(...)`
en una columna vertical de `ScrollView`, y el "conector" entre nodos era una
barra vertical recta de 5px centrada. Como los nodos están desplazados a
izquierda/derecha (zigzag tipo Duolingo) pero el conector no, la línea nunca
llegaba a tocar el borde de los círculos — se veía como un palito flotando
entre dos nodos, no como un sendero continuo.

**Cambio:** nuevo componente `components/MapPath.tsx` que dibuja el camino
con `react-native-svg` (ya estaba en `package.json`, no se agregó dependencia
nueva): una curva Bézier de tangente vertical entre el centro exacto de cada
nodo, con una segunda copia desplazada hacia abajo a modo de sombra, dándole
al camino relieve 3D consistente con los nodos (que ya usan
`borderBottomWidth` para el mismo efecto). Los nodos ahora se posicionan con
`position: absolute` sobre las mismas coordenadas que usa el SVG, así que
camino y nodos **siempre** coinciden, no dependen de ajustar `translateX` a
mano cada vez que cambia el layout.

**Bonus:** el camino ahora tiene color por tramo — verde translúcido entre
nodos ya completados, dorado hacia el nodo activo — así el trazo comunica
progreso además de los círculos.

**Pendiente de este mismo punto (no incluido en este pase):** el botón de
perfil (icono `user`, arriba a la derecha del mapa) no navega a ningún lado
— no hay pantalla de perfil (ver v1·11 en `SCREEN-STATUS.md`).

### 2. Iconos hardcodeados

- `SelectableRow.tsx` dibujaba el check de las filas seleccionadas con un
  `<Text>✓</Text>` en vez del componente `Icon` que usa el resto del app
  (`lucide-react-native`). Cambiado a `<Icon name="check" />` en los dos
  sitios (`CheckRow` y `SquareCheckRow`), y se eliminaron los estilos de
  texto que quedaron sin uso.
- `i18n/dict.ts` traía el glifo `⚠` **incrustado en el string traducido**
  de `cons.badTitle` (las 4 traducciones), duplicando el icono de alerta que
  `09Consequence.tsx` ya renderiza aparte con `<Icon name="alert">`. Se quitó
  el glifo de las 4 traducciones — el icono real hace ese trabajo.
- Revisado el resto del árbol: los demás usos de emoji son contenido real
  (texto de un mensaje de chat, un pie de foto de red social), no iconos de
  interfaz — no se tocaron.

## 🔜 Siguiente: decidir qué abre el nodo del mapa

Antes de seguir puliendo pantallas sueltas, hay una decisión de flujo que
bloquea todo lo demás (detalle completo en `SCREEN-STATUS.md`): **el nodo
activo del mapa navega a `Lobby` (la partida multijugador v2, 3–10
jugadores)**, pero según el mockup v1 ese nodo debería abrir un **caso
individual** (swipe / toca-la-evidencia, 1–2 minutos, sin esperar a otros
jugadores). Son dos juegos distintos con duración y propósito distintos.
Mientras no se resuelva esto, cualquier mejora visual al mapa es cosmética:
la app no tiene todavía un bucle de "un caso, 90 segundos, vuelvo mañana"
que es justo el que dispara la racha diaria y engancha en el corto plazo.

Recomendado para la próxima sesión, en este orden:

1. **Construir Misión 1 individual** (4 pantallas: intro de caso, swipe,
   encuentra-señales, resultado acierto/error — HU-15, mockups v1·04–08).
   Reutiliza componentes ya existentes (`Card`, `PillOption`, `Button`,
   `IconBubble`) — es ensamblaje, no diseño nuevo.
2. **Repuntear el nodo del mapa** hacia Misión 1 en vez de `Lobby`, y mover
   la entrada a la partida v2 a su propio punto (p. ej. desde `Missions`).
3. **Perfil e insignias** (HU-04, v1·11) — el botón ya existe en el mapa,
   solo falta la pantalla destino.
4. **Ligas** (HU-22, v1·10) — es la pieza de enganche semanal que más falta;
   el mockup existe en `Lupo - Cazadores de Fakes.dc.html` (sección `1a`,
   pantalla 10) pero nunca se llevó a una pantalla del app.
5. **Diagnóstico inicial** (HU-02, v1·02) y **modo texto grande** (HU-03,
   v1·12) — impactan onboarding y accesibilidad, menor urgencia que 1–4.

## 🩹 Nits concretos encontrados al revisar pantallas (para cuando se toque cada una)

- **`04Lobby.tsx`:** el contador `6 / 10` está escrito a mano en el JSX en
  vez de derivarse de `LOBBY_ORDER.length`. Hoy coincide por casualidad
  (hay 6 jugadores en `data/players.ts`); si se agrega o quita un jugador de
  ahí, el contador queda desincronizado sin que nada avise.
- **`04Lobby.tsx`:** el enlace "Perfil oculto →" bajo el botón principal
  navega directo a `RoleHidden.tsx`. Es útil como atajo de desarrollo para
  ver la pantalla, pero en el juego real un jugador nunca debería poder ver
  el rol oculto salvo que le toque a él — ese enlace deja la puerta abierta
  a que cualquiera "espíe" el rol antes de que el sistema lo reparta.
  Quitar o mover detrás de un flag de desarrollo antes de integrar el juego
  completo.
- **`16Missions.tsx`:** las tarjetas de Misión 1 y Misión 2 muestran 3
  estrellas de progreso (`mission1Stars` / `mission2Stars`), pero la tarjeta
  de Misión 3 no muestra estrellas y el store (`state/store.ts`) ni siquiera
  tiene `mission3Stars` / `mission4Stars`. Al completar Misión 3 o 4 hoy no
  queda registro de desempeño en ningún lado — se pierde en cuanto se sale
  de la pantalla de resultado. Si se van a contar como misiones reales (lo
  son, según HU-16/17/18), necesitan el mismo tratamiento de persistencia
  que 1 y 2.
- **`03NoLives.tsx`:** el botón "revisar consejos" (HU-23: "sin lupas
  siempre hay dos salidas gratuitas") hoy solo rellena un corazón y vuelve
  al mapa — no hay una pantalla de consejos real ni modo práctica detrás.
  Cumple la letra del botón pero no la historia de usuario.
