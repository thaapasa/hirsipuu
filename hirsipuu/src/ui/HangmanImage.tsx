import React from "react";
import styled from "styled-components";
import { range } from "../util/numbers";

interface GallowsImageProps {
  position: number;
  onClick?: () => void;
}

export const HangmanImage: React.FC<GallowsImageProps> = ({
  position,
  onClick,
}) => (
  <Container onClick={onClick}>
    {range(0, position - 1).map((p) => (
      <ImagePiece key={p} src={`images/puu-${Images[p]}.svg`} />
    ))}
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  height: 300px;
  box-sizing: border-box;
  position: relative;
  background-color: white;
`;

const ImagePiece = styled.img`
  width: 172px;
  height: 232px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Images = [
  "01-kumpu",
  "02-tolppa",
  "03-alatuki-vasen",
  "04-alatuki-oikea",
  "05-ylapalkki",
  "06-ylatuki",
  "07-koysi",
  "08-paa",
  "09-vartalo",
  "10-jalka-vasen",
  "11-jalka-oikea",
  "12-kasi-vasen",
  "13-kasi-oikea",
  "14-naama",
];