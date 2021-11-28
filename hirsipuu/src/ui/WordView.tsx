import styled from "styled-components";
import { initArray } from "../util/values";

interface WordProps {
  word: string;
}

export const WordView: React.FC<WordProps> = ({ word }) => {
  const letters = initArray(word.length, (p) => word[p]);
  return (
    <Container>
      {letters.map((l, i) => (
        <Letter key={i}>{l}</Letter>
      ))}
    </Container>
  );
};

const Letter = styled.div`
  width: 22px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
`;

const Container = styled.div`
  background-color: white;
  padding: 8px;
  margin-top: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
