import React from "react";
import { LottieAnimation } from "./LottieAnimation";

export const SuccessView: React.FC<{ style: React.CSSProperties }> = ({
  style,
}) => <LottieAnimation path="anim/lottie-fireworks.json" style={style} />;
