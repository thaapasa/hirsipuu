import React from "react";
import styled from "styled-components";
import { useHangmanGame } from "./game/HangmanGame";
import { HangmanImage } from "./ui/HangmanImage";
import { LetterSelector } from "./ui/LetterSelector";
import { Tools } from "./ui/Tools";
import { WordView } from "./ui/WordView";

function App() {
  const {
    hiddenWord,
    position,
    selectLetter,
    selected,
    resetGame,
    guessWord,
    success,
  } = useHangmanGame();
  return (
    <GameArea>
      <HangmanImage position={position} success={success} />
      <WordView word={hiddenWord} />
      <LetterSelector
        selected={selected}
        selectLetter={selectLetter}
        disabled={success}
      />
      <Tools reset={resetGame} guess={guessWord} />
    </GameArea>
  );
}

const GameArea = styled.div`
  padding: 16;
`;

export default App;
