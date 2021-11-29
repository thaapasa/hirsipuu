import styled from "styled-components";
import { GameStatus } from "../game/State";

export const Tools: React.FC<{
  reset: () => void;
  resetNewWord: () => void;
  guess: () => void;
  state: GameStatus;
}> = ({ reset, resetNewWord, guess, state }) => (
  <Container>
    <button onClick={reset}>Uusi peli</button>
    <button onClick={resetNewWord}>Arvuuta sanaa</button>
    <button onClick={guess} disabled={state !== "playing"}>
      Arvaa sana
    </button>
  </Container>
);

const Container = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
