import React from "react";
import styled from "styled-components";

export const DefeatImage: React.FC<{
  style: React.CSSProperties;
  className?: string;
}> = ({ style, className }) => (
  <Container style={style} className={className}>
    Hävisit!
  </Container>
);

const Container = styled.div`
  color: #d99292;
  font-size: 20pt;
  text-transform: uppercase;
  letter-spacing: 5pt;
  font-weight: bold;
  text-shadow: 2px 2px 2px #000000;
  display: flex;
  align-items: center;
  justify-content: center;
`;
