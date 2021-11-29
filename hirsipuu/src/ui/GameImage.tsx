import React from "react";
import styled from "styled-components";
import { useWindowDimensions } from "./hooks/useScreenSize";
import { useElementSize } from "./hooks/useElementSize";
import { Card } from "./Card";
import { VictoryImage } from "./VictoryImage";
import { GameState } from "../game/HangmanGame";
import { HangmanImage } from "./HangmanImage";
import { DefeatImage } from "./DefeatImage";

export const GameImage: React.FC<{
  position: number;
  state: GameState;
}> = ({ position, state }) => {
  const { size, ref } = useOptimumImageSize();
  return (
    <Container ref={ref} className={state}>
      {state === "victory" ? (
        <VictoryImage style={size} />
      ) : (
        <HangmanImage position={position} size={size} />
      )}
      {state === "defeat" ? <AbsDefeat style={size} /> : null}
    </Container>
  );
};

function useOptimumImageSize() {
  const { height: winHei } = useWindowDimensions();
  const { size: elSize, ref } = useElementSize();
  const elWid = elSize.width;
  const optimum = React.useMemo(() => {
    const maxWidth = elWid ?? 1;
    const maxHeight = Math.round((maxWidth * 232) / 172);
    const height = Math.min(maxHeight, winHei * 0.45);
    const width = height === maxHeight ? maxWidth : (height * 172) / 232;
    return { width, height };
  }, [elWid, winHei]);

  const elementSize = {
    width: elSize.width,
    height: elSize.height || Math.round((elSize.width * 232) / 172),
  };

  return { size: optimum, ref, elementSize: elementSize };
}

const Container = styled(Card)`
  margin-top: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  overflow: hidden;
`;

const AbsDefeat = styled(DefeatImage)`
  position: absolute;
`;
