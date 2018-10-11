import React, { AllHTMLAttributes, HTMLAttributes } from "react";
import styled from "styled-components";

import { Spring } from "react-spring";
import { Color } from "../Color";
import { Greeting } from "./Greeting";
import PinkClippedLayer from "./PinkClippedLayer";

import { CopyBox } from "./AboutBox";

const CopyContainer = styled.div`
  width: 100%;
  color: ${Color.Blue};
  display: flex;
  justify-content: center;
  top: 40%;
  position: absolute;
`;

const AboutContainer = styled(PinkClippedLayer)`
  background: ${Color.Pink};
  display: flex;
`;

const WhatIDo = `
My name is Aleksandra Sikora and I am a full-stack developer from Wrocław.
I'm a functional programming enthusiast, constantly experimenting with new
technologies. I'm very passionate about web development and web design,
striving to improve my skills every day.
`;

const WhatILike = `
In my computer-free time I am a sports lover, especially interested in
climbing and tennis. But when I’m too sore for a training you can find me
wander around some art museum. I’m definitely into art, both classical as
well as contemporary.
`;

type Props = {
  greetingsVisible: boolean;
  mountAbout: boolean;
} & AllHTMLAttributes<HTMLDivElement>;
export default class About extends React.Component<Props> {
  public render() {
    const { greetingsVisible, mountAbout } = this.props;

    // window.about = this;

    return (
      <AboutContainer {...this.props}>
        <Greeting unmount={!greetingsVisible} color={Color.Pink} />
        <CopyContainer>
          <CopyBox
            shouldMount={mountAbout}
            title={"Core"}
            onClick={this.handleCopyBoxClick}
            delay={mountAbout ? 1000 : 0}
          />
          <CopyBox
            shouldMount={mountAbout}
            title={"Love"}
            onClick={this.handleCopyBoxClick}
            delay={mountAbout ? 1000 : 0}
          />
          <CopyBox
            shouldMount={mountAbout}
            title={"Work"}
            onClick={this.handleCopyBoxClick}
            delay={mountAbout ? 1000 : 0}
          />
        </CopyContainer>
      </AboutContainer>
    );
  }

  private handleCopyBoxClick = () => {
    console.log("click copy");
  };
}

/*

        <Spring
          to={!greetingsVisible ? { x: -90, opacity: 0 } : { x: 0, opacity: 1 }}
          // delay={2000}
          config={{
            friction: 32,
            tension: 50,
          }}
        >
          {({ x, opacity }) => (
            <Copy
              style={{
                opacity,
                transform: `translate3d(${x}vh, 0, 0)`,
              }}
            />
          )}
        </Spring>

*/
