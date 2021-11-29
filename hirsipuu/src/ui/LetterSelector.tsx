import styled from "styled-components";
import { Letters } from "../game/Letters";
import { GameStatus } from "../game/State";
import { Card } from "./Card";

export const LetterSelector: React.FC<{
  selected: string[];
  selectLetter: (letter: string) => void;
  state: GameStatus;
}> = ({ selected, selectLetter, state }) => {
  return (
    <Container>
      {Letters.map((l, i) => (
        <Letter
          key={i}
          disabled={selected.includes(l) || state !== "playing"}
          onClick={() => selectLetter(l)}
        >
          {l}
        </Letter>
      ))}
    </Container>
  );
};

const Container = styled(Card)`
  padding: 8px;
  margin-top: 16px;
  text-align: center;
  align-self: stretch;
`;

const Letter = styled.button`
  width: 36px;
  height: 36px;
  font-size: 16pt;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 4px;
`;
