# Juego educativo contra desinformación

_Started 2026-07-26 02:28 UTC_

---

## User

Un juego con gamificación que permita a personas menores como mayores (candy crush) mediante casos reales para educación didáctica sobre fake new casos como posible phishing con diseño visual tipo Duolingo, lo ideal sería un aplicativo móvil que dispare dopamina para su uso y genere enganche en los usuarios. Multilenguaje

## Assistant

_[tool: list_files]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: questions_v2]_

## User

Questions answered:
- idiomas: Decide por mí (ES + EN + PT), Francés, Portugués (BR), Inglés, Español (LatAm)
- idioma_default: Español
- alcance: Onboarding + quiz de diagnóstico, Mapa de casos (tablero de corcho), Reto swipe verdadero/falso, Reto 'encuentra las señales' (tap sobre la evidencia), Feedback acierto/error, Sin lupas / modo práctica, Ligas y ranking, Perfil e insignias, Modo sénior (texto grande), Todas — flujo completo
- prioridad: Que la exploración visual sea amplia (varias direcciones)
- casos: SMS de banco falso, WhatsApp: 'soy tu hijo, cambié de número', Correo de paquetería / aduana, Premio o sorteo falso, Noticia falsa en redes (titular sensacionalista), Imagen/video generado por IA (deepfake), Estafa laboral / oferta de empleo, Suplantación de entidad de gobierno
- variaciones: Del mapa de progreso (sendero de pistas), De la mecánica de reto (swipe vs tap vs otra), De la pantalla de recompensa/feedback, Del onboarding, Explorar varias opciones
- dopamina: Racha diaria con llama creciente, Ligas semanales competitivas, Retos contrarreloj, Cofres / recompensas sorpresa, Desafíos con amigos / familia, Insignias coleccionables, Notificaciones de reenganche
- edad: Uno solo, universal y accesible
- dispositivo: Pantallas sueltas lado a lado, sin marco
- tono: Mezcla: juguetón en recompensas, sobrio en explicaciones

## Assistant

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: run_script]_

_[tool: copy_files]_

_[tool: run_script]_

_[tool: delete_file]_

_[tool: write_file]_

_[tool: run_script]_

Ahora construyo el prototipo. Primero ajusto el diccionario para que cargue como script global.

_[tool: str_replace_edit]_

_[tool: run_script]_

_[tool: dc_write]_

_[tool: ready_for_verification]_

Listo el lienzo con **1a** el flujo completo (12 pantallas: onboarding, diagnóstico, mapa de corcho, intro de caso, swipe arrastrable, encuentra-las-señales tocable, acierto/error, sin lupas, ligas, perfil, modo texto grande) y tres tandas de exploración: **1b** onboarding, **1c** mapa (corcho / archivador / barrio con niebla), **1d** reto (swipe / cara a cara / cadena de reenvío), **1e** recompensa (sello / recortes / sobrio).

El selector ES·EN·PT·FR arriba del lienzo cambia toda la copy en vivo, y también está como tweak. Dime qué opciones te quedas y las consolido en el flujo oficial. Nota: Lupo aparece como marcador de posición — el sistema de diseño no trae arte del búho, si me pasas la ilustración la coloco.

## User

Found issues — fixing…

## Assistant

_[tool: run_script]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Corregido: el diccionario ya no se declara dos veces (sin error en consola) y el mapa de casos ahora hace scroll vertical, así que el cofre y el caso bloqueado se ven completos.

## User

Found issues — fixing…

## Assistant

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Ligas ahora hace scroll (zona de descenso completa) y la variante B de onboarding ya no recorta el enlace inferior.

## User

deseo incoporara nuevos flujos en una seccion aparte para dejar documentado lo q tenemos como prueba de concepto version 1 loq tenemos actual, pero ahora agregaremos un nuevo apartado sin borrar todo lo actual sino agregaremos aparte desde un comienzo la version 2 con lo pulido:
[23:11, 7/8/2026] Camila Utp: a multilingual, gamified mobile app that teaches children, youth and adults how to identify fake news, phishing and AI-generated misinformation through short challenges based on real cases and verified sources. Using adaptive AI, instant feedback and age-appropriate learning paths, it makes media and information literacy simple, engaging and practical.
[23:12, 7/8/2026] Camila Utp: Un juego con gamificación que permita a personas menores como mayores (candy crush) mediante casos reales para educación didáctica sobre fake new casos como posible phishing con diseño visual tipo Duolingo, lo ideal sería un aplicativo móvil que dispare dopamina para su uso y genere enganche en los usuarios. Multilenguaje

## Assistant

Ahora añado la v2 como sección propia, dejando la v1 intacta debajo.

_[tool: write_file]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Añadida la **v2 «¿Quién está detrás?»** como sección propia arriba, con la v1 intacta debajo etiquetada como prueba de concepto.

**2a — partida completa, 14 pantallas:** sala (3–10 jugadores), rol detective con carta de identidad, rol de perfil oculto guiado por el sistema (solo elige entre conductas ya diseñadas), sala de conversación con las tres pistas del guion, decisión A/B/C con consecuencia en vivo, pantalla de consecuencia con el patrón confianza → información → secreto → presión → riesgo, tablero del detective con las 7 señales marcables, asamblea, votación, justificación puntuada (+40/+30/+20/+30, el marcador se recalcula al tocar), revelación con PARA·BLOQUEA·REPORTA·CUÉNTASELO, reporte personalizado de IA, misiones + niveles del Game Master, y torneo escolar con medición antes/después.

**2b** deja explícita la decisión pendiente: impostor humano guiado vs. perfil controlado por IA. Todo sigue en ES·EN·PT·FR con el mismo selector.

## User

veo q hay 4 tipos de misiones y solo planteamos 1, generemos los demas asi como HU, la idea es mapear todos los casos posibles para pasar a definir el sistema a partir de los mockups por eso esto debe estar bien completo cada caso

## Assistant

Voy a añadir las tres misiones restantes como flujos completos, más un tablero de historias de usuario y una matriz de casos límite.

_[tool: update_todos]_

_[tool: write_file]_

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: update_todos]_

_[tool: ready_for_verification]_

Añadida la sección 3 arriba del todo, con la v2 y la v1 intactas debajo.

**3a · Misión 2 «¿Real o generado?»** — briefing, análisis por zonas tocables sobre la imagen (manos, texto del cartel, sombras, rostros del fondo), veredicto con «no puedo decidir» como respuesta válida, y resultado con la regla aprendida.

**3b · Misión 3 «¿Compartirías esto?»** — briefing, publicación con pie de foto y cinco datos que se pueden ocultar tocándolos, y veredicto publicar / editar / no publicar con explicación centrada en la rutina, no en el dato suelto.

**3c · Misión 4 «¿Puedes confiar en esta noticia?»** — evidencia con dominio, sin fecha y sin autor; verificación de cinco puntos marcable; y resultado que distingue «falsa» de «no verificable», contrastando con otros medios.

**3d** es el backlog: 7 épicas, 26 historias de usuario con criterio de aceptación y la pantalla del mockup que las implementa. **3e** es la matriz de casos límite: 16 situaciones aún sin diseñar, tres marcadas como bloqueantes (reporte entre jugadores, petición real de ayuda, consentimiento y datos de menores).

Las tres misiones nuevas están en los cuatro idiomas; el backlog y la matriz quedan en español como documentación interna. Las imágenes de los casos son marcos vacíos a la espera de material real — no puedo generarlas.

## User

Found issues — fixing…

## Assistant

_[tool: dc_html_str_replace]_

_[tool: run_script]_

_[tool: list_files]_

_[tool: list_files]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: delete_file]_

_[tool: ready_for_verification]_

Corregido: los sellos en flujo ahora usan una animación que solo escala y rota, así que ya no se salen del marco (el sello centrado de v1-07 y el de la revelación conservan su posicionamiento propio). Y el archivo carga el bundle y los tokens del sistema de diseño desde `_ds/`, en lugar de la copia local con los valores repetidos a mano.

## User

vamos a generar una nueva version (v4 o la correspondiente con un rebranding, todo esta bien pero la paleta de colores no es adecuada para el publico infatil tiene que se mas de tipo duoling o candy crsuh, extrae el diseño de uno de ellos y te lo voy a compartir, al generar una nueva version solo deseo pantallas no las HU, de manera complea, te paso contexto:

deseo extraer el desyn systema de estas imagenes para una proyecto de gamificación para enseñar a los niños sobre para este caso definido de aplicación:
Añadida la v2 «¿Quién está detrás?» como sección propia arriba, con la v1 intacta debajo etiquetada como prueba de concepto.
2a — partida completa, 14 pantallas: sala (3–10 jugadores), rol detective con carta de identidad, rol de perfil oculto guiado por el sistema (solo elige entre conductas ya diseñadas), sala de conversación con las tres pistas del guion, decisión A/B/C con consecuencia en vivo, pantalla de consecuencia con el patrón confianza → información → secreto → presión → riesgo, tablero del detective con las 7 señales marcables, asamblea, votación, justificación puntuada (+40/+30/+20/+30, el marcador se recalcula al tocar), revelación con PARA·BLOQUEA·REPORTA·CUÉNTASELO, reporte personalizado de IA, misiones + niveles del Game Master, y torneo escolar con medición antes/después.
2b deja explícita la decisión pendiente: impostor humano guiado vs. perfil controlado por IA. Todo sigue en ES·EN·PT·FR con el mismo selector.
Edited 2 files
veo q hay 4 tipos de misiones y solo planteamos 1, generemos los demas asi como HU, la idea es mapear todos los casos posibles para pasar a definir el sistema a partir de los mockups por eso esto debe estar bien completo cada caso
Voy a añadir las tres misiones restantes como flujos completos, más un tablero de historias de usuario y una matriz de casos límite.
~~✓Diccionario m2/m3/m4 en 4 idiomas~~
~~✓Misión 2 — ¿Real o generado?~~
~~✓Misión 3 — ¿Compartirías esto?~~
~~✓Misión 4 — ¿Confiar en esta noticia?~~
~~✓Tablero de historias de usuario (HU)~~
~~✓Matriz de casos límite y estados~~
Añadida la sección 3 arriba del todo, con la v2 y la v1 intactas debajo.
3a · Misión 2 «¿Real o generado?» — briefing, análisis por zonas tocables sobre la imagen (manos, texto del cartel, sombras, rostros del fondo), veredicto con «no puedo decidir» como respuesta válida, y resultado con la regla aprendida.
3b · Misión 3 «¿Compartirías esto?» — briefing, publicación con pie de foto y cinco datos que se pueden ocultar tocándolos, y veredicto publicar / editar / no publicar con explicación centrada en la rutina, no en el dato suelto.
3c · Misión 4 «¿Puedes confiar en esta noticia?» — evidencia con dominio, sin fecha y sin autor; verificación de cinco puntos marcable; y resultado que distingue «falsa» de «no verificable», contrastando con otros medios.
3d es el backlog: 7 épicas, 26 historias de usuario con criterio de aceptación y la pantalla del mockup que las implementa. 3e es la matriz de casos límite: 16 situaciones aún sin diseñar, tres marcadas como bloqueantes (reporte entre jugadores, petición real de ayuda, consentimiento y datos de menores).
Las tres misiones nuevas están en los cuatro idiomas; el backlog y la matriz quedan en español como documentación interna. Las imágenes de los casos son marcos vacíos a la espera de material real — no puedo generarlas.
Edited 2 files
Found issues — fixing…
Corregido: los sellos en flujo ahora usan una animación que solo escala y rota, así que ya no se salen del marco (el sello centrado de v1-07 y el de la revelación conservan su posicionamiento propio). Y el archivo carga el bundle y los tokens del sistema de diseño desde `_ds/`, en lugar de la copia local con los valores repetidos a mano.

## Assistant

_[tool: list_files]_

_[tool: view_image]_

Trabajaré con la referencia como guía de *género* (colores saturados, botones gruesos con sombra inferior, tipografía redonda), no copiando la marca ni el personaje: eso sería recrear una identidad ajena.

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

## User

coontinua donde te quedaste

## Assistant

_[tool: ready_for_verification]_

Ya está completa la **v4** en su archivo propio (`Lupo v4 - Rebranding.dc.html`), con las versiones anteriores intactas.

**24 pantallas, sin HU**, con la paleta extraída de tus capturas: azul profundo en degradado, dorado #FFC93C con relieve, verde #4CC93B para acción positiva, rojo #E8483A para vidas y alerta, morado y magenta como acentos. Botones con "escalón" 3D, tarjetas claras con borde blanco, corazones en vez de lupas, estrellas en vez de porcentajes, y el patrón de candado + nivel de desbloqueo aplicado tal cual al mapa y a las misiones bloqueadas.

Cubre: portada, mapa de niveles tipo sendero, sin vidas, los 14 pasos de la partida (sala, roles, chat, decisión, consecuencia, tablero, asamblea, votación, justificación, revelación, reporte, misiones, torneo) y las tres misiones de contenido.

Dos cosas deliberadas: no repliqué el banner "MEJOR PRECIO" ni la mecánica gacha de azar puro, por lo que tú mismo señalaste en el JSON sobre sesgar decisiones en un producto educativo. Si quieres la ruleta de bonus como recompensa desbloqueable, la añado.

