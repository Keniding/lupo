// Lupo — Cazadores de Fakes · diccionario multilenguaje (es · en · pt · fr)
(function(){
if (window.LUPO_I18N) return;
const LANGS = [
  { code: 'es', label: 'ES', name: 'Español' },
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'pt', label: 'PT', name: 'Português' },
  { code: 'fr', label: 'FR', name: 'Français' },
];

const DICT = {
  es: {
    tagline: 'Cazadores de Fakes',
    nav: { map: 'Mapa', leagues: 'Ligas', practice: 'Práctica', profile: 'Perfil' },
    ob: {
      title: 'Aprende a detectar lo falso, un caso a la vez',
      body: 'Casos reales de phishing y noticias falsas, resueltos como un juego.',
      cta: 'Empezar la investigación', login: 'Ya tengo cuenta',
      pick: 'Elige tu idioma', ages: 'Desde los 8 hasta los 88',
      v2title: 'Tu primer caso te espera', v2body: 'Sin registro. Empieza en 10 segundos.',
      v3kicker: 'Expediente abierto', v3title: '2 de cada 3 personas caen en al menos una estafa al año.',
      v3body: 'Entrena el ojo. Nosotros ponemos los casos.',
    },
    quiz: {
      kicker: 'Diagnóstico · Pregunta 1 de 3', q: '¿Esto es real o es phishing?',
      real: 'Es real', phish: 'Es phishing', skip: 'Saltar el diagnóstico',
      note: 'Sin puntos ni vidas: solo para ubicar tu nivel.',
      picked: 'Respuesta registrada',
    },
    map: {
      tip: 'Tip del día: un banco real nunca te pide la clave por SMS.',
      unit: 'Unidad 3 · Estafas por WhatsApp', unitNext: 'Unidad 4 · Deepfakes',
      investigate: 'Investigar', locked: 'Bloqueado', chest: 'Cofre de pistas',
      review: 'Repaso', boss: 'Caso maestro',
    },
    intro: {
      kicker: 'Caso nuevo', body: 'Contexto real y anonimizado. Lee la evidencia con calma antes de decidir.',
      cta: 'Analizar evidencia', diff: 'Dificultad', reward: 'Recompensa',
    },
    swipe: {
      kicker: 'Reto · Verdadero o Falso', prompt: 'Desliza para dar tu veredicto',
      no: 'FALSO', yes: 'VERDADERO', hint: '← Falso · Verdadero →',
      timer: 'Contrarreloj', of: 'de',
    },
    flags: {
      kicker: 'Reto · Encuentra las señales', prompt: 'Toca todo lo que te parezca sospechoso',
      counter: 'Señales encontradas', confirm: 'Confirmar hallazgos', done: '¡Las encontraste todas!',
    },
    ok: {
      stamp: 'DETECTADO', title: '¡Buen ojo, detective!',
      why: 'Ese enlace acortado escondía un dominio que no es del banco.', next: 'Siguiente caso',
      xp: 'Puntos de Pista', combo: 'Racha de 4 aciertos',
    },
    bad: {
      stamp: 'SE ESCAPÓ', title: 'Se te pasó una señal',
      why: 'El remitente era un número personal. Un banco real nunca escribe desde un celular.',
      next: 'Entendido, sigamos', lost: '−1 lupa',
    },
    nolives: {
      title: 'Te quedaste sin lupas', body: 'Puedes esperar, repasar consejos o seguir en modo práctica sin rachas.',
      cta1: 'Repasar consejos (+1 lupa)', cta2: 'Modo práctica libre', regen: 'Próxima lupa en 42 min',
    },
    leagues: {
      title: 'Liga Plata', sub: 'Quedan 3 días', promo: 'Zona de ascenso', demo: 'Zona de descenso',
      you: 'Tú', week: 'PP esta semana', invite: 'Retar a un amigo',
    },
    profile: {
      solved: 'Casos resueltos', accuracy: 'Precisión', best: 'Racha máxima', badges: 'Insignias',
      settings: 'Ajustes', senior: 'Modo texto grande', contrast: 'Alto contraste', reminders: 'Recordatorios diarios',
      level: 'Detective Senior',
    },
    senior: { kicker: 'Modo texto grande', q: '¿Este mensaje es de tu banco?', no: 'No es real', yes: 'Sí es real' },
    badges: ['Cazador de Phishing', 'Ojo de Águila', 'Verificador Semanal', 'Detector de Deepfakes'],
    diffs: ['Aprendiz', 'Investigador', 'Detective Senior', 'Experto Forense'],
    cases: {
      sms: 'SMS de banco falso', son: '«Soy tu hijo, cambié de número»', parcel: 'Correo de paquetería',
      prize: 'Premio o sorteo falso', news: 'Titular sensacionalista', deepfake: 'Video generado por IA',
      job: 'Oferta de empleo falsa', gov: 'Suplantación de entidad pública',
    },
    ev: {
      smsBody: 'BANCO: detectamos un acceso no autorizado. Verifica tu cuenta en las próximas 2 horas o será bloqueada:',
      sonBody: 'Hola ma, soy yo. Se me rompió el celular, este es mi número nuevo. ¿Me puedes hacer una transferencia urgente? Te explico luego.',
      parcelSub: 'Su paquete está retenido en aduana',
      parcelBody: 'Debe pagar una tasa de 3,20 € para liberar el envío. Haga clic aquí antes de 24 h.',
      newsBody: 'ÚLTIMA HORA: científicos confirman que el agua embotellada causa pérdida de memoria. Los medios lo ocultan.',
    },
    fl: { sender: 'Remitente falso', link: 'Enlace acortado', urgency: 'Urgencia artificial', spell: 'Error de ortografía', money: 'Pide dinero' },
    stampsOk: 'VERIFICADO', stampsNo: 'FALSO', stampsSus: 'SOSPECHOSO',
    common: { pp: 'PP', lives: 'Lupas', streak: 'días', xp: 'Puntos de Pista', practice: 'Práctica' },
  },

  en: {
    tagline: 'Fake Hunters',
    nav: { map: 'Map', leagues: 'Leagues', practice: 'Practice', profile: 'Profile' },
    ob: {
      title: 'Learn to spot the fake, one case at a time',
      body: 'Real phishing and fake-news cases, solved like a game.',
      cta: 'Start investigating', login: 'I already have an account',
      pick: 'Choose your language', ages: 'From 8 to 88',
      v2title: 'Your first case is waiting', v2body: 'No sign-up. Start in 10 seconds.',
      v3kicker: 'Case file open', v3title: '2 in 3 people fall for at least one scam a year.',
      v3body: 'Train your eye. We bring the cases.',
    },
    quiz: {
      kicker: 'Placement · Question 1 of 3', q: 'Is this real, or is it phishing?',
      real: "It's real", phish: "It's phishing", skip: 'Skip the placement test',
      note: 'No points, no lives — just to find your level.', picked: 'Answer recorded',
    },
    map: {
      tip: 'Tip of the day: a real bank never asks for your PIN by text.',
      unit: 'Unit 3 · WhatsApp scams', unitNext: 'Unit 4 · Deepfakes',
      investigate: 'Investigate', locked: 'Locked', chest: 'Clue chest', review: 'Review', boss: 'Master case',
    },
    intro: {
      kicker: 'New case', body: 'A real, anonymised case. Read the evidence carefully before you decide.',
      cta: 'Examine evidence', diff: 'Difficulty', reward: 'Reward',
    },
    swipe: {
      kicker: 'Challenge · True or False', prompt: 'Swipe to give your verdict',
      no: 'FAKE', yes: 'REAL', hint: '← Fake · Real →', timer: 'Time attack', of: 'of',
    },
    flags: {
      kicker: 'Challenge · Spot the red flags', prompt: 'Tap everything that looks suspicious',
      counter: 'Red flags found', confirm: 'Confirm findings', done: 'You found them all!',
    },
    ok: {
      stamp: 'CAUGHT', title: 'Sharp eye, detective!',
      why: 'That shortened link was hiding a domain that is not the bank’s.', next: 'Next case',
      xp: 'Clue Points', combo: '4 correct in a row',
    },
    bad: {
      stamp: 'MISSED', title: 'You missed one signal',
      why: 'The sender was a personal number. A real bank never texts from a mobile.',
      next: 'Got it, let’s go on', lost: '−1 lens',
    },
    nolives: {
      title: 'You’re out of lenses', body: 'You can wait, review some tips, or keep going in practice mode without streaks.',
      cta1: 'Review tips (+1 lens)', cta2: 'Free practice mode', regen: 'Next lens in 42 min',
    },
    leagues: {
      title: 'Silver League', sub: '3 days left', promo: 'Promotion zone', demo: 'Relegation zone',
      you: 'You', week: 'CP this week', invite: 'Challenge a friend',
    },
    profile: {
      solved: 'Cases solved', accuracy: 'Accuracy', best: 'Best streak', badges: 'Badges',
      settings: 'Settings', senior: 'Large text mode', contrast: 'High contrast', reminders: 'Daily reminders',
      level: 'Senior Detective',
    },
    senior: { kicker: 'Large text mode', q: 'Is this message from your bank?', no: 'Not real', yes: 'It is real' },
    badges: ['Phishing Hunter', 'Eagle Eye', 'Weekly Verifier', 'Deepfake Detector'],
    diffs: ['Rookie', 'Investigator', 'Senior Detective', 'Forensic Expert'],
    cases: {
      sms: 'Fake bank text', son: '“It’s me, I changed my number”', parcel: 'Parcel delivery email',
      prize: 'Fake prize draw', news: 'Sensational headline', deepfake: 'AI-generated video',
      job: 'Fake job offer', gov: 'Government impersonation',
    },
    ev: {
      smsBody: 'BANK: we detected an unauthorised login. Verify your account within 2 hours or it will be blocked:',
      sonBody: 'Hi mum, it’s me. My phone broke, this is my new number. Could you send me an urgent transfer? I’ll explain later.',
      parcelSub: 'Your parcel is held at customs',
      parcelBody: 'You must pay a €3.20 fee to release the shipment. Click here within 24 h.',
      newsBody: 'BREAKING: scientists confirm bottled water causes memory loss. The media is hiding it.',
    },
    fl: { sender: 'Fake sender', link: 'Shortened link', urgency: 'Artificial urgency', spell: 'Spelling mistake', money: 'Asks for money' },
    stampsOk: 'VERIFIED', stampsNo: 'FAKE', stampsSus: 'SUSPICIOUS',
    common: { pp: 'CP', lives: 'Lenses', streak: 'days', xp: 'Clue Points', practice: 'Practice' },
  },

  pt: {
    tagline: 'Caçadores de Fakes',
    nav: { map: 'Mapa', leagues: 'Ligas', practice: 'Prática', profile: 'Perfil' },
    ob: {
      title: 'Aprenda a detectar o falso, um caso de cada vez',
      body: 'Casos reais de phishing e fake news, resolvidos como um jogo.',
      cta: 'Começar a investigação', login: 'Já tenho conta',
      pick: 'Escolha seu idioma', ages: 'Dos 8 aos 88',
      v2title: 'Seu primeiro caso espera por você', v2body: 'Sem cadastro. Comece em 10 segundos.',
      v3kicker: 'Processo aberto', v3title: '2 em cada 3 pessoas caem em pelo menos um golpe por ano.',
      v3body: 'Treine o olho. Os casos são por nossa conta.',
    },
    quiz: {
      kicker: 'Diagnóstico · Pergunta 1 de 3', q: 'Isto é real ou é phishing?',
      real: 'É real', phish: 'É phishing', skip: 'Pular o diagnóstico',
      note: 'Sem pontos nem vidas: só para achar seu nível.', picked: 'Resposta registrada',
    },
    map: {
      tip: 'Dica do dia: um banco real nunca pede sua senha por SMS.',
      unit: 'Unidade 3 · Golpes no WhatsApp', unitNext: 'Unidade 4 · Deepfakes',
      investigate: 'Investigar', locked: 'Bloqueado', chest: 'Baú de pistas', review: 'Revisão', boss: 'Caso mestre',
    },
    intro: {
      kicker: 'Caso novo', body: 'Contexto real e anonimizado. Leia a evidência com calma antes de decidir.',
      cta: 'Analisar evidência', diff: 'Dificuldade', reward: 'Recompensa',
    },
    swipe: {
      kicker: 'Desafio · Verdadeiro ou Falso', prompt: 'Deslize para dar seu veredito',
      no: 'FALSO', yes: 'VERDADEIRO', hint: '← Falso · Verdadeiro →', timer: 'Contra o relógio', of: 'de',
    },
    flags: {
      kicker: 'Desafio · Ache os sinais de alerta', prompt: 'Toque em tudo que parecer suspeito',
      counter: 'Sinais encontrados', confirm: 'Confirmar achados', done: 'Você achou todos!',
    },
    ok: {
      stamp: 'DETECTADO', title: 'Bom olho, detetive!',
      why: 'Aquele link encurtado escondia um domínio que não é do banco.', next: 'Próximo caso',
      xp: 'Pontos de Pista', combo: '4 acertos seguidos',
    },
    bad: {
      stamp: 'ESCAPOU', title: 'Passou um sinal',
      why: 'O remetente era um número pessoal. Um banco real nunca escreve de um celular.',
      next: 'Entendi, vamos seguir', lost: '−1 lupa',
    },
    nolives: {
      title: 'Você ficou sem lupas', body: 'Você pode esperar, revisar dicas ou seguir no modo prática sem sequências.',
      cta1: 'Revisar dicas (+1 lupa)', cta2: 'Modo prática livre', regen: 'Próxima lupa em 42 min',
    },
    leagues: {
      title: 'Liga Prata', sub: 'Faltam 3 dias', promo: 'Zona de subida', demo: 'Zona de queda',
      you: 'Você', week: 'PP nesta semana', invite: 'Desafiar um amigo',
    },
    profile: {
      solved: 'Casos resolvidos', accuracy: 'Precisão', best: 'Melhor sequência', badges: 'Distintivos',
      settings: 'Ajustes', senior: 'Modo texto grande', contrast: 'Alto contraste', reminders: 'Lembretes diários',
      level: 'Detetive Sênior',
    },
    senior: { kicker: 'Modo texto grande', q: 'Esta mensagem é do seu banco?', no: 'Não é real', yes: 'É real' },
    badges: ['Caçador de Phishing', 'Olho de Águia', 'Verificador Semanal', 'Detector de Deepfakes'],
    diffs: ['Aprendiz', 'Investigador', 'Detetive Sênior', 'Perito Forense'],
    cases: {
      sms: 'SMS de banco falso', son: '«Sou eu, mudei de número»', parcel: 'E-mail de encomenda',
      prize: 'Prêmio ou sorteio falso', news: 'Manchete sensacionalista', deepfake: 'Vídeo gerado por IA',
      job: 'Oferta de emprego falsa', gov: 'Falso órgão público',
    },
    ev: {
      smsBody: 'BANCO: detectamos um acesso não autorizado. Verifique sua conta nas próximas 2 horas ou ela será bloqueada:',
      sonBody: 'Oi mãe, sou eu. Meu celular quebrou, este é meu número novo. Você pode fazer uma transferência urgente? Depois explico.',
      parcelSub: 'Sua encomenda está retida na alfândega',
      parcelBody: 'É preciso pagar uma taxa de R$ 3,20 para liberar o envio. Clique aqui em até 24 h.',
      newsBody: 'URGENTE: cientistas confirmam que água engarrafada causa perda de memória. A mídia esconde isso.',
    },
    fl: { sender: 'Remetente falso', link: 'Link encurtado', urgency: 'Urgência artificial', spell: 'Erro de ortografia', money: 'Pede dinheiro' },
    stampsOk: 'VERIFICADO', stampsNo: 'FALSO', stampsSus: 'SUSPEITO',
    common: { pp: 'PP', lives: 'Lupas', streak: 'dias', xp: 'Pontos de Pista', practice: 'Prática' },
  },

  fr: {
    tagline: 'Chasseurs de Fakes',
    nav: { map: 'Carte', leagues: 'Ligues', practice: 'Entraînement', profile: 'Profil' },
    ob: {
      title: 'Apprends à repérer le faux, une affaire à la fois',
      body: 'De vraies affaires de phishing et d’infox, résolues comme un jeu.',
      cta: 'Commencer l’enquête', login: 'J’ai déjà un compte',
      pick: 'Choisis ta langue', ages: 'De 8 à 88 ans',
      v2title: 'Ta première affaire t’attend', v2body: 'Sans inscription. Commence en 10 secondes.',
      v3kicker: 'Dossier ouvert', v3title: '2 personnes sur 3 tombent dans au moins une arnaque par an.',
      v3body: 'Entraîne ton œil. Les affaires, c’est nous.',
    },
    quiz: {
      kicker: 'Diagnostic · Question 1 sur 3', q: 'Est-ce réel ou est-ce du phishing ?',
      real: 'C’est réel', phish: 'C’est du phishing', skip: 'Passer le diagnostic',
      note: 'Ni points ni vies : juste pour situer ton niveau.', picked: 'Réponse enregistrée',
    },
    map: {
      tip: 'Astuce du jour : une vraie banque ne demande jamais ton code par SMS.',
      unit: 'Unité 3 · Arnaques WhatsApp', unitNext: 'Unité 4 · Deepfakes',
      investigate: 'Enquêter', locked: 'Verrouillé', chest: 'Coffre à indices', review: 'Révision', boss: 'Affaire maîtresse',
    },
    intro: {
      kicker: 'Nouvelle affaire', body: 'Un cas réel et anonymisé. Lis les preuves calmement avant de décider.',
      cta: 'Analyser les preuves', diff: 'Difficulté', reward: 'Récompense',
    },
    swipe: {
      kicker: 'Défi · Vrai ou Faux', prompt: 'Glisse pour rendre ton verdict',
      no: 'FAUX', yes: 'VRAI', hint: '← Faux · Vrai →', timer: 'Contre la montre', of: 'sur',
    },
    flags: {
      kicker: 'Défi · Trouve les signaux', prompt: 'Touche tout ce qui te semble suspect',
      counter: 'Signaux trouvés', confirm: 'Confirmer les trouvailles', done: 'Tu les as tous trouvés !',
    },
    ok: {
      stamp: 'REPÉRÉ', title: 'Bel œil, détective !',
      why: 'Ce lien raccourci cachait un domaine qui n’est pas celui de la banque.', next: 'Affaire suivante',
      xp: 'Points d’Indice', combo: '4 bonnes réponses d’affilée',
    },
    bad: {
      stamp: 'MANQUÉ', title: 'Un signal t’a échappé',
      why: 'L’expéditeur était un numéro personnel. Une vraie banque n’écrit jamais depuis un portable.',
      next: 'Compris, on continue', lost: '−1 loupe',
    },
    nolives: {
      title: 'Tu n’as plus de loupes', body: 'Tu peux attendre, revoir des conseils, ou continuer en mode entraînement sans séries.',
      cta1: 'Revoir les conseils (+1 loupe)', cta2: 'Mode entraînement libre', regen: 'Prochaine loupe dans 42 min',
    },
    leagues: {
      title: 'Ligue Argent', sub: 'Encore 3 jours', promo: 'Zone de montée', demo: 'Zone de descente',
      you: 'Toi', week: 'PI cette semaine', invite: 'Défier un ami',
    },
    profile: {
      solved: 'Affaires résolues', accuracy: 'Précision', best: 'Meilleure série', badges: 'Badges',
      settings: 'Réglages', senior: 'Mode gros texte', contrast: 'Contraste élevé', reminders: 'Rappels quotidiens',
      level: 'Détective Senior',
    },
    senior: { kicker: 'Mode gros texte', q: 'Ce message vient-il de ta banque ?', no: 'Pas réel', yes: 'C’est réel' },
    badges: ['Chasseur de Phishing', 'Œil d’Aigle', 'Vérificateur Hebdo', 'Détecteur de Deepfakes'],
    diffs: ['Apprenti', 'Enquêteur', 'Détective Senior', 'Expert Forensique'],
    cases: {
      sms: 'SMS de fausse banque', son: '« C’est moi, j’ai changé de numéro »', parcel: 'E-mail de colis',
      prize: 'Faux tirage au sort', news: 'Titre sensationnaliste', deepfake: 'Vidéo générée par IA',
      job: 'Fausse offre d’emploi', gov: 'Usurpation d’un service public',
    },
    ev: {
      smsBody: 'BANQUE : accès non autorisé détecté. Vérifiez votre compte sous 2 heures ou il sera bloqué :',
      sonBody: 'Salut maman, c’est moi. Mon téléphone est cassé, voici mon nouveau numéro. Tu peux me faire un virement urgent ? Je t’explique après.',
      parcelSub: 'Votre colis est retenu en douane',
      parcelBody: 'Vous devez payer 3,20 € pour libérer l’envoi. Cliquez ici sous 24 h.',
      newsBody: 'ALERTE : des scientifiques confirment que l’eau en bouteille cause des pertes de mémoire. Les médias le cachent.',
    },
    fl: { sender: 'Expéditeur falsifié', link: 'Lien raccourci', urgency: 'Urgence artificielle', spell: 'Faute d’orthographe', money: 'Demande de l’argent' },
    stampsOk: 'VÉRIFIÉ', stampsNo: 'FAUX', stampsSus: 'SUSPECT',
    common: { pp: 'PI', lives: 'Loupes', streak: 'jours', xp: 'Points d’Indice', practice: 'Entraînement' },
  },
};

window.LUPO_I18N = { LANGS, DICT };
})();
