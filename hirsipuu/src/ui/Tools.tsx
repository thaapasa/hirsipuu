import styled from "styled-components";
import { GameState } from "../game/HangmanGame";

export const Tools: React.FC<{
  reset: () => void;
  guess: () => void;
  state: GameState;
}> = ({ reset, guess, state }) => (
  <Container>
    <button onClick={reset}>Uusi peli</button>
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
