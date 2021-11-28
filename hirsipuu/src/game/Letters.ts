import { initArray } from "../util/values";

const letterStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ";
export const Letters = initArray(letterStr.length, (p) => letterStr[p]);
