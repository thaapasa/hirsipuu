import Lottie from "lottie-web";
import React from "react";

export const LottieAnimation: React.FC<{
  path: string;
  style: React.CSSProperties;
}> = ({ style, path }) => {
  const ref = React.useRef<HTMLImageElement>(null);
  React.useEffect(() => {
    const a = Lottie.loadAnimation({
      container: ref.current!,
      renderer: "svg",
      path,
    });
    a.play();
  }, [path]);

  return <div ref={ref} style={style} />;
};
