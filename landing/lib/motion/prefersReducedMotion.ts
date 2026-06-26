export function shouldEnableSmoothScroll(mq: { matches: boolean } | null): boolean {
  if (!mq) return false;
  return !mq.matches;
}
