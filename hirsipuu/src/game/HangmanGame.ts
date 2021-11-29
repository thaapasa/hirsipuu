import React from "react";
import { initArray, strToArr } from "../util/values";
import { HangmanImages } from "./HangmanImages";
import { Letters } from "./Letters";
import { GameStatus } from "./State";
import { getNewWord } from "./Words";

export function useHangmanGame() {
  const [word, setWord] = React.useState("");
  const [position, setPosition] = React.useState(0);
  const [selected, setSelected] = React.useState<string[]>([]);

  // Calculate computed state
  const hiddenWord = React.useMemo(
    () => hideLetters(word, selected),
    [word, selected]
  );
  const state: GameStatus =
    position >= HangmanImages.length
      ? "defeat"
      : hiddenWord.includes("_")
      ? "playing"
      : "victory";

  // Select initial word
  React.useEffect(() => {
    const word = getNewWord();
    console.log("Sana on", word);
    setWord(word);
  }, [setWord]);

  // Create game actions
  const selectLetter = React.useCallback(
    (letter: string) => {
      setSelected([...selected, letter]);
      if (!word.includes(letter)) {
        setPosition(position + 1);
      }
    },
    [word, selected, position]
  );

  const resetGame = React.useCallback(() => {
    const newW = getNewWord();
    console.log("Sana on", newW);
    setWord(newW);
    setPosition(0);
    setSelected([]);
  }, [setWord, setPosition, setSelected]);

  const resetGameNewWord = React.useCallback(() => {
    const prompt = window.prompt("Syötä sana:")?.trim();
    if (!prompt?.length) return;
    const newW = prompt.toLocaleUpperCase();
    console.log("Sana on", newW);
    setWord(newW);
    setPosition(0);
    setSelected([]);
  }, [setWord, setPosition, setSelected]);

  const guessWord = React.useCallback(() => {
    const guess = window.prompt("Minkä sanan arvaat?");
    if (guess?.trim().toLocaleUpperCase() === word) {
      setSelected(addLettersFromWord(selected, word));
    } else {
      setPosition(position + 1);
    }
  }, [setSelected, setPosition, selected, position, word]);

  return {
    position,
    word,
    hiddenWord,
    selected,
    selectLetter,
    resetGame,
    resetGameNewWord,
    guessWord,
    state,
  };
}

function hideLetters(word: string, selectedLetters: string[]): string {
  return initArray(word.length, (p) =>
    !Letters.includes(word[p]) || selectedLetters.includes(word[p])
      ? word[p]
      : "_"
  ).join("");
}

function addLettersFromWord(selected: string[], word: string) {
  const letters = strToArr(word);
  return letters.reduce((s, l) => (s.includes(l) ? s : [...s, l]), selected);
}
