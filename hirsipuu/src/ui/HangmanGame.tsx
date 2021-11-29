import React from "react";
import styled from "styled-components";
import { useHangmanGame } from "../game/HangmanGame";
import { HangmanImage } from "./HangmanImage";
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
    guessWord,
    state,
  } = useHangmanGame();
  return (
    <GameArea>
      <HangmanImage position={position} state={state} />
      <WordView word={hiddenWord} />
      <LetterSelector
        selected={selected}
        selectLetter={selectLetter}
        state={state}
      />
      <Tools reset={resetGame} guess={guessWord} state={state} />
    </GameArea>
  );
}

const GameArea = styled.div`
  padding: 16;
`;
