// Parses the eight mascot SVGs into a typed data module the React component
// walks at runtime. Generated rather than hand-transcribed: the path data is
// long and a single mistyped coordinate is invisible until it renders wrong.
const fs = require('fs');
const path = require('path');

// Paths are resolved from the project root (mobile/), so the script runs the
// same way from anywhere: `node scripts/gen-mascot-data.js`
const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'assets/mascotas');
const OUT = path.join(ROOT, 'src/components/mascot/mascotData.ts');

const CHARACTERS = { lupo: 'ave', perro: 'perro' };
const EMOTIONS = ['neutral', 'acierto', 'error', 'parcial'];

function parseAttrs(raw) {
  const attrs = {};
  const re = /([\w:-]+)\s*=\s*"([^"]*)"/g;
  let m;
  while ((m = re.exec(raw))) attrs[m[1]] = m[2];
  return attrs;
}

function parseRotate(transform) {
  if (!transform) return null;
  const m = /rotate\(\s*(-?[\d.]+)\s+(-?[\d.]+)\s+(-?[\d.]+)\s*\)/.exec(transform);
  if (!m) return null;
  return { deg: parseFloat(m[1]), x: parseFloat(m[2]), y: parseFloat(m[3]) };
}

function nodeFrom(tag, attrs) {
  const node = { id: attrs.id || null, kind: tag };
  if (attrs.d) node.d = attrs.d;
  if (attrs.cx !== undefined) node.cx = parseFloat(attrs.cx);
  if (attrs.cy !== undefined) node.cy = parseFloat(attrs.cy);
  if (attrs.r !== undefined) node.r = parseFloat(attrs.r);
  if (attrs.rx !== undefined) node.rx = parseFloat(attrs.rx);
  if (attrs.ry !== undefined) node.ry = parseFloat(attrs.ry);
  if (attrs.fill) node.fill = attrs.fill;
  const rot = parseRotate(attrs.transform);
  if (rot) node.rotate = rot;
  return node;
}

function parseSvg(text) {
  const viewBox = /viewBox="([^"]+)"/.exec(text)[1].split(/\s+/).map(Number);
  const root = { kind: 'g', id: '__root', children: [] };
  const stack = [root];

  // Matches an opening <g>, a self-closing shape, or a closing </g>.
  const re = /<(g|path|circle|ellipse)\b([^>]*?)(\/?)>|<\/g>/g;
  let m;
  while ((m = re.exec(text))) {
    if (m[0] === '</g>') {
      if (stack.length > 1) stack.pop();
      continue;
    }
    const tag = m[1];
    const attrs = parseAttrs(m[2]);
    const selfClosing = m[3] === '/';
    const node = nodeFrom(tag, attrs);
    if (tag === 'g') {
      node.children = [];
      stack[stack.length - 1].children.push(node);
      if (!selfClosing) stack.push(node);
    } else {
      stack[stack.length - 1].children.push(node);
    }
  }
  return { viewBox: { w: viewBox[2], h: viewBox[3] }, children: root.children };
}

const data = {};
for (const [character, prefix] of Object.entries(CHARACTERS)) {
  data[character] = {};
  for (const emotion of EMOTIONS) {
    const file = path.join(SRC, `${prefix}-${emotion}.svg`);
    data[character][emotion] = parseSvg(fs.readFileSync(file, 'utf8'));
  }
}

// Sanity: every emotion of a character must agree on the viewBox, or the
// component would silently rescale when the emotion changes.
for (const [character, byEmotion] of Object.entries(data)) {
  const boxes = new Set(Object.values(byEmotion).map((v) => `${v.viewBox.w}x${v.viewBox.h}`));
  if (boxes.size !== 1) throw new Error(`${character}: viewBox inconsistente -> ${[...boxes].join(', ')}`);
}

const header = `// GENERATED from assets/mascotas/*.svg — do not edit by hand.
// Regenerate with \`node scripts/gen-mascot-data.js\` if the source art changes.
// Each emotion is a full node tree; the renderer diffs nothing, it just walks
// the tree for the requested emotion and injects animated transforms into the
// parts named in ANIMATED_PARTS (see MascotSvg.tsx).

export type MascotNode = {
  id: string | null;
  kind: 'g' | 'path' | 'circle' | 'ellipse';
  d?: string;
  cx?: number;
  cy?: number;
  r?: number;
  rx?: number;
  ry?: number;
  fill?: string;
  rotate?: { deg: number; x: number; y: number };
  children?: MascotNode[];
};

export type MascotArt = {
  viewBox: { w: number; h: number };
  children: MascotNode[];
};

`;

const body = `export const MASCOT_ART = ${JSON.stringify(data, null, 2)} as const satisfies Record<string, Record<string, MascotArt>>;\n`;

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, header + body, 'utf8');

// Report what was found so the animation layer can be written against reality.
for (const [character, byEmotion] of Object.entries(data)) {
  console.log('=== ' + character + '  viewBox ' + byEmotion.neutral.viewBox.w + 'x' + byEmotion.neutral.viewBox.h);
  for (const emotion of EMOTIONS) {
    const ids = [];
    const walk = (nodes) => nodes.forEach((n) => { if (n.id) ids.push(n.id + (n.rotate ? `@${n.rotate.deg}` : '')); if (n.children) walk(n.children); });
    walk(byEmotion[emotion].children);
    console.log('  ' + emotion.padEnd(8) + ': ' + ids.join(' '));
  }
}
console.log('\nEscrito: ' + OUT);
