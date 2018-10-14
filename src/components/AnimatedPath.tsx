import React from "react";
import { Spring } from "react-spring";
import { Color } from "../Color";

const TOP_COLOR_INACTIVE = "M0,0 L0.7,0 L0,1.3 Z";
const TOP_COLOR_ACTIVE = "M0,0 L2,0 L0,1.2 Z";
const TOP_COLOR_HIDEN = "M0,0, L-0.1,-0.1 L0,2 Z";
type AnimatedPathProps = {
  pathname: string;
};

const pathnameToPath = (pathname: string) => {
  switch (pathname) {
    case "/about":
      return TOP_COLOR_ACTIVE;
    case "/":
      return TOP_COLOR_INACTIVE;
    default:
      return TOP_COLOR_HIDEN;
  }
};

export const AnimatedPath = ({ pathname }: AnimatedPathProps) => (
  <Spring
    config={{
      friction: 30,
      tension: 80,
    }}
    to={{
      TopColorPath: pathnameToPath(pathname),
    }}
    delay={pathname === "/" ? 400 : 100}
  >
    {({ TopColorPath }) => (
      <svg
        viewBox="0 0 1 1"
        preserveAspectRatio="xMidYMid slice"
        style={{
          height: "100%",
          pointerEvents: "none",
          position: "absolute",
          top: 0,
          width: "100%",
        }}
      >
        <path fill={Color.TopColor} d={TopColorPath} />
      </svg>
    )}
  </Spring>
);
