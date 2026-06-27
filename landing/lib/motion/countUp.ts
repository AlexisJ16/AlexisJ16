export type CountTarget = { prefix: string; value: number; decimals: number; suffix: string };

export function parseCountTarget(text: string): CountTarget | null {
  const m = text.trim().match(/^([^\d]*)(\d+(?:\.(\d+))?)(.*)$/);
  if (!m) return null;
  const [, prefix, numStr, frac, suffix] = m;
  return { prefix, value: parseFloat(numStr), decimals: frac ? frac.length : 0, suffix };
}

export function formatCount(prefix: string, value: number, decimals: number, suffix: string): string {
  return `${prefix}${value.toFixed(decimals)}${suffix}`;
}
