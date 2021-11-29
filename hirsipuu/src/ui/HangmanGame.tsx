import React from "react";
import styled from "styled-components";
import { useHangmanGame } from "../game/HangmanGame";
import { GameImage } from "./GameImage";
import { LetterSelector } from "./LetterSelector";
import { Tools } from "./Tools";
import { WordView } from "./WordView";

export function HangmanGame() {
  const {
    hiddenWord,
    position,
    selectLetter,
    selected,
    resetGame,
    resetGameNewWord,
    guessWord,
    state,
  } = useHangmanGame();
  return (
    <GameArea>
      <GameImage position={position} state={state} />
      <WordView word={hiddenWord} />
      <LetterSelector
        selected={selected}
        selectLetter={selectLetter}
        state={state}
      />
      <Tools
        reset={resetGame}
        resetNewWord={resetGameNewWord}
        guess={guessWord}
        state={state}
      />
    </GameArea>
  );
}

const GameArea = styled.div`
  padding: 16;
`;
