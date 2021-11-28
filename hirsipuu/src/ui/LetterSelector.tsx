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
        <Letter key={i}>{l}</Letter>
      ))}
    </Container>
  );
};

const Letter = styled.button`
  width: 32px;
  height: 32px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: black;
  margin: 4px;
`;

const Container = styled.div`
  background-color: white;
  padding: 8px;
  margin-top: 16px;
  text-align: center;
`;
