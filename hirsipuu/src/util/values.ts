export function initArray<T>(length: number, callback: (pos: number) => T) {
  return Array.from(Array(length)).map((_, i) => callback(i));
}
