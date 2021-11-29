export function initArray<T>(length: number, callback: (pos: number) => T) {
  return Array.from(Array(length)).map((_, i) => callback(i));
}

export function strToArr(str: string): string[] {
  return Array.from(Array(str.length)).map((_, i) => str[i]);
}
