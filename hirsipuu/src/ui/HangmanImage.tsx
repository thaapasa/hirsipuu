import React from "react";
import styled from "styled-components";
import { range } from "../util/numbers";
import { useWindowDimensions } from "./hooks/useScreenSize";
import { useElementSize } from "./hooks/useElementSize";
import { Card } from "./Card";
import { SuccessView } from "./SuccessView";
import { GameState } from "../game/HangmanGame";

export const HangmanImage: React.FC<{
  position: number;
  onClick?: () => void;
  state: GameState;
}> = ({ position, onClick, state }) => {
  const { size, ref } = useOptimumImageSize();
  return (
    <Container onClick={onClick} ref={ref} className={state}>
      {state === "victory" ? (
        <SuccessView {...size} />
      ) : (
        <ImageWrapper style={size}>
          {range(0, Math.min(position - 1, Images.length - 1)).map((p) => (
            <ImagePiece
              key={p}
              src={`images/puu-${Images[p]}.svg`}
              style={size}
            />
          ))}
        </ImageWrapper>
      )}
    </Container>
  );
};

function useOptimumImageSize() {
  const { height: winHei } = useWindowDimensions();
  const {
    size: { width: elWid },
    ref,
  } = useElementSize();
  const optimum = React.useMemo(() => {
    const maxWidth = elWid ?? 1;
    const maxHeight = Math.round((maxWidth * 232) / 172);
    const height = Math.min(maxHeight, winHei * 0.45);
    const width = height === maxHeight ? maxWidth : (height * 172) / 232;
    return { width, height };
  }, [elWid, winHei]);

  return { size: optimum, ref };
}

const Container = styled(Card)`
  margin-top: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: stretch;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const ImagePiece = styled.img`
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
