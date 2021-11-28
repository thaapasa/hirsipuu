import React from "react";
import styled from "styled-components";
import { useHangmanGame } from "./game/HangmanGame";
import { HangmanImage } from "./ui/HangmanImage";
import { LetterSelector } from "./ui/LetterSelector";
import { WordView } from "./ui/WordView";

function App() {
  const { word, position, selectLetter, selected } = useHangmanGame();
  return (
    <GameArea>
      <HangmanImage position={position} />
      <WordView word={word} />
      <LetterSelector selected={selected} selectLetter={selectLetter} />
    </GameArea>
  );
}

const GameArea = styled.div`
  padding: 16;
`;

export default App;
