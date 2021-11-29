import styled from "styled-components";

export const Tools: React.FC<{ reset: () => void; guess: () => void }> = ({
  reset,
  guess,
}) => (
  <Container>
    <button onClick={reset}>Uusi peli</button>
    <button onClick={guess}>Arvaa sana</button>
  </Container>
);

const Container = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
