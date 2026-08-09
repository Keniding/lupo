/* @ds-bundle: {"format":4,"namespace":"LupoDesignSystem_b521a9","components":[{"name":"EvidenceCard","sourcePath":"components/content/EvidenceCard.jsx"},{"name":"MascotBubble","sourcePath":"components/content/MascotBubble.jsx"},{"name":"ButtonPrimary","sourcePath":"components/core/ButtonPrimary.jsx"},{"name":"ButtonSecondary","sourcePath":"components/core/ButtonSecondary.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"LupasCounter","sourcePath":"components/game/LupasCounter.jsx"},{"name":"PolaroidNode","sourcePath":"components/game/PolaroidNode.jsx"},{"name":"ProgressPathThread","sourcePath":"components/game/ProgressPathThread.jsx"},{"name":"StampBadge","sourcePath":"components/game/StampBadge.jsx"},{"name":"StreakFlame","sourcePath":"components/game/StreakFlame.jsx"}],"sourceHashes":{"components/content/EvidenceCard.jsx":"959380035155","components/content/MascotBubble.jsx":"bbf4c138d3a2","components/core/ButtonPrimary.jsx":"a61d0811f4b4","components/core/ButtonSecondary.jsx":"9e013c5e7a67","components/core/Icon.jsx":"b9ede10b143f","components/game/LupasCounter.jsx":"32e253a7c9c5","components/game/PolaroidNode.jsx":"3782aef33b07","components/game/ProgressPathThread.jsx":"c5b44755729b","components/game/StampBadge.jsx":"77d79a1b6af1","components/game/StreakFlame.jsx":"82c7e681781e","ui_kits/lupo_app/ChallengeSwipeScreen.jsx":"278f748d6da2","ui_kits/lupo_app/Chrome.jsx":"c97993ec7713","ui_kits/lupo_app/FeedbackScreen.jsx":"401beb35d3f3","ui_kits/lupo_app/HomeMapScreen.jsx":"de9c142eaeac","ui_kits/lupo_app/LeaguesScreen.jsx":"5753c5001dac","ui_kits/lupo_app/OnboardingScreen.jsx":"0321878715cc","ui_kits/lupo_app/ProfileScreen.jsx":"22bc5e7ced35"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LupoDesignSystem_b521a9 = window.LupoDesignSystem_b521a9 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Curated Lucide (lucide.dev, ISC) subset — rounded 2px outline, matches Lupo's iconography spec.
const PATHS = {
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  fingerprint: '<path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"/><path d="M14 13.12c0 2.38 0 6.38-1 8.88"/><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"/><path d="M2 12a10 10 0 0 1 18-6"/><path d="M2 16h.01"/><path d="M21.8 16c.2-2 .131-5.354 0-6"/><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"/><path d="M8.65 22c.21-.66.45-1.32.57-2"/><path d="M9 6.8a6 6 0 0 1 9 5.2v2"/>',
  lock: '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  alert: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  flame: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
  heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
  shieldCheck: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  eye: '<path d="M2.06 12.35a1 1 0 0 1 0-.7 10.75 10.75 0 0 1 19.88 0 1 1 0 0 1 0 .7 10.75 10.75 0 0 1-19.88 0Z"/><circle cx="12" cy="12" r="3"/>',
  trophy: '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>',
  user: '<circle cx="12" cy="8" r="5"/><path d="M3 21a9 9 0 0 1 18 0"/>',
  map: '<path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/><path d="M15 5.764v15"/><path d="M9 3.236v15"/>',
  link: '<path d="M9 17H7A5 5 0 0 1 7 7h2"/><path d="M15 7h2a5 5 0 1 1 0 10h-2"/><line x1="8" x2="16" y1="12" y2="12"/>',
  clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  chevronRight: '<path d="m9 18 6-6-6-6"/>',
  target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  notebook: '<path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M16 2v20"/>',
  dumbbell: '<path d="M14.4 14.4 9.6 9.6"/><path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z"/><path d="m21.5 21.5-1.4-1.4"/><path d="M3.9 3.9 2.5 2.5"/><path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z"/>',
  bell: '<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>'
};
function Icon({
  name,
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  style,
  ...rest
}) {
  const d = PATHS[name] || '';
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: 'block',
      flex: 'none',
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: d
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/content/EvidenceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const KIND = {
  sms: {
    icon: 'bell',
    label: 'Mensajes',
    accent: '#34C759'
  },
  email: {
    icon: 'link',
    label: 'Correo',
    accent: '#3457D5'
  },
  social: {
    icon: 'user',
    label: 'Red social',
    accent: '#E1306C'
  },
  chat: {
    icon: 'bell',
    label: 'WhatsApp',
    accent: '#25D366'
  }
};

/**
 * Evidence card — simulates a real screenshot of a messaging / email / social app.
 * Monospace body ("digital evidence"). Highlight suspicious substrings with <mark> or the `flags` prop.
 */
function EvidenceCard({
  kind = 'email',
  sender = '',
  handle = '',
  time = '',
  subject,
  children,
  flags = [],
  style,
  ...rest
}) {
  const k = KIND[kind] || KIND.email;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: '320px',
      maxWidth: '100%',
      background: 'var(--bg-primary)',
      border: '1px solid var(--border-subtle)',
      borderRadius: '14px',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-card-resting)',
      boxSizing: 'border-box',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '10px 14px',
      background: 'var(--bg-secondary)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 26,
      height: 26,
      borderRadius: '999px',
      background: k.accent
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: k.icon,
    size: 15,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: '13px',
      color: 'var(--text-secondary)'
    }
  }, k.label), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontFamily: 'var(--font-evidence)',
      fontSize: '11px',
      color: 'var(--text-secondary)'
    }
  }, time)), (sender || handle) && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 14px 4px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: '14px',
      color: 'var(--text-primary)'
    }
  }, sender), handle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-evidence)',
      fontSize: '12px',
      color: 'var(--text-secondary)',
      marginTop: 2
    }
  }, handle)), subject && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 14px',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: '14px',
      color: 'var(--text-primary)'
    }
  }, subject), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 14px 14px',
      fontFamily: 'var(--font-evidence)',
      fontSize: '13px',
      lineHeight: '20px',
      color: 'var(--text-primary)',
      wordBreak: 'break-word'
    }
  }, children), flags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6,
      padding: '0 14px 14px'
    }
  }, flags.map((f, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: '11px',
      color: 'var(--alert-phishing)',
      background: 'rgba(255,90,95,.12)',
      borderRadius: '999px',
      padding: '3px 8px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "alert",
    size: 12
  }), " ", f))));
}
Object.assign(__ds_scope, { EvidenceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/EvidenceCard.jsx", error: String((e && e.message) || e) }); }

// components/content/MascotBubble.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const EMO = {
  neutral_alerta: {
    ring: 'var(--brand-primary)',
    icon: 'eye'
  },
  feliz_acierto: {
    ring: 'var(--verified-success)',
    icon: 'check'
  },
  preocupado_error: {
    ring: 'var(--alert-phishing)',
    icon: 'alert'
  },
  sorprendido_pista: {
    ring: 'var(--xp-gold)',
    icon: 'search'
  },
  celebrando_racha: {
    ring: 'var(--streak-fire)',
    icon: 'flame'
  }
};

/**
 * Lupo mascot speech bubble — the owl detective delivering a tip or feedback.
 * NOTE: no mascot artwork is shipped with this DS; pass `mascotSrc` for the real Lupo, else a placeholder avatar renders.
 */
function MascotBubble({
  children,
  emotion = 'neutral_alerta',
  mascotSrc,
  side = 'left',
  name = 'Lupo',
  style,
  ...rest
}) {
  const e = EMO[emotion] || EMO.neutral_alerta;
  const avatar = /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      width: 56,
      height: 56,
      borderRadius: '999px',
      background: 'var(--bg-secondary)',
      border: `3px solid ${e.ring}`,
      display: 'grid',
      placeItems: 'center',
      boxShadow: 'var(--shadow-floating-mascot)',
      overflow: 'hidden'
    }
  }, mascotSrc ? /*#__PURE__*/React.createElement("img", {
    src: mascotSrc,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: e.icon,
    size: 26,
    color: e.ring,
    strokeWidth: 2.4
  }));
  const bubble = /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'var(--bg-primary)',
      border: '2px solid var(--border-subtle)',
      borderRadius: '18px',
      padding: '12px 16px',
      boxShadow: 'var(--shadow-card-resting)',
      maxWidth: 260
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '13px',
      color: e.ring,
      marginBottom: 2
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '15px',
      lineHeight: '21px',
      color: 'var(--text-primary)'
    }
  }, children), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 20,
      [side === 'left' ? 'left' : 'right']: -8,
      width: 14,
      height: 14,
      background: 'var(--bg-primary)',
      borderLeft: '2px solid var(--border-subtle)',
      borderBottom: '2px solid var(--border-subtle)',
      transform: 'rotate(45deg)'
    }
  }));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: '14px',
      flexDirection: side === 'left' ? 'row' : 'row-reverse',
      ...style
    }
  }, rest), avatar, bubble);
}
Object.assign(__ds_scope, { MascotBubble });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/MascotBubble.jsx", error: String((e && e.message) || e) }); }

// components/core/ButtonPrimary.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Primary action button — Baloo 2, brand blue, 20px radius, chunky and high-contrast.
 * Full-width by default (primary CTAs in Lupo span the screen).
 */
function ButtonPrimary({
  children,
  onClick,
  disabled = false,
  loading = false,
  icon,
  fullWidth = true,
  type = 'button',
  style,
  ...rest
}) {
  const isOff = disabled || loading;
  const [pressed, setPressed] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    onClick: isOff ? undefined : onClick,
    disabled: isOff,
    onPointerDown: () => setPressed(true),
    onPointerUp: () => setPressed(false),
    onPointerLeave: () => setPressed(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      width: fullWidth ? '100%' : 'auto',
      minHeight: '52px',
      padding: '14px 24px',
      boxSizing: 'border-box',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '18px',
      lineHeight: 1,
      color: 'var(--text-inverse)',
      background: isOff ? 'var(--disabled)' : 'var(--brand-primary)',
      border: 'none',
      borderRadius: 'var(--radius-button)',
      boxShadow: isOff ? 'none' : pressed ? 'var(--shadow-card-pressed)' : '0 4px 0 var(--brand-primary-dark), var(--shadow-card-resting)',
      transform: pressed && !isOff ? 'translateY(2px)' : 'none',
      cursor: isOff ? 'not-allowed' : 'pointer',
      transition: 'transform .06s ease, box-shadow .06s ease, background .15s ease',
      ...style
    }
  }, rest), loading ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 22,
    style: {
      animation: 'lupo-spin 1s linear infinite'
    }
  }) : icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 22
  }), loading ? 'Investigando…' : children, /*#__PURE__*/React.createElement("style", null, '@keyframes lupo-spin{to{transform:rotate(360deg)}}'));
}
Object.assign(__ds_scope, { ButtonPrimary });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ButtonPrimary.jsx", error: String((e && e.message) || e) }); }

// components/core/ButtonSecondary.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Secondary action button — outlined, brand-blue on white. Lower emphasis than ButtonPrimary.
 */
function ButtonSecondary({
  children,
  onClick,
  disabled = false,
  icon,
  fullWidth = true,
  type = 'button',
  style,
  ...rest
}) {
  const [pressed, setPressed] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    onPointerDown: () => setPressed(true),
    onPointerUp: () => setPressed(false),
    onPointerLeave: () => setPressed(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      width: fullWidth ? '100%' : 'auto',
      minHeight: '52px',
      padding: '13px 24px',
      boxSizing: 'border-box',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '18px',
      lineHeight: 1,
      color: disabled ? 'var(--disabled)' : 'var(--brand-primary)',
      background: pressed && !disabled ? 'var(--bg-secondary)' : 'var(--bg-primary)',
      border: `2px solid ${disabled ? 'var(--disabled)' : 'var(--brand-primary)'}`,
      borderRadius: 'var(--radius-button)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'background .12s ease, color .15s ease',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 22
  }), children);
}
Object.assign(__ds_scope, { ButtonSecondary });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ButtonSecondary.jsx", error: String((e && e.message) || e) }); }

// components/game/LupasCounter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Lives counter — Lupo uses lupas (magnifying glasses) instead of hearts. Filled = remaining, dim = spent.
 */
function LupasCounter({
  count = 5,
  max = 5,
  size = 'md',
  showNumber = false,
  style,
  ...rest
}) {
  const scale = size === 'lg' ? 1.35 : size === 'sm' ? 0.8 : 1;
  const icons = [];
  for (let i = 0; i < max; i++) {
    const on = i < count;
    icons.push(/*#__PURE__*/React.createElement(__ds_scope.Icon, {
      key: i,
      name: "search",
      size: 22 * scale,
      strokeWidth: 2.2,
      color: on ? 'var(--hearts-life)' : 'var(--disabled)',
      style: {
        filter: on ? 'drop-shadow(0 1px 1px rgba(255,77,109,.35))' : 'none',
        transition: 'color .2s ease'
      }
    }));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: `${4 * scale}px`,
      ...style
    }
  }, rest), showNumber ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 22 * scale,
    strokeWidth: 2.2,
    color: "var(--hearts-life)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: `${20 * scale}px`,
      color: 'var(--hearts-life)',
      lineHeight: 1
    }
  }, count)) : icons);
}
Object.assign(__ds_scope, { LupasCounter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/game/LupasCounter.jsx", error: String((e && e.message) || e) }); }

// components/game/ProgressPathThread.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Red investigation thread connecting two polaroid nodes — organic curve, pin dots at each end.
 * Drop it between PolaroidNodes on the corkboard trail. `bend` offsets the midpoint left/right.
 */
function ProgressPathThread({
  width = 120,
  height = 90,
  bend = 40,
  dashed = false,
  active = true,
  style,
  ...rest
}) {
  const color = active ? 'var(--border-thread-red)' : 'var(--disabled)';
  const midX = width / 2 + bend;
  const d = `M ${width / 2} 6 C ${midX} ${height * 0.35}, ${midX} ${height * 0.65}, ${width / 2} ${height - 6}`;
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: width,
    height: height,
    viewBox: `0 0 ${width} ${height}`,
    style: {
      display: 'block',
      overflow: 'visible',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: d,
    fill: "none",
    stroke: color,
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeDasharray: dashed ? '2 8' : 'none',
    opacity: active ? 0.9 : 0.6
  }), /*#__PURE__*/React.createElement("circle", {
    cx: width / 2,
    cy: "6",
    r: "4",
    fill: color
  }), /*#__PURE__*/React.createElement("circle", {
    cx: width / 2,
    cy: height - 6,
    r: "4",
    fill: color
  }));
}
Object.assign(__ds_scope, { ProgressPathThread });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/game/ProgressPathThread.jsx", error: String((e && e.message) || e) }); }

// components/game/StampBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VARIANTS = {
  verificado: {
    label: 'VERIFICADO',
    color: 'var(--verified-success)',
    icon: 'check'
  },
  falso: {
    label: 'FALSO',
    color: 'var(--alert-phishing)',
    icon: 'alert'
  },
  sospechoso: {
    label: 'SOSPECHOSO',
    color: 'var(--suspicious-amber)',
    icon: 'alert'
  }
};

/**
 * Rubber-stamp badge — the "VERIFICADO / FALSO / SOSPECHOSO" seal that punches the screen after an answer.
 * Colour-blind safe: always icon + text, never colour alone. Set `animate` for the 200ms stamp impact.
 */
function StampBadge({
  variant = 'verificado',
  size = 'md',
  animate = false,
  rotate = -8,
  style,
  ...rest
}) {
  const v = VARIANTS[variant] || VARIANTS.verificado;
  const scale = size === 'lg' ? 1.5 : size === 'sm' ? 0.7 : 1;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: `${8 * scale}px`,
      padding: `${8 * scale}px ${16 * scale}px`,
      boxSizing: 'border-box',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      letterSpacing: '0.06em',
      fontSize: `${22 * scale}px`,
      lineHeight: 1,
      color: v.color,
      border: `${3 * scale}px solid ${v.color}`,
      borderRadius: `${10 * scale}px`,
      background: 'rgba(255,255,255,0.72)',
      textTransform: 'uppercase',
      transform: `rotate(${rotate}deg)`,
      opacity: 0.92,
      animation: animate ? 'lupo-stamp .2s cubic-bezier(.2,1.4,.4,1) both' : 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: v.icon,
    size: 22 * scale,
    strokeWidth: 2.5
  }), v.label, /*#__PURE__*/React.createElement("style", null, '@keyframes lupo-stamp{0%{transform:rotate(var(--r,-8deg)) scale(2.4);opacity:0}60%{opacity:1}100%{transform:rotate(-8deg) scale(1);opacity:.92}}@media(prefers-reduced-motion:reduce){[style*="lupo-stamp"]{animation:none!important}}'));
}
Object.assign(__ds_scope, { StampBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/game/StampBadge.jsx", error: String((e && e.message) || e) }); }

// components/game/PolaroidNode.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Polaroid case node — the signature progress marker on the corkboard trail.
 * States: completado (stamped photo), actual (pulsing brand border + Investigar), bloqueado (greyscale + lock).
 */
function PolaroidNode({
  state = 'bloqueado',
  caption = 'Caso',
  verdict = 'verificado',
  photo,
  onInvestigate,
  tilt = -3,
  style,
  ...rest
}) {
  const isLocked = state === 'bloqueado';
  const isCurrent = state === 'actual';
  const isDone = state === 'completado';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      display: 'inline-block',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '164px',
      background: 'var(--bg-primary)',
      borderRadius: 'var(--radius-polaroid)',
      padding: '10px 10px 14px',
      boxSizing: 'border-box',
      boxShadow: isCurrent ? '0 0 0 4px var(--brand-primary), var(--shadow-polaroid)' : 'var(--shadow-polaroid)',
      transform: `rotate(${tilt}deg)`,
      filter: isLocked ? 'grayscale(1) opacity(.7)' : 'none',
      animation: isCurrent ? 'lupo-pulse 1.6s ease-in-out infinite' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '116px',
      borderRadius: '4px',
      overflow: 'hidden',
      background: photo ? `#ccc center/cover url(${photo})` : 'linear-gradient(135deg,#c9d3e8,#e7ecf5)',
      display: 'grid',
      placeItems: 'center'
    }
  }, !photo && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: isLocked ? 'lock' : 'search',
    size: 34,
    color: "var(--brand-primary-dark)",
    style: {
      opacity: .5
    }
  }), isDone && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.StampBadge, {
    variant: verdict,
    size: "sm"
  })), isLocked && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 6,
      right: 6,
      background: 'rgba(26,26,46,.75)',
      borderRadius: '999px',
      padding: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "lock",
    size: 16,
    color: "#fff"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '14px',
      color: 'var(--text-primary)',
      textAlign: 'center',
      marginTop: '8px',
      lineHeight: 1.15
    }
  }, caption)), isCurrent && /*#__PURE__*/React.createElement("button", {
    onClick: onInvestigate,
    style: {
      position: 'absolute',
      left: '50%',
      bottom: '-16px',
      transform: 'translateX(-50%)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      whiteSpace: 'nowrap',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '15px',
      color: '#fff',
      background: 'var(--brand-primary)',
      border: 'none',
      borderRadius: '999px',
      padding: '9px 16px',
      cursor: 'pointer',
      boxShadow: '0 4px 0 var(--brand-primary-dark), var(--shadow-floating-mascot)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 16
  }), " Investigar"), /*#__PURE__*/React.createElement("style", null, '@keyframes lupo-pulse{0%,100%{box-shadow:0 0 0 4px var(--brand-primary),var(--shadow-polaroid)}50%{box-shadow:0 0 0 8px rgba(52,87,213,.28),var(--shadow-polaroid)}}@media(prefers-reduced-motion:reduce){[style*="lupo-pulse"]{animation:none!important}}'));
}
Object.assign(__ds_scope, { PolaroidNode });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/game/PolaroidNode.jsx", error: String((e && e.message) || e) }); }

// components/game/StreakFlame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Streak flame — the "Racha de Vigilancia". Flame scales with consecutive days; pill shows the count.
 */
function StreakFlame({
  days = 0,
  size = 'md',
  style,
  ...rest
}) {
  const scale = size === 'lg' ? 1.4 : size === 'sm' ? 0.8 : 1;
  // Flame grows with streak length, capped.
  const flame = Math.min(1 + Math.min(days, 60) / 60 * 0.9, 1.9) * scale;
  const active = days > 0;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: `${6 * scale}px`,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'grid',
      placeItems: 'center',
      width: `${34 * scale}px`,
      height: `${34 * scale}px`
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "flame",
    size: 26 * flame,
    color: active ? 'var(--streak-fire)' : 'var(--disabled)',
    strokeWidth: 2,
    style: {
      fill: active ? 'var(--streak-fire)' : 'none',
      filter: active ? 'drop-shadow(0 0 6px rgba(255,140,66,.5))' : 'none'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: `${20 * scale}px`,
      color: active ? 'var(--streak-fire)' : 'var(--text-secondary)',
      lineHeight: 1
    }
  }, days));
}
Object.assign(__ds_scope, { StreakFlame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/game/StreakFlame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lupo_app/ChallengeSwipeScreen.jsx
try { (() => {
// Reto: Verdadero o Falso (swipe).
const {
  EvidenceCard,
  StampBadge,
  Icon
} = window.LupoDesignSystem_b521a9;
function SegmentedProgress({
  total,
  done
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 5
    }
  }, Array.from({
    length: total
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      height: 8,
      borderRadius: 999,
      background: i < done ? 'var(--verified-success)' : 'var(--border-subtle)'
    }
  })));
}
function ChallengeSwipeScreen({
  onAnswer
}) {
  const [tilt, setTilt] = React.useState(0);
  const answer = dir => {
    setTilt(dir === 'right' ? 16 : -16);
    setTimeout(() => onAnswer && onAnswer(dir === 'left'), 260);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      padding: '46px 20px 24px',
      background: 'var(--bg-secondary)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 24,
    color: "var(--text-secondary)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(SegmentedProgress, {
    total: 5,
    done: 2
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 20,
      color: 'var(--text-primary)',
      textAlign: 'center',
      marginBottom: 4
    }
  }, "\xBFEs real o phishing?"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-secondary)',
      textAlign: 'center',
      marginBottom: 20
    }
  }, "Desliza para decidir"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: 1,
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: 300,
      transform: 'rotate(-4deg) translateY(10px) scale(.95)',
      opacity: .5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 300,
      background: '#fff',
      borderRadius: 14,
      boxShadow: 'var(--shadow-card-resting)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      transform: `rotate(${tilt}deg) translateX(${tilt * 5}px)`,
      transition: 'transform .26s ease'
    }
  }, /*#__PURE__*/React.createElement(EvidenceCard, {
    kind: "chat",
    sender: "Banco Nacional",
    handle: "+57 300 555 0198",
    time: "10:02",
    flags: ["Número desconocido", "Enlace acortado"]
  }, "Detectamos un acceso sospechoso. Verifica tu identidad en", ' ', /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--alert-phishing)'
    }
  }, "bit.ly/bn-verifica"), " o tu cuenta ser\xE1 suspendida hoy."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => answer('left'),
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
      background: '#fff',
      border: '2px solid var(--alert-phishing)',
      borderRadius: 20,
      padding: '14px 0',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(StampBadge, {
    variant: "falso",
    size: "sm",
    rotate: 0
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, "desliza \u2190")), /*#__PURE__*/React.createElement("button", {
    onClick: () => answer('right'),
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
      background: '#fff',
      border: '2px solid var(--verified-success)',
      borderRadius: 20,
      padding: '14px 0',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(StampBadge, {
    variant: "verificado",
    size: "sm",
    rotate: 0
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, "desliza \u2192"))));
}
Object.assign(window, {
  ChallengeSwipeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lupo_app/ChallengeSwipeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lupo_app/Chrome.jsx
try { (() => {
// Shared chrome for the Lupo app kit: PhoneFrame, AppHeader, BottomNav.
const {
  Icon,
  StreakFlame,
  LupasCounter
} = window.LupoDesignSystem_b521a9;
function PhoneFrame({
  children,
  bg = 'var(--bg-primary)'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 390,
      height: 800,
      borderRadius: 44,
      background: '#0b0b16',
      padding: 10,
      boxShadow: '0 30px 70px rgba(26,26,46,.35)',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: '100%',
      borderRadius: 34,
      overflow: 'hidden',
      background: bg,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 130,
      height: 26,
      background: '#0b0b16',
      borderRadius: '0 0 16px 16px',
      zIndex: 20
    }
  }), children));
}
function AppHeader({
  streak = 12,
  lupas = 5,
  xp = 1240
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '38px 18px 12px',
      background: 'rgba(255,255,255,.82)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--border-hairline)',
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: '999px',
      background: 'var(--brand-primary)',
      display: 'grid',
      placeItems: 'center',
      color: '#fff',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "user",
    size: 20
  })), /*#__PURE__*/React.createElement(StreakFlame, {
    days: streak,
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(LupasCounter, {
    count: lupas,
    showNumber: true,
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: '999px',
      background: 'var(--xp-gold)',
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 11,
      color: 'var(--text-primary)'
    }
  }, "PP"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 17,
      color: 'var(--text-primary)'
    }
  }, xp.toLocaleString()))));
}
function BottomNav({
  active = 'map',
  onNav
}) {
  const tabs = [{
    id: 'map',
    icon: 'map',
    label: 'Mapa'
  }, {
    id: 'leagues',
    icon: 'trophy',
    label: 'Ligas'
  }, {
    id: 'practice',
    icon: 'dumbbell',
    label: 'Práctica'
  }, {
    id: 'profile',
    icon: 'user',
    label: 'Perfil'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      background: 'var(--bg-primary)',
      borderTop: '1px solid var(--border-subtle)',
      padding: '8px 6px 20px',
      zIndex: 10
    }
  }, tabs.map(t => {
    const on = t.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: () => onNav && onNav(t.id),
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '6px 0',
        color: on ? 'var(--brand-primary)' : 'var(--text-secondary)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: t.icon,
      size: 24,
      strokeWidth: on ? 2.6 : 2
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: on ? 700 : 600,
        fontSize: 11
      }
    }, t.label));
  }));
}
Object.assign(window, {
  PhoneFrame,
  AppHeader,
  BottomNav
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lupo_app/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lupo_app/FeedbackScreen.jsx
try { (() => {
// Feedback: acierto / error.
const {
  StampBadge,
  MascotBubble,
  ButtonPrimary,
  ButtonSecondary,
  Icon
} = window.LupoDesignSystem_b521a9;
function FeedbackScreen({
  correct = true,
  onNext
}) {
  const [xp, setXp] = React.useState(0);
  React.useEffect(() => {
    if (!correct) return;
    let n = 0;
    const t = setInterval(() => {
      n += 2;
      setXp(Math.min(n, 30));
      if (n >= 30) clearInterval(t);
    }, 24);
    return () => clearInterval(t);
  }, [correct]);
  const bg = correct ? 'var(--verified-success)' : 'var(--bg-secondary)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: bg
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 18,
      padding: 24
    }
  }, correct ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StampBadge, {
    variant: "verificado",
    size: "lg",
    animate: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 30,
      color: '#fff'
    }
  }, "\xA1Detectado!"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      background: 'rgba(255,255,255,.2)',
      borderRadius: 999,
      padding: '8px 18px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: 999,
      background: 'var(--xp-gold)',
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 11,
      color: 'var(--text-primary)'
    }
  }, "PP"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 24,
      color: '#fff'
    }
  }, "+", xp, " Puntos de Pista")), /*#__PURE__*/React.createElement(MascotBubble, {
    emotion: "celebrando_racha"
  }, "\xA1Racha de 13 d\xEDas! Ese enlace acortado ocultaba el dominio real.")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 96,
      height: 96,
      borderRadius: 999,
      background: '#fff',
      display: 'grid',
      placeItems: 'center',
      boxShadow: 'var(--shadow-card-resting)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "alert",
    size: 48,
    color: "var(--alert-phishing)",
    strokeWidth: 2.4
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 26,
      color: 'var(--text-primary)'
    }
  }, "Casi\u2026 era phishing"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      color: 'var(--hearts-life)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 20,
    color: "var(--hearts-life)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 16
    }
  }, "\u22121 lupa")), /*#__PURE__*/React.createElement(MascotBubble, {
    emotion: "preocupado_error"
  }, "Se te pas\xF3 el remitente: un banco real no escribe desde un n\xFAmero personal."))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: '24px 24px 0 0',
      padding: '20px 20px 26px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      boxShadow: '0 -8px 24px rgba(26,26,46,.12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      background: 'var(--bg-secondary)',
      borderRadius: 14,
      padding: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "eye",
    size: 22,
    color: "var(--brand-primary)",
    style: {
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: '21px',
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement("b", null, "Se\xF1al clave:"), " los enlaces acortados (bit.ly) esconden el destino real. Pasa el dedo sobre el link antes de tocar.")), correct ? /*#__PURE__*/React.createElement(ButtonPrimary, {
    icon: "chevronRight",
    onClick: onNext
  }, "Siguiente caso") : /*#__PURE__*/React.createElement(ButtonSecondary, {
    onClick: onNext
  }, "Entendido, sigamos")));
}
Object.assign(window, {
  FeedbackScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lupo_app/FeedbackScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lupo_app/HomeMapScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Home — Mapa de Casos: the signature corkboard trail.
const {
  PolaroidNode,
  ProgressPathThread,
  MascotBubble
} = window.LupoDesignSystem_b521a9;
function SectionBanner({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      margin: '6px 0 2px',
      alignSelf: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'repeating-linear-gradient(45deg, #1A1A2E 0 14px, var(--xp-gold) 14px 28px)',
      height: 8,
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 15,
      color: 'var(--text-primary)',
      background: 'var(--xp-gold)',
      display: 'inline-block',
      padding: '4px 16px',
      borderRadius: 999,
      margin: '8px auto 0',
      position: 'relative',
      left: '50%',
      transform: 'translateX(-50%)',
      boxShadow: 'var(--shadow-card-resting)'
    }
  }, children));
}
function HomeMapScreen({
  onInvestigate
}) {
  const nodes = [{
    state: 'completado',
    caption: 'Caso #10 · SMS bancario',
    verdict: 'falso',
    tilt: -4,
    x: -70
  }, {
    state: 'completado',
    caption: 'Caso #11 · Sorteo falso',
    verdict: 'verificado',
    tilt: 3,
    x: 60
  }, {
    state: 'completado',
    caption: 'Caso #12 · Soporte técnico',
    verdict: 'falso',
    tilt: -2,
    x: -50
  }, {
    state: 'actual',
    caption: 'Caso #13 · "Ganaste un premio"',
    tilt: 2,
    x: 40
  }, {
    state: 'bloqueado',
    caption: 'Caso #14 · Deepfake',
    tilt: -3,
    x: -60
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      background: 'var(--bg-corkboard)',
      backgroundImage: 'radial-gradient(rgba(26,26,46,.05) 1px, transparent 1.4px)',
      backgroundSize: '10px 10px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '18px 0 40px'
    }
  }, /*#__PURE__*/React.createElement(MascotBubble, {
    emotion: "neutral_alerta"
  }, "Tip del d\xEDa: los bancos nunca piden tu clave por SMS."), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 14
    }
  }), nodes.map((n, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i === 4 && /*#__PURE__*/React.createElement(SectionBanner, null, "Unidad 3 \xB7 Estafas por WhatsApp"), /*#__PURE__*/React.createElement("div", {
    style: {
      transform: `translateX(${n.x}px)`,
      zIndex: nodes.length - i
    }
  }, /*#__PURE__*/React.createElement(PolaroidNode, _extends({}, n, {
    onInvestigate: onInvestigate
  }))), i < nodes.length - 1 && /*#__PURE__*/React.createElement(ProgressPathThread, {
    width: 130,
    height: 70,
    bend: (nodes[i + 1].x - n.x) / 3,
    dashed: nodes[i + 1].state === 'bloqueado',
    active: nodes[i + 1].state !== 'bloqueado'
  })))));
}
Object.assign(window, {
  HomeMapScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lupo_app/HomeMapScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lupo_app/LeaguesScreen.jsx
try { (() => {
// Ligas de Detectives — leaderboard semanal.
const {
  Icon
} = window.LupoDesignSystem_b521a9;
function LeaguesScreen() {
  const rows = [{
    pos: 1,
    name: 'Marisol V.',
    xp: 980,
    me: false
  }, {
    pos: 2,
    name: 'Andrés P.',
    xp: 910,
    me: false
  }, {
    pos: 3,
    name: 'Tú',
    xp: 870,
    me: true
  }, {
    pos: 4,
    name: 'Camila R.',
    xp: 640,
    me: false
  }, {
    pos: 5,
    name: 'Don Ernesto',
    xp: 590,
    me: false
  }, {
    pos: 6,
    name: 'Lucía M.',
    xp: 420,
    me: false
  }];
  const zoneColor = pos => pos <= 3 ? 'var(--xp-gold)' : pos >= 6 ? 'var(--alert-phishing)' : 'transparent';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      background: 'var(--bg-secondary)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(160deg, var(--brand-primary), var(--brand-primary-dark))',
      padding: '52px 20px 28px',
      textAlign: 'center',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: 999,
      background: 'rgba(255,255,255,.15)',
      display: 'grid',
      placeItems: 'center',
      margin: '0 auto 10px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trophy",
    size: 34,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 24
    }
  }, "Liga Plata"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      opacity: .85,
      marginTop: 2
    }
  }, "Top 3 ascienden \xB7 quedan 3 d\xEDas")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, rows.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.pos,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: r.me ? 'var(--brand-primary)' : '#fff',
      color: r.me ? '#fff' : 'var(--text-primary)',
      borderRadius: 14,
      padding: '12px 14px',
      boxShadow: 'var(--shadow-card-resting)',
      border: r.me ? 'none' : '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 26,
      textAlign: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 16,
      color: r.me ? '#fff' : zoneColor(r.pos) !== 'transparent' ? zoneColor(r.pos) : 'var(--text-secondary)'
    }
  }, r.pos), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 999,
      background: r.me ? 'rgba(255,255,255,.2)' : 'var(--bg-secondary)',
      display: 'grid',
      placeItems: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "user",
    size: 20,
    color: r.me ? '#fff' : 'var(--text-secondary)'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 16
    }
  }, r.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 15
    }
  }, r.xp), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      opacity: .7
    }
  }, "PP"))))));
}
Object.assign(window, {
  LeaguesScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lupo_app/LeaguesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lupo_app/OnboardingScreen.jsx
try { (() => {
// Onboarding welcome screen.
const {
  ButtonPrimary,
  MascotBubble,
  Icon
} = window.LupoDesignSystem_b521a9;
function OnboardingScreen({
  onStart
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: 'var(--bg-primary)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '52%',
      background: 'var(--bg-corkboard)',
      display: 'grid',
      placeItems: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,.35), transparent 60%)'
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: "300",
    height: "300",
    style: {
      position: 'absolute',
      opacity: .5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M60 70 C 120 120, 180 90, 240 150 S 200 240, 120 220",
    fill: "none",
    stroke: "var(--border-thread-red)",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeDasharray: "1 7"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement(MascotBubble, {
    emotion: "sorprendido_pista"
  }, "\xA1Tenemos un caso nuevo, detective!")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 46,
      left: 26,
      width: 78,
      background: '#fff',
      borderRadius: 6,
      padding: 6,
      transform: 'rotate(-9deg)',
      boxShadow: 'var(--shadow-polaroid)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      borderRadius: 3,
      background: 'linear-gradient(135deg,#c9d3e8,#e7ecf5)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "alert",
    size: 22,
    color: "var(--alert-phishing)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 30,
      right: 24,
      width: 78,
      background: '#fff',
      borderRadius: 6,
      padding: 6,
      transform: 'rotate(7deg)',
      boxShadow: 'var(--shadow-polaroid)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      borderRadius: 3,
      background: 'linear-gradient(135deg,#c9d3e8,#e7ecf5)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shieldCheck",
    size: 22,
    color: "var(--verified-success)"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      padding: '28px 24px 24px',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 30,
      lineHeight: '38px',
      color: 'var(--text-primary)'
    }
  }, "Aprende a detectar lo falso, un caso a la vez"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      lineHeight: '24px',
      color: 'var(--text-secondary)'
    }
  }, "Casos reales de phishing y fake news, resueltos como un juego."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(ButtonPrimary, {
    icon: "search",
    onClick: onStart
  }, "Empezar la investigaci\xF3n"), /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'none',
      border: 'none',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 15,
      color: 'var(--brand-primary)',
      cursor: 'pointer'
    }
  }, "Ya tengo cuenta"))));
}
Object.assign(window, {
  OnboardingScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lupo_app/OnboardingScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lupo_app/ProfileScreen.jsx
try { (() => {
// Perfil / Insignias.
const {
  Icon,
  StreakFlame
} = window.LupoDesignSystem_b521a9;
function ProfileScreen() {
  const stats = [{
    label: 'Casos resueltos',
    value: '128'
  }, {
    label: 'Precisión',
    value: '86%'
  }, {
    label: 'Racha máx.',
    value: '21'
  }];
  const badges = [{
    icon: 'shieldCheck',
    label: 'Cazador de Phishing',
    on: true,
    color: 'var(--verified-success)'
  }, {
    icon: 'eye',
    label: 'Ojo de Águila',
    on: true,
    color: 'var(--brand-primary)'
  }, {
    icon: 'clock',
    label: 'Verificador Semanal',
    on: true,
    color: 'var(--xp-gold)'
  }, {
    icon: 'target',
    label: 'Detector de Deepfakes',
    on: false,
    color: 'var(--text-secondary)'
  }, {
    icon: 'flame',
    label: 'Racha de 30',
    on: false,
    color: 'var(--text-secondary)'
  }, {
    icon: 'trophy',
    label: 'Liga Oro',
    on: false,
    color: 'var(--text-secondary)'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      background: 'var(--bg-secondary)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      padding: '52px 20px 22px',
      textAlign: 'center',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 84,
      height: 84,
      borderRadius: 999,
      background: 'var(--brand-primary)',
      display: 'grid',
      placeItems: 'center',
      margin: '0 auto',
      boxShadow: 'var(--shadow-floating-mascot)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "user",
    size: 44,
    color: "#fff"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -4,
      right: -4,
      background: 'var(--xp-gold)',
      borderRadius: 999,
      padding: 5,
      border: '2px solid #fff'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 16,
    color: "var(--text-primary)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 22,
      color: 'var(--text-primary)',
      marginTop: 10
    }
  }, "Detective Ana"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: 'var(--bg-secondary)',
      borderRadius: 999,
      padding: '4px 12px',
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trophy",
    size: 14,
    color: "var(--xp-gold)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, "Liga Plata"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      padding: 16
    }
  }, stats.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.label,
    style: {
      flex: 1,
      background: '#fff',
      borderRadius: 14,
      padding: '14px 8px',
      textAlign: 'center',
      boxShadow: 'var(--shadow-card-resting)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 22,
      color: 'var(--brand-primary)'
    }
  }, s.value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      color: 'var(--text-secondary)',
      marginTop: 2
    }
  }, s.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 17,
      color: 'var(--text-primary)',
      marginBottom: 10
    }
  }, "Insignias"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 10
    }
  }, badges.map(b => /*#__PURE__*/React.createElement("div", {
    key: b.label,
    style: {
      background: '#fff',
      borderRadius: 14,
      padding: '14px 8px',
      textAlign: 'center',
      boxShadow: 'var(--shadow-card-resting)',
      opacity: b.on ? 1 : .55
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 46,
      height: 46,
      borderRadius: 999,
      margin: '0 auto',
      display: 'grid',
      placeItems: 'center',
      background: b.on ? 'color-mix(in srgb, ' + b.color + ' 15%, #fff)' : 'var(--bg-secondary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: b.icon,
    size: 24,
    color: b.color,
    strokeWidth: 2.2
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 11,
      color: 'var(--text-primary)',
      marginTop: 8,
      lineHeight: 1.15
    }
  }, b.label))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px 24px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      borderRadius: 14,
      padding: 14,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "eye",
    size: 20,
    color: "var(--text-secondary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--text-primary)'
    }
  }, "Modo texto grande \xB7 alto contraste"), /*#__PURE__*/React.createElement(Icon, {
    name: "chevronRight",
    size: 18,
    color: "var(--text-secondary)",
    style: {
      marginLeft: 'auto'
    }
  }))));
}
Object.assign(window, {
  ProfileScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lupo_app/ProfileScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.EvidenceCard = __ds_scope.EvidenceCard;

__ds_ns.MascotBubble = __ds_scope.MascotBubble;

__ds_ns.ButtonPrimary = __ds_scope.ButtonPrimary;

__ds_ns.ButtonSecondary = __ds_scope.ButtonSecondary;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.LupasCounter = __ds_scope.LupasCounter;

__ds_ns.PolaroidNode = __ds_scope.PolaroidNode;

__ds_ns.ProgressPathThread = __ds_scope.ProgressPathThread;

__ds_ns.StampBadge = __ds_scope.StampBadge;

__ds_ns.StreakFlame = __ds_scope.StreakFlame;

})();
