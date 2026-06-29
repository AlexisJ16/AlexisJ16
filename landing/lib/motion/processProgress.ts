// Devuelve el índice 0-based del último paso que debe estar iluminado para un progreso de scroll [0..1].
export function activeStepFromProgress(progress: number, count: number): number {
  if (count <= 0) return -1;
  const clamped = Math.min(Math.max(progress, 0), 1);
  return Math.min(count - 1, Math.floor(clamped * count));
}
