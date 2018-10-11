import { darken, desaturate, lighten } from "polished";
import React, { AllHTMLAttributes } from "react";
import styled from "styled-components";

import { animated, Spring } from "react-spring";
import { Color } from "../Color";

export const GreetingContainer = styled(animated.div)`
  position: absolute;
  bottom: 0;
  margin: 10%;
  font-size: 65px;
  font-weight: 700;
  line-height: 1.4;
  color: ${desaturate(0.1, lighten(0.1, Color.Blue))};

  @media (min-width: 790px) {
    margin-right: 20%;
  }
  @media (max-width: 790px) {
    font-size: 54px;
  }
  @media (max-width: 580px) {
    font-size: 44px;
  }
  @media (max-width: 480px) {
    font-size: 35px;
  }
`;

type GreetingProps = {
  unmount: boolean;
  color: string;
} & AllHTMLAttributes<HTMLDivElement>;
export class Greeting extends React.Component<GreetingProps> {
  public render() {
    const { unmount } = this.props;
    return (
      <Spring
        to={unmount ? { x: -90, opacity: 0 } : { x: 0, opacity: 1 }}
        delay={unmount ? 400 : 1000}
        config={{
          friction: 32,
          tension: 100,
        }}
      >
        {({ x, opacity }) => (
          <GreetingContainer
            style={{
              color: darken(0.1, this.props.color),
              opacity,
              transform: `translate3d(${x}vh, 0, 0)`,
            }}
          >
            Hi!
            <br />
            I’m Aleksandra Sikora. Fullstack developer, based in&nbsp;Wrocław.
          </GreetingContainer>
        )}
      </Spring>
    );
  }
}
