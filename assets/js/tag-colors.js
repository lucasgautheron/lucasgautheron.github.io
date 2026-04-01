function fnv1a32(str) {
  let hash = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    hash ^= str.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  return hash >>> 0;
}

function isTransparent(color) {
  if (!color) return true;
  const c = color.trim().toLowerCase();
  if (c === "transparent") return true;
  return c.startsWith("rgba(") && c.endsWith(", 0)") || c.endsWith(",0)");
}

function hslToRgb(h, s, l) {
  // h in [0, 360), s/l in [0, 100]
  const S = s / 100;
  const L = l / 100;
  const C = (1 - Math.abs(2 * L - 1)) * S;
  const Hp = h / 60;
  const X = C * (1 - Math.abs((Hp % 2) - 1));
  let r1 = 0, g1 = 0, b1 = 0;

  if (Hp >= 0 && Hp < 1) [r1, g1, b1] = [C, X, 0];
  else if (Hp < 2) [r1, g1, b1] = [X, C, 0];
  else if (Hp < 3) [r1, g1, b1] = [0, C, X];
  else if (Hp < 4) [r1, g1, b1] = [0, X, C];
  else if (Hp < 5) [r1, g1, b1] = [X, 0, C];
  else [r1, g1, b1] = [C, 0, X];

  const m = L - C / 2;
  const r = Math.round((r1 + m) * 255);
  const g = Math.round((g1 + m) * 255);
  const b = Math.round((b1 + m) * 255);
  return { r, g, b };
}

function relativeLuminance({ r, g, b }) {
  // WCAG
  const srgb = [r, g, b].map((v) => v / 255).map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2];
}

function applyAutoTagColors(root = document) {
  root.querySelectorAll(".badges .tag").forEach((el) => {
    const computedBg = window.getComputedStyle(el).backgroundColor;
    if (!isTransparent(computedBg)) return; // keep hardcoded colors (e.g. .tag-foo { background-color: ... !important; })

    const rawText = (el.textContent || "").trim();
    if (!rawText) return;

    const hash = fnv1a32(rawText.toLowerCase());
    const hue = hash % 360;

    // Pastel background; deterministic but readable in both themes.
    const sat = 65;
    const light = 72;

    const bg = `hsl(${hue} ${sat}% ${light}%)`;
    const rgb = hslToRgb(hue, sat, light);
    const lum = relativeLuminance(rgb);
    const fg = lum > 0.6 ? "#111" : "#fff";

    el.style.backgroundColor = bg;
    el.style.color = fg;
    el.style.border = "1px solid rgba(0,0,0,0.12)";
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => applyAutoTagColors());
} else {
  applyAutoTagColors();
}

