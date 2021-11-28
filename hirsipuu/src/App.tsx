import React from "react";
import styled from "styled-components";
import { HangmanImage } from "./ui/HangmanImage";
import { WordView } from "./ui/WordView";

function App() {
  const [pos, setPos] = React.useState(0);
  return (
    <GameArea>
      <HangmanImage position={pos} onClick={() => setPos(pos + 1)} />
      <WordView word="K_KK_K_PP_" />
    </GameArea>
  );
}

const GameArea = styled.div`
  padding: 16;
`;

export default App;
