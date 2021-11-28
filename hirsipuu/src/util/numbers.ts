import { initArray } from "./values";

export function range(min: number, max: number) {
  return initArray(max - min + 1, (p) => min + p);
}
