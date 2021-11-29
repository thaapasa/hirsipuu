import styled from "styled-components";
import { Letters } from "../game/Letters";

interface LetterSelectorProps {
  selected: string[];
  selectLetter: (letter: string) => void;
}

export const LetterSelector: React.FC<LetterSelectorProps> = ({
  selected,
  selectLetter,
}) => {
  return (
    <Container>
      {Letters.map((l, i) => (
        <Letter
          key={i}
          disabled={selected.includes(l)}
          onClick={() => selectLetter(l)}
        >
          {l}
        </Letter>
      ))}
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
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
