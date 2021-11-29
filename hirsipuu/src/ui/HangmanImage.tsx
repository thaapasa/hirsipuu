import React from "react";
import styled from "styled-components";
import { range } from "../util/numbers";
import { HangmanImages } from "../game/HangmanImages";

export const HangmanImage: React.FC<{
  position: number;
  size: { width: number; height: number };
}> = ({ position, size }) => {
  return (
    <ImageWrapper style={size}>
      {range(0, Math.min(position - 1, HangmanImages.length - 1)).map((p) => (
        <ImagePiece
          key={p}
          src={`images/puu-${HangmanImages[p]}.svg`}
          style={size}
        />
      ))}
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div`
  position: relative;
`;

const ImagePiece = styled.img`
  position: absolute;
  top: 0;
  left: 0;
`;
