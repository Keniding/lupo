# Backlog de producto — Historias de usuario (portado de v3)

> Fuente: `project/Lupo - Cazadores de Fakes.dc.html`, secciones `3d` (backlog) y `3e`
> (matriz de casos límite). Ese archivo es el handoff de Claude Design de las
> versiones v1/v2/v3 del prototipo — **no** el mismo archivo que `Lupo v4 -
> Rebranding.dc.html`, que solo trae pantallas (paleta infantil), sin HU.
> Este documento existe porque ese contexto no estaba en el repo del app
> React Native: se copia aquí para que quede versionado junto al código que
> implementa (o todavía no implementa) cada historia.
>
> Documentación interna — se mantiene en español, igual que en el archivo fuente.
> Ver `SCREEN-STATUS.md` para el cruce HU ↔ pantalla del app ↔ estado real.

7 épicas, 26 historias. Cada historia apunta a la pantalla del mockup que la
implementa (`v1 · NN`, `v2 · NN`, `M2`/`M3`/`M4`, o `Pendiente` si el mockup
tampoco existe todavía).

## E1 · Acceso y perfil

| HU | Historia | Criterio de aceptación | Mockup |
|---|---|---|---|
| HU-01 | Como jugador nuevo quiero elegir el idioma antes de empezar para entender todo desde la primera pantalla. | Al tocar un idioma, toda la interfaz y los casos cambian sin recargar. | v1 · 01 |
| HU-02 | Como jugador quiero un diagnóstico corto para empezar en el nivel adecuado y no aburrirme ni frustrarme. | Tres casos, sin puntos ni vidas, saltable. El resultado fija el nivel inicial del Game Master. | v1 · 02 |
| HU-03 | Como persona mayor quiero un modo de texto grande para leer la evidencia sin esfuerzo. | Cuerpo desde 21px, botones de 26px de alto mínimo, dos opciones por pantalla, sin contrarreloj. | v1 · 12 |
| HU-04 | Como jugador quiero ver mis casos resueltos, precisión e insignias para medir mi progreso. | Las insignias bloqueadas se muestran en gris con el nombre visible, nunca ocultas. | v1 · 11 |
| HU-05 | Como jugador quiero jugar sin crear cuenta para probar la app en menos de un minuto. | El progreso local se conserva; la cuenta solo se pide al entrar a ligas o torneos. | Pendiente |
| HU-06 | Como docente quiero un acceso separado para gestionar grupos sin usar el perfil de un alumno. | Rol docente con código de aula; nunca ve conversaciones individuales, solo métricas agregadas. | Pendiente |

## E2 · Partida multijugador «¿Quién está detrás?»

| HU | Historia | Criterio de aceptación | Mockup |
|---|---|---|---|
| HU-07 | Como anfitrión quiero crear una sala con código para que entren entre 3 y 10 jugadores. | Con menos de 3 el botón de inicio queda deshabilitado y explica por qué. | v2 · 01 |
| HU-08 | Como jugador quiero recibir mi rol e identidad en privado para no revelarlos sin querer. | La carta se revela manteniendo pulsado y se oculta al soltar; no queda en el historial. | v2 · 02–03 |
| HU-09 | Como perfil oculto quiero elegir entre conductas prediseñadas para no inventar técnicas de manipulación. | Nunca hay campo de texto libre en el rol oculto: solo tres opciones del catálogo del sistema. | v2 · 03 |
| HU-10 | Como jugador quiero conversar con preguntas predeterminadas para participar sin escribir libremente. | Catálogo de preguntas por fase; el chat libre queda desactivado para menores de 13. | v2 · 04 |
| HU-11 | Como detective quiero registrar señales en mi tablero para construir una teoría con evidencia. | Siete tipos de señal; el tablero es privado hasta la asamblea. | v2 · 05–07 |
| HU-12 | Como grupo queremos una asamblea con turnos y votación secreta para decidir con orden. | Turno máximo de 60 s por jugador; el voto no se muestra hasta que todos hayan votado. | v2 · 08–09 |
| HU-13 | Como jugador quiero justificar mi voto con señales concretas para que los puntos midan criterio y no suerte. | Acertar sin justificar da menos puntos que fallar habiendo detectado señales reales. | v2 · 10 |
| HU-14 | Como jugador quiero ver qué señales se me escaparon y qué hacer en la vida real al terminar la partida. | Siempre aparecen los cuatro pasos: para, bloquea, reporta, cuéntaselo a un adulto. | v2 · 11 |

## E3 · Misiones de contenido

| HU | Historia | Criterio de aceptación | Mockup |
|---|---|---|---|
| HU-15 | Como jugador quiero resolver casos individuales de phishing con swipe o toque sobre la evidencia. | Toda decisión termina en explicación, tanto si acierto como si fallo. | v1 · 05–08 |
| HU-16 | Como jugador quiero marcar zonas de una imagen para aprender qué delata un contenido generado por IA. | «No puedo decidir» es una respuesta válida y puntúa si la duda está justificada. | M2 |
| HU-17 | Como jugador quiero revisar una publicación antes de subirla para descubrir qué datos revelo sin querer. | La explicación conecta datos sueltos con el concepto de rutina, no solo con el dato aislado. | M3 |
| HU-18 | Como jugador quiero verificar una noticia con una lista de cinco comprobaciones para no depender de mi intuición. | El resultado distingue «falsa» de «no verificable»; ambas se consideran razones para no reenviar. | M4 |
| HU-19 | Como editor de contenidos quiero cargar casos reales con su fuente verificada para mantener el catálogo actualizado. | Un caso sin fuente ni señales etiquetadas no puede publicarse. | Pendiente |
| HU-20 | Como jugador quiero practicar sin gastar lupas ni afectar mi racha cuando quiero repasar tranquilo. | El modo práctica no otorga PP de liga pero sí desbloquea explicaciones. | Pendiente |

## E4 · Progresión y enganche

| HU | Historia | Criterio de aceptación | Mockup |
|---|---|---|---|
| HU-21 | Como jugador quiero una racha diaria y un mapa que avance para volver cada día. | La racha se congela un día al mes sin penalización, para no castigar un olvido. | v1 · 03 |
| HU-22 | Como jugador quiero competir en una liga semanal y retar a alguien conocido. | Las ligas usan solo el nombre de pila y la inicial; nunca foto real de un menor. | v1 · 10 |
| HU-23 | Como jugador quiero que quedarme sin lupas no me expulse del aprendizaje. | Sin lupas siempre hay dos salidas gratuitas: repasar consejos o entrar en práctica libre. | v1 · 09 |

## E5 · Game Master IA

| HU | Historia | Criterio de aceptación | Mockup |
|---|---|---|---|
| HU-24 | Como sistema quiero ajustar la dificultad según las decisiones del jugador para trabajar su punto débil. | Tres niveles; si una habilidad ya está consolidada, la siguiente ronda cambia de habilidad. | v2 · 13 |
| HU-25 | Como jugador quiero un reporte con mis fortalezas, mis fallos y una regla aprendida al terminar. | Una sola regla por partida, redactada como principio y no como regaño. | v2 · 12 |

## E6 · Docente y torneo

| HU | Historia | Criterio de aceptación | Mockup |
|---|---|---|---|
| HU-26 | Como docente quiero comparar el antes y el después del grupo para demostrar el impacto de las sesiones. | Cinco competencias medidas con situaciones distintas en cada medición, nunca las mismas. | v2 · 14 |

## E7 · Seguridad del menor

No tiene HU numeradas propias en el archivo fuente — está cubierta por la
matriz de casos límite de abajo (las tres filas «BLOQUEANTE»). Cualquier
HU nueva de seguridad del menor debería vivir en esta épica.

---

## Matriz de casos límite — qué falta diseñar

Cada fila es una pantalla o comportamiento que **todavía no existe en los
mockups** (ni en v1/v2/v3 ni en el app). Las bloqueantes afectan a
seguridad del menor y deberían resolverse antes de construir el resto de
la épica E2/E7.

### 🔴 Bloqueante

- **Un jugador reporta a otro durante la partida** — flujo de reporte, qué ve el docente y qué pasa con la partida en curso.
- **Un menor pide ayuda real dentro del juego** — salida a recursos reales y aviso a un adulto de confianza sin exponerlo al grupo.
- **Consentimiento y datos de menores** — qué se guarda, cuánto tiempo y quién puede verlo. Afecta a todo el modelo de datos.

### 🟠 Importante

- **Empate en la votación** — segunda ronda, desempate por calidad de justificación, o partida sin acusado.
- **Un jugador abandona a mitad de partida** — especialmente si era el perfil oculto: ¿la IA toma el rol o se cierra la ronda?
- **Solo 3 jugadores** — con tan poca gente el impostor es demasiado evidente: ¿se añaden perfiles IA de relleno?
- **Acusación injusta repetida** — si el grupo señala siempre al mismo jugador real, el juego debe intervenir.
- **El Game Master IA no responde** — catálogo de escenarios precargados como plan B, sin cortar la sesión de clase.

### ⚪ Normal

- **Sin conexión a mitad de caso** — guardado local y reanudación; las misiones individuales deberían funcionar sin red.
- **Catálogo de casos agotado** — qué se ofrece a quien ya resolvió todo: repaso espaciado o casos generados.
- **Caso sin traducir en el idioma elegido** — recurso al idioma base con aviso, o el caso no se muestra.
- **Primer día: perfil y ligas vacíos** — estados vacíos de perfil, insignias, liga y torneo antes de la primera partida.
- **Sesión de aula de 45 minutos** — formato corto: cuántas partidas caben y cómo cerrar la clase con el reporte grupal.
- **Lector de pantalla y daltonismo** — las señales de color ya llevan icono y texto; falta revisar orden de foco y etiquetas.
- **Notificación de reenganche** — frecuencia, horario permitido para menores y opción de apagado por el tutor.
- **Dos jugadores con el mismo nombre** — desambiguación visual en sala, asamblea y votación para evitar votos cruzados.
