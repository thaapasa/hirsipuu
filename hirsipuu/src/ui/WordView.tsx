import styled from "styled-components";
import { strToArr } from "../util/values";
import { Card } from "./Card";

interface WordProps {
  word: string;
}

export const WordView: React.FC<WordProps> = ({ word }) => {
  const letters = strToArr(word);
  return (
    <Container>
      {letters.map((l, i) => (
        <Letter key={i}>{l}</Letter>
      ))}
    </Container>
  );
};

const Container = styled(Card)`
  background-color: white;
  padding: 8px;
  margin-top: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Letter = styled.div`
  width: 22px;
  height: 28px;
  font-size: 16pt;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  color: black;
`;
