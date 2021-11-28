import React from "react";
import { initArray } from "../util/values";
import { getNewWord } from "./Words";

export function useHangmanGame() {
  const word = React.useMemo(() => getNewWord(), []);
  const [position, setPosition] = React.useState(0);
  const [selected, setSelected] = React.useState<string[]>([]);
  const selectLetter = React.useCallback(
    (letter: string) => {
      setSelected([...selected, letter]);
      if (!word.includes(letter)) {
        setPosition(position + 1);
      }
    },
    [word, selected, position]
  );
  const hiddenWord = React.useMemo(
    () => hideLetters(word, selected),
    [word, selected]
  );
  return {
    position,
    word,
    hiddenWord,
    selected,
    selectLetter,
  };
}

function hideLetters(word: string, selectedLetters: string[]): string {
  return initArray(word.length, (p) =>
    selectedLetters.includes(word[p]) ? word[p] : "_"
  ).join("");
}
