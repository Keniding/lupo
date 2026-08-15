# Visión de negocio — Lupo

> Fuente: `chats/chat1.md` (brief original del producto, 2026-07-26) y
> `docs/HU-BACKLOG.md`. Este documento resume el *por qué* del producto;
> el *qué se construye* vive en `HU-BACKLOG.md` y el *qué existe hoy* en
> `SCREEN-STATUS.md`.

## Problema

Enseñar a identificar noticias falsas, phishing y desinformación generada
por IA es, hoy, un contenido aburrido y abstracto (charlas, folletos,
capacitaciones puntuales) que no se practica con la frecuencia necesaria
para volverse un hábito. El brief original lo plantea así:

> "Un juego con gamificación que permita a personas menores como mayores
> (candy crush) mediante casos reales para educación didáctica sobre fake
> new casos como posible phishing con diseño visual tipo Duolingo, lo
> ideal sería un aplicativo móvil que dispare dopamina para su uso y
> genere enganche en los usuarios. Multilenguaje."

Una segunda vuelta del brief (aportada por una stakeholder del proyecto,
Camila UTP) lo formaliza en inglés:

> "A multilingual, gamified mobile app that teaches children, youth and
> adults how to identify fake news, phishing and AI-generated
> misinformation through short challenges based on real cases and
> verified sources. Using adaptive AI, instant feedback and
> age-appropriate learning paths, it makes media and information
> literacy simple, engaging and practical."

## Propuesta de valor

- **Casos reales, no teoría abstracta**: SMS de banco falso, "soy tu
  hijo, cambié de número" por WhatsApp, correos de paquetería/aduana,
  premios falsos, titulares sensacionalistas, deepfakes, ofertas
  laborales fraudulentas, suplantación de entidades de gobierno.
- **Feedback inmediato**: toda decisión del jugador termina en una
  explicación, acierte o falle (ver HU-15).
- **Dificultad adaptativa**: un "Game Master" de IA ajusta el nivel según
  las decisiones del jugador y su punto débil (HU-24), en vez de una
  curva de dificultad fija.
- **Accesible desde el primer minuto**: se juega sin crear cuenta; la
  cuenta solo se pide para entrar a ligas o torneos (HU-05).
- **Modo sénior**: texto grande y sin contrarreloj para adultos mayores
  (HU-03), sin fragmentar el producto en dos apps.

## Audiencia

Un único público, universal y accesible — no hay una versión separada
para niños vs. adultos. La app se diseña para que la misma experiencia
sirva desde jóvenes hasta personas mayores, con el modo sénior como
ajuste de accesibilidad más que como producto aparte.

Dos superficies de uso conviven:

- **Individual**: una persona jugando casos sueltos en cualquier momento
  (modo "candy crush", partidas cortas).
- **Grupal / aula**: partidas multijugador de 3 a 10 personas ("¿Quién
  está detrás?"), pensadas también para uso docente en sesiones de clase
  (ver HU-06 y HU-26, ambas aún pendientes de implementación).

## Mecánicas de enganche ("dopamina")

Tal como se definió en el brief, el diseño de retención se apoya en:

- Racha diaria con indicador creciente (llama).
- Ligas semanales competitivas.
- Retos contrarreloj.
- Cofres / recompensas sorpresa.
- Desafíos con amigos o familia.
- Insignias coleccionables.
- Notificaciones de reenganche.

De estas, al momento de escribir este documento, el store (`state/store.ts`)
implementa **racha** (`streak`), **puntos de progreso** (`pp`), **vidas /
"lupas"** (`hearts`) y **insignias derivadas de progreso real** (ver
`31Profile.tsx`). Ligas y torneo tienen pantalla (`30Leagues.tsx`,
`17Tournament.tsx`) pero sin backend real detrás. El resto (cofres,
desafíos entre amigos, notificaciones push) está en el backlog, no
construido — ver `IMPROVEMENT-BACKLOG.md` y `HU-BACKLOG.md` para el
estado exacto de cada pieza.

## Tono e identidad visual

- Inspiración explícita: Duolingo (progresión visual, mascota, feedback
  lúdico).
- Tono mixto: **juguetón** en las pantallas de recompensa, **sobrio** en
  las pantallas de explicación — la app no minimiza el riesgo real de una
  estafa solo por estar gamificada.
- Mascota: un búho y un perro ("Lupo") animados en SVG, con expresiones
  por resultado (acierto / error / neutral / parcial) — ver
  `03-arquitectura.md` para el detalle técnico de cómo se generan y
  animan.
- Pantallas sueltas, sin marco de dispositivo, para maximizar la
  exploración visual durante el diseño.

## Multilenguaje

Cuatro idiomas soportados desde el store de traducciones
(`src/i18n/dict.ts`): **español** (idioma por defecto), **inglés**,
**portugués** y **francés**. El selector cambia toda la copy en vivo, sin
recargar la app.

## Modelo de negocio

No hay un modelo de monetización definido ni implementado en el código
actual (sin compras, sin publicidad, sin suscripción). El proyecto, a la
fecha de este documento, está en etapa de **prueba de concepto /
prueba cerrada** en Google Play (ver `04-integraciones.md`), enfocado en
validar el producto y conseguir los verificadores mínimos que exige
Google antes de solicitar acceso a producción — no en generar ingresos.

## Rol docente (pendiente)

El brief y el backlog contemplan un rol docente separado (HU-06, HU-26)
para gestionar grupos, comparar métricas antes/después de las sesiones y
correr partidas de aula. Ninguna de las dos historias está implementada
todavía; están documentadas para que el diseño de datos y permisos las
tenga en cuenta cuando se construyan.

## Seguridad del menor

Dado que la audiencia incluye menores de edad, el backlog marca como
**bloqueantes** (deben resolverse antes de avanzar el resto de la épica
multijugador) tres puntos aún sin diseño:

- Qué pasa cuando un jugador reporta a otro durante una partida.
- Cómo un menor pide ayuda real dentro del juego sin exponerse ante el
  grupo.
- Qué datos de menores se guardan, por cuánto tiempo y quién puede verlos.

Ver la "Matriz de casos límite" en `HU-BACKLOG.md` para el detalle
completo.
