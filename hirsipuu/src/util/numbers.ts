import { initArray } from "./values";

export function range(min: number, max: number) {
  return initArray(max - min + 1, (p) => min + p);
}

export function randomInt(min: number, max: number): number {
  const n = Math.floor(Math.random() * (max - min)) + min;
  if (n >= min && n < max) return n;
  return randomInt(min, max);
}
