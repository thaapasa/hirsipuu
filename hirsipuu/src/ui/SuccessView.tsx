import Lottie from "lottie-web";
import React from "react";
import styled from "styled-components";

export const SuccessView: React.FC<{ width: number; height: number }> = ({
  width,
  height,
}) => {
  const ref = React.useRef<HTMLImageElement>(null);
  React.useEffect(() => {
    const a = Lottie.loadAnimation({
      container: ref.current!,
      renderer: "svg",
      path: "anim/lottie-fireworks.json",
    });
    a.play();
  }, []);

  return <AnimationHolder ref={ref} style={{ width, height }} />;
};

const AnimationHolder = styled.div`
  width: 100%;
  height: 100%;
`;
