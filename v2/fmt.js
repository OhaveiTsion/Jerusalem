/* Mise en forme du texte du site Ohavei Tsion (v2)
 * Format de stockage (texte simple, compatible v1) :
 *   **gras**   {r}rouge{/r}   {i}italique{/i}   {u}souligné{/u}
 *   {c:#f1c40f}couleur{/c}    {s:sm|lg|xl}taille{/s}   {f:serif|stam}police{/f}
 *   \n = retour à la ligne
 * Tout le reste est affiché comme du texte (aucun HTML accepté : sécurité).
 */
const FMT = (() => {
  const SIZES = { sm: '0.8em', lg: '1.25em', xl: '1.6em' };
  const FONTS = { serif: "'Frank Ruhl Libre', serif", stam: "'Stam Sefarad', 'Frank Ruhl Libre', serif" };
  const NAMED = { rouge: '#ff4d4d', or: '#f1c40f', vert: '#4ade80', bleu: '#7dd3fc', blanc: '#ffffff' };
  const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const okColor = c => NAMED[c] || (/^#[0-9a-fA-F]{3,8}$/.test(c) ? c : null);

  // texte balisé -> HTML sûr
  function toHtml(t) {
    if (!t) return '';
    const parts = String(t).replace(/<[^>]*>/g, '').replace(/&nbsp;|\u00A0/g, ' ').split(/(\*\*|\{\/?[riucsf](?::[^}]*)?\}|\n)/);
    let out = '', stack = [];
    const open = (key, html) => { stack.push(key); out += html; };
    const close = key => {
      const idx = stack.lastIndexOf(key);
      if (idx < 0) return;
      while (stack.length > idx) { stack.pop(); out += '</span>'; }
    };
    for (const p of parts) {
      if (p === '**') { stack.includes('b') ? close('b') : open('b', '<span class="f-bold">'); }
      else if (p === '\n') out += '<br>';
      else if (p === '{r}') open('r', '<span class="f-red">');
      else if (p === '{i}') open('i', '<span style="font-style:italic">');
      else if (p === '{u}') open('u', '<span style="text-decoration:underline">');
      else if (/^\{c:/.test(p)) { const c = okColor(p.slice(3, -1)); open('c', c ? `<span style="color:${c}">` : '<span>'); }
      else if (/^\{s:/.test(p)) { const z = SIZES[p.slice(3, -1)]; open('s', z ? `<span style="font-size:${z}">` : '<span>'); }
      else if (/^\{f:/.test(p)) { const f = FONTS[p.slice(3, -1)]; open('f', f ? `<span style="font-family:${f}">` : '<span>'); }
      else if (/^\{\/[riucsf]\}$/.test(p)) close(p[2]);
      else out += esc(p);
    }
    while (stack.length) { stack.pop(); out += '</span>'; }
    return out;
  }

  // HTML édité (contenteditable) -> texte balisé. Se base sur le style réellement affiché,
  // donc fonctionne quelle que soit la façon dont le navigateur a balisé la sélection.
  const hex = rgb => {
    const m = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(rgb); if (!m) return null;
    return '#' + [m[1], m[2], m[3]].map(n => (+n).toString(16).padStart(2, '0')).join('');
  };
  function styleOf(el, base) {
    const cs = getComputedStyle(el), st = {};
    if (parseInt(cs.fontWeight, 10) >= 600 && !(parseInt(base.fontWeight, 10) >= 600)) st.b = 1;
    if (cs.fontStyle === 'italic' && base.fontStyle !== 'italic') st.i = 1;
    if ((cs.textDecorationLine || '').includes('underline') && !(base.textDecorationLine || '').includes('underline')) st.u = 1;
    if (cs.color !== base.color) { const h = hex(cs.color); if (h) st.c = h; }
    const r = parseFloat(cs.fontSize) / parseFloat(base.fontSize);
    if (r > 1.45) st.s = 'xl'; else if (r > 1.1) st.s = 'lg'; else if (r < 0.9) st.s = 'sm';
    const fam = cs.fontFamily.toLowerCase();
    if (fam !== base.fontFamily.toLowerCase()) { if (fam.includes('stam')) st.f = 'stam'; else if (fam.includes('frank')) st.f = 'serif'; }
    return st;
  }
  const same = (a, b) => ['b', 'i', 'u', 'c', 's', 'f'].every(k => a[k] === b[k]);
  function wrap(text, st) {
    let s = text;
    if (st.f) s = `{f:${st.f}}${s}{/f}`;
    if (st.s) s = `{s:${st.s}}${s}{/s}`;
    if (st.c) s = st.c === '#ff4d4d' ? `{r}${s}{/r}` : `{c:${st.c}}${s}{/c}`;
    if (st.u) s = `{u}${s}{/u}`;
    if (st.i) s = `{i}${s}{/i}`;
    if (st.b) s = `**${s}**`;
    return s;
  }
  function fromDom(root) {
    const base = getComputedStyle(root), runs = [];
    const push = (text, st) => { if (!text) return; const l = runs[runs.length - 1]; if (l && l.st && st && same(l.st, st)) l.text += text; else runs.push({ text, st }); };
    const nl = () => { const l = runs[runs.length - 1]; if (l && l.text === '\n' && !l.st) return; push('\n', null); runs[runs.length - 1].st = null; };
    (function walk(node, first) {
      for (const n of node.childNodes) {
        if (n.nodeType === 3) {
          const t = n.nodeValue.replace(/\u00A0/g, ' ');
          if (t) push(t, styleOf(n.parentNode, base));
        } else if (n.nodeType === 1) {
          const tag = n.tagName.toLowerCase();
          if (tag === 'br') { runs.push({ text: '\n', st: null }); continue; }
          const block = tag === 'div' || tag === 'p' || tag === 'li';
          if (block && runs.length && runs[runs.length - 1].text !== '\n') runs.push({ text: '\n', st: null });
          walk(n);
        }
      }
    })(root);
    let s = runs.map(r => r.st ? wrap(r.text, r.st) : r.text).join('');
    return s.replace(/[ ]{2,}/g, ' ').replace(/\n[ ]*\n+/g, '\n').replace(/^\s+|\s+$/g, '').replace(/^\u200e$/, '');
  }
  return { toHtml, fromDom, esc };
})();
if (typeof module !== 'undefined') module.exports = FMT;
