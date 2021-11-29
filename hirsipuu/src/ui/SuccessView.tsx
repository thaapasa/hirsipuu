import React from "react";
import { LottieAnimation } from "./LottieAnimation";

export const SuccessView: React.FC<{ width: number; height: number }> = ({
  width,
  height,
}) => (
  <LottieAnimation
    path="anim/lottie-fireworks.json"
    style={{ width, height }}
  />
);
