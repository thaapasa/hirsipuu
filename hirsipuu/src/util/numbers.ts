export function range(min: number, max: number) {
  const len = max - min + 1;
  return Array.from(Array(len)).map((_, i) => min + i);
}
