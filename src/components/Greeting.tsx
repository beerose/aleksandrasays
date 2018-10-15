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
  color: ${Color.PrimaryColor};

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
  visible: boolean;
} & AllHTMLAttributes<HTMLDivElement>;
export class Greeting extends React.Component<GreetingProps> {
  public render() {
    const { visible } = this.props;
    return (
      <Spring
        to={
          visible
            ? { x: 0, opacity: 1, display: "flex" }
            : { x: -90, opacity: 0, display: "none" }
        }
        delay={visible ? 1000 : 0}
        config={{
          friction: 20,
          tension: 70,
        }}
      >
        {({ x, opacity }) => (
          <GreetingContainer
            style={{
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
