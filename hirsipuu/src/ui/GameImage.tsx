import React from "react";
import styled from "styled-components";
import { useWindowDimensions } from "./hooks/useScreenSize";
import { useElementSize } from "./hooks/useElementSize";
import { Card } from "./Card";
import { SuccessView } from "./SuccessView";
import { GameState } from "../game/HangmanGame";
import { HangmanImage } from "./HangmanImage";

export const GameImage: React.FC<{
  position: number;
  state: GameState;
}> = ({ position, state }) => {
  const { size, ref } = useOptimumImageSize();
  return (
    <Container ref={ref} className={state}>
      {state === "victory" ? (
        <SuccessView style={size} />
      ) : (
        <HangmanImage position={position} size={size} />
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
