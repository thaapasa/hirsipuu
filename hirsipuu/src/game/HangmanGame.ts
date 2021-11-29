import React from "react";
import { initArray, strToArr } from "../util/values";
import { HangmanImages } from "./HangmanImages";
import { getNewWord } from "./Words";

export type GameState = "playing" | "victory" | "defeat";

export function useHangmanGame() {
  const [word, setWord] = React.useState("");
  React.useEffect(() => {
    const word = getNewWord();
    console.log("Sana on", word);
    setWord(word);
  }, [setWord]);
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
  const resetGame = React.useCallback(() => {
    const newW = getNewWord();
    console.log("Sana on", newW);
    setWord(newW);
    setPosition(0);
    setSelected([]);
  }, [setWord, setPosition, setSelected]);

  const guessWord = React.useCallback(() => {
    const guess = window.prompt("Minkä sanan arvaat?");
    if (guess?.trim().toLocaleUpperCase() === word) {
      const letters = strToArr(word);
      const newS = letters.reduce(
        (s, l) => (s.includes(l) ? s : [...s, l]),
        selected
      );
      setSelected(newS);
    } else {
      setPosition(position + 1);
    }
  }, [setSelected, setPosition, selected, position, word]);
  const state: GameState =
    position >= HangmanImages.length
      ? "defeat"
      : hiddenWord.includes("_")
      ? "playing"
      : "victory";

  return {
    position,
    word,
    hiddenWord,
    selected,
    selectLetter,
    resetGame,
    guessWord,
    state,
  };
}

function hideLetters(word: string, selectedLetters: string[]): string {
  return initArray(word.length, (p) =>
    selectedLetters.includes(word[p]) ? word[p] : "_"
  ).join("");
}
